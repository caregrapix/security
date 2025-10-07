
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kayjay-blue text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">KayJay Security</h3>
            <p className="text-gray-300">Pioneering fully integrated security systems, training, and manpower solutions in Sri Lanka for over 35 years.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-kayjay-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-kayjay-gold transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-kayjay-gold transition-colors">Our Solutions</Link></li>
              <li><Link to="/careers" className="hover:text-kayjay-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-kayjay-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-lg font-semibold text-kayjay-gold mb-4">Our Group</h3>
            <ul className="space-y-2">
              <li><Link to="/cash-transit" className="hover:text-kayjay-gold transition-colors">Cash Transit</Link></li>
              <li><Link to="/expertise" className="hover:text-kayjay-gold transition-colors">Our Expertise</Link></li>
              <li><Link to="/prime-movers" className="hover:text-kayjay-gold transition-colors">KayJay Prime Movers</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-kayjay-gold mb-4">Get In Touch</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p>618, Aluthmawatha Road, Colombo 15, Sri Lanka</p>
              <p>Phone: +94 (11) 252 2302</p>
              <p>Email: sales@kayjay-group.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KayJay Security. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
