import { NextResponse } from "next/server";
import Enquiry from "../../../models/Enquiry.js";
import {connectDB} from "../../../db/db.js"
// import { verifyAdmin } from "../../../middleware/auth";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();
    const { firstName, lastName, email, business, message } = data;

    if (!firstName || !lastName || !email || !business || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const newEnquiry = new Enquiry({
      firstName,
      lastName,
      email,
      business,
      message,
    });

    await newEnquiry.save();

    return NextResponse.json(
      { message: "Enquiry submitted successfully", enquiry: newEnquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

// ✅ GET: Fetch all enquiries

export async function GET(req) {
  await connectDB();

  // const admin = await verifyAdmin(req);
  // if (!admin) {
  //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  // }

  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return NextResponse.json(enquiries, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
