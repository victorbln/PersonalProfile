"use client";

import { motion } from "framer-motion";
import { Code, BookOpen, LineChart, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "./AnimatedBackground";

const services = [
    {
        title: "Software Development",
        description: "Custom, high-performance software solutions tailored to your business needs. From MVP to enterprise-scale systems.",
        icon: Code,
        features: ["Full-Stack Development", "Cloud Architecture", "System Migration"],
        cta: "Build Your Product",
        link: "#contact",
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        hoverBorder: "group-hover:border-primary/50",
        gradient: "from-primary/10 to-transparent",
    },
    {
        title: "Mentorship & Training",
        description: "Accelerate your career or upskill your team. Personalized coaching on system design, backend engineering, and DevOps.",
        icon: BookOpen,
        features: ["1-on-1 Coaching", "Code Reviews", "Career Path Planning"],
        cta: "Start Learning",
        link: "#contact",
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
        hoverBorder: "group-hover:border-secondary/50",
        gradient: "from-secondary/10 to-transparent",
    },
    {
        title: "Technical Consulting",
        description: "Expert advice on architecture, performance optimization, and technology strategy. Solve complex engineering challenges.",
        icon: LineChart,
        features: ["Architecture Audits", "Performance Tuning", "Tech Stack Selection"],
        cta: "Get Expert Advice",
        link: "#contact",
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
        hoverBorder: "group-hover:border-accent/50",
        gradient: "from-accent/10 to-transparent",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 sm:py-32 relative bg-surface overflow-hidden">
            <AnimatedBackground />
            <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4" />
                        <span>What I Offer</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        How I Can <span className="text-gradient">Help You</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Leveraging years of experience to deliver value through code, education, and strategy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className={`group relative flex flex-col justify-between rounded-2xl border-2 ${service.border} ${service.hoverBorder} bg-surface p-8 transition-all shadow-lg hover:shadow-glow`}
                        >
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10`}></div>

                            <div>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${service.bg} ${service.color} transition-all group-hover:shadow-lg`}
                                >
                                    <service.icon className="h-8 w-8" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex items-center text-sm text-text-secondary"
                                        >
                                            <span className={`mr-3 h-1.5 w-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={service.link}
                                className={`inline-flex items-center text-sm font-bold ${service.color} hover:underline group/link`}
                            >
                                {service.cta}
                                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
