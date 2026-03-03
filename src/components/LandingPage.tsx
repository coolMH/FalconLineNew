import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, Globe, Smartphone, BarChart3, ArrowRight, CheckCircle2, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function LandingPage() {
  const whatsappNumber = "971507151536";
  const email = "contact@falconline.online";
  
  // WhatsApp API link
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailLink = `mailto:${email}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-slate-900">
                Falcon<span className="text-emerald-600">Line</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">Services</a>
              <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">About</a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">Contact</a>
            </div>
            <div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
              Elevating Brands in the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Digital UAE Landscape
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We are FalconLine. A premier digital agency crafting high-impact social media strategies and cutting-edge web & app solutions for forward-thinking businesses.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center group"
              >
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-lg text-slate-600">Comprehensive digital solutions tailored for the UAE market.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Social Media Marketing</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dominate your niche with data-driven social strategies. We handle content creation, community management, and paid advertising campaigns that convert.
              </p>
              <ul className="space-y-3">
                {['Content Strategy', 'Paid Ad Campaigns', 'Community Management', 'Influencer Marketing'].map((item) => (
                  <li key={item} className="flex items-center text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Web & App Development</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Build your digital fortress. We develop responsive, high-performance websites and mobile applications that provide seamless user experiences.
              </p>
              <ul className="space-y-3">
                {['Custom Website Design', 'Mobile App Development', 'E-commerce Solutions', 'UI/UX Design'].map((item) => (
                  <li key={item} className="flex items-center text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us / UAE Focus */}
      <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Business in the UAE</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Understanding the local market is key to success. FalconLine combines global standards with local insights to help your business thrive in Dubai, Abu Dhabi, and beyond.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">100%</div>
                  <div className="text-slate-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">24/7</div>
                  <div className="text-slate-400">Support Availability</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4">Ready to scale?</h3>
                <p className="text-slate-400 mb-6">
                  Let's discuss how we can transform your digital presence today.
                </p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
          <p className="text-slate-600 mb-12 text-lg">
            Whether you have a question or want to start a project, our team is ready to help.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">WhatsApp</h3>
              <p className="text-slate-500 mt-2">+971 50 715 1536</p>
              <span className="mt-4 text-emerald-600 font-medium text-sm">Chat now &rarr;</span>
            </a>

            <a 
              href={emailLink}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Email</h3>
              <p className="text-slate-500 mt-2">contact@falconline.online</p>
              <span className="mt-4 text-blue-600 font-medium text-sm">Send email &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              Falcon<span className="text-emerald-600">Line</span>
            </span>
            <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} FalconLine Digital Agency. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
