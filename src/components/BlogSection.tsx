"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

interface Blog {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
    readTime: string;
}

export default function BlogSection() {
    const blogs: Blog[] = blogsData;
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", ...Array.from(new Set(blogs.map(blog => blog.category)))];
    
    const filteredBlogs = selectedCategory === "All" 
        ? blogs 
        : blogs.filter(blog => blog.category === selectedCategory);

    const displayedBlogs = filteredBlogs.slice(0, 6);

    return (
        <section id="writing" className="py-24 sm:py-32 relative bg-surface overflow-hidden">
            <AnimatedBackground />
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <BookOpen className="h-4 w-4" />
                        <span>What I'm Learning</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        Writing <span className="text-gradient">& Thoughts</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Sharing what I learn about software engineering, system design, and career growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-surface-alt text-text-secondary hover:bg-primary/10 hover:text-primary border border-border"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedBlogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full flex flex-col rounded-2xl border-2 border-border bg-surface overflow-hidden hover:shadow-glow transition-all hover:-translate-y-2">
                                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                                        📝
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface/90 text-primary border border-primary/20">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5" />
                                            <span>{blog.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>

                                    <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3 flex-grow">
                                        {blog.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {blog.tags.slice(0, 3).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-1 text-xs text-text-muted bg-surface-alt px-2 py-1 rounded-md"
                                            >
                                                <Tag className="h-3 w-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={blog.id === "intercept-logging-quarkus" 
                                            ? "https://medium.com/@victorbalan9/how-to-intercept-logging-messages-with-quarkus-for-testing-purposes-f36fbe8552ef"
                                            : `#${blog.id}`
                                        }
                                        target={blog.id === "intercept-logging-quarkus" ? "_blank" : "_self"}
                                        rel={blog.id === "intercept-logging-quarkus" ? "noopener noreferrer" : ""}
                                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover group/link"
                                    >
                                        Read Article
                                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredBlogs.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="https://medium.com/@victorbalan9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover-scale"
                        >
                            View All Articles
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
