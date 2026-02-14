"use client";

import { Container } from "@/components/ui/Container";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
    { title: "Бриф", desc: "Знакомство, обсуждение пожеланий, замеры объекта и составление технического задания." },
    { title: "Концепция", desc: "Разработка планировочных решений, зон интерьера и стилистических коллажей." },
    { title: "Визуализации", desc: "Фотореалистичные 3D-изображения будущего интерьера с реальными материалами." },
    { title: "Чертежи", desc: "Полный комплект рабочей документации для строителей и согласований." },
    { title: "Реализация", desc: "Авторский надзор, комплектация, управлением стройки и финальное декорирование." }
];

export const Process = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    // Smooth drawing
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section className="bg-ivory py-32 overflow-hidden">
            <Container>
                <div className="mb-20 space-y-4 text-center">
                    <span className="text-bronze font-bold text-xs uppercase tracking-widest block">Процесс</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy">Как мы работаем</h2>
                </div>

                <div ref={ref} className="relative max-w-5xl mx-auto px-4 md:px-0">
                    <div className="space-y-16 md:space-y-24 relative">
                        {steps.map((step, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`flex-1 pl-20 md:pl-0 w-full ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                                >
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-serif text-navy relative z-10">{step.title}</h3>
                                        <p className="text-graphite/60 leading-relaxed max-w-sm relative z-10 inline-block">{step.desc}</p>
                                    </div>
                                </motion.div>

                                {/* Center Dot */}
                                <div className="absolute left-[32px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full border-2 border-bronze z-10 top-2 bg-ivory">
                                    <div className="w-1.5 h-1.5 bg-bronze rounded-full opacity-0 md:opacity-100" />
                                </div>

                                {/* Placeholder / Number on Opposite Side */}
                                <div className="flex-1 hidden md:flex flex-col justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className={`text-8xl font-serif text-navy/5 select-none ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                                    >
                                        0{i + 1}
                                    </motion.div>
                                </div>

                                {/* Mobile Number */}
                                <span className="absolute left-0 top-0 text-bronze font-mono text-sm font-bold md:hidden">0{i + 1}</span>
                            </div>
                        ))}
                        {/* Central Line - Moved to end for stacking context */}
                        <div className="absolute left-[32px] md:left-1/2 top-4 bottom-0 w-[1px] bg-navy/5 -translate-x-1/2" />
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute left-[32px] md:left-1/2 top-4 bottom-0 w-[1px] bg-bronze -translate-x-1/2 z-20"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
