import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web3 Marketing Case Studies | BasedX HQ',
  description: 'Real results from our Web3 marketing campaigns. Explore our case studies showcasing successful growth strategies for DeFi protocols, NFT collections, and DAOs.',
  keywords: ['Web3 case studies', 'crypto marketing results', 'blockchain marketing examples', 'DeFi marketing', 'NFT marketing case studies'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basedxhq.vercel.app/case-studies',
    title: 'Web3 Marketing Case Studies | BasedX HQ',
    description: 'Real results from our Web3 marketing campaigns. Explore our case studies showcasing successful growth strategies for DeFi protocols, NFT collections, and DAOs.',
    siteName: 'BasedX HQ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web3 Marketing Case Studies | BasedX HQ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 Marketing Case Studies | BasedX HQ',
    description: 'Real results from our Web3 marketing campaigns. Explore our case studies showcasing successful growth strategies for DeFi protocols, NFT collections, and DAOs.',
    creator: '@basedxhq',
    images: ['/og-image.jpg']
  },
};