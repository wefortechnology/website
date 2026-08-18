"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="flex-grow flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

        {/* Glow blur orbs */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent-blue/15 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-md w-full text-center space-y-8 relative z-10">
          {/* Glowing Terminal Node */}
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-accent-blue flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(14,165,233,0.15)] animate-pulse">
            <Terminal className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <h1 className="text-6xl font-black text-white font-mono tracking-tight">404</h1>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">
              [ PAGE_NOT_FOUND ]
            </h2>
            <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm mx-auto">
              The requested routing parameters do not match any active digital solutions modules in our system.
            </p>
          </div>

          {/* Code Console block mockup */}
          <div className="bg-[#091122]/90 border border-white/5 p-4 rounded-xl text-left font-mono text-xs text-slate-500 shadow-2xl">
            <p className="text-accent-cyan">{"$ curl -I https://wefortechnology.com/unknown"}</p>
            <p className="text-rose-400 mt-1">{"HTTP/1.1 404 Not Found"}</p>
            <p className="mt-1">{"Cache-Control: no-cache"}</p>
            <p>{"Content-Type: text/html"}</p>
            <p className="text-emerald-400">{"Connection: closed"}</p>
          </div>

          <div className="pt-4">
            <Button href="/" variant="accent" size="md" className="gap-2">
              <ArrowLeft className="w-4.5 h-4.5" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
