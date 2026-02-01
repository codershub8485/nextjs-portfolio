import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./disable-sw"
import "./clear-cache"

export const metadata = {
  title: 'Shubham Pawar - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
