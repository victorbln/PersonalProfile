"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
    DatabaseZap,
    Gamepad2,
    GitMerge,
    Eye,
    CalendarCheck,
    FilePen,
    Building2,
    Gamepad,
    Trophy,
    Briefcase,
    FlaskConical,
} from "lucide-react";
import { useRef, type ComponentType, type SVGProps } from "react";

/* ─── Project data ─────────────────────────────────────────────── */

type AccentKey = "emerald" | "amber" | "teal" | "slate" | "stone" | "sky";

type Project = {
    title: string;
    description: string;
    icon: ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
    tech: string[];
    category: string;
    accent: AccentKey;
    metric?: string;
    metricLabel?: string;
    award?: string;
    featured?: boolean;
};

const workProjects: Project[] = [
    {
        title: "Zero-Downtime Database Migration",
        description:
            "Full migration from a high-throughput NoSQL store to relational SQL in a live production environment — continuous operation, zero service interruption throughout.",
        icon: DatabaseZap,
        tech: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "Kubernetes"],
        category: "Production",
        accent: "amber",
        metric: "1M+",
        metricLabel: "transactions / hr",
        featured: true,
    },
    {
        title: "Multi-Platform iGaming Backend",
        description:
            "Core backend and frontend for a major iGaming platform — Web, iOS, Android, and Windows served from a shared Java + TypeScript backbone.",
        icon: Gamepad2,
        tech: ["Java", "TypeScript", "Angular", ".NET Core", "PostgreSQL", "Redis"],
        category: "Platform",
        accent: "teal",
        metric: "4",
        metricLabel: "platforms",
    },
    {
        title: "Cloud-Native CI/CD Modernization",
        description:
            "Migrated an entire delivery pipeline from legacy on-premise tooling to GitLab CI/CD with full Terraform infrastructure-as-code.",
        icon: GitMerge,
        tech: ["GitLab CI", "Terraform", "Docker", "Kubernetes", "AWS", "Azure"],
        category: "Infrastructure",
        accent: "slate",
        metric: "70%",
        metricLabel: "load reduced",
    },
];

const sideProjects: Project[] = [
    {
        title: "PereAware",
        description:
            "Innovative awareness platform built at ASSIST Software — placing 2nd at the internal Best Innovative Minds competition.",
        icon: Eye,
        tech: ["Java", "Spring Boot", "React", "TypeScript"],
        category: "Innovation",
        accent: "emerald",
        award: "2nd Place · Best Innovative Minds @ ASSIST",
        metric: "#2",
        metricLabel: "ASSIST award",
        featured: true,
    },
    {
        title: "Exam Timetabling System",
        description:
            "Constraint-based exam scheduling engine built in 3rd year CS — automates conflict-free university timetable generation.",
        icon: CalendarCheck,
        tech: ["Java", "Constraint Programming", "Algorithm Design"],
        category: "Academic",
        accent: "amber",
    },
    {
        title: "Browser PDF Editor",
        description:
            "Fully free, browser-native PDF editor — no server, no account. Edit PDFs directly in the browser as a hobby project for everyday use.",
        icon: FilePen,
        tech: ["TypeScript", "PDF.js", "HTML Canvas", "Web APIs"],
        category: "Tool",
        accent: "teal",
    },
    {
        title: "Neapetrica Flooring",
        description:
            "Presentation website for a local flooring company — portfolio, services, and contact built as a client project.",
        icon: Building2,
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        category: "Client",
        accent: "stone",
    },
    {
        title: "Flappy Bird",
        description:
            "Classic arcade game recreation from 1st year CS — game loop, physics, collision, and rendering built from scratch.",
        icon: Gamepad,
        tech: ["Java", "Swing", "Game Loop", "OOP"],
        category: "Game",
        accent: "sky",
    },
];

/* ─── Accent colour map ────────────────────────────────────────── */

