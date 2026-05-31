"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { chakra, inter } from "@/lib/fonts"

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
}

export default function About() {
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
        md:py-5
        xl:py-5
      "
      id="about"
    >

      {/* Vertical Grid */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="container-width relative h-full">

          <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-2/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute right-0 top-0 h-full w-px bg-white/5" />

        </div>

      </div>

      {/* Ambient Glow */}
      <div
        className="
          absolute
          left-0
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="container-width relative z-10">

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
            xl:gap-24
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* Section Label */}
            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-5"
            >

              <div className="h-10 w-[3px] bg-cyan-400" />

              <p
                className={`
                  ${inter.className}
                  text-lg
                  text-white
                  md:text-1xl
                `}
              >
                About Warp Division
              </p>

            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${chakra.className}
                mt-10
                text-4xl
                font-bold
                leading-[1]
                tracking-[0.01em]
                sm:text-5xl
                md:text-6xl
                xl:text-[52px]
              `}
            >

              <span className="text-white">
                Built for
              </span>

              <span className="gradient-text">
                {" "}Enthusiasts.
              </span>

              <br />

              <span className="text-white">
                Engineered for
              </span>

              <span className="gradient-text">
                {" "}Perfection.
              </span>

            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${inter.className}
                mt-10
                max-w-3xl
                text-base
                leading-relaxed
                text-zinc-400
                md:text-ng
              `}
            >
              At Warp Division - Dyno, Restoration,
              Resto Mods, Retrofits, Paint Job, cars are
              more than machines — they are passion
              projects. From performance tuning and
              dyno testing to complete restorations
              and bespoke retrofits, we bring precision
              craftsmanship and automotive obsession
              together under one roof.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${inter.className}
                mt-8
                max-w-3xl
                text-base
                leading-relaxed
                text-zinc-400
                md:text-lg
              `}
            >
              Our team specializes in transforming
              everyday vehicles into refined,
              high-performance builds tailored to
              each owner’s vision. Whether it’s
              restoring classics, enhancing
              drivability, upgrading interiors, or
              extracting maximum performance,
              every project is approached with
              detail, care, and engineering expertise.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-12"
            >

              <button
                className={`
                  ${chakra.className}
                  border
                  border-white/20
                  bg-transparent
                  px-10
                  py-5
                  text-sm
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:bg-cyan-400
                  hover:text-black
                  hover:shadow-[0_0_40px_rgba(0,194,255,0.25)]
                `}
                style={{
                  clipPath:
                    "polygon(0 0, 94% 0, 100% 20%, 100% 100%, 6% 100%, 0 80%)",
                }}
              >
                Get In Touch
              </button>

            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[700px]
            "
          >

            {/* Cyan Frame */}
            <div
              className="
                absolute
                -left-4
                -top-4
                h-full
                w-full
              "
            />

            {/* Image */}
            <div
              className="
                relative
                overflow-hidden
              "
            >

              <Image
                src="/images/about.png"
                alt="Warp Division Garage"
                width={900}
                height={1100}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
                priority
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}