import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import logo from '../assets/logo.png';

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

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 absolute w-full left-0">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                    ? 'bg-orange-50 text-orange-600'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