const accent: Record<AccentKey, {
    bar: string;
    iconText: string;
    metric: string;
    border: string;
    glow: string;
}> = {
    emerald: {
        bar:      "bg-primary",
        iconText: "text-primary",
        metric:   "text-primary",
        border:   "border-primary/30",
        glow:     "group-hover:shadow-glow",
    },
    amber: {
        bar:      "bg-amber-500",
        iconText: "text-amber-600 dark:text-amber-400",
        metric:   "text-amber-600 dark:text-amber-400",
        border:   "border-amber-500/25",
        glow:     "group-hover:shadow-[0_1px_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05),0_0_28px_oklch(0.68_0.140_65/0.12)]",
    },
    teal: {
        bar:      "bg-teal-500",
        iconText: "text-teal-600 dark:text-teal-400",
        metric:   "text-teal-600 dark:text-teal-400",
        border:   "border-teal-500/25",
        glow:     "group-hover:shadow-[0_1px_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05),0_0_28px_oklch(0.58_0.105_170/0.12)]",
    },
    slate: {
        bar:      "bg-slate-400",
        iconText: "text-slate-500 dark:text-slate-400",
        metric:   "text-slate-500 dark:text-slate-400",
        border:   "border-slate-400/20",
        glow:     "group-hover:shadow-ambient",
    },
    stone: {
        bar:      "bg-stone-400",
        iconText: "text-stone-600 dark:text-stone-400",
        metric:   "text-stone-500 dark:text-stone-400",
        border:   "border-stone-400/20",
        glow:     "group-hover:shadow-ambient",
    },
    sky: {
        bar:      "bg-sky-500",
        iconText: "text-sky-600 dark:text-sky-400",
        metric:   "text-sky-600 dark:text-sky-400",
        border:   "border-sky-500/20",
        glow:     "group-hover:shadow-[0_1px_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05),0_0_28px_oklch(0.70_0.130_220/0.12)]",
    },
};

/* ─── 3D Tilt wrapper ──────────────────────────────────────────── */

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
        stiffness: 100,
        damping: 15,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
        stiffness: 100,
        damping: 15,
    });

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
    }
    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            whileTap={{ scale: 0.98 }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className={`relative ${className ?? ""}`}
        >
            {children}
        </motion.div>
    );
}

/* ─── Featured card (large, bento hero cell) ───────────────────── */

