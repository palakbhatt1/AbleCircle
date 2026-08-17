'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { SamadhanSection } from './SamadhanSection';
import { CollageGallery, CollageFrameItem } from './CollageGallery';

interface PartnersClientProps {
  customCollageImages?: CollageFrameItem[];
}

export const PartnersClient: React.FC<PartnersClientProps> = ({ customCollageImages }) => {
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
    <div ref={containerRef} className="relative bg-background overflow-x-hidden min-h-screen">
      {/* 1. Full-width Hero Banner & What does SAMADHAN do? */}
      <SamadhanSection />

      {/* 2. Partners CTA - Join Our Circle of Care (MOVED ABOVE THE COLLAGE) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-lg py-12 border-t border-outline-variant/30 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold mb-4">
              Join Our Circle of Care
            </h2>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed">
              Are you an organization dedicated to supporting families and individuals with intellectual disabilities? Let's work together to create a more inclusive and accessible ecosystem.
            </p>
            <Link href="/contact">
              <button className="bg-primary text-on-primary font-label-md text-sm px-8 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-md active:scale-95 duration-150 inline-flex items-center gap-2 font-semibold">
                <span>Become a Partner</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </Link>
          </div>

          {/* Right Animation Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <DotLottiePlayer
                src="/assets/Enjoying the fun time.json"
                autoplay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full-width Photo Collage (Now positioned below Join Our Circle of Care) */}
      <CollageGallery customImages={customCollageImages} />
    </div>
  );
};
