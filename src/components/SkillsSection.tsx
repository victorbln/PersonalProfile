"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

/* ─── Skill data ────────────────────────────────────────────────────
   No icon props, no color props — this section lives by typography
   alone. Colour comes from the section header and the grid rule,
   not from boxes, borders, or inline icon decorations.
─────────────────────────────────────────────────────────────────── */
const skillCategories = [
    {
        title: "Languages",
        skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Bash"],
    },
    {
        title: "Frameworks",
        skills: ["Spring Boot", "Quarkus", "Apache Camel", "Angular", ".NET Core", "Spring Security", "Hibernate", "JPA", "PrimeNG"],
    },
    {
        title: "Cloud & DevOps",
        skills: ["Docker", "Kubernetes", "Terraform", "GitLab CI", "AWS", "Azure", "Maven", "Consul", "Bamboo", "Linux"],
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "MySQL", "JDBC"],
    },
    {
        title: "Observability",
        skills: ["Prometheus", "Grafana", "Cypress", "Integration Testing", "API Testing"],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                        <Terminal className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Tech Stack
                    </div>
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                </motion.div>

                {/* Spec-sheet matrix — category label left, skills right.
                    No cards. No boxes. No spinning icons.
                    Typography and spacing create the hierarchy.        */}
                <div>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-10 gap-y-1.5 py-5 border-b border-border last:border-b-0"
                        >
                            {/* Category label */}
                            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted pt-0.5">
                                {category.title}
                            </span>

                            {/* Dot-separated skill list — no pills, no boxes */}
                            <p className="text-sm text-foreground leading-relaxed">
                                {category.skills.join(" · ")}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
