"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("victorbalan9@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden bg-surface-alt"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"
      />
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full animate-float"></div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border-2 border-border bg-surface p-8 shadow-glow"
        >
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="group flex items-center justify-between p-4 rounded-xl bg-surface-alt hover:bg-primary/5 border border-border hover:border-primary/30 transition-all"
            >
              <a
                href="mailto:victorbalan9@gmail.com"
                className="flex items-center gap-3 flex-grow"
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-foreground font-medium">
                  victorbalan9@gmail.com
                </span>
              </a>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg hover:bg-surface text-text-muted hover:text-primary transition-all"
                title="Copy to clipboard"
              >
                {emailCopied ? (
                  <Check className="h-4 w-4 text-accent" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </motion.div>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:+40787722414"
              className="group flex items-center gap-3 p-4 rounded-xl bg-surface-alt hover:bg-primary/5 border border-border hover:border-primary/30 transition-all"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-foreground font-medium">
                (+40) 787722414
              </span>
            </motion.a>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-center text-sm text-text-secondary mb-6">
              Or find me on social media
            </p>
            <div className="flex justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://github.com/victorbln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-alt border border-border text-text-muted hover:text-white hover:bg-[#333] hover:border-[#333] transition-all shadow-sm hover:shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.linkedin.com/in/balan-victor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-alt border border-border text-text-muted hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shadow-sm hover:shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
