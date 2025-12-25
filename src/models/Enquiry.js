import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    business: { type: String, required: true },
    message: { type: String, required: true },
    
  },
  { timestamps: true }
);

export default mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
