import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import { SITE_CONFIG } from '../seo.config';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand & Bio */}
                    <div className="space-y-4">
                        <img src={logo} alt={SITE_CONFIG.name} className="w-22 h-16" />
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {SITE_CONFIG.description}
                        </p>
                        <div className="flex space-x-4">
                            {SITE_CONFIG.social.facebook && (
                                <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors">
                                    <Facebook size={22} />
                                </a>
                            )}
                            {SITE_CONFIG.social.instagram && (
                                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors">
                                    <Instagram size={22} />
                                </a>
                            )}
                            {SITE_CONFIG.social.youtube && (
                                <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors">
                                    <Youtube size={22} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400 font-medium">
                            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-orange-500 transition-colors">All Services</Link></li>
                            <li><Link to="/branches" className="hover:text-orange-500 transition-colors">Our Branches</Link></li>
                            <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
                            <li><Link to="/blogs" className="hover:text-orange-500 transition-colors">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Our Programs</h4>
                        <ul className="space-y-2 text-sm text-slate-400 font-medium">
                            <li><Link to="/services/abacus" className="hover:text-orange-500 transition-colors">Abacus Mastery</Link></li>
                            <li><Link to="/services/vedic-maths" className="hover:text-orange-500 transition-colors">Vedic Maths</Link></li>
                            <li><Link to="/services/fashion-designing" className="hover:text-orange-500 transition-colors">Fashion Designing</Link></li>
                            <li><Link to="/services/drawing-and-craft" className="hover:text-orange-500 transition-colors">Drawing & Craft</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-medium">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                                <span>{SITE_CONFIG.address.street},<br />{SITE_CONFIG.address.city}, {SITE_CONFIG.address.pincode}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-orange-500 shrink-0" />
                                <a href={`tel:${SITE_CONFIG.phone.split(',')[0]}`} className="hover:text-white transition-colors">{SITE_CONFIG.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-orange-500 shrink-0" />
                                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                    {/* <p>Designed with ❤️ for Excellence</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
