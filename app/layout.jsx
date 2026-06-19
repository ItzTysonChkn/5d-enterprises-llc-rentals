import './globals.css'
import { Barlow_Condensed } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

export const metadata = {
  title: '5D Enterprises LLC — Equipment Rentals | San Luis Valley, CO',
  description:
    'Rent mini excavators, skid loaders, trailers, scissor lifts & more in the San Luis Valley, Colorado. Call or text 719-850-1498.',
}

export const viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} bg-[#0d0d0d]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
