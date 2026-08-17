import React from 'react';
import Link from 'next/link';
import { PARTNERSHIP_CONTENT } from '@/lib/constants';

export const PartnershipSection: React.FC = () => {
  return (
    <section id="partners" className="py-section bg-transparent">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-lg grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <div className="rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(15,77,50,0.08)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover aspect-video"
            alt="Caregivers and professionals collaborating"
            src="/assets/PXL_20260527_083854237.jpg"
          />
        </div>
        <div>
          <div className="inline-block bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md px-4 py-1 rounded-full mb-md">
            {PARTNERSHIP_CONTENT.badge}
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-md">
            {PARTNERSHIP_CONTENT.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
            {PARTNERSHIP_CONTENT.description}
          </p>
          <Link
            href="/contact"
            className="text-primary font-label-md text-label-md inline-flex items-center hover:underline decoration-2 underline-offset-4"
          >
            <span>{PARTNERSHIP_CONTENT.ctaText}</span>
            <span className="material-symbols-outlined ml-sm text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
