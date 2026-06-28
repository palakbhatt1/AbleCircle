import React from 'react';
import { JOURNEY_CONTENT } from '@/lib/constants';

export const JourneySection: React.FC = () => {
  return (
    <section className="py-section">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-lg">
        <h2 className="font-headline-md text-headline-md text-primary mb-xl text-center">
          Our Journey of Impact
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-outline-variant transform md:-translate-x-1/2" />

          {JOURNEY_CONTENT.map((item, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === JOURNEY_CONTENT.length - 1;

            return (
              <div
                key={item.phase}
                className={`relative flex items-start mb-12 md:w-1/2 ml-12 ${
                  isEven
                    ? 'md:justify-end md:pr-12 md:ml-0'
                    : 'md:justify-start md:pl-12 md:ml-auto'
                }`}
              >
                {/* Timeline node dot anchor */}
                <div
                  className={`absolute w-6 h-6 rounded-full z-10 ${
                    isEven
                      ? 'left-[-42px] md:left-auto md:right-[-26px]'
                      : 'left-[-42px] md:left-[-10px]'
                  } ${
                    isLast
                      ? 'bg-surface border-4 border-primary'
                      : 'bg-primary border-4 border-surface'
                  }`}
                />

                {/* Content Card */}
                <div
                  className={`p-lg rounded-xl shadow-sm w-full ${
                    isLast
                      ? 'bg-surface-container-lowest border-2 border-primary-fixed-dim'
                      : 'bg-surface-container-low'
                  }`}
                >
                  <span className="text-secondary font-label-md text-label-md mb-xs block">
                    {item.phase}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
