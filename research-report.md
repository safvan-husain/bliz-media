# Research Report: Scroll Hijacking Not Working - No Animations, Leaders Not Visible

## Issue Summary
The scroll hijacking mechanism is not activating, resulting in:
- No animations playing
- Leaders section not visible
- Scroll hijack never happens

## Root Cause Analysis

### 1. **Viewport Coverage Check Logic Flaw**

**Current Implementation:**
```27:40:src/components/ScrollTeam.tsx
const checkViewportCoverage = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return false;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Section fully covers viewport when:
    // - Top edge is at or above viewport top
    // - Bottom edge is at or below viewport bottom
    const fullyCovers = rect.top <= 0 && rect.bottom >= viewportHeight;
    
    return fullyCovers && !prefersReducedMotion.current;
}, []);
```

**Problem:**
- Section height is `h-screen` (exactly 100vh)
- When section is perfectly aligned at top: `rect.top = 0` and `rect.bottom = viewportHeight`
- Condition `rect.bottom >= viewportHeight` requires `>=`, but with exact height, `rect.bottom` equals `viewportHeight`, not greater
- This creates a **boundary condition failure** - the check might fail when section is exactly aligned

**Mathematical Issue:**
- If `rect.top = 0` and `rect.bottom = viewportHeight` (exact match)
- Condition: `0 <= 0` ✅ (true) AND `viewportHeight >= viewportHeight` ✅ (true)
- Actually should work, BUT...

### 2. **Sticky Element Interference**

**Current Structure:**
```212:214:src/components/ScrollTeam.tsx
<section ref={sectionRef} className="relative h-screen bg-[#0c1b33] overflow-clip">
    {/* Main Sticky Container */}
    <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
```

**Problem:**
- The section has `h-screen` (100vh)
- Inside is a sticky container that stays fixed during scroll
- When the section scrolls into view, the sticky element behavior might interfere with `getBoundingClientRect()` calculations
- The section's bounding rect might not accurately reflect its "sticky state"

### 3. **Scroll Event Listener Catch-22**

**Current Implementation:**
```71:84:src/components/ScrollTeam.tsx
const handleScroll = () => {
    const fullyCovers = checkViewportCoverage();
    setIsActive(fullyCovers);
    
    if (fullyCovers && !isLocked) {
        setIsLocked(true);
        document.body.style.overflow = "hidden";
    } else if (!fullyCovers && isLocked) {
        document.body.style.overflow = "";
        setIsLocked(false);
    }
};

window.addEventListener("scroll", handleScroll, { passive: true });
```

**Problem:**
- Scroll listener is `passive: true` (cannot prevent default)
- When scroll is locked (`overflow: hidden`), scroll events may not fire reliably
- Creates a **circular dependency**: need scroll events to detect coverage, but scroll is locked
- The scroll event might not fire when body overflow is hidden

### 4. **IntersectionObserver Timing Issues**

**Current Implementation:**
```47:66:src/components/ScrollTeam.tsx
const observer = new IntersectionObserver(
    ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        const fullyCovers = checkViewportCoverage();
        const shouldActivate = isIntersecting && fullyCovers;
        
        setIsActive(shouldActivate);
        
        // Lock scroll only when fully covering viewport
        if (shouldActivate && !isLocked) {
            setIsLocked(true);
            document.body.style.overflow = "hidden";
        } else if (!fullyCovers && isLocked) {
            // Unlock if no longer fully covering
            document.body.style.overflow = "";
            setIsLocked(false);
        }
    },
    { threshold: [0, 0.1, 0.5, 1] }
);
```

**Problems:**
1. **Double Check**: Checks both `entry.isIntersecting` AND `checkViewportCoverage()` - might be redundant or conflicting
2. **Threshold Array**: Multiple thresholds might cause rapid state changes
3. **Timing**: `checkViewportCoverage()` is called synchronously in the observer callback, but DOM might not be fully laid out
4. **Race Condition**: Observer fires, but `getBoundingClientRect()` might return stale values

### 5. **Progress Reset Logic**

**Current Implementation:**
```191:197:src/components/ScrollTeam.tsx
// Reset progress when section becomes inactive or no longer fully covers viewport
useEffect(() => {
    const fullyCovers = checkViewportCoverage();
    if (!fullyCovers && !isLocked) {
        progress.set(0);
    }
}, [isActive, isLocked, progress, checkViewportCoverage]);
```

**Problem:**
- Progress is reset to 0 whenever section doesn't fully cover
- This might happen **before** scroll hijacking activates
- If coverage check fails initially, progress stays at 0, animations never start

