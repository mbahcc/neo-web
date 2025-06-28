import Airtable from "airtable";
import { NextResponse, NextRequest } from "next/server";


//route.ts
// Helper function to get required env variable
function getRequiredEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Type-safe environment variable access
const apiKey = getRequiredEnvVar('AIRTABLE_API_KEY');
const baseId = getRequiredEnvVar('AIRTABLE_BASE_ID');

const tableName = 'neo_web_form';

const base = new Airtable({ apiKey }).base(baseId);

interface FormData {
  name: string;
  email: string;
  desc: string;
  company: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();
    const { name, email, desc, company } = body;

     // Log the data being sent for debugging
    console.log('Submitting to Airtable:', { name, email, desc, company });

    const record = await base(tableName).create([
      {
        fields: {
          Name: name,
          Email: email,
          Description: desc,
          Company: company,
        },
      },
    ]);

     console.log('Successfully created record:', record[0].id);

    return NextResponse.json({ 
      message: 'Form submitted successfully', 
      record: record[0].id 
    });
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        message: 'Error submitting form', 
        error: errorMessage 
      }, 
      { status: 500 }
    );
  }
}