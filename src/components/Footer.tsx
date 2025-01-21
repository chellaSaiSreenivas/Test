import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-teal-300" />
              <span className="ml-2 text-xl font-bold">VEWS</span>
            </div>
            <p className="text-teal-100">
              Victory Educational and Welfare Society works towards community empowerment and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-teal-100 hover:text-white transition">Home</Link></li>
              <li><Link to="/projects" className="text-teal-100 hover:text-white transition">Projects</Link></li>
              <li><Link to="/gallery" className="text-teal-100 hover:text-white transition">Gallery</Link></li>
              <li><Link to="/contact" className="text-teal-100 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-teal-100">
              <li>123 NGO Street</li>
              <li>New Delhi, 110001</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: info@vews.org</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-100 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-teal-100 hover:text-white transition">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-12 pt-8 text-center text-teal-100">
          <p>&copy; {new Date().getFullYear()} Victory Educational and Welfare Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;