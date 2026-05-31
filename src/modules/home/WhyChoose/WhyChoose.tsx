"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { chakra, inter } from "@/lib/fonts"

const features = [
  "Precision Dyno Tuning",
  "Performance-Focused Engineering",
  "Premium Custom Builds",
  "Restoration Specialists",
  "Attention to Detail",
  "Passion-Driven Team",
  "Advanced Equipment & Diagnostics",
  "Personalized Consultation",
]

export default function WhyChoose() {
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
      id="why-us"
    >

      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <div className="container-width relative h-full">

          <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-2/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute right-0 top-0 h-full w-px bg-white/5" />

        </div>

      </div>

      {/* Halo Top */}
      <motion.div
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-240px]
          top-[-200px]
          z-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      {/* Halo Bottom */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-260px]
          left-[-200px]
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      <div className="container-width relative z-10">

        <div
          className="
            grid
            overflow-hidden
            border
            border-white/10
            lg:grid-cols-2
          "
        >

          {/* LEFT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              overflow-hidden
              border-b
              border-white/10
              bg-black
              px-8
              py-10
              md:px-14
              md:py-16
              lg:border-b-0
              lg:border-r
            "
          >

            {/* Background Glow */}
            <div
              className="
                absolute
                left-[-120px]
                top-[50%]
                h-[320px]
                w-[320px]
                -translate-y-1/2
                rounded-full
                bg-cyan-400/10
                blur-[120px]
              "
            />

            {/* Cyan Top Accent */}
            <div
              className="
                absolute
                left-0
                top-0
                h-5
                w-5
                bg-cyan-400
              "
            />

            {/* Cyan Bottom Accent */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-5
                w-5
                bg-cyan-400
              "
            />

            {/* LABEL */}
            <div className="flex items-center gap-4">

              <div className="h-10 w-[3px] bg-cyan-400" />

              <p
                className={`
                  ${inter.className}
                  text-lg
                  text-white
                `}
              >
                Why Enthusiasts Trust Us
              </p>

            </div>

            {/* HEADING */}
            <h2
              className={`
                ${chakra.className}
                mt-10
                max-w-[650px]
                text-3xl
                font-bold
                leading-[1]
                tracking-[0.01em]
                sm:text-4xl
                md:text-5xl
              `}
            >

              <span className="text-white">
                Why Choose
              </span>

              <span className="gradient-text">
                {" "}Warp Division
              </span>

            </h2>

            {/* FEATURES */}
            <div className="mt-14 space-y-7">

              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-5
                  "
                >

                  {/* Tick Icon */}
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-cyan-400
                      transition-all
                      duration-300
                      group-hover:bg-cyan-400/10
                      group-hover:shadow-[0_0_20px_rgba(0,194,255,0.35)]
                    "
                  >

                    <Image
                      src="/icons/check-tick.svg"
                      alt="Tick"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />

                  </div>

                  {/* Text */}
                  <p
                    className={`
                      ${inter.className}
                      text-xl
                      font-medium
                      leading-relaxed
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-400
                      md:text-[20px]
                    `}
                  >
                    {feature}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              min-h-[420px]
              overflow-hidden
            "
          >

            {/* Cyan Top Accent */}
            <div
              className="
                absolute
                left-0
                top-0
                z-20
                h-5
                w-5
                bg-cyan-400
              "
            />

            {/* Cyan Bottom Accent */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                h-5
                w-5
                bg-cyan-400
              "
            />

            {/* Cyan Top Right Accent */}
            <div
              className="
                absolute
                right-0
                top-0
                z-20
                h-5
                w-5
                bg-cyan-400
              "
            />

            {/* Cyan Bottom Right Accent */}
            <div
              className="
                absolute
                bottom-0
                right-0
                z-20
                h-5
                w-5
                bg-cyan-400
              "
            />

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full"
            >

              <Image
                src="/images/why-choose-car.png"
                alt="Warp Division Dyno"
                fill
                priority
                className="
                  object-cover
                "
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}