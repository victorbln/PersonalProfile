"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, BookOpen } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 sm:py-32 bg-surface-alt relative overflow-hidden">
            <AnimatedBackground />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full"></div>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg max-w-none"
                >
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <p>
                            I'm a Software Engineer based in <span className="text-foreground font-medium">Suceava, Romania</span>, specializing in
                            backend engineering, cloud-native infrastructure, and distributed systems. I hold two Bachelor's degrees from
                            <span className="text-foreground font-medium"> Ștefan cel Mare University</span> — one in
                            <span className="text-primary font-medium"> Computer Science & Engineering</span> and one in
                            <span className="text-primary font-medium"> Cybersecurity</span>.
                        </p>
                        <p>
                            At <span className="text-primary font-medium">ASSIST Software</span>, I've been a key technical contributor across multiple
                            client projects spanning <span className="text-foreground font-medium">iGaming & entertainment platforms</span>,
                            enterprise cloud migrations, and high-load backend systems. I work across the full engineering lifecycle —
                            from architecture and backend development to DevOps automation and cross-team collaboration.
                        </p>
                        <p>
                            One of my proudest achievements was designing a <span className="text-foreground font-medium">zero-downtime data migration strategy</span> from
                            NoSQL to SQL for a system handling over <span className="text-foreground font-medium">1M+ transactions per hour</span> —
                            a challenge that deeply expanded my understanding of distributed systems under production constraints.
                        </p>
                        <p>
                            I also led the <span className="text-foreground font-medium">CI/CD modernization</span> for a major project — migrating
                            from on-premise tooling to GitLab with full infrastructure-as-code via Terraform — and drove a
                            <span className="text-foreground font-medium"> 70% reduction in system load</span> through targeted refactoring and
                            removal of legacy bottlenecks.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12"
                >
                    <h3 className="text-xl font-bold text-foreground mb-6">Beyond the code:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: Code2, text: "Deep-diving into system architecture, design patterns, and distributed systems theory" },
                            { icon: Users, text: "Mentoring junior engineers and contributing to team knowledge sharing" },
                            { icon: Rocket, text: "Volunteering with FIRESC Students Association — co-organized the first and second annual hackathon" },
                            { icon: BookOpen, text: "Writing technical articles on Medium about Quarkus, Spring, and backend engineering" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-all"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <item.icon className="h-5 w-5 text-primary" />
                                </div>
                                <p className="text-text-secondary flex-1">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-lg text-text-secondary mb-6">
                        Always open to discussing backend engineering, cloud architecture, or career growth.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover-scale"
                    >
                        Get in touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
