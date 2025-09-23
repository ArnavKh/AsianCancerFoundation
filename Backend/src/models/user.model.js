import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    donationType: {
      type: String,
      enum: [
        "Donate as Organisation",
        "Donate Anonymously",
        "I agree to Terms and Privacy Notice",
      ],
      required: true,
    },
    comment: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;
