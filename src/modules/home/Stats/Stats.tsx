"use client"

import { motion } from "framer-motion"

import { chakra, inter } from "@/lib/fonts"

const stats = [
  {
    value: "500+",
    title: "Performance Builds Completed",
    description:
      "From dyno tuning to full custom builds, every project is engineered with precision and passion.",
  },
  {
    value: "15+",
    title: "Years of Combined Expertise",
    description:
      "A team driven by deep automotive knowledge, advanced diagnostics, and performance-focused craftsmanship.",
  },
  {
    value: "100%",
    title: "Custom-Tailored Solutions",
    description:
      "Every build is personalized to match your driving style, performance goals, and vision.",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function Stats() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-white/5
        bg-black
        py-20
        text-white
        md:py-28
      "
    >

      {/* Vertical Grid */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="container-width relative h-full">

          <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-1/3 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-2/3 top-0 h-full w-px bg-white/5" />

          <div className="absolute right-0 top-0 h-full w-px bg-white/5" />

        </div>

      </div>

      {/* Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="container-width relative z-10">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            gap-8
            md:grid-cols-3
            xl:gap-16
          "
        >

          {stats.map((itemData) => (
            <motion.div
              key={itemData.title}
              variants={item}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                min-h-[320px]
                overflow-hidden
                border
                border-white/10
                bg-black/80
                p-8
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:bg-black
                md:p-10
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[180px]
                    w-[180px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-500/5
                    blur-[80px]
                  "
                />
              </div>

              {/* Top Row */}
              <div className="flex items-center gap-5">

                {/* Cyan Accent */}
                <motion.div
                  initial={{
                    height: 0,
                  }}
                  whileInView={{
                    height: 40,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="w-[3px] bg-cyan-400"
                />

                {/* Number */}
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`
                    ${chakra.className}
                    text-4xl
                    font-bold
                    leading-none
                    tracking-[0.02em]
                    xl:text-5xl
                  `}
                >
                  {itemData.value}
                </motion.h3>

              </div>

              {/* Title */}
              <motion.h4
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                }}
                className={`
                  ${chakra.className}
                  mt-8
                  text-base
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  xl:text-lg
                `}
              >
                {itemData.title}
              </motion.h4>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                }}
                className={`
                  ${inter.className}
                  mt-5
                  max-w-[320px]
                  text-sm
                  leading-relaxed
                  text-zinc-400
                  xl:text-base
                `}
              >
                {itemData.description}
              </motion.p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  )
}