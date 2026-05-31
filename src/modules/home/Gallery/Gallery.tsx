"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { chakra, inter } from "@/lib/fonts"

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
  "/images/gallery9.jpg",
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)

  const openImage = (index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      (selectedIndex + 1) % images.length
    )
  }

  const prevImage = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    )
  }

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (selectedIndex === null) return

      if (e.key === "Escape")
        closeLightbox()

      if (e.key === "ArrowRight")
        nextImage()

      if (e.key === "ArrowLeft")
        prevImage()
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )
    

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      )
  }, [selectedIndex])

useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(
      (prev) =>
        (prev + 1) % images.length
    )
  }, 5000)

  return () =>
    clearInterval(interval)
}, [])

  return (
    <>
      <section
        id="gallery"
        className="
          relative
          overflow-hidden
          bg-black
          py-28
          lg:py-36
        "
      >

        {/* Grid Lines */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
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

        {/* Halo */}

        <div
          className="
            absolute
            left-[-250px]
            top-[-250px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/20
            blur-[150px]
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
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center"
          >

            <p
              className={`
                ${inter.className}
                text-sm
                uppercase
                tracking-[0.25em]
                text-zinc-400
              `}
            >
              Project Showcase
            </p>

            <h2
              className={`
                ${chakra.className}
                mt-5
                text-4xl
                font-bold
                leading-[1.1]
                md:text-6xl
              `}
            >

              <span className="text-white">
                Where
              </span>{" "}

              <span className="text-cyan-400">
                Engineering
              </span>

              <br />

              <span className="text-cyan-400">
                Meets
              </span>{" "}

              <span className="text-white">
                Obsession.
              </span>

            </h2>

          </motion.div>

{/* Featured Gallery Carousel */}

<div className="mt-20 relative">

  {/* Left Arrow */}

  <button
onClick={() =>
  setActiveIndex((prev) =>
    prev === 0
      ? images.length - 1
      : prev - 1
  )
}
    className="
      absolute
      left-[-60px]
      top-1/2
      -translate-y-1/2
      z-20
      text-white/70
      hover:text-cyan-400
      transition-colors
    "
  >
    <ChevronLeft size={40} />
  </button>

  {/* Slider */}

{/* Slider */}

<div className="overflow-hidden">

  <motion.div
    animate={{
  x: `calc(-${activeIndex * 33.333}% - ${activeIndex * 16}px)`,
    }}
    transition={{
      duration: 0.6,
      ease: "easeInOut",
    }}
    className="flex gap-4"
  >

{[...images, ...images].map(
  (image, index) => (
      <div
        key={index}
       onClick={() =>
  openImage(
    index % images.length
  )
}
        className="
          relative
          aspect-square
          shrink-0
          cursor-pointer
          overflow-hidden

          w-full
          md:w-[calc((100%-32px)/3)]
        "
      >

        <Image
          src={image}
          alt=""
          fill
          className="
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        {/* Cyan Corner */}

        <div
          className="
            absolute
            left-0
            top-0
            h-4
            w-4
            bg-cyan-400
            z-10
          "
        />

      </div>

    ))}

  </motion.div>

</div>

  {/* Right Arrow */}

  <button
onClick={() =>
  setActiveIndex(
    (prev) =>
      (prev + 1) %
      images.length
  )
}
    className="
      absolute
      right-[-60px]
      top-1/2
      text-white/70
      hover:text-cyan-400
      transition-colors
    "
  >
    <ChevronRight size={40} />
  </button>

</div>
</div>

      </section>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {selectedIndex !== null && (

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
            className="
              fixed
              inset-0
              z-[999]
              bg-black/95
              backdrop-blur-xl
            "
          >

            <button
              onClick={closeLightbox}
              className="
                absolute
                right-6
                top-6
                z-20
                text-white
              "
            >
              <X size={34} />
            </button>

            <button
              onClick={prevImage}
              className="
                absolute
                left-6
                top-1/2
                z-20
                -translate-y-1/2
                text-white
              "
            >
              <ChevronLeft size={42} />
            </button>

            <button
              onClick={nextImage}
              className="
                absolute
                right-6
                top-1/2
                z-20
                -translate-y-1/2
                text-white
              "
            >
              <ChevronRight size={42} />
            </button>

            <div
              className="
                flex
                h-full
                flex-col
                items-center
                justify-center
                px-6
              "
            >

              <motion.div
                key={selectedIndex}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  relative
                  h-[70vh]
                  w-full
                  max-w-6xl
                "
              >

                <Image
                  src={
                    images[selectedIndex]
                  }
                  alt=""
                  fill
                  className="object-contain"
                />

              </motion.div>

              {/* Thumbnails */}

              <div
                className="
                  mt-8
                  flex
                  max-w-full
                  gap-3
                  overflow-x-auto
                  pb-2
                "
              >

                {images.map(
                  (
                    image,
                    index
                  ) => (
                    <button
                      key={image}
                      onClick={() =>
                        setSelectedIndex(
                          index
                        )
                      }
                      className={`
                        relative
                        h-20
                        w-28
                        shrink-0
                        overflow-hidden
                        border
                        ${
                          selectedIndex ===
                          index
                            ? "border-cyan-400"
                            : "border-white/10"
                        }
                      `}
                    >

                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover"
                      />

                    </button>
                  )
                )}

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}