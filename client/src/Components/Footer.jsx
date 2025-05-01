import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4"> EduForge</h3>
          <p className="leading-relaxed">
            Empowering businesses with modern IT solutions — from web development to cloud consulting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/service" className="hover:text-white transition">Services</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-blue-500 hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-blue-500 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-blue-500 hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-600 mt-10">
        © {new Date().getFullYear()}  EduForge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
