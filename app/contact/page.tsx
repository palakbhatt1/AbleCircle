import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - AbleCircle Support Network',
  description:
    'Get in touch with AbleCircle or ViniBrawn Healthcare Solutions for support inquiries, partnerships, or NGO integration.',
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-surface min-h-[80vh] px-margin-mobile md:px-lg max-w-2xl mx-auto space-y-8 text-center">
      <div>
        <span className="material-symbols-outlined text-[48px] text-primary bg-primary-container/20 p-4 rounded-full mb-4 inline-block">
          contact_support
        </span>
        <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">Contact Us</h1>
        <p className="text-on-surface-variant max-w-md mx-auto">
          Have questions about the AbleCircle digital onboarding queue or partner integrations?
        </p>
      </div>

      <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 text-left space-y-4 max-w-md mx-auto">
        <div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-secondary mb-1">
            ViniBrawn Healthcare Solutions
          </h3>
          <p className="text-sm text-on-surface-variant">New Delhi, India</p>
        </div>
        <div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-secondary mb-1">
            Email Inquiry
          </h3>
          <p className="text-sm text-primary font-semibold">support@vinibrawn.com</p>
        </div>
      </div>
    </div>
  );
}
