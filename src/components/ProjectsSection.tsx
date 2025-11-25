"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, GitMerge, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "./AnimatedBackground";

const projects = [
    {
        title: "CloudStream",
        description: "A distributed real-time data processing platform capable of handling millions of events per second. Built for high throughput and fault tolerance.",
        icon: Cloud,
        tech: ["Java", "Spring Boot", "Kubernetes", "Kafka"],
        link: "#",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "SecureGate",
        description: "Identity management microservice framework implementing OAuth2 and OIDC. Designed for seamless integration with legacy systems.",
        icon: Shield,
        tech: ["Quarkus", "Keycloak", "Docker", "PostgreSQL"],
        link: "#",
        gradient: "from-primary to-amber-500",
    },
    {
        title: "AutoDeploy",
        description: "Intelligent CI/CD automation tool that optimizes build pipelines and manages infrastructure as code across multi-cloud environments.",
        icon: GitMerge,
        tech: ["Go", "Terraform", "GitLab CI", "AWS"],
        link: "#",
        gradient: "from-secondary to-accent",
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
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        A selection of technical projects demonstrating expertise in distributed systems and cloud infrastructure.
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
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                                    >
                                        <project.icon className="h-7 w-7" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium text-text-muted bg-surface-alt border border-border px-3 py-1 rounded-full hover:border-primary/30 hover:text-primary transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover group/link"
                                    >
                                        View Project
                                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
