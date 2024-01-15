import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { Providers } from '@/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carlos | Portifólio',
  description:
    'Informações sobre o perfil profissional do Carlos Roberto Landerdahl Neto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ptbr" className={inter.className}>
      <body className="antialiased bg-bgBlack">
        <Providers>
          <Header />
          <main className="dark">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
