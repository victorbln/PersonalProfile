"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 rounded-full bg-surface-alt border-2 border-border hover:border-primary/50 transition-all"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 180 : 0,
                    scale: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-5 w-5 text-primary" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : -180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
            >
                <Moon className="h-5 w-5 text-primary" />
            </motion.div>
        </motion.button>
    );
}
