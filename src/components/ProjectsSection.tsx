"use client";

import { motion } from "framer-motion";
import { DatabaseZap, Gamepad2, GitMerge, ExternalLink } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const projects = [
    {
        title: "Zero-Downtime Database Migration",
        description: "Designed and implemented a full migration strategy from a NoSQL store to a relational SQL database for a high-load production system processing over 1 million transactions per hour — with zero service interruption.",
        icon: DatabaseZap,
        tech: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "Kubernetes"],
        gradient: "from-blue-500 to-cyan-500",
        highlight: "1M+ tx/hour · Zero downtime",
    },
    {
        title: "Multi-Platform iGaming Backend",
        description: "Developed and maintained backend and frontend systems for a major iGaming platform across Web, iOS, Android, and Windows. Delivered new game features, maintained platform capabilities, and supported cross-functional teams.",
        icon: Gamepad2,
        tech: ["Java", "TypeScript", "Angular", ".NET Core", "PostgreSQL", "Redis"],
        gradient: "from-primary to-amber-500",
        highlight: "Web · iOS · Android · Windows",
    },
    {
        title: "Cloud-Native CI/CD Modernization",
        description: "Led the migration of a project's entire delivery pipeline from legacy on-premise tools to GitLab CI/CD with full infrastructure-as-code via Terraform. Established scalable, reproducible workflows and slashed system load by 70%.",
        icon: GitMerge,
        tech: ["GitLab CI", "Terraform", "Docker", "Kubernetes", "AWS", "Azure"],
        gradient: "from-secondary to-accent",
        highlight: "70% load reduction",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 sm:py-32 relative bg-surface-alt overflow-hidden">
            <AnimatedBackground />
            <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 blur-[100px] rounded-full"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <ExternalLink className="h-4 w-4" />
                        <span>Featured Work</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        Key <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        A selection of impactful engineering work spanning distributed systems, platform development, and cloud infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                className="h-full flex flex-col rounded-2xl border-2 border-border bg-surface p-8 transition-all shadow-lg hover:shadow-glow"
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${project.gradient} text-white shadow-lg`}
                                    >
                                        <project.icon className="h-7 w-7" />
                                    </motion.div>

                                    <div className="mb-3">
                                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-linear-to-r ${project.gradient} text-white mb-3`}>
                                            {project.highlight}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-text-secondary mb-6 leading-relaxed grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium text-text-muted bg-surface-alt border border-border px-3 py-1 rounded-full hover:border-primary/30 hover:text-primary transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
