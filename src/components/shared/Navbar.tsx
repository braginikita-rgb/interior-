"use client";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-navy/80 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-white tracking-widest">
                    STUDIO
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Главная", href: "/" },
                        { name: "Портфолио", href: "/portfolio" },
                        { name: "Услуги", href: "/#services" },
                        { name: "Контакты", href: "/contacts" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm uppercase tracking-widest text-white/80 hover:text-bronze transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <button className="md:hidden text-white uppercase text-xs tracking-widest">
                    Menu
                </button>
            </Container>
        </motion.header>
    );
};
