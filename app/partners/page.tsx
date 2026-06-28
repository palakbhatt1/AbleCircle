import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partners - AbleCircle',
  description:
    'We believe in the power of shared knowledge and collective support. By partnering with trusted organizations, we expand the circle of care for families navigating intellectual disabilities.',
};

export default function PartnersPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg pb-24 pt-8 relative z-10">
      {/* Background Organic Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-tertiary/5 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-6">
          Strengthening Our Community Together
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We believe in the power of shared knowledge and collective support. By partnering with trusted organizations, we expand the circle of care for families navigating intellectual disabilities.
        </p>
      </section>

      {/* Featured Partner: Samadhan NGO */}
      <section className="mb-24">
        <div className="bg-surface-container rounded-[40px] md:rounded-[80px_40px_80px_40px] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-surface-variant/30 shadow-sm">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-4 py-1 rounded-full mb-4">
              Current Partner
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Samadhan NGO</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Samadhan has been a beacon of hope, providing comprehensive services for children with intellectual disabilities. Our collaboration aims to digitize their enrollment process and extend their invaluable resources to a wider community.
            </p>
            <div className="space-y-4 pt-4 border-t border-outline-variant/30">
              <h3 className="font-headline-md text-headline-md text-secondary">Services Offered</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md">Early Intervention Programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md">Special Education & Therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md">Parent Counseling & Training</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            {/* Illustration Container */}
            <div className="aspect-square bg-tertiary-container/30 rounded-[60px_40px_80px_60px] overflow-hidden relative flex items-center justify-center p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover rounded-[40px_60px_40px_60px] shadow-md"
                alt="A warm, compassionate hand-drawn style illustration of two individuals shaking hands, symbolizing trust and partnership in a caregiving context."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGknFyrBiczbCJvG1olSfxWf3PC78GcE5szK-pxMWvR2WFreEOAQfLZMtaXeeFaWFwm7ByAtvEgckertsnVSC56rsPS6ap5L0-wZqnd-syZ2CdqKg7wfgwZ5xRGXCWaZlg3n0svOQglk5CTRpFX2EnsaxYiIBxwPapCdRItXA8O4Hoc_wlSguNGAAbCdvh2wy8VZHTWI7WXQVAWue_9ZN-kWZHrrAN0zU0Wd4HU3-98Pd9YGUH3LntDl32dNz6gPi6fdHoq-Zy2mHZ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Partners CTA */}
      <section className="bg-secondary-container rounded-[40px] p-8 md:p-16 text-center shadow-inner">
        <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
          Join Our Circle of Care
        </h2>
        <p className="font-body-md text-body-md text-on-secondary-container max-w-xl mx-auto mb-8 leading-relaxed">
          Are you an organization dedicated to supporting families and individuals with intellectual disabilities? Let's work together to create a more inclusive and accessible ecosystem.
        </p>
        <Link href="/apply">
          <button className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-md active:scale-95 duration-150">
            Become a Partner
          </button>
        </Link>
      </section>
    </main>
  );
}
