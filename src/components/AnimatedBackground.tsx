"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function AnimatedBackground() {
    const { theme } = useTheme();

    const lightColors = {
        primary: "rgba(234, 88, 12, 0.15)",
        secondary: "rgba(5, 150, 105, 0.15)",
        accent: "rgba(8, 145, 178, 0.15)",
        gradient1: "linear-gradient(135deg, rgba(234, 88, 12, 0.2), rgba(5, 150, 105, 0.1))",
        gradient2: "linear-gradient(45deg, rgba(5, 150, 105, 0.2), rgba(8, 145, 178, 0.1))",
    };

    const darkColors = {
        primary: "rgba(251, 146, 60, 0.2)",
        secondary: "rgba(52, 211, 153, 0.2)",
        accent: "rgba(34, 211, 238, 0.2)",
        gradient1: "linear-gradient(135deg, rgba(251, 146, 60, 0.25), rgba(139, 92, 246, 0.15))",
        gradient2: "linear-gradient(45deg, rgba(52, 211, 153, 0.25), rgba(34, 211, 238, 0.15))",
    };

    const colors = theme === "dark" ? darkColors : lightColors;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-60"
                style={{ background: colors.gradient1, filter: "blur(80px)" }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-60"
                style={{ background: colors.gradient2, filter: "blur(80px)" }}
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.svg
                className="absolute top-1/4 left-1/4 w-64 h-64 opacity-40"
                viewBox="0 0 200 200"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: colors.primary, stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: colors.secondary, stopOpacity: 0.3 }} />
                    </linearGradient>
                </defs>
                <path
                    d="M 100 20 Q 150 50, 180 100 T 100 180 Q 50 150, 20 100 T 100 20"
                    fill="url(#grad1)"
                    filter="blur(20px)"
                />
            </motion.svg>

            <motion.svg
                className="absolute top-1/2 right-1/4 w-80 h-80 opacity-35"
                viewBox="0 0 200 200"
                animate={{
                    rotate: [0, -360],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                    x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <defs>
                    <radialGradient id="grad2">
                        <stop offset="0%" style={{ stopColor: colors.accent, stopOpacity: 0.7 }} />
                        <stop offset="100%" style={{ stopColor: colors.primary, stopOpacity: 0.2 }} />
                    </radialGradient>
                </defs>
                <path
                    d="M 50 100 Q 75 50, 100 100 T 150 100 Q 125 150, 100 100 T 50 100"
                    fill="url(#grad2)"
                    filter="blur(25px)"
                />
            </motion.svg>

            <motion.div
                className="absolute top-1/3 left-1/2 w-72 h-72 opacity-40"
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${colors.primary}, transparent 60%),
                                radial-gradient(circle at 70% 70%, ${colors.secondary}, transparent 60%),
                                radial-gradient(circle at 50% 50%, ${colors.accent}, transparent 70%)`,
                    filter: "blur(60px)",
                }}
                animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full opacity-30"
                    style={{
                        width: 40 + i * 15,
                        height: 40 + i * 15,
                        background: i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent,
                        filter: "blur(30px)",
                        top: `${10 + i * 10}%`,
                        left: `${5 + i * 12}%`,
                    }}
                    animate={{
                        y: [0, -40 - i * 5, 0],
                        x: [0, 30 - i * 3, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <motion.svg
                className="absolute bottom-1/4 left-1/3 w-56 h-56 opacity-25"
                viewBox="0 0 200 200"
                animate={{
                    rotateY: [0, 360],
                    rotateZ: [0, 180, 360],
                }}
                transition={{
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateZ: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: colors.secondary, stopOpacity: 0.8 }} />
                        <stop offset="50%" style={{ stopColor: colors.accent, stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: colors.primary, stopOpacity: 0.3 }} />
                    </linearGradient>
                </defs>
                <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="url(#grad3)" strokeWidth="8" filter="blur(15px)" />
                <ellipse cx="100" cy="100" rx="60" ry="30" fill="none" stroke="url(#grad3)" strokeWidth="6" filter="blur(12px)" />
            </motion.svg>

            <motion.svg
                className="absolute top-1/2 left-1/4 w-full h-full opacity-20"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,500 Q250,300 500,500 T1000,500"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="3"
                    filter="blur(20px)"
                    animate={{
                        d: [
                            "M0,500 Q250,300 500,500 T1000,500",
                            "M0,500 Q250,700 500,500 T1000,500",
                            "M0,500 Q250,300 500,500 T1000,500",
                        ],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.path
                    d="M0,300 Q500,200 1000,300"
                    fill="none"
                    stroke={colors.secondary}
                    strokeWidth="2"
                    filter="blur(25px)"
                    animate={{
                        d: [
                            "M0,300 Q500,200 1000,300",
                            "M0,300 Q500,400 1000,300",
                            "M0,300 Q500,200 1000,300",
                        ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.svg>
        </div>
    );
}
