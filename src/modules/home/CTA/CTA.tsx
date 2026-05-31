"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { chakra, inter } from "@/lib/fonts"

export default function CTA() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        e.currentTarget.reset()
      } else {
        alert("Something went wrong.")
      }

    } catch (error) {
      console.error(error)
      alert("Failed to send message.")
    }

    setLoading(false)
  }

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
      id="contact"
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

      {/* LEFT HALO */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-220px]
          left-[-220px]
          z-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400/15
          blur-[120px]
        "
      />

      {/* RIGHT HALO */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-240px]
          right-[-220px]
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/15
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
              x: -50,
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
              flex
              items-center
              border-b
              border-white/10
              bg-black
              px-8
              py-16
              md:px-14
              lg:border-b-0
              lg:border-r
              lg:px-16
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(0,194,255,0.06),transparent_40%)]
              "
            />

            <div className="relative z-10">

              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-12"
              >

                <Image
                  src="/icons/cta-icon.svg"
                  alt="CTA Icon"
                  width={120}
                  height={120}
                  className="
                    h-auto
                    w-[90px]
                    md:w-[120px]
                  "
                />

              </motion.div>

              {/* HEADING */}
              <h2
                className={`
                  ${chakra.className}
                  max-w-[620px]
                  text-3xl
                  font-bold
                  leading-[1.1]
                  tracking-[0.01em]
                  sm:text-4xl
                  md:text-5xl
                `}
              >

                <span className="text-white">
                  Ready to Give Your
                </span>

                <span className="gradient-text">
                  {" "}Car
                </span>
&nbsp;
                <span className="text-white">
                   the
                </span>

                <span className="gradient-text">
                  {" "}Build It Deserves?
                </span>

              </h2>

              {/* DESCRIPTION */}
              <p
                className={`
                  ${inter.className}
                  mt-10
                  max-w-[560px]
                  text-lg
                  leading-[2]
                  text-zinc-400
                `}
              >
                From performance upgrades and dyno tuning
                to restorations and bespoke custom builds,
                Warp Division brings your vision to life with
                precision engineering and expert craftsmanship.
              </p>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
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
              bg-black
              px-8
              py-14
              md:px-14
              lg:px-16
            "
          >

            {/* FORM TITLE */}
            <h3
              className={`
                ${chakra.className}
                text-4xl
                font-bold
                leading-none
                tracking-[0.01em]
                md:text-4xl
              `}
            >

              <span className="text-white">
                Get In
              </span>

              <span className="gradient-text">
                {" "}Touch
              </span>

            </h3>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-14 space-y-8"
            >

              {/* NAME */}
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className={`
                  ${inter.className}
                  h-[78px]
                  w-full
                  border
                  border-white/5
                  bg-white/[0.03]
                  px-4
                  text-base
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-zinc-500
                  focus:border-cyan-400
                  focus:bg-white/[0.05]
                `}
              />

              {/* PHONE */}
              <input
                name="phone"
                type="tel"
                required
                placeholder="Your Mobile No."
                className={`
                  ${inter.className}
                  h-[78px]
                  w-full
                  border
                  border-white/5
                  bg-white/[0.03]
                  px-8
                  text-base
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-zinc-500
                  focus:border-cyan-400
                  focus:bg-white/[0.05]
                `}
              />

              {/* SELECT */}
              <div className="relative">

                <select
                  name="service"
                  required
                  className={`
                    ${inter.className}
                    h-[78px]
                    w-full
                    appearance-none
                    border
                    border-white/5
                    bg-white/[0.03]
                    px-8
                    text-base
                    text-zinc-400
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:bg-white/[0.05]
                  `}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Service
                  </option>

                  <option>AWD Dyno Tuning</option>
                  <option>Performance Upgrades</option>
                  <option>Carbon Fiber Parts</option>
                  <option>Restoration Projects</option>
                  <option>Resto Mods</option>
                  <option>European Car Service</option>
                  <option>Retrofits & Customization</option>
                  <option>Premium Paint & Detailing</option>

                </select>

                <ChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-6
                    top-1/2
                    h-6
                    w-6
                    -translate-y-1/2
                    text-white
                  "
                />

              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className={`
                  ${inter.className}
                  min-h-[180px]
                  w-full
                  resize-none
                  border
                  border-white/5
                  bg-white/[0.03]
                  px-8
                  py-7
                  text-base
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-zinc-500
                  focus:border-cyan-400
                  focus:bg-white/[0.05]
                `}
              />

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={loading}
                className={`
                  ${chakra.className}
                  relative
                  mt-4
                  flex
                  h-[76px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  bg-cyan-400
                  text-xl
                  font-bold
                  uppercase
                  tracking-[0.03em]
                  text-black
                  transition-all
                  duration-300
                  hover:shadow-[0_0_40px_rgba(0,194,255,0.45)]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                `}
                style={{
                  clipPath:
                    "polygon(0 0, 95% 0, 100% 28%, 100% 100%, 5% 100%, 0 72%)",
                }}
              >

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_60%)]
                    opacity-40
                  "
                />

                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>

              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}