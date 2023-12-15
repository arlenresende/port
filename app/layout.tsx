import type { Metadata } from 'next'
import { Oxygen } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import { ThemeProvider } from './providers'
import Footer from '@/components/footer'
import SiteConfig from '@/info/site'
import Script from 'next/script'

const oxygen = Oxygen({ subsets: ['latin'], weight: ['700'] })

export const metadata: Metadata = {
  title: {
    template: '%s | ' + SiteConfig.siteName,
    default: SiteConfig.siteName,
  },
  description: SiteConfig.description,
  openGraph: {
    title: SiteConfig.siteName,
    description: SiteConfig.description,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: SiteConfig.siteName,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt_br',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8T3PP7BV48"
      ></Script>
      <Script id="google-analytics">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
 
         gtag('config', 'G-8T3PP7BV48');
         
       `}
      </Script>

      <body className={`${oxygen.className} bg-white dark:bg-black h-full`}>
        <ThemeProvider attribute="class">
          <div className="flex flex-col justify-between h-full">
            <Navigation />
            <div className="pt-10">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
