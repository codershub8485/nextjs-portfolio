import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Shubham Pawar — Software Developer',
  description: 'Portfolio of Shubham Pawar — Java, Spring Boot, React, Node.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
