"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
    {
        company: "ASSIST SOFTWARE SRL",
        role: "Software Engineer",
        period: "Feb 2023 – Present",
        location: "Suceava, Romania",
        description: [
            "Key technical contributor across multiple client projects spanning iGaming & entertainment platforms, cloud infrastructure, and enterprise system migrations.",
            "Developed and maintained multi-platform game backends and frontends for a major iGaming client, supporting Web, iOS, Android, and Windows — using Java, TypeScript, Angular, and .NET Core.",
            "Designed and implemented a zero-downtime data migration strategy from NoSQL to SQL for a high-load system processing 1M+ transactions/hour, ensuring full production continuity.",
            "Led CI/CD modernization for a client platform: migrated from on-premise tooling to GitLab pipelines with full infrastructure-as-code via Terraform, establishing scalable and repeatable deployment workflows.",
            "Achieved a 70% reduction in system load by refactoring core business logic, identifying bottlenecks, and eliminating legacy processes.",
            "Contributed to the architecture of a unified platform consolidating three existing systems, improving maintainability and scalability.",
            "Integrated monitoring and observability tooling (Prometheus, Grafana) to provide real-time visibility into system health.",
        ],
        tech: ["Java", "Spring Boot", "Quarkus", "TypeScript", "Angular", ".NET Core", "Docker", "Kubernetes", "Terraform", "GitLab CI", "PostgreSQL", "MongoDB", "Redis", "Apache Camel", "Prometheus", "Grafana"],
        highlights: [
            { label: "1M+/hr", sublabel: "Transactions handled" },
            { label: "70%", sublabel: "Load reduction" },
            { label: "3", sublabel: "Platforms unified" },
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                        <Briefcase className="h-4 w-4" />
                        <span>Professional Journey</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="group rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-8 hover:border-primary/30 hover:shadow-glow transition-all shadow-md relative overflow-hidden">
                                {/* Left accent bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-linear-to-b from-primary via-secondary to-accent" />

                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
                                            <div className="flex items-center gap-1.5 font-semibold text-primary">
                                                <Briefcase className="h-3.5 w-3.5" />
                                                {exp.company}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-text-secondary">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20 whitespace-nowrap self-start">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Key highlights */}
                                <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                    {exp.highlights.map((h, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-xl font-bold text-primary">{h.label}</div>
                                            <div className="text-xs text-text-muted mt-0.5">{h.sublabel}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bullet points */}
                                <ul className="space-y-3 mb-8">
                                    {exp.description.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.06 }}
                                            className="flex items-start gap-3 text-text-secondary leading-relaxed"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + i * 0.03 }}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-surface-alt text-text-secondary border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
