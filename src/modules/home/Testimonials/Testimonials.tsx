"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { chakra, inter } from "@/lib/fonts"

const testimonials = [
  {
    review:
      "Their professionalism, attention to detail, and commitment to delivering high-quality solutions have exceeded our expectations.",
    name: "Rishi Varma",
    role: "Entrepreneur",
    avatar: "/images/testimonial-user1.png",
  },
  {
    review:
      "Warp Division transformed my car exactly the way I envisioned. The workmanship, tuning quality, and communication were exceptional.",
    name: "Arjun Reddy",
    role: "Automotive Enthusiast",
    avatar: "/images/testimonial-user2.png",
  },
  {
    review:
      "From diagnostics to performance upgrades, every aspect was handled with precision and genuine passion for cars.",
    name: "Lakshman Kumar",
    role: "Track Day Driver",
    avatar: "/images/testimonial-user3.png",
  },
]

export default function Testimonials() {
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
      id="testimonials"
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

      {/* Halo */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-200px]
          top-[100px]
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      <div className="container-width relative z-10">

        {/* TOP */}
        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >

          {/* LEFT */}
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
                What Our Clients Say
              </p>

            </div>

            {/* HEADING */}
            <h2
              className={`
                ${chakra.className}
                mt-10
                max-w-[720px]
                text-3xl
                font-bold
                leading-[1]
                tracking-[0.01em]
                sm:text-4xl
                md:text-5xl
              `}
            >

              <span className="text-white">
                Built on
              </span>

              <span className="gradient-text">
                {" "}Trust &
              </span>

              <br />

              <span className="gradient-text">
                Performance
              </span>

            </h2>

          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="
              lg:mt-20
            "
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
              View All Reviews
            </button>

          </motion.div>

        </div>

        {/* TESTIMONIALS */}
        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-3
          "
        >

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-black
                p-8
                transition-all
                duration-500
                hover:border-cyan-400/20
                hover:shadow-[0_0_40px_rgba(0,194,255,0.08)]
                md:p-10
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute
                  left-[-80px]
                  top-[-80px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-cyan-400/0
                  blur-[80px]
                  transition-all
                  duration-700
                  group-hover:bg-cyan-400/10
                "
              />

              {/* Cyan Accent */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-full
                  bg-cyan-400/0
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400
                "
              />

              {/* Stars */}
              <div className="flex items-center gap-2">

                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/icons/star.svg"
                    alt="Star"
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                  />
                ))}

              </div>

              {/* Review */}
              <p
                className={`
                  ${inter.className}
                  mt-10
                  text-lg
                  leading-relaxed
                  text-white
                `}
              >
                “{testimonial.review}”
              </p>

              {/* User */}
              <div className="mt-12 flex items-center gap-4">

                <div
                  className="
                    relative
                    h-14
                    w-14
                    overflow-hidden
                    rounded-full
                    border
                    border-white/10
                  "
                >

                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div>

                  <h4
                    className={`
                      ${inter.className}
                      text-base
                      font-semibold
                      text-white
                    `}
                  >
                    {testimonial.name}
                  </h4>

                  <p
                    className={`
                      ${inter.className}
                      mt-1
                      text-sm
                      text-zinc-400
                    `}
                  >
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}