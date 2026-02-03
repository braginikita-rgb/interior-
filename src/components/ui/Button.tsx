"use client";

import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { MoveRight } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    icon?: boolean;
}

export const Button = ({ className, variant = "primary", size = "md", children, icon = false, ...props }: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);

    // Magnetic Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = left + width / 2;
        const middleY = top + height / 2;
        // Strength of attraction
        x.set((e.clientX - middleX) * 0.2);
        y.set((e.clientY - middleY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-8 py-4 text-sm",
        lg: "px-10 py-5 text-base",
    };

    const variants = {
        primary: "bg-bronze text-white border border-bronze hover:shadow-[0_0_20px_rgba(176,141,87,0.5)]",
        secondary: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5",
        outline: "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
        ghost: "bg-transparent text-current hover:opacity-70 border-none px-0 py-0",
    };

    return (
        <motion.button
            ref={ref}
            style={{ x: xSpring, y: ySpring }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative inline-flex items-center justify-center gap-2 font-medium uppercase tracking-widest transition-all duration-300 rounded-full",
                sizes[size],
                variants[variant],
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <MoveRight className="w-4 h-4" />}
            </span>
        </motion.button>
    );
};
