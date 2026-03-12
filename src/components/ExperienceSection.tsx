"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, TrendingUp, Sparkles } from "lucide-react";

const experiences = [
    {
        company: "ASSIST SOFTWARE SRL",
        role: "Deputy, Java Technologies Department",
        period: "Mar 2026 – Present",
        location: "Suceava, Romania",
        isPromotion: true,
        isCurrent: true,
        description: [
            "Elevated to Deputy of the Java Technologies Department, taking ownership of technical strategy, engineering standards, and developer growth across Java-focused teams.",
            "Establishing architectural best practices, code quality guidelines, and knowledge-sharing initiatives across the Java ecosystem at ASSIST Software.",
            "Collaborating with engineering leadership on technical reviews, project scoping, and cross-team alignment.",
        ],
        tech: ["Java", "Spring Boot", "Quarkus", "System Architecture", "Technical Leadership", "Mentoring"],
        highlights: null,
        gradient: "from-primary to-teal-500",
    },
    {
        company: "ASSIST SOFTWARE SRL",
        role: "Software Engineer",
        period: "Feb 2023 – Mar 2026",
        location: "Suceava, Romania",
        isPromotion: false,
        isCurrent: false,
        description: [
            "Key technical contributor across multiple client projects spanning iGaming platforms, cloud infrastructure, and enterprise system migrations.",
            "Developed and maintained multi-platform game backends and frontends for a major iGaming client across Web, iOS, Android, and Windows.",
            "Designed and implemented a zero-downtime migration from NoSQL to SQL for a high-load system handling 1M+ transactions/hour.",
            "Led CI/CD modernization from on-premise tooling to GitLab pipelines with full Terraform infrastructure-as-code, reducing system load by 70%.",
            "Contributed to the architecture of a unified platform consolidating three existing legacy systems.",
            "Integrated Prometheus & Grafana for real-time observability and production health monitoring.",
        ],
        tech: ["Java", "Spring Boot", "Quarkus", "TypeScript", "Angular", ".NET Core", "Docker", "Kubernetes", "Terraform", "GitLab CI", "PostgreSQL", "MongoDB", "Redis", "Apache Camel", "Prometheus", "Grafana"],
        highlights: [
            { label: "1M+/hr", sublabel: "Transactions" },
            { label: "70%", sublabel: "Load reduced" },
            { label: "3", sublabel: "Platforms unified" },
        ],
        gradient: "from-secondary to-accent",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted mb-6">
                        <Briefcase className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Professional Journey
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ textWrap: "balance" }}>
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical gradient line — hidden on mobile */}
                    <div className="absolute left-5 top-12 h-[calc(100%-5rem)] w-0.5 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden sm:block" />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative sm:pl-20"
                            >
                                {/* Timeline node */}
                                <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                                    <div className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                                        exp.isCurrent
                                            ? "border-primary bg-primary/10"
                                            : "border-border bg-surface"
                                    }`}>
                                        {exp.isCurrent && (
                                            <div className="absolute inset-0 rounded-full bg-primary/25 animate-ping" />
                                        )}
                                        <Briefcase className={`h-4 w-4 ${exp.isCurrent ? "text-primary" : "text-text-muted"}`} />
                                    </div>
                                </div>

                                {/* Card */}
                                <div className={`group relative rounded-2xl border bg-surface/80 backdrop-blur-sm p-8 transition-all shadow-md overflow-hidden ${
                                    exp.isCurrent
                                        ? "border-primary/30 hover:border-primary/50 hover:shadow-glow"
                                        : "border-border hover:border-primary/30 hover:shadow-glow"
                                }`}>
                                    {/* Left accent bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${exp.gradient}`} />

                                    {/* Promotion banner */}
                                    {exp.isPromotion && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 w-fit"
                                        >
                                            <TrendingUp className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                                            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                                                Promoted from Software Engineer
                                            </span>
                                            <Sparkles className="h-3 w-3 text-amber-500" />
                                        </motion.div>
                                    )}

                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-3 mb-1.5">
                                                <h3 className="text-2xl font-bold text-foreground" style={{ textWrap: "balance" }}>
                                                    {exp.role}
                                                </h3>
                                                {exp.isCurrent && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                        Current
                                                    </span>
                                                )}
                                            </div>
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
                                        <div className="flex items-center gap-1.5 text-sm text-text-muted whitespace-nowrap self-start">
                                            <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    {/* Key highlights — standalone numbers, no container */}
                                    {exp.highlights && (
                                        <div className="flex items-center gap-10 mb-8">
                                            {exp.highlights.map((h, i) => (
                                                <div key={i}>
                                                    <div className="text-2xl font-black text-primary tracking-tight leading-none">{h.label}</div>
                                                    <div className="text-xs text-text-muted mt-1 uppercase tracking-widest font-medium">{h.sublabel}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Description bullets */}
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

                                    {/* Tech — dot-separated, no pills */}
                                    <p className="text-xs font-mono text-text-muted leading-relaxed">
                                        {exp.tech.join(" · ")}
                                    </p>

                                    {/* Hover glow overlay */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
