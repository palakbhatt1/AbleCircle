import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Let’s Work Together - AbleCircle & SAMADHAN India',
  description:
    'Interested in working with AbleCircle or contributing to our mission? Get in touch with us today.',
};

export default function ContactPage() {
  return <ContactClient />;
}
