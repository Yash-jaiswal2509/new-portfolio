"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";

type SkillCardProps = {
    title: string;
    skills: string[];
    className?: string;
}

const SkillCard = ({ title, skills, className }: SkillCardProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            className={`p-4 rounded-lg border backdrop-blur-sm ${className}`}
        >
            <h3 className="text-lg font-semibold mb-3 text-gray-200">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-2 py-1 text-sm rounded-full bg-white/10 text-gray-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillCard;