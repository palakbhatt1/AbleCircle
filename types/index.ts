export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
  isOutline?: boolean;
  highlight?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  actionText?: string;
  isComingSoon?: boolean;
  actionHref?: string;
}

export interface JourneyPhase {
  phase: string;
  title: string;
  description: string;
  badge: string;
  isCurrent?: boolean;
}

export interface ApplicationFormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  childName: string;
  childAge: string;
  childDisabilityType: string;
  organizationId: string;
  certificateFile: File | null;
  aadhaarFile: File | null;
  medicalFile: File | null;
  completedFormsFile: File | null;
}

export interface FormFieldError {
  field: keyof ApplicationFormData | 'general';
  message: string;
}
