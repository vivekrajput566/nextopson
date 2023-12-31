import mongoose from "mongoose";

const otp_schema_model = new mongoose.Schema({
  mobileNo: { type: String, required: true }, // Ensure unique mobile numbers
  otp: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }, // Track OTP generation time
  expiresAt: {
    type: Date,
    default: () => {
      // Set expiration time to 30 minutes from now
      return new Date(Date.now() + 30 * 60 * 1000);
    },
  },
});

export const OTP = mongoose.models.otp || mongoose.model("otp", otp_schema_model);
