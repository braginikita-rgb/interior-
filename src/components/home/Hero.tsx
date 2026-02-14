"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-navy text-ivory">
            {/* Background Video with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1600596542815-3ad195bb4a77?auto=format&fit=crop&q=80&w=1200"
                    className="h-full w-full object-cover"
                >
                    <source src="/new-hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-navy/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
            </motion.div>

            {/* Content */}
            <Container className="relative z-10 flex h-full flex-col justify-center pt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="max-w-4xl space-y-8"
                >
                    {/* Subheading / Tag */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-block border border-bronze px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze backdrop-blur-sm rounded-full">
                            Full Cycle Studio
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="space-y-2">
                        <div className="overflow-hidden">
                            <motion.h1
                                variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
                                className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white"
                            >
                                Дизайн интерьеров
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
                                className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white/90 italic"
                            >
                                премиум-класса.
                            </motion.h1>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.p
                            variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } } }}
                            className="text-lg md:text-xl font-light text-white/80 max-w-xl leading-relaxed"
                        >
                            От концепции до реализации. Мы создаем пространства, в которых хочется жить, бережём ваше время и гарантируем качество.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}
                        className="flex flex-col sm:flex-row gap-6 pt-8"
                    >
                        <Link href="/portfolio">
                            <Button variant="primary" icon className="w-full sm:w-auto">Смотреть портфолио</Button>
                        </Link>
                        <Link href="/contacts">
                            <Button variant="secondary" className="w-full sm:w-auto">Обсудить проект</Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.button
                style={{ opacity }}
                onClick={() => {
                    const about = document.getElementById("about");
                    about?.scrollIntoView({ behavior: "smooth" });
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer z-20"
            >
                <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-white/50" />
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            </motion.button>
        </section>
    );
};
