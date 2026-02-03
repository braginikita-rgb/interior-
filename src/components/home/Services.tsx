"use client";

import { Container } from "@/components/ui/Container";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, PenTool, Ruler, Home, CheckCircle, Package, Layers } from "lucide-react";
import React, { useRef } from "react";

const services = [
    { title: "Дизайн-проект", icon: PenTool, desc: "Полный комплект чертежей и 3D-визуализации для идеального ремонта." },
    { title: "Авторский надзор", icon: CheckCircle, desc: "Контроль соответствия строительных работ утвержденному проекту." },
    { title: "Комплектация", icon: Package, desc: "Подбор, закупка и доставка чистовых материалов и мебели." },
    { title: "Ремонт и отделка", icon: Home, desc: "Строительные работы силами наших проверенных бригад." },
    { title: "Декорирование", icon: Layers, desc: "Подбор текстиля, искусства и аксессуаров для завершения образа." },
    { title: "Технадзор", icon: Ruler, desc: "Независимая проверка качества скрытых и чистовых работ." },
];

function ServiceCard({ service, index }: { service: any; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{ perspective: 1000 }}
            className="h-full"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="group relative h-full bg-white p-8 md:p-12 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,18,32,0.1)] transition-shadow duration-500 overflow-hidden border border-transparent hover:border-bronze/20"
            >
                <div className="relative z-10 flex flex-col h-full justify-between" style={{ transform: "translateZ(20px)" }}>
                    <div className="space-y-8">
                        <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors duration-500">
                            <Icon className="w-6 h-6 stroke-1" />
                        </div>
                        <h3 className="text-2xl font-serif text-navy">{service.title}</h3>
                        <p className="text-graphite/60 leading-relaxed text-sm group-hover:text-graphite transition-colors">{service.desc}</p>
                    </div>

                    <div className="pt-8 flex justify-end">
                        <div className="w-8 h-8 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-bronze group-hover:border-bronze group-hover:text-white transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Subtle sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: "translateZ(10px)" }} />
            </motion.div>
        </motion.div>
    );
}

export const Services = () => {
    return (
        <section id="services" className="bg-ivory py-32">
            <Container>
                <div className="mb-20 space-y-4 max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-bronze font-bold text-xs uppercase tracking-widest block"
                    >
                        Услуги
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif text-navy"
                    >
                        Комплексный подход <br /> к вашему проекту
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard key={i} service={service} index={i} />
                    ))}
                </div>
            </Container>
        </section>
    );
};
