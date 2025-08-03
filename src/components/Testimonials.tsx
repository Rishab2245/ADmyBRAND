
'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in qualified leads within the first quarter. The AI insights are incredibly accurate and actionable.',
      results: '+300% Leads'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CEO',
      company: 'GrowthLab',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'The automation features saved us countless hours while improving our campaign performance. The ROI has been phenomenal - we recovered our investment in just 2 months.',
      results: '2x ROI'
    },
    {
      name: 'Emily Watson',
      role: 'Digital Marketing Manager',
      company: 'InnovateCorp',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'What impressed me most is how intuitive the platform is. Our team was up and running in days, not weeks. The AI recommendations have consistently outperformed our manual strategies.',
      results: '+250% Engagement'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'StartupBoost',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'As a startup, we needed every advantage we could get. ADmyBRAND AI Suite gave us enterprise-level marketing capabilities at a fraction of the cost. Game-changer for our growth.',
      results: '+500% Growth'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP Marketing',
      company: 'ScaleUp Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'The predictive analytics feature is incredible. We can now anticipate market trends and adjust our campaigns proactively. Our conversion rates have never been higher.',
      results: '+180% Conversions'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Loved by
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Marketing Teams
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful businesses that have transformed their 
            marketing with our AI-powered platform.
          </p>
        </motion.div>

        {/* Main testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12"
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Testimonial content */}
            <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Author info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">{testimonials[currentIndex].name}</div>
                <div className="text-white/70">{testimonials[currentIndex].role}</div>
                <div className="text-purple-400 text-sm">{testimonials[currentIndex].company}</div>
              </div>
              <div className="hidden md:block">
                <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold text-sm">
                  {testimonials[currentIndex].results}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/10"
        >
          {[
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '10K+', label: 'Happy Customers' },
            { number: '500%', label: 'Average ROI' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;


