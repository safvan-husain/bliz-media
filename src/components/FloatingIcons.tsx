import { motion } from "framer-motion";
import type { FloatingIconSectionContent } from "../data/services";

export default function FloatingIcons({
  content,
  showText = true,
}: {
  content: FloatingIconSectionContent;
  showText?: boolean;
}) {
  const { icons, title, subtitle } = content;

  // Calculate positions dynamically based on the number of icons
  const positions = icons.map((_, index) => {
    const isLeft = index % 2 === 0;
    const sideIndex = Math.floor(index / 2);
    const sideCount = Math.ceil(icons.length / 2);

    // Spread icons in an arc on each side to avoid the center text
    // Left side: 120° to 240° (keeps them between roughly 12% and 35% horizontally)
    // Right side: -60° to 60° (keeps them between roughly 65% and 88% horizontally)
    const arcProgress = sideCount > 1 ? sideIndex / (sideCount - 1) : 0.5;
    const angle = isLeft
      ? (2 * Math.PI) / 3 + arcProgress * ((Math.PI * 2) / 3)
      : -Math.PI / 3 + arcProgress * ((Math.PI * 2) / 3);

    // Use slightly randomized radii for a more natural floating appearance
    const radiusX = 35 + Math.sin(index * 1.5) * 5;
    const radiusY = 35 + Math.cos(index * 2.5) * 5;

    return {
      left: `${50 + radiusX * Math.cos(angle)}%`,
      top: `${50 + radiusY * Math.sin(angle)}%`,
    };
  });

  return (
    <section className="text-black relative py-32 bg-zinc-50 min-h-[40rem] flex flex-col items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      {showText && (
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden sm:block text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-zinc-600 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      )}

      {/* Floating Icons Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {icons.map((icon, index) => {
          const pos = positions[index % positions.length];

          return (
            <motion.div
              key={index}
              className="absolute w-16 h-16 md:w-24 md:h-24 bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex items-center justify-center p-4 md:p-6 -translate-x-1/2 -translate-y-1/2"
              style={{
                top: pos.top,
                left: pos.left,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.5, delay: index * 0.1 },
                y: {
                  duration: 4 + index, // Varied duration
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                },
                rotate: {
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
            >
              <img
                src={icon}
                alt="Technology Icon"
                className="w-full h-full object-contain opacity-80"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
