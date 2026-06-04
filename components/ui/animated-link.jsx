"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function AnimatedLink({ href, children, external }) {
  const Tag = external ? "a" : Link;
  const extraProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <motion.span
      className="relative inline-block text-secondary"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Tag href={href} {...extraProps}>
        {children}
      </Tag>
      <motion.span
        className="absolute left-0 bottom-0 h-[1px] w-full origin-left"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        style={{ borderBottom: "1.5px solid currentColor" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </motion.span>
  );
}
