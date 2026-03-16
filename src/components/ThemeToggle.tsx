"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    // data-theme="dark" → amber phosphor
    // data-theme="light" → green phosphor
    const isAmber = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            className="btn-terminal flex items-center gap-2 px-3 py-1.5 text-xs rounded-sm text-text-muted hover:text-primary"
            aria-label={`Switch to ${isAmber ? "green" : "amber"} phosphor`}
            title={`Switch to ${isAmber ? "green" : "amber"} phosphor`}
        >
            <span
                className="w-2 h-2 rounded-full inline-block shrink-0"
                style={{
                    background: isAmber
                        ? "oklch(0.72 0.185 65)"
                        : "oklch(0.72 0.230 145)",
                    boxShadow: isAmber
                        ? "0 0 6px oklch(0.72 0.185 65 / 0.70)"
                        : "0 0 6px oklch(0.72 0.230 145 / 0.70)",
                }}
            />
            <span className="hidden sm:inline font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.08em" }}>
                {isAmber ? "AMBER" : "GREEN"}
            </span>
        </button>
    );
}
