"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    pulse: number;
    pulseSpeed: number;
    layer: number;
}

function createBeam(width: number, height: number, layer: number): Beam {
    const angle = -35 + Math.random() * 10;
    const baseSpeed = 0.2 + layer * 0.2;
    const baseOpacity = 0.08 + layer * 0.05;
    const baseWidth = 10 + layer * 5;
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        width: baseWidth,
        length: height * 2.5,
        angle,
        speed: baseSpeed + Math.random() * 0.2,
        opacity: baseOpacity + Math.random() * 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.015,
        layer,
    };
}

interface PremiumHeroProps {
    title?: string;
    titles?: string[];
    subtitle?: string;
}

export const PremiumHero = ({
    title = "This is Production",
    titles = ["cinematic", "stunning", "engaging", "powerful", "creative"],
    subtitle = "Professional media production services that tell your brand story with visual excellence and cinematic impact."
}: PremiumHeroProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const noiseRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const [titleNumber, setTitleNumber] = useState(0);

    const LAYERS = 3;
    const BEAMS_PER_LAYER = 8;

    useEffect(() => {
        const canvas = canvasRef.current;
        const noiseCanvas = noiseRef.current;
        if (!canvas || !noiseCanvas) return;
        const ctx = canvas.getContext("2d");
        const nCtx = noiseCanvas.getContext("2d");
        if (!ctx || !nCtx) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            noiseCanvas.width = window.innerWidth * dpr;
            noiseCanvas.height = window.innerHeight * dpr;
            noiseCanvas.style.width = `${window.innerWidth}px`;
            noiseCanvas.style.height = `${window.innerHeight}px`;
            nCtx.setTransform(1, 0, 0, 1, 0, 0);
            nCtx.scale(dpr, dpr);

            beamsRef.current = [];
            for (let layer = 1; layer <= LAYERS; layer++) {
                for (let i = 0; i < BEAMS_PER_LAYER; i++) {
                    beamsRef.current.push(createBeam(window.innerWidth, window.innerHeight, layer));
                }
            }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const generateNoise = () => {
            const imgData = nCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
            for (let i = 0; i < imgData.data.length; i += 4) {
                const v = Math.random() * 255;
                imgData.data[i] = v;
                imgData.data[i + 1] = v;
                imgData.data[i + 2] = v;
                imgData.data[i + 3] = 12;
            }
            nCtx.putImageData(imgData, 0, 0);
        };

        const drawBeam = (beam: Beam) => {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity = Math.min(1, beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4));
            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
            gradient.addColorStop(0, `rgba(0,255,255,0)`);
            gradient.addColorStop(0.2, `rgba(0,255,255,${pulsingOpacity * 0.5})`);
            gradient.addColorStop(0.5, `rgba(0,255,255,${pulsingOpacity})`);
            gradient.addColorStop(0.8, `rgba(0,255,255,${pulsingOpacity * 0.5})`);
            gradient.addColorStop(1, `rgba(0,255,255,0)`);

            ctx.fillStyle = gradient;
            ctx.filter = `blur(${2 + beam.layer * 2}px)`;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        };

        const animate = () => {
            if (!canvas || !ctx) return;

            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#050505");
            gradient.addColorStop(1, "#111111");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            beamsRef.current.forEach((beam) => {
                beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
                beam.pulse += beam.pulseSpeed;
                if (beam.y + beam.length < -50) {
                    beam.y = window.innerHeight + 50;
                    beam.x = Math.random() * window.innerWidth;
                }
                drawBeam(beam);
            });

            generateNoise();
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleNumber((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <canvas ref={noiseRef} className="absolute inset-0 z-0 pointer-events-none" />
            <canvas ref={canvasRef} className="absolute inset-0 z-10" />

            <div className="relative z-20 flex h-screen w-full items-center justify-center px-6 text-center">
                <div className="container mx-auto flex flex-col items-center gap-12 text-center">
                    <Button variant="secondary" size="sm" className="gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20">
                        Professional Media Production <MoveRight className="w-4 h-4" />
                    </Button>

                    <h1 className="text-5xl md:text-8xl max-w-4xl tracking-tighter font-black uppercase">
                        <span className="text-white">{title}</span>
                        <span className="relative flex w-full justify-center overflow-hidden md:pb-4 md:pt-1">
                            &nbsp;
                            {titles.map((t, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
                                    initial={{ opacity: 0, y: "-100" }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                    animate={
                                        titleNumber === index
                                            ? { y: 0, opacity: 1 }
                                            : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                                    }
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl leading-relaxed tracking-tight text-white/60 max-w-3xl text-center font-medium italic">
                        {subtitle}
                    </p>

                    <div className="flex flex-row gap-6 flex-wrap justify-center mt-8">
                        <Button size="lg" className="gap-4 bg-white text-black hover:bg-white/90 rounded-full font-black tracking-widest text-xs px-10 py-6">
                            VIEW SHOWREEL <MoveRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-4 border-white/20 text-white bg-white/10 hover:bg-white/40 rounded-full font-black tracking-widest text-xs px-10 py-6" variant="outline">
                            GET A QUOTE <PhoneCall className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
