"use client";

import { Container } from "@/components/ui/Container";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { label: "Проектов", value: 140, suffix: "+", tooltip: "Жилые и коммерческие объекты по всему миру" },
    { label: "Лет опыта", value: 12, suffix: "", tooltip: "Успешной работы на рынке дизайна" },
    { label: "Наград", value: 8, suffix: "", tooltip: "Международные премии и публикации" },
    { label: "Гарантия", value: 5, suffix: "лет", tooltip: "На все виды строительных работ" }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20, duration: 2 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    return (
        <span className="flex items-baseline">
            <motion.span ref={ref}>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export const Stats = () => {
    return (
        <section className="bg-ivory py-20 border-t border-navy/5">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="relative group cursor-default">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex flex-col items-center text-center space-y-2"
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-bronze border-t border-bronze/30 pt-4 mt-2 px-4">
                                    {stat.label}
                                </div>

                                {/* Tooltip */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-16 left-1/2 -translate-x-1/2 bg-navy text-white text-xs py-3 px-4 shadow-xl whitespace-nowrap pointer-events-none z-10 hidden md:block">
                                    {stat.tooltip}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-navy rotate-45" />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
