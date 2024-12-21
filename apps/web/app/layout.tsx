import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { Metadata } from "next"
import "@repo/design-system/styles/globals.css"
//import {Toaster} from "@repo/design-system/components/ui/toaster"
import {ThemeComponent} from "@repo/design-system/components/themeProviderComponent"
import {cn} from "@repo/design-system/lib/utils"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  })
  
interface RootLayoutProps {
  children: React.ReactNode
}



export const metadata: Metadata = {
title: "Open-CRM",
description: "Open-CRM is the cutting edge/ agentic driven CRM for the modern business and independent users ",
authors: [
  {name: "Swati Malik", url: ""},
  {name: "Dhruv Malik", url: "https://frontier-tech.vercel.app"},
  ],
  creator: "shadcn",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
}
export function RootLayout({ children }: RootLayoutProps) {
return (
  <html suppressHydrationWarning>
<head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSans.variable
        )}
      >
        <ThemeComponent>
          {children}
        </ThemeComponent>
      </body>
  </html>
)



}