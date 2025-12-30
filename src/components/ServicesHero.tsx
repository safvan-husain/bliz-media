import React from 'react';
import ShaderBackground from './ui/shader-background';

const ServicesHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ShaderBackground />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
          Our Services
        </h1>
        
        <blockquote className="text-xl md:text-2xl text-gray-800 font-light italic leading-relaxed">
          "We don't just build websites, we craft digital experiences that transform your business and captivate your audience."
        </blockquote>
        
        <div className="mt-8">
          <p className="text-lg text-gray-700">
            Discover how we can elevate your digital presence
          </p>
        </div>
      </div>
      
      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 z-0"></div>
    </section>
  );
};

export default ServicesHero;