"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                        <BookOpen className="h-4 w-4" />
                        <span>Writing</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        Articles <span className="text-gradient">&amp; Thoughts</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Writing about backend engineering, cloud infrastructure, and software craft.
                        Published on{" "}
                        <Link
                            href="https://medium.com/@victorbalan9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            Medium
                        </Link>.
                    </p>
                </motion.div>

                {/* Featured article */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto max-w-3xl"
                >
                    {published.map((blog) => (
                        <Link
                            key={blog.id}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-8 hover:border-primary/30 hover:shadow-glow transition-all shadow-md relative overflow-hidden">
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-linear-to-r from-primary via-secondary to-accent" />

                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                        {blog.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold">
                                        <ExternalLink className="h-3 w-3" />
                                        Published on Medium
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>

                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    {blog.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {blog.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1 text-xs text-text-muted bg-surface-alt px-2.5 py-1 rounded-md border border-border"
                                        >
                                            <Tag className="h-2.5 w-2.5" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer meta */}
                                <div className="flex items-center justify-between text-xs text-text-muted pt-4 border-t border-border">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {blog.readTime}
                                        </div>
                                        <span className="inline-flex items-center gap-1 text-primary font-medium text-xs group-hover:gap-2 transition-all">
                                            Read article <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        </Link>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-text-secondary mb-6">More articles on backend engineering and distributed systems coming soon.</p>
                    <Link
                        href="https://medium.com/@victorbalan9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover-scale"
                    >
                        Follow on Medium
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
