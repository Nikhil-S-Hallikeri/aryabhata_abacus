import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Play, X, Quote, Users, BookOpen, Award, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import BranchCard from '../components/BranchCard';
import Carousel from '../components/Carousel';
import SpecialClassCard from '../components/SpecialClassCard';
import { getServices, getBlogs, getBranches, getVideos, getTestimonials, getSpecialClasses } from '../services/api';

const slides = [
    {
        id: 1,
        image: "https://picsum.photos/1600/900?random=20",
        title: "Unlock Creativity & Master Mathematics",
        subtitle: "Empowering the next generation with advanced Abacus skills and professional Fashion Design training under one roof.",
        cta: "Explore Courses"
    },
    {
        id: 2,
        image: "https://picsum.photos/1600/900?random=45",
        title: "Master Mental Arithmetic",
        subtitle: "Boost brainpower, concentration, and confidence with our world-class Abacus programs.",
        cta: "Discover Abacus"
    },
    {
        id: 3,
        image: "https://picsum.photos/1600/900?random=46",
        title: "Design Your Future",
        subtitle: "Unleash your inner designer with our comprehensive Fashion Design and tailoring courses.",
        cta: "View Fashion Courses"
    }
];

const Home = () => {
    const [services, setServices] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [branches, setBranches] = useState([]);
    const [videos, setVideos] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [specialClasses, setSpecialClasses] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const [servicesData, blogsData, branchesData, videosData, testimonialsData, specialClassesData] = await Promise.all([
                getServices(),
                getBlogs(),
                getBranches(),
                getVideos(),
                getTestimonials(),
                getSpecialClasses()
            ]);
            setServices(servicesData.slice(0, 3)); // Show only 3 services
            setBlogs(blogsData.slice(0, 3)); // Show only 3 blogs
            setBranches(branchesData.slice(0, 3)); // Show only 3 branches
            setVideos(videosData);
            setTestimonials(testimonialsData);
            setSpecialClasses(specialClassesData);
            setLoading(false);
        };
        fetchData();
    }, []);


    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
            {/* Sticky Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Hero Carousel Section */}
            <section className="relative h-screen bg-slate-900 text-white overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0 z-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <img
                            src={slides[currentSlide].image}
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                            variants={staggerContainer}
                            className="max-w-3xl"
                        >
                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
                                {slides[currentSlide].title === "Unlock Creativity & Master Mathematics" ? (
                                    <>Unlock <span className="text-orange-500">Creativity</span> & <br />Master <span className="text-sky-400">Mathematics</span></>
                                ) : (
                                    slides[currentSlide].title
                                )}
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
                                {slides[currentSlide].subtitle}
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    <p className="text-slate-600 mt-2 mb-6">Choose from our specialized courses designed to enhance skills and boost creativity.</p>
                    <Link to="/services" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-1">
                        View All <ArrowRight size={18} />
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
                        {services.map(service => (
                            <motion.div key={service.id} variants={fadeInUp}>
                                <ServiceCard service={service} />
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
                        <p className="text-slate-600 mt-2 mb-6">Find a center near you to start your journey with us.</p>
                        <Link to="/branches" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-1">
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
                                    <BranchCard branch={branch} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Why Choose Us - Bento Grid Redesign */}
            <section className="bg-orange-50/50 py-24 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl -ml-48 -mb-48" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Academy?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We combine traditional expertise with modern techniques to provide the best learning environment.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                        {/* Card 1: Experience (Large) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-3 md:row-span-2 bg-white p-8 rounded-3xl shadow-xl shadow-orange-500/5 group relative overflow-hidden flex flex-col justify-between border border-white"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Users size={120} />
                            </div>
                            <div>
                                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/30">
                                    <Users size={28} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Expert Faculty</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    Our instructors bring over 10+ years of professional experience in Abacus and Fashion Designing, ensuring personalized attention for every student.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-slate-100 mt-auto">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                                        ))}
                                    </div>
                                    <p className="text-sm font-semibold text-slate-500">+15 Expert Trainers</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Curriculum (Small) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-3 bg-sky-500 p-8 rounded-3xl shadow-xl shadow-sky-500/10 text-white relative h-full overflow-hidden"
                        >
                            <div className="relative z-10">
                                <BookOpen size={32} className="mb-4" />
                                <h3 className="text-xl font-bold mb-2">Structured Curriculum</h3>
                                <p className="text-sky-50 opacity-90">Customized programs designed for all ages and skill levels.</p>
                            </div>
                            <TrendingUp className="absolute bottom-[-20px] right-[-20px] text-white/10" size={120} />
                        </motion.div>

                        {/* Card 3: Facilities (Medium) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-1.5 md:col-start-4 md:row-start-2 bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-900/10 text-white flex flex-col items-center text-center justify-center group"
                        >
                            <Sparkles className="text-orange-400 mb-4 group-hover:rotate-12 transition-transform" size={40} />
                            <h3 className="font-bold">Modern Material</h3>
                        </motion.div>

                        {/* Card 4: Branches (Small) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-1.5 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center justify-center group"
                        >
                            <MapPin className="text-sky-500 mb-4 group-hover:bounce-in transition-transform" size={40} />
                            <h3 className="font-bold text-slate-900 leading-tight">City-wide Branches</h3>
                        </motion.div>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-24 opacity-60">
                        <div className="flex items-center gap-3">
                            <Award className="text-orange-500" size={32} />
                            <span className="text-slate-800 font-bold text-xl uppercase tracking-wider">Certified Courses</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-800">
                            <div className="text-2xl font-black italic">1500+</div>
                            <span className="font-medium text-slate-500">Students Alumini</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <TrendingUp className="text-sky-500" size={32} />
                            <span className="text-slate-800 font-bold text-xl uppercase tracking-wider">Fast-track Growth</span>
                        </div>
                    </div>
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
                            Special <span className="text-orange-500">Classes</span> & Programs
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
                    ) : specialClasses.length > 2 ? (
                        <Carousel
                            items={specialClasses}
                            renderItem={(item) => (
                                <div className="px-2 h-full flex">
                                    <SpecialClassCard item={item} />
                                </div>
                            )}
                        />
                    ) : (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {specialClasses.map(item => (
                                <motion.div key={item.id} variants={fadeInUp} className="h-full">
                                    <SpecialClassCard item={item} />
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
                    className="text-3xl font-bold text-slate-900 mb-10 mt-10"
                >
                    Latest Updates
                </motion.h2>
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
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Hear from our students and parents about their experience with us.
                        </p>
                    </motion.div>

                    <Carousel
                        items={testimonials}
                        renderItem={(testimonial) => (
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative h-full">
                                <Quote className="absolute top-6 right-6 text-orange-200" size={48} />
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
                                    />
                                    <div>
                                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 italic leading-relaxed">
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
