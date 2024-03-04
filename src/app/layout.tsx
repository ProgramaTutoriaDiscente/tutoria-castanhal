import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/nav-bar/nav-bar'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Tutoria', 'Castanhal', 'UFPA'],
  authors: [
    { name: 'Aridan Pantoja', url: 'https://aridan.dev' },
    { name: 'Alícia Maia', url: 'https://github.com/Ali-Maia' },
  ],
  creator: 'Programa de Tutoria Discente',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={cn('relative h-full antialiased', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 flex-grow">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
