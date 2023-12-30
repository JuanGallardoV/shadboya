import type { Metadata } from 'next'
import './css/globals.css';
import Navbar from '@/app/components/navbar';


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
    <html lang="en" className='heightFull'>
      <body className='heightFull'>
        {children}
        <Navbar></Navbar>
        </body>
    </html>
  )
}
