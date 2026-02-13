/**
 * `useScrollLockAnimation`
 *
 * Use this hook for full-screen “experience” sections where scrolling should drive an
 * animation instead of immediately moving the page. It’s ideal for things like:
 * - Team/portfolio/story sections with a scroll-driven reveal
 * - Progress-based SVG/Canvas animations
 * - Step-by-step sections that should “hold” attention for a moment
 *
 * The component using this hook gets:
 * - `sectionRef`: attach to the section you want to lock on
 * - `progress`: a `MotionValue<number>` from `0` → `1` you can map to transforms/opacity/etc.
 * - `isLocked`: whether the page is currently locked by this section (optional UI signal)
 *
 * Config:
 * - `scrollLength`: how much scrolling is needed to go `0` → `1` (higher = longer/slower)
 * - `mobileMultiplier`: adjusts touch feel on mobile
 * - `pausePoints`: optional progress “detents” that can pause briefly
 * - `pauseHoldMs`: default pause duration for detents
 *
 * Note: Respects the user’s “reduced motion” preference and won’t lock in that mode.
 */
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useMotionValue } from "framer-motion";

type ScrollPauseDirection = "forward" | "backward" | "both";
type DetentSource = "wheel" | "touch";

interface DetentLock {
    direction: 1 | -1;
    source: DetentSource;
}

type WheelDeltaResponse = "linear" | "saturate";

export interface ScrollPausePoint {
    /**
     * Progress value (0..1) where the hook should pause.
     */
    at: number;

    /**
     * How long to pause at this point (ms). If omitted, uses `pauseHoldMs`.
     * Set to `0` to create a detent without a timed pause (requires another scroll input to continue).
     */
    holdMs?: number;

    /**
     * Which scroll direction triggers this pause.
     * Default: "forward"
     */
    direction?: ScrollPauseDirection;
}

interface UseScrollLockAnimationConfig {
    /**
     * The virtual height in pixels representing the scroll distance 
     * required to go from 0% to 100% progress.
     * Higher value = Slower animation (longer scroll duration).
     * Default: 1000
     */
    scrollLength?: number;

    /**
     * Multiplier for mobile touch events to adjust feel.
     * Default: 2 (Touch is usually faster/less precise)
     */
    mobileMultiplier?: number;

    /**
     * Optional progress pause points (“detents”) to help hold attention on key frames.
     */
    pausePoints?: ScrollPausePoint[];

    /**
     * Default pause duration used by pausePoints that don’t specify holdMs.
     * Default: 450ms
     */
    pauseHoldMs?: number;

    /**
     * How wheel delta maps to animation progress.
     * - "linear": direct mapping (previous behavior)
     * - "saturate": boosts small deltas and caps large deltas so that after a threshold,
     *   faster scrolling doesn't make the animation go faster.
     * Default: "linear"
     */
    wheelDeltaResponse?: WheelDeltaResponse;

    /**
     * Maximum wheel delta (px) used when `wheelDeltaResponse` is "saturate".
     * Default: 120
     */
    wheelDeltaClampPx?: number;

    /**
     * Curve (px) used when `wheelDeltaResponse` is "saturate".
     * Lower values make light scrolling feel stronger; higher values are more linear.
     * Default: 25
     */
    wheelDeltaCurvePx?: number;
}

