import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand & Bio */}
                    <div className="space-y-4">
                        {/* <h3 className="text-2xl font-bold text-orange-500">AcademyPortal</h3> */}
                        <img src={logo} alt="Logo" className="w-22 h-16" />
                        <p className="text-slate-400 text-sm">
                            Empowering minds through Abacus and fostering creativity through Fashion Design. Join us to unlock your potential.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-orange-500 transition-colors">All Services</Link></li>
                            <li><Link to="/branches" className="hover:text-orange-500 transition-colors">Our Branches</Link></li>
                            <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
                            <li><Link to="/blogs" className="hover:text-orange-500 transition-colors">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/services/abacus-mastery" className="hover:text-orange-500 transition-colors">Abacus Mastery</Link></li>
                            <li><Link to="/services/vedic-maths" className="hover:text-orange-500 transition-colors">Vedic Maths</Link></li>
                            <li><Link to="/services/fashion-illustration" className="hover:text-orange-500 transition-colors">Fashion Illustration</Link></li>
                            <li><Link to="/services/pattern-making" className="hover:text-orange-500 transition-colors">Pattern Making</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                                <span>123 Education Lane, City Center,<br />Main District, 54321</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-orange-500 shrink-0" />
                                <span>+1 234 567 8900</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-orange-500 shrink-0" />
                                <span>info@academyportal.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Academy Portal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
