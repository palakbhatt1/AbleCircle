'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVBAR_LINKS } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-surface dark:bg-surface sticky top-0 w-full bg-surface/80 backdrop-blur-md shadow-[0px_10px_30px_rgba(15,77,50,0.08)] z-50">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-lg max-w-container-max mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-2 font-headline-sm text-headline-sm font-bold text-primary"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/AbleCircle_logo.svg"
            alt="AbleCircle Logo"
            className="h-10 w-auto object-contain"
          />
          <span>AbleCircle</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-lg">
          {NAVBAR_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant font-medium hover:text-primary transition-colors duration-200'
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-md">
          <Link href="/apply">
            <button className="font-label-md text-label-md bg-primary text-on-primary rounded-full px-6 py-2 hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors duration-200">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
