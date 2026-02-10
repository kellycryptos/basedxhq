'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp, Shield, Target, Globe, BarChart3, Network, Mail } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Community Building",
      description: "Grow authentic communities around your Web3 project with strategic engagement and retention tactics. We create organic buzz and foster long-term loyalty among your users.",
      features: ["Discord community management", "Telegram channel growth", "Social media strategy", "Influencer partnerships"]
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
      title: "Growth Hacking",
      description: "Deploy experimental growth strategies tailored to the Web3 audience with measurable outcomes. Rapid iteration and data-driven optimization for maximum user acquisition.",
      features: ["A/B testing campaigns", "Viral loop design", "Referral programs", "Tokenomics marketing"]
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Strategic Partnerships",
      description: "Forge valuable partnerships with other protocols, DAOs, and influencers in the Web3 space. Leverage synergies to expand your reach and credibility.",
      features: ["Protocol integrations", "DAO collaborations", "Cross-promotions", "Ecosystem partnerships"]
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "PR & Communications",
      description: "Navigate the complex landscape of Web3 PR with strategic communications that build trust and credibility. Crisis management and reputation building for blockchain projects.",
      features: ["Media relations", "Press release distribution", "Thought leadership", "Reputation management"]
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Global Expansion",
      description: "Scale your Web3 project internationally with culturally-aware marketing strategies. Navigate regulatory landscapes and localize your messaging for global reach.",
      features: ["Regional market entry", "Localization", "Compliance guidance", "International PR"]
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
      title: "Analytics & Optimization",
      description: "Deep analytics and performance tracking for Web3 projects. Actionable insights to optimize your marketing spend and maximize ROI.",
      features: ["KPI tracking", "Funnel analysis", "ROI optimization", "Competitive analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold">BasedX<span className="text-blue-500">HQ</span></div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <Link href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Web3 Marketing <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-300">
            Comprehensive marketing solutions designed specifically for the decentralized ecosystem
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialization Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Web3 Specializations</h2>
          <p className="text-gray-400 mb-12">
            We focus exclusively on marketing for blockchain projects, giving us deep expertise in this rapidly evolving space
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
              <Network className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">DeFi Protocols</h3>
              <p className="text-gray-400">
                Specialized marketing for decentralized finance projects, focusing on trust, security, and yield optimization.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">NFT Projects</h3>
              <p className="text-gray-400">
                Community-driven marketing strategies for NFT collections, emphasizing scarcity, utility, and cultural relevance.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Layer 1/Layer 2</h3>
              <p className="text-gray-400">
                Technical marketing for blockchain infrastructure projects, focusing on developer adoption and ecosystem growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-12 rounded-2xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Web3 Project?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how our specialized marketing services can accelerate your growth and community building efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/about" 
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">BasedX<span className="text-blue-500">HQ</span></div>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Premium Web3 marketing services for blockchain projects, DAOs, and protocols.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://x.com/basedxhq" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.4 10.6 19.1 4H17.6C16.7 4 15.9 4.2 15.2 4.5L10.7 7.6 7.2 4.5C6.5 4.2 5.7 4 4.8 4H3.3L9 10.6 3.5 17.6H5C5.9 17.6 6.7 17.4 7.4 17L11.9 14 15.4 17.1C16.1 17.4 16.9 17.6 17.8 17.6H19.3L13.4 10.6ZM8.8 13.7 5.2 16.9H6.7L9.9 13.6C10.1 13.8 10.3 14 10.5 14.2L11.2 14.9 14.2 17.6H16.2L10.7 12.4 13.9 9.1 17.4 12.3C17.2 12.1 17 11.9 16.8 11.7L16.1 11 13.1 8.3H11.1L16.6 13.5 13.4 16.8 10.2 13.7C10 13.5 9.8 13.3 9.6 13.1L8.8 13.7Z"/>
              </svg>
            </a>
            <a href="mailto:basedhq0@gmail.com" className="hover:text-blue-400">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BasedX HQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}