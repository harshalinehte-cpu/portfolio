import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function AnimatedBackground() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 25,
    mass: 0.8,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 25,
    mass: 0.8,
  })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#EBEBEB]">

      {/* Soft cursor-following spotlight */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full"
        style={{
          left: useMotionValue('0%'),
          top: useMotionValue('0%'),
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.35) 25%, rgba(255,255,255,0) 70%)',
          filter: 'blur(25px)',
        }}
      />

      {/* Slow ambient light - top left */}
      <motion.div
        animate={{
          x: [0, 45, -25, 0],
          y: [0, -30, 25, 0],
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-white/60 blur-[130px]"
      />

      {/* Slow ambient light - bottom right */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 35, -25, 0],
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-slate-400/30 blur-[150px]"
      />

      {/* Very subtle central grey glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/40 blur-[150px]"
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.8%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Existing subtle animated grid */}
      <div className="absolute inset-0 bg-grid-animated opacity-30" />
    </div>
  )
}