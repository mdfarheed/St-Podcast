import { NextResponse } from "next/server";
import ServicePlan from "../../../models/ServicePlan.js";
import { connectDB } from "../../../db/db.js";
// import { verifyAdmin } from "../../../middleware/auth";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();
    const { name, email, phone, planName, price } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const newPlanEnquiry = new ServicePlan({
      name,
      email,
      phone,
      planName,
      price,
    });

    await newPlanEnquiry.save();

    return NextResponse.json(
      { message: "Service Plan submitted successfully", plans: newPlanEnquiry },
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
    const planEnquiries = await ServicePlan.find().sort({ createdAt: -1 });
    return NextResponse.json(planEnquiries, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
