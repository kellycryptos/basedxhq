import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | BasedX HQ - Web3 Marketing Agency',
  description: 'Learn about BasedX HQ, a specialized marketing agency focused exclusively on the Web3 ecosystem. Our mission, philosophy, and approach to Web3 marketing.',
  keywords: ['About BasedX HQ', 'Web3 agency', 'Web3 marketing team', 'Blockchain marketing', 'Crypto marketing'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basedxhq.vercel.app/about',
    title: 'About Us | BasedX HQ - Web3 Marketing Agency',
    description: 'Learn about BasedX HQ, a specialized marketing agency focused exclusively on the Web3 ecosystem. Our mission, philosophy, and approach to Web3 marketing.',
    siteName: 'BasedX HQ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About BasedX HQ - Web3 Marketing Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | BasedX HQ - Web3 Marketing Agency',
    description: 'Learn about BasedX HQ, a specialized marketing agency focused exclusively on the Web3 ecosystem. Our mission, philosophy, and approach to Web3 marketing.',
    creator: '@basedxhq',
    images: ['/og-image.jpg']
  },
};