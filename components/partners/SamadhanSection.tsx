'use client';

import React from 'react';
import Link from 'next/link';

export const SamadhanSection: React.FC = () => {
  return (
    <div className="w-full">
      {/* FULL-WIDTH HERO SECTION */}
      <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden bg-slate-900">
        {/* Full-width Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/samadhan/PXL_20260527_083854237.jpg"
          alt="SAMADHAN India Team & Community"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        {/* SQUARED OVERLAY BOX */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 lg:left-20 max-w-md md:max-w-lg bg-white/95 backdrop-blur-md p-6 md:p-10 shadow-2xl z-10 border border-white/60 text-left rounded-none">
          {/* Featured Partner */}
          <div className="inline-block bg-secondary-container text-on-secondary-container font-label-sm text-xs font-bold px-3 py-1 uppercase tracking-wider mb-3">
            Featured Partner
          </div>

          {/* Heading */}
          <h1 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold mb-2">
            SAMADHAN India
          </h1>

          {/* Subheading */}
          <p className="font-headline-md text-base md:text-lg text-primary font-bold mb-4 leading-snug">
            Supporting families. Strengthening communities.
          </p>

          {/* Description */}
          <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
            Established in 1981 in New Delhi, Samadhan India is a non-profit organization focused on improving the lives of persons with intellectual disabilities, particularly those from low-income communities, and their mothers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link href="/apply">
              <button className="bg-primary text-on-primary font-label-md text-xs md:text-sm px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-primary/90 transition-all shadow-md inline-flex items-center gap-2 font-semibold active:scale-95">
                <span>Apply at SAMADHAN</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </Link>

            <Link href="/contact">
              <button className="border-2 border-primary text-primary hover:bg-primary/5 font-label-md text-xs md:text-sm px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all inline-flex items-center gap-2 font-semibold active:scale-95">
                <span>Partner with us</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT BELOW HERO SECTION */}
      <div id="samadhan-details" className="max-w-container-max mx-auto px-margin-mobile md:px-lg pt-16 pb-8">
        {/* SECTION: What does SAMADHAN do? */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold mb-4">
            What does SAMADHAN do?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            SAMADHAN works with children with intellectual disabilities and their families, with a focus on making essential support accessible to underserved communities.
          </p>
        </div>

        {/* Clean Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto text-left">
          {/* Column 1: Community Outreach */}
          <div className="border-t-2 border-primary/30 pt-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
                  01 • Outreach
                </span>
                <span className="material-symbols-outlined text-primary text-xl">campaign</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">
                Community Outreach
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Raises awareness about intellectual disability and works directly with families and communities to connect them with relevant support and resources.
              </p>
            </div>
          </div>

          {/* Column 2: Therapy & Education */}
          <div className="border-t-2 border-primary/30 pt-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
                  02 • Education
                </span>
                <span className="material-symbols-outlined text-primary text-xl">child_care</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">
                Therapy & Education
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Provides <strong className="text-primary font-semibold">therapy, special education, and early intervention</strong> services to support the development and well-being of children with intellectual disabilities.
              </p>
            </div>
          </div>

          {/* Column 3: Advocacy & Inclusion */}
          <div className="border-t-2 border-primary/30 pt-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
                  03 • Inclusion
                </span>
                <span className="material-symbols-outlined text-primary text-xl">groups</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">
                Advocacy & Inclusion
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Promotes inclusion through <strong className="text-primary font-semibold">advocacy in mainstream schools</strong>, family support, and community-based initiatives that help create more inclusive environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
