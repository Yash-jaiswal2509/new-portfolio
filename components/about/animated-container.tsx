"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/utils";
import { ReactNode } from "react";

type AnimatedContainerProps = {
    children: ReactNode;
}

const AnimatedContainer = ({ children }: AnimatedContainerProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/5 p-3 sm:p-6 rounded-lg border border-white/10"
        >
            {children}
        </motion.div>
    );
}

export default AnimatedContainer; 