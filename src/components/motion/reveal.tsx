"use client";

import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = MotionProps & {
  as?: "div" | "section";
  className?: string;
};

export function Reveal({ as = "div", className, ...props }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    />
  );
}
