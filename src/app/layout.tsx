import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './css/globals.css';
import Navbar from '@/app/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shadboi',
  description: 'Shadboi',
}

const navLinks = [
  {
    icon: ''
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar></Navbar>
        </body>
    </html>
  )
}
