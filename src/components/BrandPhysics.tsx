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
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // --- Matter.js Setup ---
        const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint, Composite } = Matter;

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
        const bodies = brands.map((brand, index) => {
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
        (function run() {
            Render.lookAt(render, {
                min: { x: 0, y: 0 },
                max: { x: width, y: height }
            });

            Matter.Events.on(render, "afterRender", () => {
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
            });
        })();

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);
        runnerRef.current = runner;

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

        return () => {
            window.removeEventListener("resize", handleResize);
            Render.stop(render);
            Runner.stop(runner);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, [brands]);

    return (
        <div className="relative w-full h-[400px] cursor-grab active:cursor-grabbing overflow-hidden rounded-xl border border-muted bg-muted/30">
            <div ref={sceneRef} className="w-full h-full" />
            <div className="absolute top-4 left-4 pointer-events-none">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Interactive Ecosystem</h3>
            </div>
        </div>
    );
}
