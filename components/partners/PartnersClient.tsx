'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { SamadhanSection } from './SamadhanSection';
import { CollageFrameItem } from './CollageGallery';

interface PartnersClientProps {
  customCollageImages?: Partial<Record<'frame1' | 'frame2' | 'frame3' | 'frame4' | 'frame5', CollageFrameItem>>;
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
      {/* Full-width Hero Banner & SAMADHAN Content */}
      <SamadhanSection customCollageImages={customCollageImages} />

      {/* Future Partners CTA (Matching original design) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-lg pb-24 reveal-on-scroll">
        <div className="bg-secondary-container rounded-[40px] p-8 md:p-16 text-center shadow-inner">
          <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
            Join Our Circle of Care
          </h2>
          <p className="font-body-md text-body-md text-on-secondary-container max-w-xl mx-auto mb-8 leading-relaxed">
            Are you an organization dedicated to supporting families and individuals with intellectual disabilities? Let's work together to create a more inclusive and accessible ecosystem.
          </p>
          <Link href="/apply">
            <button className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-md active:scale-95 duration-150">
              Become a Partner
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
