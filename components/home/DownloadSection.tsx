import React from 'react';
import Button from '@/components/shared/Button';
import { DOWNLOAD_CONTENT } from '@/lib/constants';

export const DownloadSection: React.FC = () => {
  return (
    <section className="py-section bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-lg grid grid-cols-1 lg:grid-cols-12 gap-xl items-center relative z-10">
        {/* Left Side: Info */}
        <div className="lg:col-span-6 max-w-xl">
          <div className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4">
            {DOWNLOAD_CONTENT.badge}
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-md tracking-tight">
            {DOWNLOAD_CONTENT.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed">
            {DOWNLOAD_CONTENT.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Button variant="primary" size="lg" className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-[24px]">download</span>
              <span>{DOWNLOAD_CONTENT.primaryCTA}</span>
            </Button>

            {/* App Store Badge - Coming Soon */}
            <div className="flex items-center space-x-2 bg-surface-container p-1 rounded-2xl border border-surface-variant/40">
              <span className="text-[10px] font-bold text-secondary px-3 uppercase tracking-wider">
                Coming Soon
              </span>
              <div className="w-[120px] h-[36px] bg-[#1a1c18] rounded-xl flex items-center justify-center text-white px-2 space-x-1.5 opacity-50 select-none">
                <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
                <span className="text-[10px] font-bold text-left leading-tight">
                  App Store
                  <br />
                  <span className="text-[8px] font-normal text-gray-400">iOS version</span>
                </span>
              </div>
            </div>
          </div>

          {/* Features bullet list */}
          <ul className="space-y-3">
            {DOWNLOAD_CONTENT.features.map((feature) => (
              <li key={feature} className="flex items-start space-x-3 text-on-surface-variant text-body-md">
                <span className="material-symbols-outlined text-primary bg-primary-container/40 p-0.5 rounded-full text-[18px] mt-1">
                  check
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Phone mockup + QR Code */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Background circles */}
          <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-primary/5 select-none pointer-events-none animate-slow-spin" />
          <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-primary-fixed-dim/20 select-none pointer-events-none" />

          {/* Phone Frame */}
          <div className="relative w-[280px] h-[540px] bg-slate-900 rounded-[40px] shadow-[0px_25px_50px_rgba(0,0,0,0.3)] p-3 border-4 border-slate-800 z-10 flex flex-col overflow-hidden select-none">
            {/* Camera notch */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-full z-20 flex justify-center items-center">
              <span className="w-3.5 h-3.5 rounded-full bg-slate-800 mr-2" />
              <span className="w-12 h-1 bg-slate-800 rounded-full" />
            </div>

            {/* Screen Content mock */}
            <div className="flex-1 bg-[#fafaf3] rounded-[30px] p-4 pt-10 flex flex-col justify-between overflow-hidden relative">
              {/* Header */}
              <div className="flex justify-between items-center pb-3 border-b border-surface-variant/40">
                <div className="flex items-center space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                    A
                  </span>
                  <span className="text-xs font-bold text-primary">AbleCircle</span>
                </div>
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  notifications
                </span>
              </div>

              {/* Progress Card */}
              <div className="mt-4 bg-white p-3 rounded-2xl shadow-sm border border-surface-variant/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Application Status
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#dde2ca] text-on-secondary-container text-[8px] font-bold">
                    In Progress
                  </span>
                </div>
                <h4 className="text-xs font-bold text-primary mb-1">Samadhan NGO Portal</h4>
                <p className="text-[9px] text-on-surface-variant">Scheduled Assessment on July 5, 2026</p>
                <div className="mt-2.5 w-full bg-surface-container h-1 rounded-full overflow-hidden">
                  <div className="bg-primary w-2/3 h-full rounded-full" />
                </div>
              </div>

              {/* Mini Library */}
              <div className="mt-3 flex-1 overflow-hidden">
                <p className="text-[10px] font-bold text-primary mb-2">Recommended for You</p>
                <div className="space-y-2">
                  <div className="bg-[#f4f4ed] p-2 rounded-xl flex items-center space-x-2 border border-surface-variant/25">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      menu_book
                    </span>
                    <div>
                      <h5 className="text-[9px] font-bold text-primary leading-tight">
                        Diagnosis Roadmap
                      </h5>
                      <p className="text-[7px] text-on-surface-variant">5 Min Read • Certified Guide</p>
                    </div>
                  </div>
                  <div className="bg-[#f4f4ed] p-2 rounded-xl flex items-center space-x-2 border border-surface-variant/25">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      support_agent
                    </span>
                    <div>
                      <h5 className="text-[9px] font-bold text-primary leading-tight">
                        Therapy Center List
                      </h5>
                      <p className="text-[7px] text-on-surface-variant">12 Vetted listings in Delhi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Bottom Nav */}
              <div className="pt-3 border-t border-surface-variant/30 flex justify-between text-on-surface-variant">
                <div className="flex flex-col items-center flex-1">
                  <span className="material-symbols-outlined text-primary text-[18px]">home</span>
                  <span className="text-[7px] font-bold text-primary">Home</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="material-symbols-outlined text-[18px]">library_books</span>
                  <span className="text-[7px]">Library</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  <span className="text-[7px]">Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code floating Card */}
          <div className="absolute bottom-6 right-6 md:right-16 bg-white p-4 rounded-2xl shadow-2xl border border-surface-variant/40 flex flex-col items-center space-y-2 z-20 hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center p-1 border border-surface-variant/50">
              <div className="w-full h-full relative opacity-85">
                <div
                  className="absolute inset-0 bg-slate-900"
                  style={{
                    clipPath:
                      'polygon(0 0, 30% 0, 30% 30%, 0 30%, 0 0, 70% 0, 100% 0, 100% 30%, 70% 30%, 70% 0, 0 70%, 30% 70%, 30% 100%, 0 100%, 0 70%, 45% 45%, 55% 45%, 55% 55%, 45% 55%, 45% 45%, 40% 10%, 60% 10%, 60% 25%, 40% 25%, 40% 10%, 75% 75%, 90% 75%, 90% 90%, 75% 90%, 75% 75%)',
                  }}
                />
                <div className="absolute top-[4px] left-[4px] w-[14px] h-[14px] border-[3px] border-primary bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary" />
                </div>
                <div className="absolute top-[4px] right-[4px] w-[14px] h-[14px] border-[3px] border-primary bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary" />
                </div>
                <div className="absolute bottom-[4px] left-[4px] w-[14px] h-[14px] border-[3px] border-primary bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary" />
                </div>
              </div>
            </div>
            <span className="text-[9px] font-bold text-primary uppercase tracking-widest text-center leading-tight">
              Scan to
              <br />
              Download
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
