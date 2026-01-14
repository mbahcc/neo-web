import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { company, name, email, desc } = await request.json();

    if (!company || !name || !email) {
      return NextResponse.json(
        { error: "Company, Name, and Email are required fields." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const database = client.db("input-form");
    const userCollection = database.collection("results");

    const inputData = {
      company,
      name,
      email,
      message: desc,
      createdAt: new Date(),
    };

    const result = await userCollection.insertOne(inputData);

    return NextResponse.json(
      { message: "Form data received successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing form data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}