"use client"
import { motion } from "framer-motion"

const shimmerVariants = {
  initial: { x: -100 },
  animate: { x: 100 },
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
      <div className="relative z-10 text-center">
        {/* Logo/Name */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text text-glow">
            Shubham
          </h1>
        </motion.div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto mb-4">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Loading text with shimmer */}
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 shimmer"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-muted-foreground text-sm">
            Loading amazing portfolio...
          </p>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="modern-card p-8 rounded-2xl">
      <div className="space-y-4">
        {/* Shimmer for title */}
        <div className="h-8 bg-muted rounded-lg overflow-hidden">
          <div className="h-full shimmer"></div>
        </div>
        
        {/* Shimmer for description */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded overflow-hidden">
            <div className="h-full shimmer"></div>
          </div>
          <div className="h-4 bg-muted rounded w-3/4 overflow-hidden">
            <div className="h-full shimmer"></div>
          </div>
        </div>
        
        {/* Shimmer for image */}
        <div className="h-48 bg-muted rounded-lg overflow-hidden">
          <div className="h-full shimmer"></div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-muted rounded overflow-hidden ${
            i === lines - 1 ? "w-3/4" : "w-full"
          }`}
        >
          <div className="h-full shimmer"></div>
        </div>
      ))}
    </div>
  )
}
