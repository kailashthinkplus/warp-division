"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { chakra } from "@/lib/fonts"

const partners = [
  {
    name: "Evolution Carbon",
    logo: "/images/evolution-carbon.png",
    width: 280,
  },
  {
    name: "Mannol",
    logo: "/images/mannol.png",
    width: 320,
  },
  {
    name: "Dyno Run",
    logo: "/images/dyno-run.png",
    width: 240,
  },
  {
    name: "Dynostar",
    logo: "/images/dynostar.png",
    width: 290,
  },
  {
    name: "K4 Performance",
    logo: "/images/kt4-performance.png",
    width: 170,
  },
]

export default function Partners() {
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
      id="partners"
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

      {/* Halo Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[-220px]
          z-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      <div className="container-width relative z-10">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >

          <h2
            className={`
              ${chakra.className}
              text-4xl
              font-bold
              leading-none
              tracking-[0.01em]
              sm:text-5xl
              md:text-6xl
            `}
          >

            <span className="text-white">
              Our
            </span>

            <span className="gradient-text">
              {" "}Partners
            </span>

          </h2>

        </motion.div>

        {/* Partners Grid */}
        <div
          className="
            mt-20
            grid
            grid-cols-2
            gap-x-10
            gap-y-16
            md:grid-cols-3
            lg:grid-cols-5
            lg:gap-x-16
          "
        >

          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                group
                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  relative
                  flex
                  h-[120px]
                  w-full
                  items-center
                  justify-center
                  transition-all
                  duration-500
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-cyan-400/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-cyan-400/10
                  "
                />

                {/* Logo */}
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={120}
                  className="
                    relative
                    h-auto
                    max-h-[90px]
                    w-auto
                    object-contain
                    opacity-80
                    grayscale
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:grayscale-0
                  "
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}