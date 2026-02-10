import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web3 Marketing Services | BasedX HQ',
  description: 'Comprehensive Web3 marketing services including community building, growth hacking, strategic partnerships, and PR for blockchain projects, DAOs, and protocols.',
  keywords: ['Web3 marketing services', 'crypto marketing', 'blockchain marketing', 'DAO marketing', 'DeFi marketing', 'NFT marketing'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basedxhq.vercel.app/services',
    title: 'Web3 Marketing Services | BasedX HQ',
    description: 'Comprehensive Web3 marketing services including community building, growth hacking, strategic partnerships, and PR for blockchain projects, DAOs, and protocols.',
    siteName: 'BasedX HQ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web3 Marketing Services | BasedX HQ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 Marketing Services | BasedX HQ',
    description: 'Comprehensive Web3 marketing services including community building, growth hacking, strategic partnerships, and PR for blockchain projects, DAOs, and protocols.',
    creator: '@basedxhq',
    images: ['/og-image.jpg']
  },
};