import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-section bg-primary text-center px-margin-mobile md:px-lg mt-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-on-primary mb-md">
          Are you an NGO providing care services?
        </h2>
        <p className="font-body-lg text-body-lg text-white mb-xl">
          Join our growing network to connect with families who need your expertise and amplify
          your community impact.
        </p>
        <button className="bg-on-primary text-primary font-label-md text-label-md rounded-full px-8 py-3 hover:bg-surface-variant transition-colors duration-200">
          Become a Partner
        </button>
      </div>
    </section>
  );
};

export default CTASection;
