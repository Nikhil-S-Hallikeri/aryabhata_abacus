import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pb-20 min-h-screen text-center">
            <div className="relative bg-slate-900 text-white min-h-screen flex flex-col justify-center py-16 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="https://picsum.photos/1600/900?random=23"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-slate-300 text-lg md:text-xl">We would love to hear from you.</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInLeft}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                            <p className="text-slate-600 mb-8">
                                Reach out to us for admissions, franchise inquiries, or general questions. Our team is available Monday to Saturday, 9 AM to 6 PM.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <a href="tel:+1234567890" className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
                                <div className="bg-orange-100 p-4 rounded-full text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Call Us</h3>
                                    <p className="text-slate-600 group-hover:text-orange-600 transition-colors">+1 234 567 8900</p>
                                </div>
                            </a>

                            <a href="mailto:info@academyportal.com" className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
                                <div className="bg-sky-100 p-4 rounded-full text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Email Us</h3>
                                    <p className="text-slate-600 group-hover:text-sky-600 transition-colors">info@academyportal.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all group">
                                <div className="bg-green-100 p-4 rounded-full text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">WhatsApp</h3>
                                    <p className="text-slate-600 group-hover:text-green-600 transition-colors">Chat with Support</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="bg-slate-100 rounded-xl h-full min-h-[400px] flex items-center justify-center border border-slate-200"
                    >
                        <div className="text-center p-8">
                            <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-600">Main Campus Location</h3>
                            <p className="text-slate-500">123 Education Lane, City Center</p>
                            <button className="mt-4 px-6 py-2 bg-white text-slate-900 font-medium rounded shadow-sm hover:shadow-md transition-shadow">
                                Open in Maps
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div >
    );
};

export default Contact;
