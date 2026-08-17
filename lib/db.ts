import fs from 'fs/promises';
import path from 'path';

export interface ContactSubmission {
  id: string;
  name: string;
  mobile: string;
  email: string;
  organization?: string;
  interest: string;
  message: string;
  createdAt: string;
}

export interface ApplicationRecord {
  id: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  relationship: string;
  childName: string;
  childAge: string;
  childDisabilityType: string;
  organizationId: string;
  files: {
    certificateFile?: string;
    aadhaarFile?: string;
    medicalFile?: string;
    completedFormsFile?: string;
  };
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACT_FILE = path.join(DATA_DIR, 'contact-submissions.json');
const APPLICATION_FILE = path.join(DATA_DIR, 'applications.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // Directory exists or created
  }
}

async function readJsonFile<T>(filePath: string): Promise<T[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data) as T[];
  } catch {
    return [];
  }
}

async function writeJsonFile<T>(filePath: string, data: T[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function saveContactSubmission(
  submission: Omit<ContactSubmission, 'id' | 'createdAt'>
): Promise<ContactSubmission> {
  const submissions = await readJsonFile<ContactSubmission>(CONTACT_FILE);
  const newSubmission: ContactSubmission = {
    ...submission,
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };
  submissions.push(newSubmission);
  await writeJsonFile(CONTACT_FILE, submissions);
  return newSubmission;
}

export async function saveApplication(
  application: Omit<ApplicationRecord, 'id' | 'createdAt'>
): Promise<ApplicationRecord> {
  const applications = await readJsonFile<ApplicationRecord>(APPLICATION_FILE);
  const newApplication: ApplicationRecord = {
    ...application,
    id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };
  applications.push(newApplication);
  await writeJsonFile(APPLICATION_FILE, applications);
  return newApplication;
}
