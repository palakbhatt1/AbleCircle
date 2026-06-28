import React from 'react';
import { MISSION_CONTENT } from '@/lib/constants';

export const MissionSection: React.FC = () => {
  return (
    <section className="py-section bg-[#C3C3BE]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-lg text-center max-w-3xl">
        <h2 className="font-headline-md text-headline-md text-primary mb-md">
          {MISSION_CONTENT.title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {MISSION_CONTENT.description}
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
