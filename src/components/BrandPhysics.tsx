import { useEffect, useRef } from "react";
import Matter from "matter-js";

interface Brand {
  icon: string;
  id: string;
  color?: string;
}

interface BrandPhysicsProps {
  brands: Brand[];
}

export default function BrandPhysics({ brands }: BrandPhysicsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef(brands);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const hasStartedRef = useRef(false);
  const isInViewRef = useRef(false);
  const isRunningRef = useRef(false);
  const pendingRestartRef = useRef(false);
  const colorCacheRef = useRef<Map<string, { fill: string }>>(new Map());

  brandsRef.current = brands;

  const normalizeTailwindColorClass = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "bg-white";

    if (trimmed.startsWith("#")) return trimmed;
    if (trimmed.startsWith("rgb")) return trimmed;
    if (trimmed.startsWith("hsl")) return trimmed;
    if (trimmed.startsWith("var(")) return trimmed;

    if (/\b(bg|text|from|via|to)-/.test(trimmed)) return trimmed;
    if (/^[a-z]+-\d{2,3}$/.test(trimmed)) return `bg-${trimmed}`;

    return trimmed;
  };

  const resolveBrandColors = (value?: string) => {
    const normalized = normalizeTailwindColorClass(value ?? "bg-white");

    if (
      normalized.startsWith("#") ||
      normalized.startsWith("rgb") ||
      normalized.startsWith("hsl") ||
      normalized.startsWith("var(")
    ) {
      const probe = document.createElement("div");
      probe.style.position = "absolute";
      probe.style.left = "-9999px";
      probe.style.top = "-9999px";
      probe.style.width = "1px";
      probe.style.height = "1px";
      probe.style.pointerEvents = "none";
      probe.style.backgroundColor = normalized;
      document.body.appendChild(probe);
      const computedBackground = window.getComputedStyle(probe).backgroundColor;
      probe.remove();

      return {
        fill: normalized,
      };
    }

    const cached = colorCacheRef.current.get(normalized);
    if (cached) return cached;

    const probe = document.createElement("div");
    probe.className = normalized;
    probe.style.position = "absolute";
    probe.style.left = "-9999px";
    probe.style.top = "-9999px";
    probe.style.width = "1px";
    probe.style.height = "1px";
    probe.style.pointerEvents = "none";
    document.body.appendChild(probe);

    const style = window.getComputedStyle(probe);
    const backgroundColor = style.backgroundColor;
    probe.remove();

    const fill =
      backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)"
        ? backgroundColor
        : "white";

    const resolved = { fill };
    colorCacheRef.current.set(normalized, resolved);
    return resolved;
  };

  const pause = () => {
    const runner = runnerRef.current;
    const render = renderRef.current;
    if (runner) Matter.Runner.stop(runner);
    if (render) Matter.Render.stop(render);
    isRunningRef.current = false;
  };

  const resume = () => {
    const runner = runnerRef.current;
    const render = renderRef.current;
    const engine = engineRef.current;
    if (!runner || !render || !engine) return;
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);
    isRunningRef.current = true;
  };

  const cleanup = () => {
    const doCleanup = cleanupRef.current;
    cleanupRef.current = null;
    if (doCleanup) {
      doCleanup();
    } else {
      const render = renderRef.current;
      const runner = runnerRef.current;
      const engine = engineRef.current;

      if (render) Matter.Render.stop(render);
      if (runner) Matter.Runner.stop(runner);
      if (engine) Matter.Engine.clear(engine);

      if (render?.canvas) render.canvas.remove();
      if (render) render.textures = {};
    }

    renderRef.current = null;
    runnerRef.current = null;
    engineRef.current = null;
    isRunningRef.current = false;
  };

  const startOrRestart = () => {
    if (!sceneRef.current) return;

    cleanup();

    // --- Matter.js Setup ---
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Mouse,
      MouseConstraint,
      Composite,
    } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Get container dimensions
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });
    renderRef.current = render;

    // Walls
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(
      width / 2,
      height + 50,
      width,
      100,
      wallOptions,
    );
    const ceiling = Bodies.rectangle(width / 2, -50, width, 100, wallOptions);
    const leftWall = Bodies.rectangle(
      -50,
      height / 2,
      100,
      height,
      wallOptions,
    );
    const rightWall = Bodies.rectangle(
      width + 50,
      height / 2,
      100,
      height,
      wallOptions,
    );

    Composite.add(world, [ground, ceiling, leftWall, rightWall]);

    const imageCache = new Map<string, HTMLImageElement>();
    const getBrandImage = (icon: string) => {
      const cachedImage = imageCache.get(icon);
      if (cachedImage) return cachedImage;
      const image = new Image();
      image.src = icon;
      imageCache.set(icon, image);
      return image;
    };

    // Create brand bodies
    const bodies = brandsRef.current.map((brand) => {
      const x = Math.random() * (width - 100) + 50;
      const y = Math.random() * (height - 100) + 50;

      const cardWidth = 112;
      const cardHeight = 68;

      const { fill } = resolveBrandColors(brand.color);

      const body = Bodies.rectangle(x, y, cardWidth, cardHeight, {
        chamfer: { radius: 18 },
        restitution: 0.6,
        friction: 0.1,
        render: {
          fillStyle: fill,
          strokeStyle: "#09090b",
          lineWidth: 2,
        },
      });

      const bodyWithIcon = body as Matter.Body & {
        brandImage?: HTMLImageElement;
      };
      bodyWithIcon.brandImage = getBrandImage(brand.icon);
      return body;
    });

    Composite.add(world, bodies);

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // Fix scroll interference
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener(
      "DOMMouseScroll",
      (mouse as any).mousewheel,
    );

    // Custom render loop for brand icons
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });

    const afterRender = () => {
      const context = render.context;

      bodies.forEach((body) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const bodyWithIcon = body as Matter.Body & {
          brandImage?: HTMLImageElement;
        };
        const image = bodyWithIcon.brandImage;

        if (
          !image ||
          !image.complete ||
          image.naturalWidth === 0 ||
          image.naturalHeight === 0
        )
          return;

        const bodyWidth = body.bounds.max.x - body.bounds.min.x;
        const bodyHeight = body.bounds.max.y - body.bounds.min.y;
        const maxWidth = bodyWidth - 26;
        const maxHeight = bodyHeight - 26;
        const imageRatio = image.naturalWidth / image.naturalHeight;

        let drawWidth = maxWidth;
        let drawHeight = drawWidth / imageRatio;

        if (drawHeight > maxHeight) {
          drawHeight = maxHeight;
          drawWidth = drawHeight * imageRatio;
        }

        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.drawImage(
          image,
          -drawWidth / 2,
          -drawHeight / 2,
          drawWidth,
          drawHeight,
        );
        context.restore();
      });
    };

    Matter.Events.on(render, "afterRender", afterRender);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);
    runnerRef.current = runner;
    isRunningRef.current = true;

    // Desktop: keep dynamic resize updates. Mobile: rebuild only on orientation change.
    const handleResize = () => {
      if (!sceneRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;

      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;

      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 50 });
      Matter.Body.setPosition(ceiling, { x: newWidth / 2, y: -50 });
      Matter.Body.setPosition(leftWall, { x: -50, y: newHeight / 2 });
      Matter.Body.setPosition(rightWall, {
        x: newWidth + 50,
        y: newHeight / 2,
      });
    };

    const handleOrientationChange = () => {
      if (!hasStartedRef.current) return;
      if (!isInViewRef.current) {
        pendingRestartRef.current = true;
        return;
      }

      startOrRestart();
    };

    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (isSmallScreen) {
      window.addEventListener("orientationchange", handleOrientationChange);
    } else {
      window.addEventListener("resize", handleResize);
    }

    cleanupRef.current = () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      Matter.Events.off(render, "afterRender", afterRender);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      hasStartedRef.current = true;
      startOrRestart();
      return () => cleanup();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        isInViewRef.current = isInView;

        if (isInView) {
          if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            startOrRestart();
            return;
          }

          if (pendingRestartRef.current) {
            pendingRestartRef.current = false;
            startOrRestart();
            return;
          }

          if (!isRunningRef.current) resume();
          return;
        }

        if (hasStartedRef.current && isRunningRef.current) pause();
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hasStartedRef.current) return;
    if (!isInViewRef.current) {
      pendingRestartRef.current = true;
      return;
    }

    startOrRestart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] cursor-grab active:cursor-grabbing overflow-hidden rounded-xl border border-muted bg-muted/30 p-2 m-2"
    >
      <div ref={sceneRef} className="w-full h-full" />
    </div>
  );
}
