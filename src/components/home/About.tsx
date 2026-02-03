"use client";

import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const features = [
    {
        title: "Философия",
        description: "Мы верим, что интерьер — это продолжение личности. Наш подход основан на глубоком понимании образа жизни заказчика."
    },
    {
        title: "Детализация",
        description: "Внимание к мелочам создает совершенство. Мы тщательно прорабатываем каждый узел, стык и фактуру."
    },
    {
        title: "Реализация",
        description: "Красивая картинка — это только начало. Мы берем на себя всю стройку, комплектацию и логистику."
    }
];

export const About = () => {
    return (
        <section id="about" className="bg-ivory text-navy py-24 md:py-32">
            <Container>
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2 space-y-24 md:space-y-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <span className="text-bronze font-bold text-xs uppercase tracking-widest pl-12 relative before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[1px] before:bg-bronze">
                                О нас
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                                Создаем пространства <br />
                                <span className="italic text-navy/80">вне времени</span>
                            </h2>
                            <p className="text-lg text-graphite/80 leading-relaxed max-w-md">
                                Мы студия полного цикла. Сочетаем современный минимализм с теплотой природных материалов и уникальными арт-объектами.
                            </p>
                        </motion.div>

                        <div className="space-y-24">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6 group"
                                >
                                    <span className="text-bronze/50 font-mono text-xl md:text-2xl group-hover:text-bronze transition-colors">0{index + 1}</span>
                                    <h3 className="text-2xl md:text-3xl font-serif">{item.title}</h3>
                                    <p className="text-graphite/60 leading-relaxed max-w-sm group-hover:text-graphite transition-colors">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative h-[50vh] lg:h-auto min-h-[500px] hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="sticky top-32 h-[80vh] w-full overflow-hidden rounded-sm"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000"
                                alt="Studio Interior"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-navy/10" />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
