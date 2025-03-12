import ClientLayout from './components/ClientLayout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gaurav Rawal',
  description: 'Portolio web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={inter.className}>
      <ClientLayout>{children}</ClientLayout>
      </body>
      
    </html>
  )
}
