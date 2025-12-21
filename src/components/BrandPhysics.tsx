import { useEffect, useRef } from "react";
import Matter from "matter-js";

interface Brand {
    name: string;
    id: string;
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

    brandsRef.current = brands;

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
        const { Engine, Render, Runner, Bodies, Mouse, MouseConstraint, Composite } = Matter;

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
        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
        const ceiling = Bodies.rectangle(width / 2, -50, width, 100, wallOptions);
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions);

        Composite.add(world, [ground, ceiling, leftWall, rightWall]);

        // Create brand bodies
        const bodies = brandsRef.current.map((brand) => {
            const x = Math.random() * (width - 100) + 50;
            const y = Math.random() * (height - 100) + 50;

            // Calculate size based on name length (rough estimate)
            const textWidth = brand.name.length * 10 + 40;
            const textHeight = 40;

            const body = Bodies.rectangle(x, y, textWidth, textHeight, {
                chamfer: { radius: 20 },
                restitution: 0.6,
                friction: 0.1,
                render: {
                    fillStyle: "white",
                    strokeStyle: "#09090b",
                    lineWidth: 2,
                },
            });

            // Attach metadata for rendering text
            (body as any).brandName = brand.name;
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
        mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

        // Custom render loop for text
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: width, y: height },
        });

        const afterRender = () => {
            const context = render.context;
            context.font = "600 16px Inter, sans-serif";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillStyle = "#09090b";

            bodies.forEach((body) => {
                const { x, y } = body.position;
                const angle = body.angle;

                context.save();
                context.translate(x, y);
                context.rotate(angle);
                context.fillText((body as any).brandName, 0, 0);
                context.restore();
            });
        };

        Matter.Events.on(render, "afterRender", afterRender);

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);
        runnerRef.current = runner;
        isRunningRef.current = true;

        // Resize handler
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
            Matter.Body.setPosition(rightWall, { x: newWidth + 50, y: newHeight / 2 });
        };

        window.addEventListener("resize", handleResize);

        cleanupRef.current = () => {
            window.removeEventListener("resize", handleResize);
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
            { threshold: 0.1 }
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
