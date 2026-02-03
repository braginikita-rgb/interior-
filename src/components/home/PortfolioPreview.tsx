"use client";

import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export const PortfolioPreview = () => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section className="bg-navy py-32 overflow-hidden text-ivory relative">
            <Container className="mb-12 flex items-end justify-between relative z-10">
                <div className="space-y-4">
                    <span className="text-bronze font-bold text-xs uppercase tracking-widest block">Портфолио</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Избранные проекты</h2>
                </div>
                <Link href="/portfolio" className="hidden md:block">
                    <Button variant="secondary" icon>Все проекты</Button>
                </Link>
            </Container>

            <motion.div
                ref={ref}
                className="pl-4 md:pl-[calc((100vw-1440px)/2+2rem)] flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pr-4 pb-12"
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="relative min-w-[85vw] md:min-w-[600px] lg:min-w-[700px] aspect-[4/3] snap-center group shrink-0"
                    >
                        <Link href={`/portfolio/${project.slug}`} className="block h-full w-full relative overflow-hidden rounded-sm">
                            <Image
                                src={project.cover}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 pt-32 bg-gradient-to-t from-navy/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-bronze">
                                        <span>{project.city}</span>
                                        <span className="w-1 h-1 bg-bronze rounded-full" />
                                        <span>{project.area} м²</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-serif text-white">{project.title}</h3>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-8 flex justify-center md:hidden relative z-10">
                <Link href="/portfolio">
                    <Button variant="secondary" icon>Все проекты</Button>
                </Link>
            </div>
        </section>
    );
};
