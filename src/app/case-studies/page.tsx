'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, DollarSign, Eye, Mail, Twitter } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "DeFi Protocol Growth",
      problem: "New DeFi protocol struggling with low liquidity and user adoption",
      strategy: "Multi-channel marketing campaign targeting DeFi enthusiasts, yield farmers, and institutional investors",
      outcome: "300% increase in TVL and 450% growth in active users within 3 months",
      metrics: [
        { label: "TVL Growth", value: "300%" },
        { label: "User Growth", value: "450%" },
        { label: "Community Size", value: "15K+" }
      ]
    },
    {
      title: "NFT Collection Launch",
      problem: "NFT collection with limited community and low awareness in competitive market",
      strategy: "Influencer partnerships, community building, and strategic reveal campaign",
      outcome: "Sold out in 4 hours with 200 ETH volume and strong secondary market activity",
      metrics: [
        { label: "Sales Volume", value: "200 ETH" },
        { label: "Floor Price", value: "+150%" },
        { label: "Holders", value: "800+" }
      ]
    },
    {
      title: "DAO Treasury Diversification",
      problem: "DAO with concentrated treasury holdings and limited growth potential",
      strategy: "Partnership strategy and cross-chain expansion to diversify revenue streams",
      outcome: "Diversified treasury across 5 chains with 250% increase in treasury value",
      metrics: [
        { label: "Treasury Growth", value: "250%" },
        { label: "Chains Supported", value: "5" },
        { label: "Revenue Streams", value: "4" }
      ]
    }
  ];

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
            Web3 Marketing <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Case Studies</span>
          </motion.h1>
          <p className="text-xl text-gray-300">
            Real results from our Web3 marketing campaigns
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{study.title}</h3>
                <ExternalLink className="text-blue-400" size={20} />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-400 flex items-center gap-2 mb-1">
                    <TrendingUp size={16} /> Problem
                  </h4>
                  <p className="text-gray-300 text-sm">{study.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-400 flex items-center gap-2 mb-1">
                    <Eye size={16} /> Strategy
                  </h4>
                  <p className="text-gray-300 text-sm">{study.strategy}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-400 flex items-center gap-2 mb-1">
                    <DollarSign size={16} /> Outcome
                  </h4>
                  <p className="text-gray-300 text-sm">{study.outcome}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-3 gap-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-blue-400 font-bold text-lg">{metric.value}</div>
                      <div className="text-gray-400 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Info Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gray-800/30 backdrop-blur-sm p-12 rounded-2xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Looking for Detailed Case Studies?</h2>
          <p className="text-gray-300 mb-8">
            Our most successful campaigns involve confidential strategies and proprietary techniques. 
            Select case studies are available upon request for qualified prospects.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all"
          >
            Request Case Studies <ExternalLink size={18} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Accelerated</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
            <div className="text-gray-400">Avg. Growth Rate</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">250%</div>
            <div className="text-gray-400">Avg. Community Growth</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-gray-400">Client Retention</div>
          </div>
        </div>
      </section>
    </div>
  );
}