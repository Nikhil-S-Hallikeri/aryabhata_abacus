import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useAnimation, animate } from 'framer-motion';

const Carousel = ({ items, renderItem, className = "" }) => {
    // Clone items to create an infinite loop effect
    // We need at least 3 sets to ensure smooth scrolling in both directions
    const extendedItems = [...items, ...items, ...items, ...items];
    const scrollContainerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    // Auto-scroll configuration
    const scrollSpeed = 1; // Pixels per frame (adjust for speed)
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId;

        const scrollLoop = () => {
            if (!isPaused && !isScrolling) {
                container.scrollLeft += scrollSpeed;

                // Reset position for infinite loop effect
                const oneSetWidth = container.scrollWidth / 4;

                // If we've scrolled past the second set, jump back to the first
                if (container.scrollLeft >= oneSetWidth * 2) {
                    container.scrollLeft -= oneSetWidth;
                }
                // If we're at the very beginning (rare with auto-scroll right), jump forward
                else if (container.scrollLeft <= 0) {
                    container.scrollLeft += oneSetWidth;
                }
            }
            animationFrameId = requestAnimationFrame(scrollLoop);
        };

        // Initial scroll position to the middle set (Set 2)
        if (container.scrollLeft === 0) {
            container.scrollLeft = container.scrollWidth / 4;
        }

        animationFrameId = requestAnimationFrame(scrollLoop);

        return () => cancelAnimationFrame(animationFrameId);
    }, [items, isPaused, isScrolling]);


    const handleManualScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setIsScrolling(true);
        const { clientWidth } = container;
        const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;

        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        // Reset auto-scroll after manual interaction
        setTimeout(() => {
            setIsScrolling(false);
            // Re-check bounds after manual scroll
            const oneSetWidth = container.scrollWidth / 4;
            if (container.scrollLeft >= oneSetWidth * 3) {
                container.scrollLeft -= oneSetWidth;
            } else if (container.scrollLeft <= oneSetWidth * 0.5) {
                container.scrollLeft += oneSetWidth;
            }
        }, 500);
    };

    return (
        <div
            className={`relative group ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Left Button */}
            <button
                onClick={() => handleManualScroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-3 bg-white/90 shadow-lg rounded-full text-slate-800 hover:bg-white hover:scale-110 transition-all hidden md:flex items-center justify-center border border-slate-100 opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide px-4 items-stretch"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
                onMouseDown={() => setIsPaused(true)}
                onMouseUp={() => setIsPaused(false)}
            >
                {extendedItems.map((item, index) => (
                    <motion.div
                        key={`${item.id}-${index}`}
                        className="shrink-0 w-[280px] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] h-full flex mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {renderItem(item)}
                    </motion.div>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={() => handleManualScroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-3 bg-white/90 shadow-lg rounded-full text-slate-800 hover:bg-white hover:scale-110 transition-all hidden md:flex items-center justify-center border border-slate-100 opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;
