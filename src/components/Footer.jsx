import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">JSFS</span>
                <span className="text-xs text-gray-400">Financial Services</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for personal and business loans. We make financing simple, fast, and accessible.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/loan-services" className="text-sm hover:text-blue-400 transition-colors">Loan Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Our Services</span>
            <ul className="space-y-2">
              <li><span className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Personal Loans</span></li>
              <li><span className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Business Loans</span></li>
              <li><span className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Loan Refinancing</span></li>
              <li><span className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Debt Consolidation</span></li>
              <li><span className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Home Loans</span></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contact Info</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-500 mt-0.5" />
                <span className="text-sm">0433815156</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-500 mt-0.5" />
                <span className="text-sm">jiniavikram@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-0.5" />
                <span className="text-sm">123 Financial Street<br />Sydney, NSW 2000<br />Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 JSFS Financial Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</span>
              <span className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
