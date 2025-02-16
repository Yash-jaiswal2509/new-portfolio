"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/utils";
import { ReactNode } from "react";

type AnimatedSectionProps = {
    icon: ReactNode;
    title: string;
    children: ReactNode;
    className?: string;
}

const AnimatedSection = ({ icon, title, children, className }: AnimatedSectionProps) => {
    return (
        <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 ${className}`}
        >
            <motion.div
                variants={staggerChildren}
                className="flex items-center gap-3 mb-4"
            >
                {icon}
                <h2 className="text-2xl font-bold">{title}</h2>
            </motion.div>
            <motion.div
                variants={staggerChildren}
                className="ml-11"
            >
                {children}
            </motion.div>
        </motion.section>
    );
}

export default AnimatedSection; 