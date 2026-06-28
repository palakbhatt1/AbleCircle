'use client';

import React, { useState, useRef } from 'react';
import { ApplicationFormData, FormFieldError } from '@/types';
import Button from '@/components/shared/Button';

export const ApplicationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [parentFirstName, setParentFirstName] = useState('');
  const [parentLastName, setParentLastName] = useState('');
  const [relationship, setRelationship] = useState('mother');

  const [formData, setFormData] = useState<ApplicationFormData>({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    childDisabilityType: '',
    organizationId: 'samadhan-ngo',
    certificateFile: null,
    aadhaarFile: null,
    medicalFile: null,
  });

  const [errors, setErrors] = useState<FormFieldError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [generalErrorMessage, setGeneralErrorMessage] = useState('');

  const certInputRef = useRef<HTMLInputElement>(null);
  const aadhaarInputRef = useRef<HTMLInputElement>(null);
  const medicalInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => prev.filter((err) => err.field !== name));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof ApplicationFormData) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [fieldName]: file }));
    setErrors((prev) => prev.filter((err) => err.field !== fieldName));
  };

  const removeFile = (fieldName: keyof ApplicationFormData, ref: React.RefObject<HTMLInputElement | null>) => {
    setFormData((prev) => ({ ...prev, [fieldName]: null }));
    if (ref.current) {
      ref.current.value = '';
    }
  };

  const getFieldError = (fieldName: string) => {
    return errors.find((err) => err.field === fieldName)?.message;
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormFieldError[] = [];

    if (currentStep === 1) {
      if (!parentFirstName.trim()) {
        newErrors.push({ field: 'parentName', message: 'First name is required' });
      }
      if (!parentLastName.trim()) {
        newErrors.push({ field: 'parentName', message: 'Last name is required' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.parentEmail.trim()) {
        newErrors.push({ field: 'parentEmail', message: 'Email address is required' });
      } else if (!emailRegex.test(formData.parentEmail)) {
        newErrors.push({ field: 'parentEmail', message: 'Please enter a valid email address' });
      }

      const phoneRegex = /^[0-9]{10}$/;
      const cleanPhone = formData.parentPhone.replace(/[\s-()]/g, '');
      if (!formData.parentPhone.trim()) {
        newErrors.push({ field: 'parentPhone', message: 'Phone number is required' });
      } else if (!phoneRegex.test(cleanPhone)) {
        newErrors.push({ field: 'parentPhone', message: 'Please enter a valid 10-digit mobile number' });
      }
    }

    if (currentStep === 2) {
      if (!formData.childName.trim()) {
        newErrors.push({ field: 'childName', message: "Child's name is required" });
      }

      const ageNum = parseInt(formData.childAge, 10);
      if (!formData.childAge.trim()) {
        newErrors.push({ field: 'childAge', message: "Child's age is required" });
      } else if (isNaN(ageNum) || ageNum <= 0 || ageNum > 25) {
        newErrors.push({ field: 'childAge', message: 'Please enter a valid age (1-25)' });
      }

      if (!formData.childDisabilityType) {
        newErrors.push({ field: 'childDisabilityType', message: 'Please select a primary diagnosis' });
      }
    }

    if (currentStep === 3) {
      if (!formData.certificateFile) {
        newErrors.push({ field: 'certificateFile', message: 'Primary Disability Certificate is required' });
      }

      if (!formData.aadhaarFile) {
        newErrors.push({ field: 'aadhaarFile', message: "Aadhaar card copy is required" });
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBackStep = () => {
    setStep((prev) => prev - 1);
    setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralErrorMessage('');

    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      setGeneralErrorMessage('Please fill in all required fields and upload the documents.');
      return;
    }

    setIsSubmitting(true);

    try {
      const apiPayload = new FormData();
      const combinedParentName = `${parentFirstName.trim()} ${parentLastName.trim()}`;
      apiPayload.append('parentName', combinedParentName);
      apiPayload.append('parentEmail', formData.parentEmail);
      apiPayload.append('parentPhone', formData.parentPhone);
      apiPayload.append('relationship', relationship);
      apiPayload.append('childName', formData.childName);
      apiPayload.append('childAge', formData.childAge);
      apiPayload.append('childDisabilityType', formData.childDisabilityType);
      apiPayload.append('organizationId', formData.organizationId);

      if (formData.certificateFile) {
        apiPayload.append('certificateFile', formData.certificateFile);
      }
      if (formData.aadhaarFile) {
        apiPayload.append('aadhaarFile', formData.aadhaarFile);
      }
      if (formData.medicalFile) {
        apiPayload.append('medicalFile', formData.medicalFile);
      }

      // Simulate a real API network latency
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus('success');
    } catch (err: unknown) {
      setSubmitStatus('error');
      setGeneralErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      childName: '',
      childAge: '',
      childDisabilityType: '',
      organizationId: 'samadhan-ngo',
      certificateFile: null,
      aadhaarFile: null,
      medicalFile: null,
    });
    setParentFirstName('');
    setParentLastName('');
    setRelationship('mother');
    setStep(1);
    setSubmitStatus('idle');
    setErrors([]);
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-surface-container-lowest rounded-[32px] p-8 md:p-12 border border-surface-container w-full shadow-lg text-center">
        <span className="material-symbols-outlined text-[64px] text-primary bg-primary-container/20 p-4 rounded-full mb-6 inline-block">
          task_alt
        </span>
        <h2 className="font-headline-md text-headline-md text-primary mb-md">
          Application Submitted!
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed">
          Thank you, <strong className="text-primary">{parentFirstName} {parentLastName}</strong>. The registration request for{' '}
          <strong className="text-primary">{formData.childName}</strong> has been successfully uploaded.
        </p>
        <p className="text-sm text-on-surface-variant/80 bg-surface-container-low p-4 rounded-xl max-w-md mx-auto mb-xl leading-relaxed">
          Our collaborating partner, <strong>Samadhan NGO</strong>, will inspect your uploaded disability certificate
          and Aadhaar credentials within 3 business days to arrange the clinical assessment step.
        </p>
        <Button variant="primary" onClick={resetForm}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  // Stepper Header helper
  const getStepperLineWidth = () => {
    return `${((step - 1) / 3) * 100}%`;
  };

  return (
    <div className="w-full space-y-12">
      {/* Stepper Progress Tracker */}
      <div className="relative mb-12">
        {/* Connecting Line */}
        <div className="absolute top-[20px] left-0 w-full h-1 bg-surface-container-high rounded-full -z-10"></div>
        {/* Active Line */}
        <div
          className="absolute top-[20px] left-0 h-1 bg-primary rounded-full -z-10 transition-all duration-500"
          style={{ width: getStepperLineWidth() }}
        ></div>
        <div className="flex justify-between items-center w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => step > 1 && setStep(1)}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-label-lg text-label-lg shadow-sm border-4 border-background transition-all duration-300 ${
                step >= 1 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              1
            </div>
            <span className={`font-label-sm text-label-sm ${step >= 1 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
              Parent Details
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => step > 2 && setStep(2)}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-label-lg text-label-lg border-4 border-background transition-all duration-300 ${
                step >= 2 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              2
            </div>
            <span className={`font-label-sm text-label-sm ${step >= 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
              Child Details
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => step > 3 && setStep(3)}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-label-lg text-label-lg border-4 border-background transition-all duration-300 ${
                step >= 3 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              3
            </div>
            <span className={`font-label-sm text-label-sm ${step >= 3 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
              Documents
            </span>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-label-lg text-label-lg border-4 border-background transition-all duration-300 ${
                step >= 4 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              4
            </div>
            <span className={`font-label-sm text-label-sm ${step >= 4 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
              Review
            </span>
          </div>
        </div>
      </div>

      {/* Form Card Container */}
      <div className="bg-surface-container-lowest rounded-[32px] p-8 md:p-12 border border-surface-container w-full shadow-sm">
        {submitStatus === 'error' && (
          <div className="p-4 bg-error-container text-on-error-container rounded-xl flex items-center space-x-3 text-sm mb-6">
            <span className="material-symbols-outlined text-[20px]">error</span>
            <span>{generalErrorMessage || 'Failed to submit application. Please double check all fields.'}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
          {/* STEP 1: Parent details */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-6">
                Parent / Primary Caregiver Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="w-full bg-surface border border-surface-variant rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                    id="firstName"
                    value={parentFirstName}
                    onChange={(e) => {
                      setParentFirstName(e.target.value);
                      setErrors((prev) => prev.filter((err) => err.field !== 'parentName'));
                    }}
                    placeholder="e.g. Sangeeta"
                    type="text"
                  />
                  {getFieldError('parentName') && !parentFirstName.trim() && (
                    <p className="text-xs text-error mt-1 flex items-center">
                      <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                      {getFieldError('parentName')}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="w-full bg-surface border border-surface-variant rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                    id="lastName"
                    value={parentLastName}
                    onChange={(e) => {
                      setParentLastName(e.target.value);
                      setErrors((prev) => prev.filter((err) => err.field !== 'parentName'));
                    }}
                    placeholder="e.g. Sharma"
                    type="text"
                  />
                  {getFieldError('parentName') && !parentLastName.trim() && (
                    <p className="text-xs text-error mt-1 flex items-center">
                      <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                      {getFieldError('parentName')}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface border border-surface-variant rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                  id="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  placeholder="We will use this to send updates"
                  type="email"
                />
                {getFieldError('parentEmail') && (
                  <p className="text-xs text-error mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                    {getFieldError('parentEmail')}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface" htmlFor="phone">
                  Phone Number (WhatsApp preferred)
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined">
                    call
                  </span>
                  <input
                    className="w-full bg-surface border border-surface-variant pl-14 pr-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                    id="phone"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    placeholder="+91"
                    type="tel"
                  />
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 ml-2">
                  Used for secure community verification.
                </p>
                {getFieldError('parentPhone') && (
                  <p className="text-xs text-error mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                    {getFieldError('parentPhone')}
                  </p>
                )}
              </div>

              {/* Relationship to Child */}
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface">
                  Relationship to Child
                </label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {['mother', 'father', 'guardian', 'other'].map((rel) => (
                    <label key={rel} className="cursor-pointer">
                      <input
                        checked={relationship === rel}
                        onChange={() => setRelationship(rel)}
                        className="peer sr-only"
                        name="relationship"
                        type="radio"
                        value={rel}
                      />
                      <div className="px-6 py-3 rounded-full border border-surface-variant bg-surface peer-checked:bg-secondary-container peer-checked:border-secondary-container peer-checked:text-on-secondary-container text-on-surface-variant font-label-lg text-label-lg transition-all hover:bg-surface-container-high capitalize">
                        {rel === 'guardian' ? 'Legal Guardian' : rel === 'other' ? 'Other Family Member' : rel}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Child details */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-6">
                Child / Beneficiary Details
              </h2>

              {/* Child's Name */}
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface" htmlFor="childName">
                  Child's Full Name
                </label>
                <input
                  className="w-full bg-surface border border-surface-variant rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  placeholder="e.g. Aarav Sharma"
                  type="text"
                />
                {getFieldError('childName') && (
                  <p className="text-xs text-error mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                    {getFieldError('childName')}
                  </p>
                )}
              </div>

              {/* Child's Age */}
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface" htmlFor="childAge">
                  Age
                </label>
                <input
                  className="w-full bg-surface border border-surface-variant rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  placeholder="Child's age (1-25)"
                  type="number"
                  min="1"
                  max="25"
                />
                {getFieldError('childAge') && (
                  <p className="text-xs text-error mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                    {getFieldError('childAge')}
                  </p>
                )}
              </div>

              {/* Disability Type / Diagnosis */}
              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface" htmlFor="childDisabilityType">
                  Primary Diagnosis / Condition
                </label>
                <select
                  className="w-full bg-surface border border-surface-variant rounded-full px-6 py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface/90"
                  id="childDisabilityType"
                  name="childDisabilityType"
                  value={formData.childDisabilityType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Condition</option>
                  <option value="autism">Autism Spectrum Disorder (ASD)</option>
                  <option value="down-syndrome">Down Syndrome</option>
                  <option value="cerebral-palsy">Cerebral Palsy</option>
                  <option value="intellectual-disability">Intellectual Disability (ID)</option>
                  <option value="adhd">Attention Deficit Hyperactivity Disorder (ADHD)</option>
                  <option value="multiple-disabilities">Multiple Disabilities</option>
                  <option value="other">Other / Under Diagnosis</option>
                </select>
                {getFieldError('childDisabilityType') && (
                  <p className="text-xs text-error mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                    {getFieldError('childDisabilityType')}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Document uploads */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-6">
                Verification Documents
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Please upload the required verification credentials. They will be encrypted and transmitted securely.
              </p>

              {/* Disability Certificate */}
              <div className="space-y-2">
                <label className="block text-label-lg font-semibold text-on-surface">
                  Disability Certificate (Govt. issued UDID or medical authority card) *
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    id="certificateFile"
                    ref={certInputRef}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, 'certificateFile')}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => certInputRef.current?.click()}
                    className="flex items-center space-x-1.5 rounded-full px-5 py-2.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                    <span>Choose File</span>
                  </Button>
                  {formData.certificateFile ? (
                    <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                      <span className="truncate max-w-[200px]">{formData.certificateFile.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile('certificateFile', certInputRef)}
                        className="text-error hover:bg-error-container/20 p-1 rounded-full transition-colors flex items-center"
                        aria-label="Remove certificate"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-on-surface-variant">No file selected (PDF, JPG, PNG)</span>
                  )}
                </div>
                {getFieldError('certificateFile') && (
                  <p className="text-xs text-error mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                    {getFieldError('certificateFile')}
                  </p>
                )}
              </div>

              {/* Aadhaar Card */}
              <div className="space-y-2 pt-4 border-t border-surface-variant/20">
                <label className="block text-label-lg font-semibold text-on-surface">
                  Child's or Parent's Aadhaar Card Copy *
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    id="aadhaarFile"
                    ref={aadhaarInputRef}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, 'aadhaarFile')}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => aadhaarInputRef.current?.click()}
                    className="flex items-center space-x-1.5 rounded-full px-5 py-2.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                    <span>Choose File</span>
                  </Button>
                  {formData.aadhaarFile ? (
                    <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                      <span className="truncate max-w-[200px]">{formData.aadhaarFile.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile('aadhaarFile', aadhaarInputRef)}
                        className="text-error hover:bg-error-container/20 p-1 rounded-full transition-colors flex items-center"
                        aria-label="Remove Aadhaar"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-on-surface-variant">No file selected (PDF, JPG, PNG)</span>
                  )}
                </div>
                {getFieldError('aadhaarFile') && (
                  <p className="text-xs text-error mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                    {getFieldError('aadhaarFile')}
                  </p>
                )}
              </div>

              {/* Medical Reports (Optional) */}
              <div className="space-y-2 pt-4 border-t border-surface-variant/20">
                <label className="block text-label-lg font-semibold text-on-surface">
                  Recent Clinical Assessment or Medical Reports (Optional)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    id="medicalFile"
                    ref={medicalInputRef}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, 'medicalFile')}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => medicalInputRef.current?.click()}
                    className="flex items-center space-x-1.5 rounded-full px-5 py-2.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                    <span>Choose File</span>
                  </Button>
                  {formData.medicalFile ? (
                    <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                      <span className="truncate max-w-[200px]">{formData.medicalFile.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile('medicalFile', medicalInputRef)}
                        className="text-error hover:bg-error-container/20 p-1 rounded-full transition-colors flex items-center"
                        aria-label="Remove medical report"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-on-surface-variant">No file selected (PDF, JPG, PNG)</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Review Details */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-6">
                Review Your Application
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Please check your entries. If anything is incorrect, you can click on any previous step to edit.
              </p>

              <div className="bg-surface-container-low rounded-2xl p-6 border border-surface-variant/40 space-y-6">
                {/* Parent Contact Information */}
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary border-b border-surface-variant/40 pb-2 mb-3">
                    Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-on-surface-variant font-medium block">Full Name</span>
                      <span className="text-on-surface font-bold">{parentFirstName} {parentLastName}</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant font-medium block">Relationship</span>
                      <span className="text-on-surface font-bold capitalize">{relationship}</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant font-medium block">Email Address</span>
                      <span className="text-on-surface font-bold">{formData.parentEmail}</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant font-medium block">Phone Number</span>
                      <span className="text-on-surface font-bold">{formData.parentPhone}</span>
                    </div>
                  </div>
                </div>

                {/* Child Information */}
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary border-b border-surface-variant/40 pb-2 mb-3">
                    Child Profile
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="sm:col-span-2">
                      <span className="text-on-surface-variant font-medium block">Child's Name</span>
                      <span className="text-on-surface font-bold">{formData.childName}</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant font-medium block">Age</span>
                      <span className="text-on-surface font-bold">{formData.childAge} years old</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-on-surface-variant font-medium block">Diagnosis / Condition</span>
                      <span className="text-on-surface font-bold capitalize">
                        {formData.childDisabilityType.replace(/-/g, ' ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Documents Uploaded */}
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary border-b border-surface-variant/40 pb-2 mb-3">
                    Verification Documents
                  </h3>
                  <div className="space-y-2 text-sm text-on-surface">
                    <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-primary">description</span>
                      <span className="font-medium text-on-surface-variant">Disability Cert:</span>
                      <span className="font-bold">{formData.certificateFile?.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-primary">badge</span>
                      <span className="font-medium text-on-surface-variant">Aadhaar Card Copy:</span>
                      <span className="font-bold">{formData.aadhaarFile?.name}</span>
                    </div>
                    {formData.medicalFile && (
                      <div className="flex items-center space-x-2">
                        <span className="material-symbols-outlined text-primary">medical_information</span>
                        <span className="font-medium text-on-surface-variant">Medical Report:</span>
                        <span className="font-bold">{formData.medicalFile.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-surface-container">
            <button
              onClick={handleBackStep}
              className={`text-primary font-label-lg text-label-lg px-6 py-3 rounded-full hover:bg-surface-container transition-colors ${
                step === 1 ? 'invisible' : 'visible'
              }`}
              type="button"
            >
              Back
            </button>
            {step < 4 ? (
              <button
                onClick={handleNextStep}
                className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container hover:scale-95 active:scale-90 transition-all shadow-sm flex items-center gap-2 duration-150"
                type="button"
              >
                <span>
                  {step === 1
                    ? 'Continue to Child Details'
                    : step === 2
                    ? 'Continue to Documents'
                    : 'Continue to Review'}
                </span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="px-8 py-4 rounded-full font-label-lg text-label-lg shadow-sm flex items-center gap-2 hover:scale-95 active:scale-90 transition-all duration-150"
              >
                <span>Submit Enrollment Application</span>
                <span className="material-symbols-outlined text-[20px]">check</span>
              </Button>
            )}
          </div>
        </form>
      </div>

      <div className="mt-8 text-center flex items-center justify-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
        <span className="material-symbols-outlined text-[16px]">lock</span>
        Your information is securely encrypted and never shared without consent.
      </div>
    </div>
  );
};

export default ApplicationForm;
