import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
  icon: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="" lang="en">
      <body className="{inter.className} h-screen w-screen bg-red text-center  text-white">
        {children}
      </body>
    </html>
  )
}