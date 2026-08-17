import { NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, email, organization, interest, message } = body;

    // Validate required fields
    if (!name || !mobile || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'Name, mobile, email, interest, and message are required.' },
        { status: 400 }
      );
    }

    // Save submission to database
    const savedRecord = await saveContactSubmission({
      name: String(name).trim(),
      mobile: String(mobile).trim(),
      email: String(email).trim(),
      organization: organization ? String(organization).trim() : '',
      interest: String(interest).trim(),
      message: String(message).trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! We’ve received your message.',
        id: savedRecord.id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Failed to save contact submission.' },
      { status: 500 }
    );
  }
}