function FeaturedCard({ project }: { project: Project }) {
    const a = accent[project.accent];
    return (
        <TiltCard className="h-full group">
            <div
                className={`relative h-full rounded-2xl border ${a.border} bg-surface shadow-ambient ${a.glow} transition-shadow duration-300 overflow-hidden flex flex-col min-h-[440px]`}
            >
                {/* Accent top bar */}
                <div className={`h-[2px] w-full ${a.bar} shrink-0`} />

                <div className="p-8 flex flex-col grow">
                    {/* Icon + big metric */}
                    <div className="flex items-start justify-between mb-6">
                        <project.icon
                            className={`h-7 w-7 ${a.iconText}`}
                            strokeWidth={1.5}
                        />
                        {project.metric && (
                            <div className="text-right">
                                <div className={`text-5xl font-black tracking-tight leading-none ${a.metric}`}>
                                    {project.metric}
                                </div>
                                <div className="text-xs text-text-muted mt-1 tracking-wide uppercase font-medium">
                                    {project.metricLabel}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Award */}
                    {project.award && (
                        <div className="flex items-center gap-2 mb-3">
                            <Trophy className="h-3.5 w-3.5 text-amber-500 shrink-0" strokeWidth={1.5} />
                            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                                {project.award}
                            </span>
                        </div>
                    )}

                    {/* Category — plain uppercase label */}
                    <span className={`text-xs font-semibold uppercase tracking-widest ${a.iconText} mb-4 block`}>
                        {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6 grow text-[0.9375rem]">
                        {project.description}
                    </p>

                    {/* Tech — dot-separated, no pills */}
                    <p className="text-xs font-mono text-text-muted leading-relaxed">
                        {project.tech.join(" · ")}
                    </p>
                </div>
            </div>
        </TiltCard>
    );
}

/* ─── Small card (bento utility cell) ─────────────────────────── */

function SmallCard({ project }: { project: Project }) {
    const a = accent[project.accent];
    return (
        <TiltCard className="h-full group">
            <div
                className={`relative h-full rounded-2xl border ${a.border} bg-surface shadow-ambient ${a.glow} transition-shadow duration-300 overflow-hidden flex flex-col`}
            >
                {/* Accent top bar */}
                <div className={`h-[2px] w-full ${a.bar} shrink-0`} />

                <div className="p-7 flex flex-col grow">
                    {/* Icon + metric */}
                    <div className="flex items-start justify-between mb-5">
                        <project.icon
                            className={`h-5 w-5 ${a.iconText}`}
                            strokeWidth={1.5}
                        />
                        {project.metric && (
                            <div className="text-right">
                                <div className={`text-3xl font-black tracking-tight leading-none ${a.metric}`}>
                                    {project.metric}
                                </div>
                                <div className="text-xs text-text-muted mt-0.5 tracking-wide uppercase font-medium">
                                    {project.metricLabel}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Award */}
                    {project.award && (
                        <div className="flex items-center gap-2 mb-2">
                            <Trophy className="h-3 w-3 text-amber-500 shrink-0" strokeWidth={1.5} />
                            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 leading-tight">
                                {project.award}
                            </span>
                        </div>
                    )}

                    {/* Category — plain uppercase label */}
                    <span className={`text-xs font-semibold uppercase tracking-widest ${a.iconText} mb-3 block`}>
                        {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 grow">
                        {project.description}
                    </p>

                    {/* Tech — dot-separated, no pills */}
                    <p className="text-xs font-mono text-text-muted leading-relaxed">
                        {project.tech.join(" · ")}
                    </p>
                </div>
            </div>
        </TiltCard>
    );
}

/* ─── Bento grid for a list of projects ───────────────────────── */

function ProjectBento({ projects }: { projects: Project[] }) {
    const [featured, ...rest] = projects;
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Featured — spans 2 cols + 2 rows on md+ */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="md:col-span-2 md:row-span-2"
            >
                <FeaturedCard project={featured} />
            </motion.div>

            {/* Rest — stack in the right column */}
            {rest.map((p, i) => (
                <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: (i + 1) * 0.10 }}
                >
                    <SmallCard project={p} />
                </motion.div>
            ))}
        </div>
    );
}

/* ─── Section label ────────────────────────────────────────────── */

function SubHeading({
    icon: Icon,
    label,
    title,
    sub,
}: {
    icon: ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
    label: string;
    title: string;
    sub: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
        >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                {label}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-text-secondary text-sm">{sub}</p>
        </motion.div>
    );
}

/* ─── Main section ─────────────────────────────────────────────── */

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Ambient glows — very subtle */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/[0.04] blur-[140px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
                        <FlaskConical className="h-3.5 w-3.5" strokeWidth={1.5} />
                        Engineering Work
                    </div>
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                        Selected <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-text-secondary">
                        Production systems, award-winning tools, and side experiments — work that shipped and left a mark.
                    </p>
                </motion.div>

                {/* ── Work Projects ── */}
                <div className="mb-20">
                    <SubHeading
                        icon={Briefcase}
                        label="Professional"
                        title="Production Work"
                        sub="High-stakes systems engineered at ASSIST Software"
                    />
                    <ProjectBento projects={workProjects} />
                </div>

                {/* ── Personal & Academic ── */}
                <div>
                    <SubHeading
                        icon={FlaskConical}
                        label="Personal & Academic"
                        title="Side Projects"
                        sub="Experiments, university work, and things built for the craft of it"
                    />
                    <ProjectBento projects={sideProjects} />
                </div>
            </div>
        </section>
    );
}
