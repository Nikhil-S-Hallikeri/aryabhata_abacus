import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.avif';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled (for background style)
            setIsScrolled(currentScrollY > 20);

            // Determine visibility (hide on scroll down, show on scroll up)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true);  // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Branches', path: '/branches' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        if (location.pathname === path) {
            return isScrolled ? 'text-orange-600 font-bold' : 'text-orange-400 font-bold';
        }
        return isScrolled ? 'text-slate-600 hover:text-orange-500' : 'text-slate-200 hover:text-white';
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            {/* <div className="bg-orange-500 p-2 rounded-lg text-white">
                                <GraduationCap size={24} />
                                
                            </div> */}
                            {/* <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                                Academy<span className={isScrolled ? 'text-orange-500' : 'text-orange-400'}>Portal</span>
                            </span> */}
                            <img src={logo} alt="Logo" className="w-22 h-16" />

                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`transition-colors duration-200 font-medium ${isActive(link.path)}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                        >
                            Enquire Now
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none transition-colors ${isScrolled ? 'text-slate-600 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Professional Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-out Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0  w-[280px] bg-white shadow-2xl flex flex-col z-[110]"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0">
                                <img src={logo} alt="Logo" className="h-10 w-auto" />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-400 hover:text-orange-500 transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <div className="p-4 flex-grow overflow-y-auto bg-white">
                                <div className="space-y-1">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`block px-4 py-4 rounded-xl text-lg font-bold transition-all ${location.pathname === link.path
                                                    ? 'bg-orange-50 text-orange-600'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 border-t border-slate-100 bg-slate-50 sticky bottom-0">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-orange-500 text-white rounded-2xl font-black shadow-lg shadow-orange-500/20"
                                >
                                    Enquire Now <GraduationCap size={20} />
                                </Link>
                                <p className="mt-4 text-center text-[10px] uppercase font-black tracking-widest text-slate-400">
                                    Aryabhata Academy © 2026
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
