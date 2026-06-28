'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export const AboutClient: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      // Find all target sections and cards to apply reveal animation
      const elements = containerRef.current.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(20px)';
        htmlEl.style.transition = 'all 0.8s ease-out';
        observer.observe(htmlEl);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gradient-soft overflow-x-hidden min-h-screen">
      {/* Enhanced Background Organic Elements */}
      <div className="organic-blob bg-primary w-[500px] h-[500px] -top-48 -left-48 opacity-20"></div>
      <div className="organic-blob bg-secondary-fixed w-[600px] h-[600px] top-1/3 -right-48 opacity-30"></div>
      <div className="organic-blob bg-primary-fixed w-[400px] h-[400px] bottom-0 left-1/4 opacity-25"></div>

      {/* Section 1: About Us */}
      <section className="pt-section pb-xl px-margin-mobile md:px-lg max-w-container-max mx-auto relative reveal-on-scroll">
        <div className="max-w-[800px] relative z-10">
          <span className="font-label-md text-label-md text-primary-container bg-primary-fixed/60 px-md py-xs rounded-full mb-md inline-block shadow-sm">
            Our Story
          </span>
          <h1 className="font-headline-lg text-headline-lg md:text-headline-lg text-primary mb-lg leading-tight">
            Dedicated to those<br />who care for others.
          </h1>
          <p className="font-body-lg text-body-lg leading-relaxed text-primary/90 max-w-[600px]">
            AbleCircle began as a course project with a simple goal: to solve a real-world problem through technology. What started in the classroom quickly grew into something much bigger, inspiring us to take the idea beyond academics and build it into a platform that can create meaningful impact for caregivers and families.
          </p>
        </div>
      </section>

      {/* Section 2: Our Mentor */}
      <section className="py-section bg-gradient-lush relative overflow-hidden reveal-on-scroll">
        <div className="px-margin-mobile md:px-lg max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="order-2 md:order-1">
              <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-widest mb-sm block">
                Expert Guidance
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mb-md">Our Mentor</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed text-lg">
                AbleCircle is being developed under the guidance and constant support of <strong className="text-primary">Dr. Nirupama M. P.</strong>, whose mentorship and vision have been instrumental in shaping the platform from an idea into a growing solution.
              </p>
              <div className="flex items-center gap-md">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="font-label-md text-label-md text-secondary font-semibold italic">
                  Founder, ViniBrawn Healthcare Solutions
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative group w-full max-w-md">
                {/* Layered backgrounds for portrait focus */}
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-primary transform rotate-6 scale-105 rounded-2xl opacity-20 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-secondary-fixed transform -rotate-3 scale-105 rounded-2xl opacity-40 group-hover:rotate-0 transition-transform duration-500"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Dr. Nirupama M. P."
                  className="relative z-10 w-full h-auto rounded-2xl soft-elevation object-cover aspect-[4/5] md:aspect-square transition-all duration-700"
                  src="/assets/Nirupama-Malavalli-Prasad-.png"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Extra active blob for richness */}
        <div className="organic-blob bg-primary-fixed w-64 h-64 -bottom-32 -left-32 opacity-40"></div>
      </section>

      {/* Section 3: Meet the Team */}
      <section className="py-section px-margin-mobile md:px-lg relative reveal-on-scroll">
        <div className="max-w-container-max mx-auto text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">The Dream Team</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[700px] mx-auto text-lg">
            We're a passionate group of creators and developers dedicated to building digital experiences that actually help people in their day-to-day lives.
          </p>
        </div>
        {/* Profile Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-gutter max-w-[1100px] mx-auto relative z-10">
          {/* Card 1: Palak Bhatt */}
          <div className="flex-1 bg-surface-container-lowest p-8 rounded-2xl soft-elevation hover:-translate-y-3 transition-all duration-500 group flex flex-col border border-primary/5 mb-6 md:mb-0">
            <div className="relative mb-8 aspect-square flex items-center justify-center overflow-hidden rounded-2xl shadow-inner bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-fixed rounded-full blur-2xl opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Palak Bhatt"
                className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                src="/assets/palak_bhatt.jpeg"
              />
            </div>
            <div className="text-left mt-auto">
              <h3 className="font-bold text-headline-sm text-primary mb-xs">Palak Bhatt</h3>
              <p className="font-label-md text-label-md text-secondary font-semibold mb-6">Software Developer</p>
              <div className="h-[2px] w-full bg-primary/10 mb-6"></div>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="mailto:palakbhatt@ablecircle.org">
                  <span className="material-symbols-outlined text-[20px] leading-none select-none">alternate_email</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                  <span className="material-symbols-outlined text-[20px] leading-none select-none">share</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Shivin Khandelwal */}
          <div className="flex-1 bg-surface-container-lowest p-8 rounded-2xl soft-elevation hover:-translate-y-3 transition-all duration-500 group flex flex-col border border-primary/5 mb-6 md:mb-0">
            <div className="relative mb-8 aspect-square flex items-center justify-center overflow-hidden rounded-2xl shadow-inner bg-gradient-to-br from-secondary-fixed/20 to-secondary-fixed/5">
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-fixed rounded-full blur-2xl opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Shivin Khandelwal"
                className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                src="/assets/shivin_khandelwal.jpeg"
              />
            </div>
            <div className="text-left mt-auto">
              <h3 className="font-bold text-headline-sm text-primary mb-xs">Shivin Khandelwal</h3>
              <p className="font-label-md text-label-md text-secondary font-semibold mb-6">Software Developer</p>
              <div className="h-[2px] w-full bg-primary/10 mb-6"></div>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="mailto:shivin@ablecircle.org">
                  <span className="material-symbols-outlined text-[20px] leading-none select-none">alternate_email</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                  <span className="material-symbols-outlined text-[20px] leading-none select-none">share</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Vaishnavi Singh */}
          <div className="flex-1 bg-surface-container-lowest p-8 rounded-2xl soft-elevation hover:-translate-y-3 transition-all duration-500 group flex flex-col border border-primary/5">
            <div className="relative mb-8 aspect-square flex items-center justify-center overflow-hidden rounded-2xl shadow-inner bg-gradient-to-br from-tertiary-fixed/30 to-tertiary-fixed/10">
              <div className="absolute inset-0 bg-tertiary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-tertiary-fixed rounded-full blur-2xl opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Vaishnavi Singh"
                className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                src="/assets/vaishnavi_singh.jpeg"
              />
            </div>
            <div className="text-left mt-auto">
              <h3 className="font-bold text-headline-sm text-primary mb-xs">Vaishnavi Singh</h3>
              <p className="font-label-md text-label-md text-secondary font-semibold mb-6">Software Developer</p>
              <div className="h-[2px] w-full bg-primary/10 mb-6"></div>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="mailto:vaishnavi@ablecircle.org">
                  <span className="material-symbols-outlined text-[20px] leading-none select-none">alternate_email</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                  <span className="material-symbols-outlined text-[20px] leading-none select-none">share</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section px-margin-mobile md:px-lg max-w-container-max mx-auto reveal-on-scroll">
        <div className="bg-primary p-xl md:p-20 rounded-3xl text-center text-on-primary relative overflow-hidden shadow-2xl">
          {/* Richer Decorative Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -right-20 -top-20 w-80 h-80 border-[40px] border-on-primary rounded-full blur-md"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 border-[30px] border-primary-fixed rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary-fixed rounded-full blur-3xl"></div>
          </div>
          <h2 className="font-headline-md text-4xl md:text-5xl mb-md relative z-10 font-bold">
            Want to support our mission?
          </h2>
          <p className="font-body-md text-lg mb-lg max-w-[650px] mx-auto opacity-90 relative z-10 leading-relaxed">
            We are always looking for partners, healthcare professionals, and collaborators who share our vision for a more supportive and connected caregiving ecosystem.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply">
              <button className="bg-primary-fixed text-on-primary-fixed font-bold text-label-md px-10 py-4 rounded-full hover:scale-105 hover:bg-white transition-all shadow-lg w-full sm:w-auto">
                Become a Partner
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border-2 border-primary-fixed text-primary-fixed font-bold text-label-md px-10 py-4 rounded-full hover:bg-primary-fixed hover:text-on-primary-fixed transition-all w-full sm:w-auto">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
