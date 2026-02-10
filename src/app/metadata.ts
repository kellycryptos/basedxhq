import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BasedX HQ - Web3 Marketing Agency',
  description: 'Premium Web3 marketing services for blockchain projects, DAOs, and protocols. Expert growth strategies for decentralized ecosystems.',
  keywords: ['Web3', 'marketing', 'crypto', 'blockchain', 'DAO', 'DeFi', 'NFT', 'agency'],
  authors: [{ name: 'BasedX HQ' }],
  creator: 'BasedX HQ',
  publisher: 'BasedX HQ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basedxhq.vercel.app',
    title: 'BasedX HQ - Web3 Marketing Agency',
    description: 'Premium Web3 marketing services for blockchain projects, DAOs, and protocols. Expert growth strategies for decentralized ecosystems.',
    siteName: 'BasedX HQ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BasedX HQ - Web3 Marketing Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BasedX HQ - Web3 Marketing Agency',
    description: 'Premium Web3 marketing services for blockchain projects, DAOs, and protocols. Expert growth strategies for decentralized ecosystems.',
    creator: '@basedxhq',
    images: ['/og-image.jpg']
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
  alternates: {
    canonical: 'https://basedxhq.vercel.app',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  }
};