"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="top"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Background with project imagery */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-100">
          <Image
            src={currentTestimonial.projectImage}
            alt={currentTestimonial.company}
            fill
            className="object-cover opacity-50 blur-[2px]"
            priority
            sizes="100vw"
          />
        </div>
        {/* Optional: Additional scattered project images for depth */}
        <div className="absolute inset-0 opacity-30 blur-[3px]">
          <div className="absolute top-[10%] left-[5%] w-[30%] h-[40%]">
            <Image
              src={testimonials[(currentIndex + 1) % testimonials.length].projectImage}
              alt="Background project"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-[15%] right-[8%] w-[25%] h-[35%]">
            <Image
              src={testimonials[(currentIndex + 2) % testimonials.length].projectImage}
              alt="Background project"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Layer 2: Overlay/scrim for contrast */}
      <div className="absolute inset-0 bg-white/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70" />

      {/* Layer 3: Content */}
      <div className="relative z-10 w-full max-w-[640px] px-6 text-center">
        {/* Quote icon */}
        <div className="text-burgundy/30 mb-6">
          <svg
            className="w-12 h-12 mx-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote */}
        <blockquote
          className={`font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-[1.35] mb-8 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Attribution */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-burgundy text-white flex items-center justify-center font-mono text-sm font-bold">
            {currentTestimonial.avatar}
          </div>
          <div className="text-left">
            <p className="font-sans text-black font-medium text-base">
              {currentTestimonial.author}
            </p>
            <p className="font-sans text-black/60 text-sm">
              {currentTestimonial.role}, {currentTestimonial.company}
            </p>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-burgundy w-6'
                  : 'bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Divider line */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-px bg-black/20" />
        </div>

        {/* Your name and role */}
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-black font-medium mb-2">
            Rabizzy Graphics
          </h2>
          <p className="font-sans text-black/60 text-base">
            Visual Design • Brand Identity • UI/UX
          </p>
        </div>

        {/* CTA button */}
        <button
          onClick={scrollToWork}
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black text-black font-mono text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-black hover:text-white hover:gap-4"
        >
          <span>View Work</span>
          <svg
            className="w-4 h-4 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
