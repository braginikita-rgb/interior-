"use client";

// Force deployment update

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
                scrolled ? "bg-navy/80 backdrop-blur-md py-2" : "bg-transparent py-4"
            )}
        >
            <Container className="relative flex items-center min-h-[60px]">
                <Link href="/" className="absolute top-[-70px] left-[20px] h-48 w-[600px] z-10">
                    <Image
                        src="/logo.png"
                        alt="STUDIO"
                        fill
                        className="object-contain object-left"
                        priority
                        unoptimized
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8 ml-auto relative z-20">
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
        </motion.header >
    );
};
