import type { Metadata } from 'next';
import DownloadSection from '@/components/home/DownloadSection';

export const metadata: Metadata = {
  title: 'Download App - AbleCircle Support App',
  description:
    'Download the AbleCircle caregiver application to track application queues, access diagnosis roadmaps, and find therapy centers.',
};

export default function DownloadPage() {
  return (
    <div className="py-12 bg-surface">
      <DownloadSection />
    </div>
  );
}
