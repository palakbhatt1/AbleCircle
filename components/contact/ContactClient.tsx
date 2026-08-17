'use client';

import React, { useState } from 'react';

export const ContactClient: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#0f4d32] min-h-[calc(100vh-80px)] flex items-center py-4 lg:py-6 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Header & Info */}
        <div className="lg:col-span-5 text-left text-white pr-0 lg:pr-4">
          <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Let’s Work Together
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-emerald-100/90 leading-relaxed mb-6">
            Interested in working with AbleCircle or contributing to our mission? We’d love to hear from you.
          </p>

          <div className="space-y-4 text-emerald-50 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-300 text-xl">mail</span>
              <span>support@ablecircle.org</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-300 text-xl">location_on</span>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: White Card Form (Fit within view) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-2xl text-slate-900 border border-slate-100 text-left">
            <h2 className="font-headline-md text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3 my-4">
                <span className="material-symbols-outlined text-4xl text-emerald-600">check_circle</span>
                <h3 className="text-xl font-bold text-emerald-900">Thank You!</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We’ve received your message. We’ll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', mobile: '', email: '', organization: '', interest: '', message: '' });
                  }}
                  className="mt-2 px-5 py-2 bg-[#0f4d32] text-white font-semibold rounded-full hover:opacity-90 transition-all text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* 2-Column Grid: Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4d32] focus:border-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="Enter your mobile number"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4d32] focus:border-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>

                {/* 2-Column Grid: Email & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4d32] focus:border-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organisation / Institution
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Enter your organisation or institution"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4d32] focus:border-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Select Dropdown: How would you like to work with us? */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    How would you like to work with us?
                  </label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4d32] focus:border-transparent text-slate-900 text-xs sm:text-sm transition-all bg-white"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Partner with AbleCircle">Partner with AbleCircle</option>
                    <option value="Volunteer with us">Volunteer with us</option>
                    <option value="Apply / Work with SAMADHAN">Apply / Work with SAMADHAN</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Textarea: Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about how you’d like to work with us."
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4d32] focus:border-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button & Footnote */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="bg-[#0f4d32] hover:bg-[#0b3b26] text-white font-semibold px-7 py-2.5 rounded-lg shadow-md transition-all active:scale-95 inline-flex items-center gap-2 text-sm"
                  >
                    <span>Submit</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <p className="text-[11px] text-slate-500 mt-2 font-medium">
                    We’ll get back to you soon.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
