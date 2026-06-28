import type { Metadata } from 'next';
import { AboutClient } from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | AbleCircle',
  description:
    'Dedicated to those who care for others. AbleCircle is a caregiver support and accessibility platform developed under ViniBrawn Healthcare Solutions.',
};

export default function AboutPage() {
  return <AboutClient />;
}
