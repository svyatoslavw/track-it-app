"use client"

import { motion } from "framer-motion"
import React from "react"

const AnimatedIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

export { AnimatedIcon }
