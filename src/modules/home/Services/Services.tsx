"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { chakra, inter } from "@/lib/fonts"

const services = [
  {
    title: "AWD Dyno Tuning",
    description:
      "Home to India’s most advanced AWD Dyno setup by Dynostar Netherlands. Delivering precision tuning, real-world performance analysis, and accurate power optimization for high-performance builds.",
    icon: "/icons/services/awd-dyno.svg",
  },
  {
    title: "Performance Upgrades",
    description:
      "From intake and exhaust systems to suspension and braking upgrades, we build cars that perform as aggressively as they look.",
    icon: "/icons/services/performance.svg",
  },
  {
    title: "Bespoke Carbon Fiber Parts",
    description:
      "Custom carbon fiber components crafted for lightweight performance, precision fitment, and premium styling.",
    icon: "/icons/services/carbon.svg",
  },
  {
    title: "Restoration Projects",
    description:
      "Complete restoration services for classic and modern vehicles — preserving heritage while enhancing reliability and finish.",
    icon: "/icons/services/restoration.svg",
  },
  {
    title: "Resto Mods",
    description:
      "A perfect blend of vintage aesthetics and modern engineering for timeless builds with contemporary performance.",
    icon: "/icons/services/restomod.svg",
  },
  {
    title: "Race Builds",
    description:
      "Purpose-built performance machines engineered for speed, handling, reliability, and track-focused performance.",
    icon: "/icons/services/race.svg",
  },
  {
    title: "European Car Service",
    description:
      "Specialized diagnostics, maintenance, repairs, and performance solutions for premium European vehicles.",
    icon: "/icons/services/euro.svg",
  },
  {
    title: "Independent Volvo Specialists",
    description:
      "Dedicated expertise in Volvo vehicles, including diagnostics, restoration, retrofits, and performance upgrades.",
    icon: "/icons/services/volvo.png",
  },
  {
    title: "Retrofits & Customization",
    description:
      "Premium interior upgrades, infotainment systems, lighting solutions, body kits, and custom modifications.",
    icon: "/icons/services/retrofit.svg",
  },
  {
    title: "Premium Paint & Detailing",
    description:
      "High-quality paint correction, refinishing, PPF, ceramic & graphene coating, and detailing solutions.",
    icon: "/icons/services/detailing.svg",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function Services() {
  return (
    <section
      className="
        relative
        border-t
        border-white/5
        bg-black
        py-20
        text-white
        md:py-28
      "
      id="services"
    >

      {/* GRID LINES */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <div className="container-width relative h-full">

          <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-2/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />

          <div className="absolute right-0 top-0 h-full w-px bg-white/5" />

        </div>

      </div>

      {/* HALO */}
      <motion.div
        animate={{
          opacity: [0.55, 0.8, 0.55],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[260px]
          -top-[120px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-400/25
          blur-[120px]
        "
      />

      <div className="container-width relative z-10">

        <div
          className="
            grid
            gap-16
            lg:grid-cols-[0.85fr_1.15fr]
            xl:gap-24
          "
        >

          {/* LEFT COLUMN */}
          <div
            className="
    relative
  block
  lg:block
            "
          >

            <div
              className="
                sticky
                top-28
                h-fit
              "
            >

              {/* ORB */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-[-10px]
                  top-[-40px]
                  z-20
                  w-[220px]
                  opacity-60
                  mix-blend-screen
                "
              >

                <Image
                  src="/icons/wire-orb.svg"
                  alt="Wire Orb"
                  width={220}
                  height={220}
                  className="
                    h-auto
                    w-full
                    object-contain
                  "
                />

              </motion.div>

              {/* IMAGE BLOCK */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
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
                className="relative pt-24"
              >

                {/* CYAN FRAME */}
                <div
                  className="
                    absolute
                    -left-4
                    -top-4
                    h-full
                    w-full
                  "
                />

                {/* IMAGE */}
                <div className="overflow-hidden bg-zinc-900">

                  <Image
                    src="/images/services-car.png"
                    alt="Warp Division Services"
                    width={900}
                    height={1200}
                    className="
                      h-auto
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  />

                </div>

              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
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
                    py-4
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
                  View All Services
                </button>

              </motion.div>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">

            {/* HEADING */}
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
            >

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
                  Our Services
                </p>

              </div>

              {/* TITLE */}
              <h2
                className={`
                  ${chakra.className}
                  mt-10
                  max-w-[700px]
                  text-3xl
                  font-bold
                  leading-[1]
                  tracking-[0.01em]
                  sm:text-4xl
                  md:text-5xl
                `}
              >

                <span className="text-white">
                  Precision
                </span>

                <span className="gradient-text">
                  {" "}Automotive
                </span>

                <br />

                <span className="text-white">
                  Services
                </span>

              </h2>

            </motion.div>

            {/* SERVICES */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="mt-20"
            >

              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={item}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    group
                    border-b
                    border-white/10
                    py-10
                    transition-all
                    duration-500
                    hover:border-cyan-400/20
                    ${index === 0 ? "border-t border-white/10" : ""}
                  `}
                >

                  <div className="flex gap-6">

                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-start
                        justify-center
                      "
                    >

                      <motion.div
                        whileHover={{
                          scale: 1.12,
                          rotate: -6,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >

                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={42}
                          height={42}
                          className="opacity-90"
                        />

                      </motion.div>

                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3
                        className={`
                          ${chakra.className}
                          text-2xl
                          font-bold
                          leading-tight
                          tracking-[0.01em]
                          transition-colors
                          duration-300
                          group-hover:text-cyan-400
                        `}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`
                          ${inter.className}
                          mt-4
                          max-w-[700px]
                          text-base
                          leading-relaxed
                          text-zinc-400
                        `}
                      >
                        {service.description}
                      </p>

                    </div>

                  </div>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}