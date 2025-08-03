import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
  description: 'Revolutionary AI-powered marketing platform that delivers 500% ROI increase. Advanced analytics, smart targeting, and automated campaigns for modern businesses.',
  keywords: 'AI marketing, digital marketing, automation, analytics, ROI, campaigns, artificial intelligence',
  authors: [{ name: 'ADmyBRAND Team' }],
  creator: 'ADmyBRAND',
  publisher: 'ADmyBRAND',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Revolutionary AI-powered marketing platform that delivers 500% ROI increase.',
    url: 'https://admybrand-ai-suite.vercel.app',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Revolutionary AI-powered marketing platform that delivers 500% ROI increase.',
    images: ['/og-image.jpg'],
    creator: '@admybrand',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="pt-16 md:pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

