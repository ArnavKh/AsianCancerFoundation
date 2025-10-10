import Donation from "../models/user.model.js";


export const createDonation = async (req, res) => {
  try {
    const { name, email, mobileNumber,donationFeature, address, donationType, comment } = req.body;

    // Basic validation
    // if (!name || !email || !mobileNumber || !address || !donationType) {
    //   return res.status(400).json({ success: false, message: "All required fields must be filled" });
    // }

    // Create donation record

    console.log(" data arrived : ",req.body);
    const donation = await Donation.create({
      name,
      email,
      mobileNumber,
      address,
      donationType,
      comment,
      donationFeature
    });

    res.status(201).json({
      success: true,
      message: "Donation details stored successfully",
      data: donation,
    });
  } catch (error) {
    console.error("Error storing donation:", error.message);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({
      success: true,
      count: donations.length,
      data: donations,
    });
  } catch (error) {
    console.error("Error fetching donations:", error.message);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
