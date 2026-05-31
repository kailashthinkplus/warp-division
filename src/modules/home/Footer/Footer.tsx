"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Youtube,
} from "lucide-react"

import { inter } from "@/lib/fonts"

export default function Footer() {
  return (
    <footer
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

      {/* TOP RIGHT ORB */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-[-120px]
          top-[-80px]
          z-0
          opacity-[0.14]
        "
      >

        <Image
          src="/icons/wire-orb.svg"
          alt="Orb"
          width={420}
          height={420}
          className="w-[240px] md:w-[420px]"
        />

      </motion.div>

      {/* BOTTOM LEFT ORB */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-[-140px]
          left-[-120px]
          z-0
          opacity-[0.12]
        "
      >

        <Image
          src="/images/orb.svg"
          alt="Orb"
          width={420}
          height={420}
          className="w-[220px] md:w-[360px]"
        />

      </motion.div>

      {/* LARGE LEFT HALO */}
      <motion.div
        animate={{
          opacity: [0.18, 0.4, 0.18],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-260px]
          left-[-260px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-400/20
          blur-[160px]
        "
      />

      {/* LARGE RIGHT HALO */}
      <motion.div
        animate={{
          opacity: [0.14, 0.32, 0.14],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-240px]
          right-[-220px]
          z-0
          h-[620px]
          w-[620px]
          rounded-full
          bg-cyan-400/15
          blur-[150px]
        "
      />

      <div className="container-width relative z-10">

        <div
          className="
            grid
            gap-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-start
          "
        >

          {/* LEFT */}
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
          >

            {/* LOGO */}
            <Image
              src="/images/warp-logo.png"
              alt="Warp Division"
              width={204}
              height={82}
              className="w-[180px] md:w-[180px]"
            />

            {/* CONTACT LIST */}
            <div className="mt-10 space-y-8">

              {/* PHONE */}
              <div className="flex items-start gap-5">

                <Phone
                  className="
                    mt-1
                    h-7
                    w-7
                    text-white/20
                  "
                  strokeWidth={1.5}
                />

                <a
                  href="tel:+917891011630"
                  className={`
                    ${inter.className}
                    text-xl
                    font-medium
                    tracking-[0.01em]
                    text-zinc-200
                    transition-colors
                    duration-300
                    hover:text-cyan-400
                    md:text-[26px]
                  `}
                >
                  +91 789 10 11 630
                </a>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <Mail
                  className="
                    mt-1
                    h-7
                    w-7
                    text-white/20
                  "
                  strokeWidth={1.5}
                />

                <a
                  href="mailto:sales@warpdivision.com"
                  className={`
                    ${inter.className}
                    text-base
                    text-zinc-200
                    transition-colors
                    duration-300
                    hover:text-cyan-400
                    md:text-[20px]
                  `}
                >
                  sales@warpdivision.com
                </a>

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-5">

                <MapPin
                  className="
                    mt-1
                    h-18
                    w-18
                    text-white/20
                  "
                  strokeWidth={1.5}
                />

                <p
                  className={`
                    ${inter.className}
                    max-w-[620px]
                    text-base
                    leading-[1.8]
                    text-zinc-200
                    md:text-[20px]
                  `}
                >
                  16, Jai Hind Gandhi Rd,
                  Cyber Hills Colony,
                  VIP Hills, Jaihind Enclave,
                  Madhapur, Hyderabad,
                  Telangana, India - 500081
                </p>

              </div>
              <div className="flex items-center gap-4">

  <a
    href="https://instagram.com/warp_division"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.02]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-cyan-400/50
      hover:text-cyan-400
      hover:shadow-[0_0_30px_rgba(0,194,255,0.25)]
    "
  >
<Image
  src="/icons/instagram.svg"
  alt="Instagram"
  width={20}
  height={20}
/>
  </a>

  <a
    href="https://youtube.com/@warpdivision"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.02]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-cyan-400/50
      hover:text-cyan-400
      hover:shadow-[0_0_30px_rgba(0,194,255,0.25)]
    "
  >
<Image
  src="/icons/youtube.svg"
  alt="YouTube"
  width={20}
  height={20}
/>  </a>

</div>

            </div>

          </motion.div>

          {/* RIGHT MAP */}
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
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >

            <div
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
              "
            >

              <iframe
                src="https://www.google.com/maps?q=Warp+Division+Hyderabad&output=embed"
                width="100%"
                height="440"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="
                  h-[320px]
                  w-full
                  border-0
                  md:h-[440px]
                "
              />

            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-20
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-10
            text-center
            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
          "
        >

          <p
            className={`
              ${inter.className}
              text-sm
              text-zinc-500
              md:text-base
            `}
          >
            © Warp Division India Pvt Ltd. 2026,
            All Rights Reserved | Built Using <a href="https://www.getbuildez.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">BuildEZ</a>
          </p>

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              text-sm
              text-zinc-500
              md:justify-end
              md:text-base
            "
          >

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              Privacy Policy
            </a>

            <span>|</span>

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}