import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <h3 className="text-xl font-bold mb-4">ACI BAU Chapter</h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-4">
               Advancing concrete knowledge and empowering engineering students at Beirut Arab University since 2015.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-blue-400 transition-colors">Events</Link></li>
              <li><Link to="/academic" className="hover:text-blue-400 transition-colors">Academic Resources</Link></li>
              <li><Link to="/register" className="hover:text-blue-400 transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Departments</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Civil Engineering</li>
              <li>Architectural Engineering</li>
              <li>Surveying</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Beirut Arab University,<br/>Debbieh Campus,<br/>Lebanon</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>aci.chapter@bau.edu.lb</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ACI BAU Chapter. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Engineering Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;