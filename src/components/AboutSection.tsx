"use client";

import { motion } from "framer-motion";

const BEYOND = [
    { key: "ARCH",    text: "Deep-diving into system architecture, design patterns, and distributed systems theory" },
    { key: "MENTOR",  text: "Mentoring junior engineers and contributing to team knowledge sharing" },
    { key: "FIRESC",  text: "Volunteering with FIRESC Students Association — co-organized the first and second annual hackathon" },
    { key: "WRITING", text: "Writing technical articles on Medium about Quarkus, Spring, and backend engineering" },
];

function SectionPrompt({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-2 text-xs font-mono mb-4">
            <span className="text-accent accent-glow">victor@workstation</span>
            <span className="text-text-muted">:~$</span>
            <span className="text-text-secondary">{label}</span>
        </div>
    );
}

export default function AboutSection() {
    return (
        <section id="about" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="text-text-muted text-xs font-mono mb-2 uppercase tracking-widest">// section 01</div>
                    <h2
                        className="phosphor-glow-strong"
                        style={{
                            fontFamily: "var(--font-vt323), monospace",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--primary)",
                            letterSpacing: "0.06em",
                        }}
                    >
                        ABOUT.TXT
                    </h2>
                    <div className="term-divider mt-3" />
                </motion.div>

                {/* man page panel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="terminal-window">
                        <div className="terminal-titlebar">
                            <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                            <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                            <span className="terminal-dot" style={{ background: "#28c840" }} />
                            <span className="ml-3">man victor-balan</span>
                        </div>

                        <div className="p-5 sm:p-8 font-mono text-base space-y-6">

                            {/* NAME */}
                            <div>
                                <div className="text-primary phosphor-glow text-sm uppercase tracking-widest mb-2 font-bold">NAME</div>
                                <p className="text-text-secondary pl-4 text-sm">
                                    <span className="text-foreground">victor-balan</span>
                                    {" — "}Backend Engineer & Deputy, Java Technologies Department
                                </p>
                            </div>

                            {/* SYNOPSIS */}
                            <div>
                                <div className="text-primary phosphor-glow text-sm uppercase tracking-widest mb-2 font-bold">SYNOPSIS</div>
                                <div className="pl-4 text-sm text-text-muted panel-inset rounded-sm p-3">
                                    <span className="text-accent">victor</span>{" "}
                                    <span className="text-text-secondary">[--role deputy]</span>{" "}
                                    <span className="text-text-secondary">[--company assist-software]</span>{" "}
                                    <span className="text-text-secondary">[--stack java,spring-boot,k8s]</span>{" "}
                                    <span className="text-text-secondary">[--location suceava-ro]</span>
                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <div>
                                <div className="text-primary phosphor-glow text-sm uppercase tracking-widest mb-3 font-bold">DESCRIPTION</div>
                                <div className="pl-4 space-y-3 border-l-2 border-border">
                                    <p className="text-text-secondary text-base leading-relaxed">
                                        Backend engineer based in{" "}
                                        <span className="text-foreground">Suceava, Romania</span>,
                                        specialising in backend engineering, cloud-native infrastructure, and distributed systems.
                                        Holds two degrees from{" "}
                                        <span className="text-foreground">Ștefan cel Mare University</span>{" — "}
                                        <span className="text-primary">Computer Science & Engineering</span>
                                        {" "}and{" "}
                                        <span className="text-primary">Cybersecurity</span>.
                                    </p>
                                    <p className="text-text-secondary text-base leading-relaxed">
                                        At <span className="text-primary">ASSIST Software</span>, grew from key technical contributor
                                        to leading the Java Technologies Department as Deputy. Projects span{" "}
                                        <span className="text-foreground">iGaming & entertainment platforms</span>,
                                        enterprise cloud migrations, and high-load backend systems.
                                    </p>
                                    <p className="text-text-secondary text-base leading-relaxed">
                                        Proudest achievement: a{" "}
                                        <span className="text-foreground">zero-downtime NoSQL → SQL migration</span>{" "}
                                        in a live system handling{" "}
                                        <span className="text-foreground font-bold">1M+ transactions/hour</span>.
                                        Led CI/CD modernization to GitLab + Terraform, driving a{" "}
                                        <span className="text-foreground font-bold">70% reduction in system load</span>.
                                    </p>
                                </div>
                            </div>

                            {/* BEYOND CODE */}
                            <div>
                                <div className="text-primary phosphor-glow text-sm uppercase tracking-widest mb-3 font-bold">BEYOND_CODE</div>
                                <div className="pl-4 space-y-2">
                                    {BEYOND.map((item) => (
                                        <div key={item.key} className="flex items-start gap-3 text-base">
                                            <span className="text-accent accent-glow font-bold shrink-0 w-20 text-sm pt-0.5">{item.key}</span>
                                            <span className="text-text-secondary leading-relaxed">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-2 border-t border-border">
                                <SectionPrompt label="echo 'open to new challenges'" />
                                <div className="pl-4">
                                    <a
                                        href="#contact"
                                        className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-sm"
                                    >
                                        <span className="text-accent">$</span>
                                        <span>./contact.sh</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
