import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

import { inter } from "@/lib/fonts"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://warpdivision.com"),

  title: {
    default:
      "Warp Division | AWD Dyno Tuning, Restoration & Performance Garage Hyderabad",
    template: "%s | Warp Division",
  },

  description:
    "Warp Division is Hyderabad's premier automotive performance workshop specializing in AWD Dyno Tuning, Performance Upgrades, Restoration Projects, Resto Mods, Retrofits, Carbon Fiber Parts, Race Builds, European Car Service, Volvo Specialists, Detailing, Ceramic Coating and Custom Automotive Engineering.",

  keywords: [
    "Warp Division",
    "AWD Dyno Hyderabad",
    "Dyno Tuning Hyderabad",
    "Performance Garage Hyderabad",
    "Car Tuning Hyderabad",
    "ECU Remapping Hyderabad",
    "Race Car Builds India",
    "Volvo Specialists Hyderabad",
    "European Car Service Hyderabad",
    "Restoration Projects",
    "Resto Mods",
    "Custom Car Builds",
    "Automotive Engineering",
    "Performance Upgrades",
    "Carbon Fiber Parts",
    "Premium Detailing",
    "Ceramic Coating",
    "Graphene Coating",
    "Dynostar AWD Dyno",
    "Custom Retrofits",
    "Automotive Workshop Hyderabad",
    "Supercar Tuning India",
    "Automotive Customization",
    "Car Restoration Hyderabad",
    "Race Garage India",
  ],

  authors: [
    {
      name: "Warp Division",
      url: "https://warpdivision.com",
    },
  ],

  creator: "Warp Division",
  publisher: "Warp Division",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://warpdivision.com",
  },

  openGraph: {
    title:
      "Warp Division | AWD Dyno Tuning, Restoration & Performance Garage Hyderabad",

    description:
      "Hyderabad's destination for AWD Dyno Tuning, Performance Upgrades, Race Builds, Restoration Projects, Retrofits and Automotive Engineering.",

    url: "https://warpdivision.com",

    siteName: "Warp Division",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Warp Division Performance Garage",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Warp Division | AWD Dyno Tuning, Restoration & Performance Garage",

    description:
      "Performance tuning, race builds, restorations, retrofits and precision automotive engineering.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  category: "Automotive",
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

        <GoogleAnalytics gaId="G-5GPXJK3CLN" />
      </body>
    </html>
  )
}