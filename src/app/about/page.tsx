'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Award, Users, Globe, Mail, Twitter } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">BasedX HQ</span>
          </motion.h1>
          <p className="text-xl text-gray-300">
            We're a specialized marketing agency focused exclusively on the Web3 ecosystem.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed">
              At BasedX HQ, we believe that the future is decentralized. Our mission is to bridge the gap between innovative 
              blockchain projects and mainstream adoption through strategic marketing, authentic community building, and 
              data-driven growth strategies. We're passionate about helping visionary teams realize their potential in 
              the evolving Web3 landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We approach Web3 marketing differently, focusing on authenticity and long-term value creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Target className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">User-Centric Approach</h3>
            <p className="text-gray-400">
              We prioritize building genuine relationships with users over short-term metrics. 
              Our strategies focus on delivering real value to your community.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Globe className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Mindset</h3>
            <p className="text-gray-400">
              We understand that Web3 is inherently global. Our campaigns are designed to resonate 
              across diverse cultures and communities worldwide.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Award className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
            <p className="text-gray-400">
              We combine creative strategies with data-driven insights to deliver measurable 
              growth and ROI for your Web3 project.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Users className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Community First</h3>
            <p className="text-gray-400">
              We believe thriving communities are the foundation of successful Web3 projects. 
              Our strategies prioritize long-term community health and engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology for sustainable Web3 growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 pl-12 relative">
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Research & Analysis</h3>
                <p className="text-gray-400">
                  We conduct in-depth market research to understand your target audience, competitive landscape, 
                  and unique value proposition in the Web3 space.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                <p className="text-gray-400">
                  Based on our analysis, we craft a comprehensive marketing strategy tailored to your project's 
                  specific goals and target audience.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Execution & Optimization</h3>
                <p className="text-gray-400">
                  We execute multi-channel campaigns while continuously monitoring performance and optimizing 
                  for maximum ROI and user acquisition.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-xl font-semibold mb-2">Growth & Scaling</h3>
                <p className="text-gray-400">
                  As your project grows, we scale our strategies to reach new audiences while maintaining 
                  the quality of your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}