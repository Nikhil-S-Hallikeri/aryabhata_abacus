import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Play, X, Quote, Users, BookOpen, Award, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import BranchCard from '../components/BranchCard';
import Carousel from '../components/Carousel';
import { getServices, getBlogs, getBranches, getVideos, getTestimonials } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildLocalBusinessSchema } from '../components/schema/LocalBusinessSchema';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';
import { SITE_CONFIG } from '../seo.config';

const slides = [
    {
        id: 1,
        image: "/creative.avif",
        title: "Unlock Creativity & Master Mathematics",
        subtitle: "Empowering the next generation with advanced Abacus skills and professional Fashion Design training under one roof.",
        cta: "Explore Courses"
    },
    {
        id: 2,
        image: "/abacus.avif",
        title: "Master Mental Arithmetic",
        subtitle: "Boost brainpower, concentration, and confidence with our world-class Abacus programs.",
        cta: "Discover Abacus"
    },
    {
        id: 3,
        image: "/fashion.avif",
        title: "Design Your Future",
        subtitle: "Unleash your inner designer with our comprehensive Fashion Design and tailoring courses.",
        cta: "View Fashion Courses"
    }
];

const Home = () => {
    const [allServices, setAllServices] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [branches, setBranches] = useState([]);
    const [videos, setVideos] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [specialServices, setSpecialServices] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const [servicesData, blogsData, branchesData, videosData, testimonialsData] = await Promise.all([
                getServices(),
                getBlogs(),
                getBranches(),
                getVideos(),
                getTestimonials()
            ]);

            setAllServices(servicesData);

            // Filter seasonal services for the special section
            let seasonal = servicesData.filter(s => s.isSeasonal);
            if (seasonal.length === 0) {
                seasonal = servicesData; // Fallback to all if none marked seasonal
            }
            setSpecialServices(seasonal);

            setBlogs(blogsData.slice(0, 3));
            setBranches(branchesData.slice(0, 3));
            setVideos(videosData);
            setTestimonials(testimonialsData);
            setLoading(false);
        };
        fetchData();
    }, []);


    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 4.0 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className=" pb-20 min-h-screen text-center">
            {/* ── SEO: Meta Tags & Structured Data ── */}
            <SEOHead
                title="Best Abacus Classes in Haveri | Vedic Maths & Abacus Training"
                description={`Join ${SITE_CONFIG.name} — Haveri's most trusted abacus & vedic maths institute since ${SITE_CONFIG.foundedYear}. Certified courses for children across ${SITE_CONFIG.serviceAreas.join(', ')}.`}
                canonical="/"
                jsonLd={[
                    buildLocalBusinessSchema(),
                    buildBreadcrumbSchema([{ name: 'Home', url: '/' }]),
                ]}
            />

            {/* Sticky Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Hero Carousel Section */}
            <section className="relative h-screen bg-slate-900 text-white overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0 z-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <img
                            src={slides[currentSlide].image}
                            alt="Abacus and vedic maths training classes at Aryabhata Academy, Haveri, Karnataka"
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: 20, transition: { duration: 1 } }}
                            variants={staggerContainer}
                            className="max-w-3xl"
                        >
                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 3, ease: "easeOut" } }
                                }}
                                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
                            >
                                {currentSlide === 0 ? (
                                    <>Unlock <span className="text-orange-500">Creativity</span> & <br />Master <span className="text-sky-400">Mathematics</span></>
                                ) : currentSlide === 1 ? (
                                    <>Master <span className="text-orange-500">Mental</span> <br /><span className="text-sky-400">Arithmetic</span></>
                                ) : (
                                    <>Design <span className="text-orange-500">Your</span> <br /><span className="text-sky-400">Future</span></>
                                )}
                            </motion.h1>
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 3, ease: "easeOut" } }
                                }}
                                className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 4, ease: "easeOut" } }
                                }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    to="/services"
                                    className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-orange-500/30"
                                >
                                    {slides[currentSlide].cta}
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white rounded-lg font-semibold transition-all backdrop-blur-sm"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Services Overview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-10 mt-10"
                >
                    <h2 className="text-3xl font-bold text-slate-900">Our Programs</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-2 mt-2" />
                    <p className="text-slate-600 mt-2 mb-6">Choose from our specialized courses designed to enhance skills and boost creativity.</p>
                    <Link to="/services" className="text-white bg-orange-500 px-6 py-2 rounded-full font-semibold hover:text-orange-700 inline-flex items-center gap-1 hover:scale-105 transition-all">
                        View All Services <ArrowRight size={18} />
                    </Link>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-xl"></div>)}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {allServices.slice(0, 3).map(service => (
                            <motion.div key={service.id} variants={fadeInUp}>
                                <ServiceCard service={service} compact={true} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                <div className="mt-8 text-center sm:hidden">
                    <Link to="/services" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-1">
                        View All Services <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Branches Overview */}
            <section className="bg-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-slate-900">Our Branches</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-2 mt-2" />
                        <p className="text-slate-600 mt-2 mb-6">Find a center near you to start your journey with us.</p>
                        {/* Local SEO: city mention for Google indexing */}
                        <p className="text-sm text-slate-400 mt-1">
                            Serving students in {SITE_CONFIG.serviceAreas.join(', ')} and across Haveri district, Karnataka.
                        </p>
                        <Link to="/branches" className="text-white bg-orange-500 px-6 py-2 rounded-full font-semibold hover:text-orange-700 hover:scale-105 transition-all inline-flex items-center gap-1 mt-5">
                            View All Branches <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-xl"></div>)}
                        </div>
                    ) : (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {branches.map(branch => (
                                <motion.div key={branch.id} variants={fadeInUp} className="h-full">
                                    <BranchCard branch={branch} compact={true} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Why Choose Us - Modern Traditional Redesign */}
            <section className="bg-white py-24 relative overflow-hidden">
                {/* Traditional Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5.89 19.11L55.11 25 35.89 30.89 30 50l-5.89-19.11L5 25l19.11-5.89z' fill='%23f59e0b' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <span className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-bold tracking-widest uppercase mb-4 inline-block border border-amber-200">
                                Tradition of Excellence
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
                        >
                            Where Wisdom Meets <br />
                            <span className="text-orange-500">Modern Potential</span>
                        </motion.h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6" />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 max-w-2xl mx-auto text-lg"
                        >
                            At Aryabhata Academy, we believe in nurturing not just skills, but the values and focus that last a lifetime.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cultural/Heritage Focus */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="animated-border-card bg-amber-50 p-10 rounded-[2.5rem] border border-amber-100 flex flex-col items-center text-center group transition-all hover:shadow-2xl hover:shadow-orange-500/20"
                        >
                            <div className="w-20 h-20 bg-amber-500 rounded-3xl rotate-3 flex items-center justify-center text-white mb-8 shadow-xl shadow-amber-500/30 group-hover:rotate-0 transition-transform duration-500">
                                <Award size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Values & Sanskāra</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We go beyond textbooks to instill discipline, focus, and cultural appreciation in every child, building a strong foundation of character.
                            </p>
                        </motion.div>

                        {/* Proven Results */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="animated-border-card bg-orange-50 p-10 rounded-[2.5rem] border border-orange-100 flex flex-col items-center text-center group transition-all hover:shadow-2xl hover:shadow-orange-500/20"
                        >
                            <div className="w-20 h-20 bg-orange-600 rounded-3xl -rotate-3 flex items-center justify-center text-white mb-8 shadow-xl shadow-orange-600/30 group-hover:rotate-0 transition-transform duration-500">
                                <TrendingUp size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Holistic Success</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our unique blend of Abacus concentration and Creative arts ensures balanced brain development, seen in our 1500+ successful alumni.
                            </p>
                        </motion.div>

                        {/* Expert Mentorship */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="animated-border-card bg-sky-50 p-10 rounded-[2.5rem] border border-sky-100 flex flex-col items-center text-center group transition-all hover:shadow-2xl hover:shadow-orange-500/20"
                        >
                            <div className="w-20 h-20 bg-sky-600 rounded-3xl rotate-3 flex items-center justify-center text-white mb-8 shadow-xl shadow-sky-600/30 group-hover:rotate-0 transition-transform duration-500">
                                <Users size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Master Mentors</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Not just teachers, but mentors with decades of experience who understand the psychological needs of growing children and creative minds.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-20 p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-sky-400">
                                <Sparkles size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">A Legacy of Learning</h4>
                                <p className="text-slate-400">Trusted by parents for over 15+ years in Haveri.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-12">
                            <div className="text-center">
                                <div className="text-3xl font-black text-orange-500">100%</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">Commitment</div>
                            </div>
                            <div className="text-center border-l border-white/10 pl-12">
                                <div className="text-3xl font-black text-sky-400">15+</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">Centers</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Franchise & Branches Preview */}
            {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Presence</h2>
                    <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
                        We are growing rapidly. Visit one of our branches nearest to you or inquire about starting your own franchise.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/branches" className="block group">
                            <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-all group-hover:border-orange-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Locate a Branch</h3>
                                <p className="text-slate-500 mb-4">Find a center near your home.</p>
                                <span className="text-orange-500 font-medium group-hover:underline">Search Now</span>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="block group cursor-pointer"
                    >
                        <div className="bg-slate-900 p-8 rounded-xl hover:shadow-xl transition-all">
                            <h3 className="text-xl font-bold text-white mb-2">Become a Franchise</h3>
                            <p className="text-slate-400 mb-4">Start your journey with us.</p>
                            <Link to="/contact" className="text-sky-400 font-medium group-hover:underline">Contact for Franchise</Link>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            {/* Experience Abacus - Immersive Video Section */}
            <section className="bg-slate-50 py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Video Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500 to-sky-500 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white">
                                <video
                                    src="/WhatsApp Video 2026-01-31 at 2.11.51 PM.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover aspect-[1/1] max-h-[600px] lg:max-h-none"
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-100 px-4 py-1.5 rounded-full">
                                    Digital Learning
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight">
                                    Experience the <br />
                                    <span className="text-sky-500">Power of Abacus</span>
                                </h2>
                                <p className="text-slate-600 text-lg mt-6 leading-relaxed">
                                    Watch how our students master complex calculations with lightning speed and precision. Our training methods are designed to activate both sides of the brain, enhancing concentration and memory.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="grid grid-cols-2 gap-8"
                            >
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-slate-900">Mental</div>
                                    <div className="text-slate-500 font-medium">Calculation Mastery</div>
                                </div>
                                <div className="space-y-2 divider-l pl-8 border-l border-slate-200">
                                    <div className="text-3xl font-bold text-slate-900">Brain</div>
                                    <div className="text-slate-500 font-medium">Focus Development</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="pt-4"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all hover:gap-4 shadow-xl shadow-slate-900/20"
                                >
                                    Book a Free Demo <Play size={18} fill="currentColor" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Classes Section */}
            <section className="bg-slate-900 py-24 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Available <span className="text-orange-500">Classes</span> & Programs
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Don't miss out on our limited-time seasonal workshops and enrichment camps.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2].map(i => (
                                <div key={i} className="h-[400px] bg-white/5 animate-pulse rounded-[2rem]" />
                            ))}
                        </div>
                    ) : specialServices.length > 2 ? (
                        <Carousel
                            items={specialServices}
                            renderItem={(service) => (
                                <ServiceCard service={service} compact={true} />
                            )}
                        />
                    ) : (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        >
                            {specialServices.map(service => (
                                <motion.div key={service.id} variants={fadeInUp} className="h-full">
                                    <ServiceCard service={service} compact={true} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                </div>
            </section>

            {/* Latest Blogs */}

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-slate-900 mb-4 mt-10"
                >
                    Latest Updates
                </motion.h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6 mt-2" />
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2].map(i => <div key={i} className="h-80 bg-slate-200 animate-pulse rounded-xl"></div>)}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {blogs.map(blog => (
                            <motion.div key={blog.id} variants={fadeInUp}>
                                <BlogCard blog={blog} />
                            </motion.div>
                        ))}
                        {/* Promo Card for Blog */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-sky-50 rounded-xl p-8 flex flex-col justify-center items-center text-center border border-sky-100"
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Want more insights?</h3>
                            <p className="text-slate-600 mb-6">Explore our full collection of articles on education and fashion trends.</p>
                            <Link to="/blogs" className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                                View All Blogs
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Video Gallery Section */}
            <section className="bg-slate-900 py-16 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Life at Aryabhata</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-2 mt-2" />
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Watch our students in action, from abacus competitions to fashion shows.
                        </p>
                    </motion.div>

                    <Carousel
                        items={videos}
                        renderItem={(video) => (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative cursor-pointer group rounded-xl overflow-hidden shadow-2xl h-full"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-orange-500 transition-colors">
                                        <Play fill="white" className="text-white relative left-0.5" size={32} />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-semibold truncate">{video.title}</h3>
                                </div>
                            </motion.div>
                        )}
                    />
                </div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                src={selectedVideo.videoUrl}
                                title={selectedVideo.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Testimonials Section */}
            <section className="py-16 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What People Say</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-2 mt-2" />
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Hear from our students and parents about their experience with us.
                        </p>
                    </motion.div>

                    <Carousel
                        items={testimonials}
                        renderItem={(testimonial) => (
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative h-full w-full">
                                <Quote className="absolute top-6 right-6 text-orange-200" size={48} />
                                <div className="flex items-center gap-4 mb-6">
                                    {/* <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
                                    /> */}
                                    <div>
                                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 italic leading-relaxed line-clamp-6">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        )}
                    />
                </div>
            </section>

        </div >
    );
};

export default Home;
