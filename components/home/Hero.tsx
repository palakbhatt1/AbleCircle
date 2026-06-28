"use client";

import React from 'react';
import Link from 'next/link';
import { HERO_CONTENT } from '@/lib/constants';
import { DotLottiePlayer } from '@dotlottie/react-player';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-2 pb-section overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-lg grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div className="max-w-2xl">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md">
            Your Circle of <span className="text-primary">Trust</span> and<br />Support
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl whitespace-pre-line">
            {HERO_CONTENT.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-md">
            <Link href="/apply" className="w-full sm:w-auto">
              <button className="w-full bg-primary text-on-primary font-label-md text-label-md rounded-full px-8 py-3 text-center active:scale-95 transition-transform">
                {HERO_CONTENT.secondaryCTA}
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-80 h-80 md:w-[450px] md:h-[450px]">
            <DotLottiePlayer
              src="https://lottie.host/d6bd3c8d-544c-496c-ba43-f3110500ca95/Rsr5nBUDA7.json"
              autoplay
              loop
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
