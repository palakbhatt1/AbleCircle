import React from 'react';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import PartnershipSection from '@/components/home/PartnershipSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Page background SVG - confined to Hero section height with 35% opacity */}
      <div
        className="absolute inset-x-0 z-0 bg-no-repeat pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "url('/assets/AbleCircle_bgg.svg')",
          backgroundPosition: "center top",
          backgroundSize: "100% 100%",
          top: "0px",
          height: "550px",
        }}
      />
      <div className="relative z-10">
        <Hero />
        <ServicesSection />
        <PartnershipSection />
        <CTASection />
      </div>
    </div>
  );
}
