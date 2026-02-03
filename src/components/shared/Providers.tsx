"use client";

import { MotionConfig } from "framer-motion";
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <MotionConfig reducedMotion="user">
            {children}
        </MotionConfig>
    );
};
