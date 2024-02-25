"use client";
import React from "react";
import { motion } from "framer-motion";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
        ease: "circInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default template;
