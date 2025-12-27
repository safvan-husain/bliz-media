import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cities = [
    "DUBAI",
    "ABU DHABI",
    "SHARJAH",
    "SAUDI ARABIA",
    "Calicut",
    "Bengaluru",
];

export default function CityCycler() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % cities.length);
        }, 2800);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="inline-flex align-bottom h-[1.25em] relative top-[0.1em]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={cities[index]}
                    className="bg-black text-white px-4 md:px-6 flex items-center h-full whitespace-nowrap overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                >
                    {cities[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
