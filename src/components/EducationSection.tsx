"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users, MapPin, Calendar } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const degrees = [
    {
        degree: "Bachelor's Degree in Computer Science & Engineering",
        institution: "Ștefan cel Mare University of Suceava",
        period: "Oct 2020 – Jul 2024",
        location: "Suceava, Romania",
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        degree: "Bachelor's Degree in Cybersecurity",
        institution: "Ștefan cel Mare University of Suceava",
        period: "Sep 2023 – Present",
        location: "Suceava, Romania",
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
];

const volunteering = [
    {
        org: "FIRESC Students Association",
        role: "Volunteer",
        period: "2019 – Present",
        highlights: [
            "Co-organized the first and second annual university hackathon",
            "Promoted technical knowledge sharing and skills development across students",
        ],
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="py-24 sm:py-32 bg-surface-alt relative overflow-hidden">
            <AnimatedBackground />
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <GraduationCap className="h-4 w-4" />
                        <span>Education & Achievements</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Academic <span className="text-gradient">Background</span>
                    </h2>
                </motion.div>

                {/* Degrees */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {degrees.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className={`h-full rounded-2xl border-2 ${edu.border} bg-surface p-8 hover:shadow-glow transition-all shadow-md`}>
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${edu.bg} ${edu.color} mb-5`}>
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <h3 className={`text-lg font-bold ${edu.color} mb-2`}>{edu.degree}</h3>
                                <p className="text-foreground font-medium mb-4">{edu.institution}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>{edu.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="h-3.5 w-3.5" />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Volunteering & Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-8"
                >
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
                        <Award className="h-5 w-5 text-primary" />
                        Volunteering & Achievements
                    </h3>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    {volunteering.map((vol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                            className="rounded-2xl border-2 border-border bg-surface p-8 hover:border-primary/30 hover:shadow-glow transition-all shadow-md"
                        >
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{vol.org}</h4>
                                        <p className="text-sm text-primary font-medium">{vol.role}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-text-muted bg-surface-alt border border-border px-3 py-1 rounded-full whitespace-nowrap">
                                    {vol.period}
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {vol.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
