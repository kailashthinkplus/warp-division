import type { Metadata } from "next"

import { inter } from "@/lib/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "Warp Division",
  description:
    "Performance tuning and automotive engineering.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          bg-black
          text-white
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}