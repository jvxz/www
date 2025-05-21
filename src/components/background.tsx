'use client'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect } from 'react'

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-screen w-screen overflow-hidden motion-reduce:hidden">
      {Array.from({
        length: 12,
      }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Dot key={i} />
      ))}
    </div>
  )
}

const mouseSens = 0.4

function Dot() {
  const x = useMotionValue(window ? Math.random() * (window.innerWidth) : 0)
  const y = useMotionValue(window ? Math.random() * (window.innerHeight) : 0)

  useEffect(() => {
    const sens = mouseSens * Math.random() / 10

    const initX = x.get()
    const initY = y.get()

    const handleMouseMove = (e: MouseEvent) => {
      x.set(initX + (e.clientX * sens))
      y.set(initY + (e.clientY * sens))
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  })

  const sX = useSpring(x, {
    stiffness: 100,
    damping: 15,
  })

  const sY = useSpring(y, {
    stiffness: 100,
    damping: 15,
  })

  return (
    <motion.div
      initial={{
        translateY: 1000,
      }}
      animate={{
        translateY: -250,
      }}
      transition={{
        duration: 1 * Math.random() + 4,
        ease: [0.17, 0.96, 0.92, 1],
      }}
    >
      <motion.div
        className="size-32 rounded-full"
        style={{
          x: sX,
          y: sY,
          opacity: Math.random() * (0.3 - 0.15) + 0.15,
          backgroundColor: Math.random() > 0.5 ? 'var(--secondary)' : 'var(--primary)',
        }}
        animate={{
          translateX: [20 * Math.random()],
          translateY: [20 * Math.random()],
        }}
        transition={{
          duration: 1 * Math.random() + 5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: [0.76, 0, 0.24, 1],
        }}
      >
      </motion.div>
    </motion.div>
  )
}

export { Background }
