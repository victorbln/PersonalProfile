"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import blogsData from "@/data/blogs.json";

interface Blog {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    tags: string[];
    readTime: string;
    link: string;
    published: boolean;
}

export default function BlogSection() {
    const blogs: Blog[] = blogsData;
    const published = blogs.filter(b => b.published);

    return (
        <section id="writing" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="text-text-muted text-xs font-mono mb-2 uppercase tracking-widest">// section 06</div>
                    <h2
                        className="phosphor-glow-strong"
                        style={{
                            fontFamily: "var(--font-vt323), monospace",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            color: "var(--primary)",
                            letterSpacing: "0.06em",
                        }}
                    >
                        WRITING.LOG
                    </h2>
                    <div className="term-divider mt-3" />
                </motion.div>

                {/* /etc/motd — message of the day */}
                <div className="terminal-window mb-6">
                    <div className="terminal-titlebar">
                        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                        <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                        <span className="terminal-dot" style={{ background: "#28c840" }} />
                        <span className="ml-3">cat /etc/motd</span>
                    </div>

                    <div className="p-5 sm:p-8 font-mono">
                        <div className="text-text-muted text-xs mb-4 uppercase tracking-widest">— message of the day —</div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Writing about backend engineering, cloud infrastructure, and software craft.
                            Published on{" "}
                            <Link
                                href="https://medium.com/@victorbalan9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary phosphor-glow hover:text-primary-hover transition-colors"
                            >
                                medium.com/@victorbalan9
                            </Link>.
                        </p>
                    </div>
                </div>

                {/* Articles */}
                {published.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-4"
                    >
                        <Link
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="terminal-window scan-hover transition-all"
                                style={{
                                    borderColor: "oklch(0.32 0.026 65 / 0.42)",
                                }}
                            >
                                <div className="terminal-titlebar"
                                    style={{
                                        transition: "background 120ms linear",
                                    }}
                                >
                                    <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                                    <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                                    <span className="terminal-dot" style={{ background: "#28c840" }} />
                                    <span className="ml-3 flex-1 truncate">{blog.id}.md</span>
                                    <span
                                        className="text-xs px-2 py-0.5 rounded-sm"
                                        style={{
                                            color: "var(--accent)",
                                            border: "1px solid oklch(0.70 0.220 145 / 0.35)",
                                            background: "oklch(0.70 0.220 145 / 0.08)",
                                            fontSize: "0.62rem",
                                            letterSpacing: "0.08em",
                                        }}
                                    >
                                        PUBLISHED · MEDIUM
                                    </span>
                                </div>

                                <div className="p-5 sm:p-8 font-mono">
                                    {/* Meta row */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-text-muted">
                                        <span
                                            className="px-2 py-0.5 rounded-sm"
                                            style={{
                                                color: "var(--primary)",
                                                border: "1px solid var(--border)",
                                                background: "oklch(0.72 0.185 65 / 0.08)",
                                            }}
                                        >
                                            {blog.category}
                                        </span>
                                        <span>
                                            {new Date(blog.date).toLocaleDateString("en-US", {
                                                month: "long", day: "numeric", year: "numeric"
                                            })}
                                        </span>
                                        <span>{blog.readTime}</span>
                                    </div>

                                    {/* Title */}
                                    <div
                                        className="mb-3 group-hover:phosphor-glow transition-all"
                                        style={{
                                            fontFamily: "var(--font-vt323), monospace",
                                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                                            color: "var(--primary)",
                                            letterSpacing: "0.04em",
                                            textShadow: undefined,
                                        }}
                                    >
                                        {blog.title.toUpperCase()}
                                    </div>

                                    {/* Excerpt */}
                                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                                        {blog.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {blog.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-sm font-mono px-2 py-0.5 text-text-muted rounded-sm"
                                                style={{
                                                    border: "1px solid var(--border)",
                                                    background: "var(--surface-alt)",
                                                }}
                                            >
                                                #{tag.toLowerCase()}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read link */}
                                    <div className="flex items-center gap-2 text-sm text-primary phosphor-glow">
                                        <span className="text-accent accent-glow">$</span>
                                        <span className="group-hover:underline">open --article</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}

                {/* More coming CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8"
                >
                    <div
                        className="p-5 sm:p-6 font-mono text-sm text-text-muted"
                        style={{
                            border: "1px dashed oklch(0.72 0.185 65 / 0.20)",
                            borderRadius: "3px",
                        }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-text-muted">INFO:</span>
                            <span>More articles on backend engineering and distributed systems — coming soon.</span>
                        </div>
                        <Link
                            href="https://medium.com/@victorbalan9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-sm"
                        >
                            <span className="text-accent">$</span>
                            <span>follow --medium @victorbalan9</span>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
