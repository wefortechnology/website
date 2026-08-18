"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const MotionLink = motion.create(Link);

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden select-none cursor-pointer";
  
  const variants = {
    primary: "bg-accent-blue hover:bg-accent-blue/90 text-white shadow-[0_4px_20px_rgba(14,165,233,0.3)]",
    secondary: "bg-white/10 hover:bg-white/15 text-white border border-white/10 backdrop-blur-sm",
    accent: "bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-95 text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)]",
    outline: "bg-transparent border border-white/20 hover:border-accent-blue text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        {...motionProps}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {buttonContent}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {buttonContent}
    </motion.button>
  );
}