export function useScrollLockAnimation({
    scrollLength = 1000,
    mobileMultiplier = 2,
    pausePoints: pausePointsInput = [],
    pauseHoldMs = 450,
    wheelDeltaResponse = "linear",
    wheelDeltaClampPx = 120,
    wheelDeltaCurvePx = 25
}: UseScrollLockAnimationConfig = {}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isLockedRef = useRef(false);
    const [isLocked, setIsLocked] = useState(false);
    const prefersReducedMotion = useRef(false);
    const scrollLockState = useRef<{
        scrollY: number;
        bodyOverflow: string;
        bodyPosition: string;
        bodyTop: string;
        bodyWidth: string;
        htmlOverflow: string;
    } | null>(null);

    // Progress value (0 to 1)
    const progress = useMotionValue(0);

    // Derived sensitivity from scrollLength
    // progress = delta * sensitivity
    // 1 = scrollLength * sensitivity => sensitivity = 1 / scrollLength
    const sensitivity = 1 / scrollLength;
    const touchSensitivity = sensitivity * mobileMultiplier;
    const preLockSlopPx = 80;

    const pausePoints = useMemo(() => {
        if (!pausePointsInput.length) return [];

        return pausePointsInput
            .map((point) => {
                const holdMs = typeof point.holdMs === "number" ? point.holdMs : pauseHoldMs;
                const direction: ScrollPauseDirection = point.direction ?? "forward";
                return { at: point.at, holdMs, direction };
            })
            // Avoid pausing at the edges so scroll can unlock naturally.
            .filter((point) => Number.isFinite(point.at) && point.at > 0.001 && point.at < 0.999 && point.holdMs >= 0)
            .sort((a, b) => a.at - b.at);
    }, [pauseHoldMs, pausePointsInput]);

    const pauseUntilRef = useRef(0);
    const pauseTimeoutRef = useRef<number | null>(null);

    const detentLockRef = useRef<DetentLock | null>(null);

    const wheelGestureActiveRef = useRef(false);
    const wheelGestureTimeoutRef = useRef<number | null>(null);
    const wheelGestureIdleMs = 140;

    const clearPauseTimeout = useCallback(() => {
        if (pauseTimeoutRef.current === null) return;
        window.clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
    }, []);

    const clearWheelGestureTimeout = useCallback(() => {
        if (wheelGestureTimeoutRef.current === null) return;
        window.clearTimeout(wheelGestureTimeoutRef.current);
        wheelGestureTimeoutRef.current = null;
        wheelGestureActiveRef.current = false;
    }, []);

    const markWheelGestureActivity = useCallback(() => {
        wheelGestureActiveRef.current = true;
        if (wheelGestureTimeoutRef.current !== null) {
            window.clearTimeout(wheelGestureTimeoutRef.current);
        }
        wheelGestureTimeoutRef.current = window.setTimeout(() => {
            wheelGestureActiveRef.current = false;
            wheelGestureTimeoutRef.current = null;
        }, wheelGestureIdleMs);
    }, []);

    const startPause = useCallback(
        (holdMs: number) => {
            if (holdMs <= 0) return;
            clearPauseTimeout();
            pauseUntilRef.current = Date.now() + holdMs;
            pauseTimeoutRef.current = window.setTimeout(() => {
                pauseUntilRef.current = 0;
                pauseTimeoutRef.current = null;
            }, holdMs);
        },
        [clearPauseTimeout]
    );

    const isPaused = useCallback(() => {
        if (pauseUntilRef.current === 0) return false;
        if (Date.now() < pauseUntilRef.current) return true;
        pauseUntilRef.current = 0;
        return false;
    }, []);

    const getCrossedPausePoint = useCallback(
        (current: number, next: number, delta: number) => {
            if (!pausePoints.length || delta === 0 || current === next) return null;
            const epsilon = 0.0005;

            if (delta > 0) {
                for (const point of pausePoints) {
                    if (point.direction !== "forward" && point.direction !== "both") continue;
                    if (point.at > current + epsilon && point.at <= next + epsilon) return point;
                }
                return null;
            }

            for (let i = pausePoints.length - 1; i >= 0; i -= 1) {
                const point = pausePoints[i];
                if (point.direction !== "backward" && point.direction !== "both") continue;
                if (point.at < current - epsilon && point.at >= next - epsilon) return point;
            }

            return null;
        },
        [pausePoints]
    );

    const normalizeWheelDeltaY = useCallback((e: WheelEvent) => {
        // Convert line/page deltas to pixels for consistent math.
        if (e.deltaMode === 1) return e.deltaY * 16; // DOM_DELTA_LINE (heuristic)
        if (e.deltaMode === 2) return e.deltaY * window.innerHeight; // DOM_DELTA_PAGE
        return e.deltaY; // DOM_DELTA_PIXEL
    }, []);

    const applyWheelDeltaResponse = useCallback((deltaPx: number) => {
        if (wheelDeltaResponse === "linear") return deltaPx;

        const magnitude = Math.abs(deltaPx);
        if (magnitude === 0) return 0;

        // Exponential saturating curve:
        // - boosts small deltas (trackpads / gentle scroll)
        // - caps large deltas so that beyond a threshold, animation speed feels consistent
        const curve = Math.max(1, wheelDeltaCurvePx);
        const clamp = Math.max(1, wheelDeltaClampPx);
        const easedMagnitude = clamp * (1 - Math.exp(-magnitude / curve));

        return Math.sign(deltaPx) * Math.min(easedMagnitude, clamp);
    }, [wheelDeltaClampPx, wheelDeltaCurvePx, wheelDeltaResponse]);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        prefersReducedMotion.current = media.matches;
    }, []);

    const snapSectionToTop = useCallback(() => {
        const el = sectionRef.current;
        if (!el) return null;

        const rect = el.getBoundingClientRect();
        const targetScrollY = window.scrollY + rect.top;
        const maxScrollY = Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight
        );
        const clampedScrollY = Math.min(Math.max(targetScrollY, 0), maxScrollY);

        if (Math.abs(window.scrollY - clampedScrollY) > 1) {
            window.scrollTo({ top: clampedScrollY, behavior: "auto" });
        }

        return clampedScrollY;
    }, []);

    const applyScrollLock = useCallback((scrollY: number) => {
        const body = document.body;
        const html = document.documentElement;

        if (!scrollLockState.current) {
            scrollLockState.current = {
                scrollY,
                bodyOverflow: body.style.overflow,
                bodyPosition: body.style.position,
                bodyTop: body.style.top,
                bodyWidth: body.style.width,
                htmlOverflow: html.style.overflow
            };
        } else {
            scrollLockState.current.scrollY = scrollY;
        }

        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.width = "100%";
    }, []);

    const removeScrollLock = useCallback(() => {
        const lock = scrollLockState.current;
        if (!lock) return;

        const body = document.body;
        const html = document.documentElement;

        body.style.overflow = lock.bodyOverflow;
        body.style.position = lock.bodyPosition;
        body.style.top = lock.bodyTop;
        body.style.width = lock.bodyWidth;
        html.style.overflow = lock.htmlOverflow;

        scrollLockState.current = null;
        window.scrollTo({ top: lock.scrollY, behavior: "auto" });
    }, []);

    // Lock/unlock scroll helpers
    const lockScroll = useCallback(() => {
        if (!isLockedRef.current && !prefersReducedMotion.current) {
            const snappedScrollY = snapSectionToTop();
            const targetScrollY = snappedScrollY ?? window.scrollY;

            isLockedRef.current = true;
            setIsLocked(true);
            applyScrollLock(targetScrollY);

            // Beat trackpad momentum: ensure we end up at the snapped position.
            requestAnimationFrame(() => {
                if (!isLockedRef.current) return;
                window.scrollTo({ top: targetScrollY, behavior: "auto" });
            });
        }
    }, [applyScrollLock, snapSectionToTop]);

    const unlockScroll = useCallback(() => {
        if (isLockedRef.current) {
            isLockedRef.current = false;
            setIsLocked(false);
            removeScrollLock();
        }
        detentLockRef.current = null;
    }, [removeScrollLock]);

    const shouldPreLockForScrollInput = useCallback((deltaY: number) => {
        const el = sectionRef.current;
        if (!el) return false;

        const currentProgress = progress.get();
        // If the animation is already at an edge, allow scrolling "away" from the section
        // without immediately re-locking.
        if (currentProgress <= 0.001 && deltaY < 0) return false;
        if (currentProgress >= 0.999 && deltaY > 0) return false;

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Only consider "full screen-ish" sections for this behavior.
        if (rect.height < viewportHeight * 0.8) return false;

        // Only intercept when the section is near / intersecting the viewport.
        const isNearViewport =
            rect.top < viewportHeight + preLockSlopPx &&
            rect.bottom > -preLockSlopPx;
        if (!isNearViewport) return false;

        // If already nearly aligned, lock immediately.
        const isNearlyFullScreen =
            rect.top <= preLockSlopPx &&
            rect.bottom >= viewportHeight - preLockSlopPx;
        if (isNearlyFullScreen) return true;

        // Predict whether this input would "cross" the lock point (top ~ 0),
        // which is where the one-frame flicker usually happens.
        const predictedTop = rect.top - deltaY;

        // Scrolling down: element moves up (top decreases)
        if (deltaY > 0 && rect.top > preLockSlopPx && predictedTop <= preLockSlopPx) {
            return true;
        }

        // Scrolling up: element moves down (top increases)
        if (deltaY < 0 && rect.top < -preLockSlopPx && predictedTop >= -preLockSlopPx) {
            return true;
        }

        return Math.abs(rect.top) <= preLockSlopPx;
    }, [preLockSlopPx, progress]);

    const snapProgressToNearestEdge = useCallback(() => {
        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // If element is above viewport, we theoretically passed it -> 100%
        if (rect.bottom <= 0) {
            progress.set(1);
            return;
        }

        // If element is below viewport, we are before it -> 0%
        if (rect.top >= viewportHeight) {
            progress.set(0);
        }
    }, [progress]);

    // Check if section is in viewport using IntersectionObserver
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isOutOfView = entry.intersectionRatio < 0.1;

                if (isOutOfView) {
                    // Section out of view - unlock and snap progress.
                    unlockScroll();
                    snapProgressToNearestEdge();
                }
            },
            {
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.95, 1],
                rootMargin: "0px"
            }
        );

        observer.observe(el);

        const rafId = requestAnimationFrame(() => {
            snapProgressToNearestEdge();
        });

        return () => {
            observer.disconnect();
            cancelAnimationFrame(rafId);
            // Ensure we unlock on unmount
            unlockScroll();
        };
    }, [snapProgressToNearestEdge, unlockScroll]);


    // Handle wheel events (desktop)
    const handleWheel = useCallback((e: WheelEvent) => {
        if (prefersReducedMotion.current || e.ctrlKey) return;

        const delta = normalizeWheelDeltaY(e);
        if (delta === 0) return;

        // If we're not locked yet, pre-lock synchronously (capture phase) when the
        // next scroll input would cross the lock point. This avoids the 1-frame
        // overshoot/flicker caused by async observers + snap.
        if (!isLockedRef.current) {
            if (!shouldPreLockForScrollInput(delta)) return;

            e.preventDefault();
            e.stopPropagation();

            // Ensure progress starts at the correct edge for the entry direction.
            if (delta > 0) progress.set(0);
            if (delta < 0) progress.set(1);

            lockScroll();
            detentLockRef.current = null;
            return;
        }

        const current = progress.get();

        // Prevent default and hijack scroll
        e.preventDefault();
        e.stopPropagation();

        const isNewWheelGesture = !wheelGestureActiveRef.current;
        markWheelGestureActivity();

        const deltaDirection = Math.sign(delta) < 0 ? -1 : 1;
        const detentLock = detentLockRef.current;
        if (detentLock) {
            if (isNewWheelGesture || detentLock.source !== "wheel") {
                detentLockRef.current = null;
            } else if (deltaDirection === detentLock.direction) {
                return;
            } else {
                detentLockRef.current = null;
            }
        }

        if (isPaused()) return;

        const effectiveDelta = applyWheelDeltaResponse(delta);
        const next = Math.min(Math.max(current + effectiveDelta * sensitivity, 0), 1);
        const pausePoint = getCrossedPausePoint(current, next, effectiveDelta);
        if (pausePoint) {
            progress.set(pausePoint.at);
            if (pausePoint.holdMs === 0) {
                detentLockRef.current = { direction: deltaDirection, source: "wheel" };
            } else {
                startPause(pausePoint.holdMs);
            }
            return;
        }

        progress.set(next);

        // Scrolling UP at 0%
        if (next <= 0 && delta < 0) {
            progress.set(0);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Scrolling DOWN at 100%
        if (next >= 1 && delta > 0) {
            progress.set(1);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }
    }, [
        applyWheelDeltaResponse,
        getCrossedPausePoint,
        isPaused,
        lockScroll,
        markWheelGestureActivity,
        normalizeWheelDeltaY,
        progress,
        sensitivity,
        shouldPreLockForScrollInput,
        startPause,
        unlockScroll
    ]);

    // Handle touch events (mobile)
    const touchStartY = useRef(0);
    const isTouching = useRef(false);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (prefersReducedMotion.current) return;
        isTouching.current = true;
        touchStartY.current = e.touches[0].clientY;
        detentLockRef.current = null;
    }, []);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isTouching.current || prefersReducedMotion.current) return;

        const currentY = e.touches[0].clientY;
        const delta = touchStartY.current - currentY; // Drag up = positive delta = scroll down
        if (delta === 0) {
            touchStartY.current = currentY;
            return;
        }

        if (!isLockedRef.current) {
            if (!shouldPreLockForScrollInput(delta)) {
                touchStartY.current = currentY;
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            if (delta > 0) progress.set(0);
            if (delta < 0) progress.set(1);

            lockScroll();
            touchStartY.current = currentY;
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        const deltaDirection = Math.sign(delta) < 0 ? -1 : 1;
        const detentLock = detentLockRef.current;
        if (detentLock && detentLock.source === "touch") {
            if (deltaDirection === detentLock.direction) {
                touchStartY.current = currentY;
                return;
            }
            detentLockRef.current = null;
        }

        if (isPaused()) {
            touchStartY.current = currentY;
            return;
        }

        const current = progress.get();

        const next = Math.min(Math.max(current + delta * touchSensitivity, 0), 1);
        const pausePoint = getCrossedPausePoint(current, next, delta);
        if (pausePoint) {
            progress.set(pausePoint.at);
            if (pausePoint.holdMs === 0) {
                detentLockRef.current = { direction: deltaDirection, source: "touch" };
            } else {
                startPause(pausePoint.holdMs);
            }
            touchStartY.current = currentY;
            return;
        }

        progress.set(next);
        touchStartY.current = currentY;

        // Scrolling UP (delta < 0) at 0%
        if (next <= 0 && delta < 0) {
            progress.set(0);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Scrolling DOWN (delta > 0) at 100%
        if (next >= 1 && delta > 0) {
            progress.set(1);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }
    }, [
        getCrossedPausePoint,
        isPaused,
        lockScroll,
        progress,
        shouldPreLockForScrollInput,
        startPause,
        touchSensitivity,
        unlockScroll
    ]);

    const handleTouchEnd = useCallback(() => {
        isTouching.current = false;
        touchStartY.current = 0;
        detentLockRef.current = null;
    }, []);

    // Attach event listeners
    useEffect(() => {
        const wheelOptions: AddEventListenerOptions = { passive: false, capture: true };
        const touchOptions: AddEventListenerOptions = { passive: false, capture: true };

        window.addEventListener("wheel", handleWheel, wheelOptions);
        window.addEventListener("touchstart", handleTouchStart, touchOptions);
        window.addEventListener("touchmove", handleTouchMove, touchOptions);
        window.addEventListener("touchend", handleTouchEnd, { capture: true });

        return () => {
            window.removeEventListener("wheel", handleWheel, wheelOptions);
            window.removeEventListener("touchstart", handleTouchStart, touchOptions);
            window.removeEventListener("touchmove", handleTouchMove, touchOptions);
            window.removeEventListener("touchend", handleTouchEnd, { capture: true });
        };
    }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

    useEffect(() => {
        return () => {
            clearPauseTimeout();
            clearWheelGestureTimeout();
        };
    }, [clearPauseTimeout, clearWheelGestureTimeout]);

    return {
        sectionRef,
        progress,
        isLocked
    };
}
