import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ArrowLeft, Check, Sparkles, BookOpen, Star, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getServiceBySlug, getBranches, getTestimonials } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';

import FormattedText from '../components/FormattedText';

const ServiceDetail = () => {
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [relatedBranches, setRelatedBranches] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!slug) return;
            setLoading(true);
            const [serviceData, branchesData, allTestimonials] = await Promise.all([
                getServiceBySlug(slug),
                getBranches(),
                getTestimonials()
            ]);

            setService(serviceData || null);

            if (serviceData) {
                // Filter branches that offer this service (match by ID or Slug)
                const offering = Array.isArray(branchesData) ? branchesData.filter(b =>
                    b.serviceIds?.includes(serviceData.id) ||
                    b.serviceIds?.includes(serviceData.slug)
                ) : [];
                setRelatedBranches(offering);

                // Filter testimonials relevant to the category
                const relevant = allTestimonials.filter(t => t.role.toLowerCase().includes(serviceData.category.toLowerCase()));
                setTestimonials(relevant.length > 0 ? relevant : allTestimonials.slice(0, 2));
            }
            setLoading(false);
        };
        fetchData();
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-10 w-10 border-4 border-orange-500 rounded-full border-t-transparent"></div></div>;
    }

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h2>
                <Link to="/services" className="text-orange-600 hover:underline">Back to Services</Link>
            </div>
        );
    }

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pb-20 min-h-screen overflow-x-hidden">
            <SEOHead
                title={`${service.title} | Abacus & Vedic Maths Course in Haveri`}
                description={`${service.title} at Aryabhata Academy, Haveri. ${service.description?.substring(0, 120) || 'Certified course with expert faculty. Enroll today.'}`}
                canonical={`/services/${service.slug}`}
                image={service.imageUrl}
                type="article"
                jsonLd={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Programs', url: '/services' },
                        { name: service.title },
                    ]),
                ]}
            />

            {/* Premium Hero Header */}
            <div className="relative min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60 z-10" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="relative z-20 p-8 max-w-5xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                {service.category}
                            </span>
                            {service.isSeasonal && (
                                <span className="bg-lime-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                    Seasonal Special
                                </span>
                            )}
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl">{service.title}</h1>
                        <div className="flex flex-wrap justify-center gap-8 mb-10">
                            {service.outcomes?.slice(0, 3).map((outcome, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-300 font-medium">
                                    <Sparkles size={18} className="text-orange-400" />
                                    <span>{outcome}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-bold transition-all group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Programs
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Core Info & Curriculum */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Course Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white"
                        >
                            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <BookOpen className="text-orange-500" size={32} /> Program Overview
                            </h2>
                            <div className="mb-10">
                                <FormattedText content={service.fullDescription} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.outcomes?.map((outcome, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="bg-orange-500 text-white p-1 rounded-full shrink-0">
                                            <Check size={14} />
                                        </div>
                                        <span className="font-semibold text-slate-800">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Visual Curriculum Roadmap */}
                        <section className="py-10">
                            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center md:text-left">Curriculum Roadmap</h2>
                            <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-8 before:w-px before:bg-slate-200 md:before:left-1/2">
                                {service.curriculum?.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="flex-1 w-full md:text-right">
                                            <div className={`${i % 2 !== 0 ? 'md:text-left text-left pl-16 md:pl-0' : 'text-left pl-16 md:pl-0'}`}>
                                                <span className="text-orange-500 font-black text-sm uppercase tracking-widest block mb-2">{item.level}</span>
                                                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-500">{item.details}</p>
                                            </div>
                                        </div>
                                        <div className="absolute left-8 md:static z-10 bg-white w-5 h-5 rounded-full border-4 border-orange-500 shadow-md shrink-0 flex items-center justify-center -translate-x-1/2 md:translate-x-0" />
                                        <div className="flex-1 hidden md:block" />
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Available Classes */}
                        <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
                            <h2 className="text-3xl font-black mb-8">Scheduling & Bats</h2>
                            <div className="grid gap-6">
                                {service.classes?.map(cls => (
                                    <div key={cls.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between group hover:bg-white/10 transition-colors">
                                        <div className="text-center md:text-left mb-4 md:mb-0">
                                            <h3 className="text-xl font-bold mb-2">{cls.title}</h3>
                                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
                                                <span className="flex items-center gap-1.5"><Clock size={16} className="text-orange-500" /> {cls.duration}</span>
                                                {cls.ageGroup && <span className="flex items-center gap-1.5"><Users size={16} className="text-sky-400" /> {cls.ageGroup}</span>}
                                            </div>
                                        </div>
                                        <Link to="/contact" className="px-8 py-3 bg-white text-slate-900 font-black rounded-xl hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
                                            Secure Seat
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sidebar */}
                    <aside className="space-y-8">
                        {/* Branches List */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Star className="text-yellow-400" fill="currentColor" size={20} /> Campus Availability
                            </h3>
                            {relatedBranches.length > 0 ? (
                                <ul className="space-y-4">
                                    {relatedBranches.map(branch => (
                                        <li key={branch.id}>
                                            <Link to={`/branches/${branch.slug}`} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-orange-50 group transition-all">
                                                <span className="font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">{branch.name}</span>
                                                <ArrowLeft size={16} className="rotate-180 text-slate-300 group-hover:text-orange-400 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-slate-500 text-sm">Contact our head office for latest enrollment dates at your nearest branch.</p>
                            )}
                        </div>

                        {/* Service Specific Testimonials */}
                        <div className="bg-orange-500 rounded-[2rem] p-8 text-white relative overflow-hidden">
                            <Sparkles className="absolute top-4 right-4 text-white/20" size={80} />
                            <h3 className="text-xl font-bold mb-6 relative z-10">Student Voice</h3>
                            <div className="space-y-6 relative z-10">
                                {testimonials.map(t => (
                                    <div key={t.id} className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                        <p className="text-sm italic mb-4">"{t.content}"</p>
                                        <div className="flex items-center gap-3">
                                            <img src={t.avatar} className="w-10 h-10 rounded-full border-2 border-white/50" alt={t.name} />
                                            <div>
                                                <p className="font-bold text-xs">{t.name}</p>
                                                <p className="text-[10px] opacity-70">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Enquiry */}
                        <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] text-center">
                            <HelpCircle className="mx-auto text-slate-300 mb-4" size={40} />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Have Questions?</h3>
                            <p className="text-sm text-slate-500 mb-6">Ask about batch timings, fees, or book a free demo session.</p>
                            <a href="https://wa.me/1234567890" className="w-full block py-4 bg-green-500 text-white font-black rounded-2xl shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all">
                                Chat on WhatsApp
                            </a>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
