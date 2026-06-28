import React from 'react';
import { SERVICES_CONTENT } from '@/lib/constants';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-section">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-lg">
        <h2 className="font-headline-md text-headline-md text-primary mb-xl text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICES_CONTENT.map((item) => {
            if (item.isComingSoon) {
              return (
                <div
                  key={item.id}
                  className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_10px_30px_rgba(15,77,50,0.08)] hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-tertiary text-on-tertiary text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Coming Soon
                  </div>
                  <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-md opacity-70">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mb-sm opacity-70">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-70">
                    {item.description}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_10px_30px_rgba(15,77,50,0.08)] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-md">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