### 6. **Event Listener Attachment Timing**

**Current Implementation:**
```170:189:src/components/ScrollTeam.tsx
useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Wheel events (non-passive to allow preventDefault)
    el.addEventListener("wheel", handleWheel, { passive: false });
    
    // Touch events
    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
        el.removeEventListener("wheel", handleWheel);
        el.removeEventListener("touchstart", handleTouchStart);
        el.removeEventListener("touchmove", handleTouchMove);
        el.removeEventListener("touchend", handleTouchEnd);
    };
}, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);
```

**Problem:**
- Event listeners are attached to the section element
- But wheel events might not fire if scroll is already locked
- The handlers check `checkViewportCoverage()` on every event, which might fail

### 7. **Section Height vs Scroll Space**

**Current Implementation:**
```212:212:src/components/ScrollTeam.tsx
<section ref={sectionRef} className="relative h-screen bg-[#0c1b33] overflow-clip">
```

**Problem:**
- Section is exactly `h-screen` (100vh)
- With scroll hijacking, we don't need extra height, BUT...
- The section needs to be **detectable** when it enters viewport
- If section is exactly viewport height and positioned at top, it might be hard to detect the "fully covering" state

## Critical Issues Identified

### Issue #1: Boundary Condition in Coverage Check
The `rect.bottom >= viewportHeight` check might fail when:
- Section is exactly 100vh tall
- Section is perfectly aligned at top
- Floating point precision issues
- Browser rounding differences

### Issue #2: Sticky Element Confusion
The sticky container inside might cause:
- `getBoundingClientRect()` to return incorrect values
- IntersectionObserver to fire at wrong times
- Scroll calculations to be off

### Issue #3: Scroll Lock Prevents Detection
When `overflow: hidden` is set:
- Scroll events might not fire
- User can't scroll to trigger detection
- Creates a deadlock situation

### Issue #4: Race Conditions
Multiple checks happening simultaneously:
- IntersectionObserver callback
- Scroll event handler
- Coverage check function
- State updates

These might conflict or fire in wrong order.

## Recommended Solutions (Not Implemented)

### Solution 1: Fix Coverage Check Logic
Use more lenient boundary conditions:
```javascript
const fullyCovers = rect.top <= 10 && rect.bottom >= (viewportHeight - 10);
```
Or use intersection ratio from IntersectionObserver:
```javascript
const fullyCovers = entry.intersectionRatio >= 0.95;
```

### Solution 2: Use IntersectionObserver Entry Data
Instead of calling `getBoundingClientRect()` separately, use IntersectionObserver's built-in data:
```javascript
const observer = new IntersectionObserver(
    ([entry]) => {
        const fullyCovers = entry.intersectionRatio >= 0.95 && 
                           entry.boundingClientRect.top <= 0 &&
                           entry.boundingClientRect.bottom >= window.innerHeight;
    },
    { threshold: [0, 0.25, 0.5, 0.75, 0.95, 1] }
);
```

### Solution 3: Simplify Activation Logic
Remove the scroll event listener dependency:
- Rely solely on IntersectionObserver
- Use `entry.intersectionRatio` to determine coverage
- Remove redundant `checkViewportCoverage()` calls

### Solution 4: Add Debug Logging
Temporarily add console logs to track:
- When coverage check returns true/false
- When scroll lock is activated
- When progress updates
- When event handlers fire

### Solution 5: Initial State Check
Check coverage on mount and after a short delay:
```javascript
useEffect(() => {
    // Check immediately
    const check = () => {
        const covers = checkViewportCoverage();
        if (covers && !isLocked) {
            setIsLocked(true);
            document.body.style.overflow = "hidden";
        }
    };
    
    check();
    // Check again after layout
    setTimeout(check, 100);
}, []);
```

### Solution 6: Use RequestAnimationFrame
For more accurate timing:
```javascript
const checkCoverage = () => {
    requestAnimationFrame(() => {
        const covers = checkViewportCoverage();
        // update state
    });
};
```

## Conclusion

The primary issues are:
1. **Coverage check logic is too strict** - boundary conditions fail
2. **Sticky element interferes** with bounding rect calculations
3. **Scroll lock prevents detection** - circular dependency
4. **Race conditions** between multiple detection mechanisms
5. **Progress never starts** because coverage check fails initially

The scroll hijacking never activates because the coverage check consistently returns `false`, preventing:
- Scroll lock from being applied
- Event handlers from hijacking scroll
- Progress from updating
- Animations from playing
