'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Twitter, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the form data to your backend here
      console.log('Form submitted:', formData);
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-300">
            Ready to elevate your Web3 project? Reach out to our team today.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">basedhq0@gmail.com</p>
                  <a 
                    href="mailto:basedhq0@gmail.com" 
                    className="text-blue-400 hover:underline mt-1 inline-block"
                  >
                    Send us a message
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                  <Twitter className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">X (Twitter)</h3>
                  <p className="text-gray-400">@basedxhq</p>
                  <a 
                    href="https://x.com/basedxhq" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mt-1 inline-block"
                  >
                    Follow us on X
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Global Web3 Marketing Agency</p>
                  <p className="text-gray-400">Operating across multiple time zones</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Our Process</h3>
              <p className="text-gray-400 mb-4">
                Once you submit your inquiry, our team will review your project and get back to you within 24 hours.
              </p>
              <p className="text-gray-400">
                We typically schedule an initial consultation to understand your goals and see if there's a fit for collaboration.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg mb-6">
                  <p className="text-green-400">Thank you for your message! Our team will get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-gray-300 mb-2">Company/Project</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company or project name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project and marketing goals..."
                  ></textarea>
                </div>
                
                {submitError && (
                  <div className="text-red-400 mb-4">{submitError}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">What types of Web3 projects do you work with?</h3>
              <p className="text-gray-400">
                We work with a variety of Web3 projects including DeFi protocols, NFT collections, DAOs, Layer 1/Layer 2 blockchains, 
                gaming projects, and other decentralized applications. Our expertise spans across the entire Web3 ecosystem.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">How long does a typical marketing campaign take?</h3>
              <p className="text-gray-400">
                Campaign timelines vary depending on the scope and objectives, but most of our projects run for 3-6 months. 
                We believe in sustainable growth over quick wins, so we focus on strategies that build long-term value.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">What results can I expect?</h3>
              <p className="text-gray-400">
                Our clients typically see 200-500% growth in community size, increased user engagement, and improved brand recognition. 
                We provide detailed analytics and reporting to track your progress throughout the partnership.
              </p>
            </div>
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