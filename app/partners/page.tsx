import type { Metadata } from 'next';
import { PartnersClient } from '@/components/partners/PartnersClient';

export const metadata: Metadata = {
  title: 'Partners - Samadhan India & AbleCircle',
  description:
    'Samadhan India is a non-profit organization focused on improving the lives of persons with intellectual disabilities and their families in New Delhi. Discover our partnership and photo gallery.',
};

export default function PartnersPage() {
  return <PartnersClient />;
}
