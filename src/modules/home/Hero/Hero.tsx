"use client"

import { motion } from "framer-motion"
import { chakra, inter } from "@/lib/fonts"

const fadeUp = {
  hidden: {
    opacity: 0, 
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
md:min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
      id="home"
    >

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          scale-[1.02]
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/hero-bg.webp')",
        }}
      />

      {/* Cyan Ambient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="
          absolute
          left-0
          top-0
          h-full
          w-[60%]
          blur-3xl
        "
      />
      {/* Vertical Grid Lines */}
<div
  className="
    absolute
    inset-0
    z-10
    pointer-events-none
    opacity-30
    md:opacity-100
  "
>
  <div className="container-width relative h-full">

    <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

    <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />

    <div className="absolute left-2/4 top-0 h-full w-px bg-white/5" />

    <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />

    <div className="absolute right-0 top-0 h-full w-px bg-white/5" />

  </div>

</div>

      {/* Main Content */}
      <div
        className="
          relative
          z-20
          flex
          min-h-[100svh]
md:min-h-screen
          items-center
          pt-32
          pb-16
          grid
        "
      >

        <div
          className="
            container-width
            grid
            min-h-[80vh]
            grid-cols-1
            gap-14
            lg:grid-cols-2
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="
              flex
              flex-col
              justify-center
              max-w-[620px]
            "
          >

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${chakra.className}
                text-4xl
                font-bold
                uppercase
                leading-[0.9]
                tracking-[0.01em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[62px]
                maxsm-grid
              `}
            >

<span className="text-white block md:inline">
  Precision.
</span>

<span className="gradient-text block md:inline">
  Performance.
</span>

<span className="text-white block">
  Passion.
</span>

            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${inter.className}
                mt-6
                max-w-2xl
                text-base
                leading-relaxed
                text-zinc-300
                sm:text-lg
                md:text-xl
              `}
            >
              Hyderabad’s destination for dyno tuning,
              restorations, retrofits, performance
              upgrades, and premium automotive
              customization.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >

              {/* Primary */}
              <a href="#contact" rel="noopener noreferrer"
                className={`
                  ${chakra.className}
                  bg-cyan-400
                  px-7
                  py-3.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(0,194,255,0.35)]
sm:text-sm
inline-flex
items-center
justify-center
text-center
                `}
                style={{
                  clipPath:
                    "polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)",
                }}
              >
                Book Appointment
              </a>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE DESKTOP */}
          <div
            className="
    flex
    justify-center
    lg:items-end
    lg:justify-end
    mt-10
    lg:mt-0
    pb-6
    xl:pb-10
            "
          >

            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
  glass-card
  h-fit
  w-full
  max-w-[90%]
  sm:max-w-[420px]
  lg:max-w-[320px]
  mx-auto
  rounded-[24px]
  border
  border-white/10
  bg-black/40
  p-6
  backdrop-blur-2xl
              "
            >

              <h3
                className={`
                  ${chakra.className}
                  text-2xl
                  font-bold
                  leading-none
                  tracking-[0.01em]
                  xl:text-3xl
                `}
              >
                Get In Touch
              </h3>

              <p
                className={`
                  ${inter.className}
                  mt-4
                  text-sm
                  leading-relaxed
                  text-zinc-300
                `}
              >
                Call us now for discussing
                your next build.
              </p>

              {/* Phone Box */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  bg-white
                  px-5
                  py-4
                  text-black
                "
                style={{
                  clipPath:
                    "polygon(0 0, 95% 0, 100% 25%, 100% 100%, 5% 100%, 0 75%)",
                }}
              >

                <a href="tel:+917891011630"
                  className={`
                    ${chakra.className}
                    text-lg
                    font-bold
                    tracking-[0.03em]
                    xl:text-xl
                  `}
                >
                  +91 789 10 11 630
                </a>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}