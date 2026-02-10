'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Twitter, Mail, Users, Zap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-gray-900"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Web3 Marketing
              </span>{' '}
              That Drives Growth
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              We help Web3 projects, DAOs, and protocols achieve product-market fit through strategic marketing, community building, and growth hacking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
              >
                Work With Us <ArrowRight size={18} />
              </Link>
              <Link 
                href="/services" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg transition-all border border-white/20"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Gradient transition layer at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Positioning Section - Dark Background */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Web3 Marketing
              </span>{' '}
              Redefined
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We don't just market Web3 projects—we build sustainable growth engines that drive real user adoption and community engagement in the decentralized ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-6">
                <div className="text-blue-500 mb-4">
                  <Zap className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Growth</h3>
                <p className="text-gray-400">
                  Data-driven marketing strategies that scale with your project's evolution
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-blue-500 mb-4">
                  <Users className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community-First</h3>
                <p className="text-gray-400">
                  Authentic engagement that builds loyal, active user bases
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-blue-500 mb-4">
                  <TrendingUp className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Measurable Impact</h3>
                <p className="text-gray-400">
                  Transparent reporting with clear ROI metrics and KPIs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web3 Marketing Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized strategies designed for the unique challenges of marketing in the decentralized ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Zap className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Building</h3>
            <p className="text-gray-400">
              Grow authentic communities around your Web3 project with strategic engagement and retention tactics.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TrendingUp className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growth Hacking</h3>
            <p className="text-gray-400">
              Deploy experimental growth strategies tailored to the Web3 audience with measurable outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Users className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strategic Partnerships</h3>
            <p className="text-gray-400">
              Forge valuable partnerships with other protocols, DAOs, and influencers in the Web3 space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why BasedX HQ */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BasedX HQ?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in marketing for the decentralized economy with proven expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Deep Web3 Expertise</h3>
            <p className="text-gray-300 mb-6">
              Our team lives and breathes Web3. We understand the nuances of crypto audiences, 
              regulatory landscapes, and the unique challenges facing blockchain projects.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Proven Track Record</h3>
            <p className="text-gray-300">
              We've helped 50+ Web3 projects reach their growth milestones with an average 
              increase of 300% in community engagement and user acquisition.
            </p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-1">1</div>
                <div>
                  <h4 className="font-medium">Strategy Development</h4>
                  <p className="text-gray-400 text-sm">Custom marketing roadmap aligned with your goals</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-1">2</div>
                <div>
                  <h4 className="font-medium">Community Activation</h4>
                  <p className="text-gray-400 text-sm">Engagement campaigns to drive user adoption</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-1">3</div>
                <div>
                  <h4 className="font-medium">Growth Execution</h4>
                  <p className="text-gray-400 text-sm">Multi-channel campaigns to accelerate growth</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-1">4</div>
                <div>
                  <h4 className="font-medium">Performance Analysis</h4>
                  <p className="text-gray-400 text-sm">Detailed reporting and optimization</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Web3 Revolution</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Connect with us on X to stay updated on the latest Web3 marketing trends and insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/basedxhq" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Twitter size={18} /> Follow @basedxhq
            </a>
            <a 
              href="mailto:basedhq0@gmail.com" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Mail size={18} /> Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}