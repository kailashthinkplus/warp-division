"use client"

import { useEffect, useState } from "react"

import {
  AnimatePresence,
  motion,
} from "framer-motion"

import { Phone } from "lucide-react"

import { chakra } from "@/lib/fonts"

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Why Choose Us",
    href: "#why-us",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Partners",
    href: "#partners",
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      )
    }
  }, [])

  return (
    <>

      {/* HEADER */}
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          top-0
          z-[100]
          w-full
          transition-all
          duration-500
          ${
            isScrolled
              ? `
                border-b
                border-white/5
                bg-black/40
                backdrop-blur-xl
              `
              : `
                bg-transparent
              `
          }
        `}
      >

        <div
          className="
            container-width
            flex
            items-center
            justify-between
            py-5
            md:py-6
          "
        >

          {/* LOGO */}
          <a href="#home">

            <img
              src="/images/warp-logo.png"
              alt="Warp Division"
              className="
                w-[110px]
                object-contain
                sm:w-[130px]
                lg:w-[145px]
              "
            />

          </a>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              group
              relative
              flex
              flex-col
              gap-2
              transition-all
              duration-300
            "
          >

            <span
              className="
                h-[2px]
                w-8
                bg-white
                transition-all
                duration-300
                group-hover:bg-cyan-400
              "
            />

            <span
              className="
                h-[2px]
                w-8
                bg-white
                transition-all
                duration-300
                group-hover:bg-cyan-400
              "
            />

            <span
              className="
                h-[2px]
                w-5
                self-end
                bg-white
                transition-all
                duration-300
                group-hover:w-8
                group-hover:bg-cyan-400
              "
            />

          </button>

        </div>

      </motion.header>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              inset-0
              z-[200]
              overflow-hidden
              bg-black/75
              backdrop-blur-2xl
            "
          >

            {/* HALO */}
            <div
              className="
                absolute
                left-[-200px]
                top-[-200px]
                h-[500px]
                w-[500px]
                rounded-full
                bg-cyan-400/20
                blur-[140px]
              "
            />

            <div
              className="
                absolute
                bottom-[-200px]
                right-[-200px]
                h-[500px]
                w-[500px]
                rounded-full
                bg-cyan-400/10
                blur-[140px]
              "
            />

            {/* GRID LINES */}
            <div className="absolute inset-0 pointer-events-none">

              <div className="container-width relative h-full">

                <div className="absolute left-0 top-0 h-full w-px bg-white/5" />

                <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />

                <div className="absolute left-2/4 top-0 h-full w-px bg-white/5" />

                <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />

                <div className="absolute right-0 top-0 h-full w-px bg-white/5" />

              </div>

            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMenuOpen(false)}
              className="
                absolute
                right-8
                top-8
                z-20
                text-white
                transition-all
                duration-300
                hover:text-cyan-400
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            </button>

            {/* MENU CONTENT */}
            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                items-center
                justify-center
                px-8
                text-center
              "
            >

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="
                  flex
                  flex-col
                  items-center
                "
              >

                {/* LINKS */}
                <div className="space-y-6">

                  {navLinks.map((link) => (

                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 30,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                      className={`
                        ${chakra.className}
                        group
                        block
                        text-3xl
                        font-bold
                        uppercase
                        tracking-[0.06em]
                        text-white
                        transition-all
                        duration-300
                        hover:text-cyan-400
                        md:text-5xl
                      `}
                    >

                      <span className="relative">

                        {link.label}

                        <span
                          className="
                            absolute
                            -bottom-2
                            left-0
                            h-px
                            w-0
                            bg-cyan-400
                            transition-all
                            duration-300
                            group-hover:w-full
                          "
                        />

                      </span>

                    </motion.a>

                  ))}

                </div>

                {/* CTA */}
                <motion.a
                  href="tel:+917891011630"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className={`
                    ${chakra.className}
                    mt-14
                    flex
                    items-center
                    gap-3
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-8
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
                  `}
                  style={{
                    clipPath:
                      "polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)",
                  }}
                >

                  <Phone
                    className="h-4 w-4"
                    strokeWidth={2}
                  />

                  Call Now

                </motion.a>

              </motion.div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  )
}