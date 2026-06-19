import './globals.css'

export const metadata = {
  title: 'Bundled Page',
  description: '5D Enterprises LLC Equipment Rentals',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
