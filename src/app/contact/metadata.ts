import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | BasedX HQ - Web3 Marketing Agency',
  description: 'Get in touch with BasedX HQ, your premier Web3 marketing agency. Reach out to discuss your blockchain project marketing needs.',
  keywords: ['Contact BasedX HQ', 'Web3 marketing agency contact', 'crypto marketing contact', 'blockchain marketing services'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basedxhq.vercel.app/contact',
    title: 'Contact Us | BasedX HQ - Web3 Marketing Agency',
    description: 'Get in touch with BasedX HQ, your premier Web3 marketing agency. Reach out to discuss your blockchain project marketing needs.',
    siteName: 'BasedX HQ',
    images: [
      {
        url: '/og-image-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Us | BasedX HQ - Web3 Marketing Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | BasedX HQ - Web3 Marketing Agency',
    description: 'Get in touch with BasedX HQ, your premier Web3 marketing agency. Reach out to discuss your blockchain project marketing needs.',
    creator: '@basedxhq',
    images: ['/og-image-contact.jpg']
  },
};