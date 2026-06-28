import type { Metadata } from 'next';
import { ApplicationForm } from '@/components/apply/ApplicationForm';

export const metadata: Metadata = {
  title: 'Apply Now - AbleCircle',
  description:
    "Join the Circle of Trust. Start your journey with Samadhan NGO. This secure enrollment form helps us understand your family's needs so we can provide the best possible support and guidance.",
};

export default function ApplyPage() {
  return (
    <main className="flex-grow pt-12 pb-[64px] px-margin-mobile md:px-lg flex flex-col items-center relative z-10">
      {/* Background Organic Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-tertiary/5 blur-3xl"></div>
      </div>

      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Join the Circle of Trust
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Start your journey with Samadhan NGO. This secure enrollment form helps us understand your family's needs so we can provide the best possible support and guidance.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </main>
  );
}
