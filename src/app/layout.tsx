import type { Metadata } from "next"
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "umilibs",
  description: "next generation umi factory",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><AntdRegistry>{children}</AntdRegistry></body>
    </html>
  )
}
