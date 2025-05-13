"use client";

import type React from "react";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "DigiPOS has completely transformed how we manage our restaurant chain. The real-time analytics and multi-location support have been game-changers for our business.",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "Urban Plate Group",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    id: 2,
    quote:
      "The inventory management system is incredibly intuitive. We've reduced food waste by 30% since implementing DigiPOS in our kitchen operations.",
    author: "Michael Chen",
    position: "Executive Chef",
    company: "Fusion Kitchen",
    rating: 5,
    image: "/professional-chef-portrait.png",
  },
  {
    id: 3,
    quote:
      "Customer service is exceptional. Whenever we've had questions, the support team responds quickly and effectively. The onboarding process was smooth and well-organized.",
    author: "Aisha Patel",
    position: "Restaurant Owner",
    company: "Spice & Slice",
    rating: 5,
    image: "/placeholder.svg?key=3p1tb",
  },
  {
    id: 4,
    quote:
      "The mobile app has made managing our food truck business so much easier. I can check sales and inventory from anywhere, even when we're at different locations throughout the day.",
    author: "Carlos Rodriguez",
    position: "Owner",
    company: "Street Eats Co.",
    rating: 4,
    image: "/placeholder.svg?key=c7hqm",
  },
  {
    id: 5,
    quote:
      "We've tried several POS systems over the years, but DigiPOS offers the best combination of features, ease of use, and reliability. The staff training time was minimal.",
    author: "Emma Wilson",
    position: "General Manager",
    company: "Harborview Restaurant",
    rating: 5,
    image: "/professional-woman-manager.png",
  },
  {
    id: 6,
    quote:
      "The integration with our accounting software has saved us countless hours of manual data entry. The reporting features give us insights we never had before.",
    author: "David Kim",
    position: "Financial Director",
    company: "Taste Group Holdings",
    rating: 5,
    image: "/asian-business-professional.png",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // For auto-scrolling
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate the testimonials array to create the illusion of infinite scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Determine how many items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1280) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }

      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext();
    } else if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrev();
    }
  };

  // Calculate the offset for the slider
  const offset = -currentIndex * (100 / visibleItems);

  // Calculate the width of each item based on visible items
  const itemWidth = 100 / visibleItems;

  return (
    <section className="py-20 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-block text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from restaurant owners and
            managers who have transformed their operations with DigiPOS.
          </p>
        </div>
      </div>

      <div className="relative w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-indigo-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:-left-4"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-indigo-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:-right-4"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slider container */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={sliderRef}
        >
          <motion.div
            className="flex"
            initial={false}
            animate={{
              x: `${offset}%`,
            }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 px-3 py-4"
                style={{ width: `${itemWidth}%` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-indigo-600 w-6" : "bg-indigo-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Join over 2,000 restaurants worldwide who trust DigiPOS for their
          business operations
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-xl p-6 h-full flex flex-col">
      <div className="mb-4 flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="relative mb-6 flex-grow">
        <Quote className="absolute top-0 left-0 h-8 w-8 text-indigo-200 -translate-x-2 -translate-y-2 opacity-50" />
        <p className="text-gray-700 relative z-10 italic">
          {testimonial.quote}
        </p>
      </div>

      <div className="flex items-center mt-4">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-100">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.author}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          <div className="text-sm text-gray-500">
            {testimonial.position}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
