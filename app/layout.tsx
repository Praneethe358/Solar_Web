import { Navbar } from '@/components/Navbar'; import { Footer } from '@/components/Footer'; import { ContactCTA } from '@/components/ContactCTA'; import type { Metadata } from 'next'; import { Inter } from 'next/font/google'; import './globals.css'; const inter = Inter({ subsets: ['latin'] }); export const metadata: Metadata = {
  title: {
    default: 'Super Solar Fencing | Premium Solar Security Solutions',
    template: '%s | Super Solar Fencing'
  },
  description: 'Leading provider of high-quality solar fencing materials, solar panels, energizers, and installation services in Coimbatore, Tamil Nadu. Secure your property with reliable solar solutions.',
  keywords: ['solar fencing', 'solar fencing materials', 'Coimbatore solar fencing', 'agricultural solar fence', 'security fencing', 'solar panel installation', 'solar fence energizer'],
  authors: [{ name: 'Super Solar Fencing' }],
  creator: 'Super Solar Fencing',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://supersolarfence.com',
    title: 'Super Solar Fencing | Premium Solar Security Solutions',
    description: 'Leading provider of high-quality solar fencing materials, solar panels, energizers, and installation services in Coimbatore. Secure your property with reliable solar solutions.',
    siteName: 'Super Solar Fencing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/fav-icon.svg' }
}; export default function RootLayout({ children }: { children: React.ReactNode }) { return ( <html lang='en'><body className={`${inter.className} pt-[calc(3.5rem+env(safe-area-inset-top))] pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pt-0 md:pb-0`}> <Navbar /> <main className='min-h-screen'>{children}</main> <ContactCTA /> <Footer /> </body></html> ); }
