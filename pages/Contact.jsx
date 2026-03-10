import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitEnquiry } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildLocalBusinessSchema } from '../components/schema/LocalBusinessSchema';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';

const Contact = () => {
    // Animation Variants
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const result = await submitEnquiry(formData);
            console.log('Submission Success:', result);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Full Submission Error:', error);
            setStatus('error');
            // Show more details in console for the user to copy
            if (error.message) console.log('Error Message:', error.message);
            if (error.details) console.log('Error Details:', error.details);
            if (error.hint) console.log('Error Hint:', error.hint);
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
            <SEOHead
                title="Contact Us | Aryabhata Abacus Academy - Haveri"
                description="Contact Aryabhata Abacus Academy in Haveri, Karnataka. Call, WhatsApp, or send a message for admissions, franchise inquiries, and course information."
                canonical="/contact"
                jsonLd={[
                    buildLocalBusinessSchema(),
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Contact', url: '/contact' },
                    ]),
                ]}
            />
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

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white"
                    >
                        <h2 className="text-3xl font-black text-slate-900 mb-8 text-left">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 ml-1">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 ml-1">How can we help?</label>
                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your interest..."
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                disabled={status === 'loading'}
                                type="submit"
                                className={`w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-3 transition-all shadow-xl ${status === 'success' ? 'bg-green-500 shadow-green-500/30' :
                                    status === 'error' ? 'bg-red-500 shadow-red-500/30' :
                                        'bg-slate-900 hover:bg-orange-500 shadow-slate-900/20'
                                    }`}
                            >
                                {status === 'loading' ? (
                                    <div className="animate-spin h-6 w-6 border-2 border-white rounded-full border-t-transparent"></div>
                                ) : status === 'success' ? (
                                    <>Message Sent! <CheckCircle2 size={20} /></>
                                ) : status === 'error' ? (
                                    <>Something went wrong</>
                                ) : (
                                    <>Send Enquiry <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div >
    );
};

export default Contact;
