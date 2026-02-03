"use client";

import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const allTypes = ["Все", ...Array.from(new Set(projects.map(p => p.category)))];
const allStyles = ["Все", ...Array.from(new Set(projects.map(p => p.style)))];

export default function PortfolioPage() {
    const [filterType, setFilterType] = useState("Все");
    const [filterStyle, setFilterStyle] = useState("Все");

    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            const matchType = filterType === "Все" || p.category === filterType;
            const matchStyle = filterStyle === "Все" || p.style === filterStyle;
            return matchType && matchStyle;
        });
    }, [filterType, filterStyle]);

    return (
        <div className="bg-ivory min-h-screen pt-32 pb-20">
            <Container>
                <div className="space-y-6 mb-16">
                    <span className="text-bronze font-bold text-xs uppercase tracking-widest block">Портфолио</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-navy">Наши проекты</h1>
                </div>

                {/* Filters */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16 border-b border-navy/10 pb-8">
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest text-navy/40">Тип объекта</span>
                        <div className="flex flex-wrap gap-2">
                            {allTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setFilterType(type)}
                                    className={`px-4 py-2 text-sm rounded-full transition-colors border ${filterType === type ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-navy/20 hover:border-navy"}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest text-navy/40">Стиль</span>
                        <div className="flex flex-wrap gap-2">
                            {allStyles.map(style => (
                                <button
                                    key={style}
                                    onClick={() => setFilterStyle(style)}
                                    className={`px-4 py-2 text-sm rounded-full transition-colors border ${filterStyle === style ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-navy/20 hover:border-navy"}`}
                                >
                                    {style}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Link href={`/portfolio/${project.slug}`} className="group block space-y-4">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                                    <Image
                                        src={project.cover}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Hover Reveal Image - Simulating before/after or just 2nd image */}
                                    {project.images[1] && (
                                        <Image
                                            src={project.images[1]}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                        />
                                    )}
                                </div>

                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-bronze">
                                            <span>{project.city}</span>
                                            <span className="w-1 h-1 bg-bronze rounded-full" />
                                            <span>{project.category}</span>
                                        </div>
                                        <h3 className="text-2xl font-serif text-navy group-hover:text-bronze transition-colors">{project.title}</h3>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-navy group-hover:text-bronze transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <div className="col-span-2 py-20 text-center text-navy/50">
                            Проектов по выбранным параметрам не найдено.
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}
