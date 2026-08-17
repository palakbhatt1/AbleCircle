'use client';

import React from 'react';

export interface CollageFrameItem {
  id: string;
  src: string;
  alt: string;
}

const COLLAGE_PHOTOS: CollageFrameItem[] = [
  {
    id: 'photo1',
    src: '/assets/samadhan/1.jpg',
    alt: 'Samadhan India Photo 1',
  },
  {
    id: 'photo2',
    src: '/assets/samadhan/2.jpg',
    alt: 'Samadhan India Photo 2',
  },
  {
    id: 'photo3',
    src: '/assets/samadhan/3.jpg',
    alt: 'Samadhan India Photo 3',
  },
  {
    id: 'photo4',
    src: '/assets/samadhan/4.png',
    alt: 'Samadhan India Photo 4',
  },
  {
    id: 'photo5',
    src: '/assets/samadhan/5.jpg',
    alt: 'Samadhan India Photo 5',
  },
  {
    id: 'photo6',
    src: '/assets/samadhan/6.jpg',
    alt: 'Samadhan India Photo 6',
  },
  {
    id: 'photo7',
    src: '/assets/samadhan/7.jpg',
    alt: 'Samadhan India Photo 7',
  },
  {
    id: 'photo8',
    src: '/assets/samadhan/8.jpg',
    alt: 'Samadhan India Photo 8',
  },
];

interface CollageGalleryProps {
  customImages?: CollageFrameItem[];
}

export const CollageGallery: React.FC<CollageGalleryProps> = ({ customImages }) => {
  const photos = customImages && customImages.length >= 8 ? customImages : COLLAGE_PHOTOS;

  return (
    <section className="w-full my-12 overflow-hidden">
      {/* Full-width Staggered Asymmetric Collage */}
      <div className="w-full px-3 md:px-6 space-y-3 md:space-y-4">
        
        {/* ROW 1: Images 1, 2, 3, 4 */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full h-auto sm:h-44 md:h-56 lg:h-64">
          {/* Photo 1: 1.jpg - Zoomed in (scale-[1.3]) */}
          <div className="flex-[5] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover object-[center_25%] scale-[1.3] origin-center hover:scale-[1.35] transition-transform duration-500"
            />
          </div>

          {/* Photo 2: 2.jpg */}
          <div className="flex-[9] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Photo 3: 3.jpg */}
          <div className="flex-[5] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Photo 4: 4.png */}
          <div className="flex-[5] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[3].src}
              alt={photos[3].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* ROW 2: Images 5, 6, 7, 8 */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full h-auto sm:h-44 md:h-56 lg:h-64">
          {/* Photo 5: 5.jpg */}
          <div className="flex-[3.5] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[4].src}
              alt={photos[4].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Photo 6: 6.jpg - Shifted in the opposite direction (object-[center_75%]) */}
          <div className="flex-[9.5] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[5].src}
              alt={photos[5].alt}
              className="w-full h-full object-cover object-[center_75%] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Photo 7: 7.jpg */}
          <div className="flex-[4.5] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[6].src}
              alt={photos[6].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Photo 8: 8.jpg */}
          <div className="flex-[6.5] min-w-0 h-44 sm:h-full overflow-hidden rounded-none bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[7].src}
              alt={photos[7].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
