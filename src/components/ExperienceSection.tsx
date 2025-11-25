"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground"

const experiences = [
    {
        company: "ASSIST SOFTWARE SRL",
        role: "Software Engineer",
        period: "01/02/2023 – Current",
        location: "Suceava, Romania",
        description: [
            "Acted as a key technical contributor for multiple client-side projects, focusing on platform migration and systems integration.",
            "Designed and implemented a zero-downtime data migration strategy from NoSQL to SQL for a high-load system (1M+ transactions/hour).",
            "Led CI/CD modernization, migrating from on-premise tools to GitLab, defining scalable workflows and maintaining Terraform codebase.",
            "Achieved a 70% reduction in system load by refactoring core business logic and removing legacy processes.",
            "Contributed to the architecture of a unified platform replacing three existing systems.",
        ],
        tech: ["Java", "Spring Boot", "Quarkus", "Docker", "Kubernetes", "Terraform", "GitLab CI", "Angular"],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 sm:py-32 bg-surface relative overflow-hidden">
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
                        <Briefcase className="h-4 w-4" />
                        <span>Professional Journey</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="hidden lg:flex absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-surface transform -translate-x-1/2 z-10 shadow-lg shadow-primary/50"></div>

                                <div className="lg:w-[calc(50%-3rem)] lg:ml-auto relative group">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="rounded-2xl border-2 border-border bg-surface p-8 hover:border-primary/30 transition-all shadow-lg hover:shadow-glow"
                                    >
                                        <div className="mb-6">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                                                        <div className="flex items-center gap-2">
                                                            <Briefcase className="h-4 w-4 text-primary" />
                                                            <span className="font-medium text-primary">{exp.company}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="h-4 w-4" />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20 whitespace-nowrap">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {exp.period}
                                                </div>
                                            </div>

                                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {exp.description.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    className="flex items-start gap-3 text-text-secondary leading-relaxed"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5 + i * 0.05 }}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
