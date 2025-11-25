"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Database, Zap } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        skills: ["Java", "TypeScript", "JavaScript", "Bash", "SQL"],
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        title: "Frameworks",
        icon: Server,
        skills: ["Spring Boot", "Quarkus", "Angular", "NX", "Hibernate", "JPA"],
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        skills: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "GitLab CI", "Jenkins"],
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["PostgreSQL", "MySQL", "NoSQL", "JDBC", "JAX-RS"],
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 sm:py-32 bg-surface relative overflow-hidden">
            <AnimatedBackground />
            <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Zap className="h-4 w-4" />
                        <span>Tech Stack</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className={`h-full rounded-2xl border-2 ${category.border} bg-surface p-6 hover:shadow-glow transition-all shadow-md`}>
                                <div className={`absolute inset-0 rounded-2xl ${category.bg} opacity-0 group-hover:opacity-100 transition-opacity -z-10`}></div>

                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.bg} ${category.color} group-hover:shadow-lg transition-all`}
                                >
                                    <category.icon className="h-6 w-6" />
                                </motion.div>

                                <h3 className={`text-lg font-bold mb-4 ${category.color}`}>
                                    {category.title}
                                </h3>

                                <ul className="space-y-2">
                                    {category.skills.map((skill, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.05 }}
                                            className="flex items-center text-text-secondary group-hover:text-foreground transition-colors"
                                        >
                                            <span className={`mr-2 h-1.5 w-1.5 rounded-full ${category.color.replace('text-', 'bg-')}`} />
                                            <span className="text-sm">{skill}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
