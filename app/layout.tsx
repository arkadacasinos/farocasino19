import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://farocasino19.vercel.app'),
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f5c46',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="85c88ecf0c49a283" />
        {/* Слот для дополнительных пользовательских тегов */}
        <link rel="preload" as="image" href="/art/faro-table.png" fetchPriority="high" />
        <meta name="apple-mobile-web-app-title" content="Faro Casino" />
      </head>
      <body className="q7v-body">{children}</body>
    </html>
  )
}
