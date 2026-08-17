import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { saveApplication } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const parentName = formData.get('parentName') as string;
    const parentEmail = formData.get('parentEmail') as string;
    const parentPhone = formData.get('parentPhone') as string;
    const relationship = (formData.get('relationship') as string) || 'mother';
    const childName = formData.get('childName') as string;
    const childAge = formData.get('childAge') as string;
    const childDisabilityType = formData.get('childDisabilityType') as string;
    const organizationId = (formData.get('organizationId') as string) || 'samadhan-ngo';

    // Validate required text fields
    if (!parentName || !parentEmail || !parentPhone || !childName || !childAge || !childDisabilityType) {
      return NextResponse.json(
        { error: 'Parent and Child required fields are missing.' },
        { status: 400 }
      );
    }

    // Upload folder setup
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      await fs.mkdir(uploadsDir, { recursive: true });
    } catch {
      // Directory exists or created
    }

    const savedFiles: Record<string, string> = {};
    const fileFields = ['certificateFile', 'aadhaarFile', 'medicalFile', 'completedFormsFile'];

    for (const field of fileFields) {
      const file = formData.get(field) as File | null;
      if (file && typeof file === 'object' && 'arrayBuffer' in file && file.name) {
        const timestamp = Date.now();
        const safeFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filename = `${field}_${timestamp}_${safeFileName}`;
        const filePath = path.join(uploadsDir, filename);

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        await fs.writeFile(filePath, buffer);

        savedFiles[field] = `/uploads/${filename}`;
      }
    }

    // Save Application to DB
    const savedRecord = await saveApplication({
      parentName: parentName.trim(),
      parentEmail: parentEmail.trim(),
      parentPhone: parentPhone.trim(),
      relationship,
      childName: childName.trim(),
      childAge: childAge.trim(),
      childDisabilityType,
      organizationId,
      files: savedFiles,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully!',
        applicationId: savedRecord.id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Apply API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Failed to process application submission.' },
      { status: 500 }
    );
  }
}
