import React from "react";
import HeroImage from "../../assets/Contact/HeroImage.png";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#fefaf6] text-gray-900 pb-10">
      {/* Header Section */}
      <div className="relative">
        <img
          src={HeroImage}
          alt="Contact Header"
          className="w-full h-72 md:h-108 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase px-4 text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="container mx-4 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        {/* Contact Information */}
        <div className="relative bg-[#583490] text-white rounded-[30px] p-6 md:p-8 shadow-lg overflow-hidden
                        max-w-full md:max-w-[480px] mx-auto md:mx-0">
          {/* Content */}
          <h2 className="text-2xl font-visby font-medium mb-2">Contact Information</h2>
          <p className="mb-8 font-didact text-lg">Got questions? Let’s Connect!</p>

          <ul className="space-y-4 font-didact text-[14px] pt-10">
            <li className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              <span>+91 2262771134</span>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>acf@asiancancerfoundation.org</span>
            </li>

            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>
                ACI Cumbala Hill Hospital 92/95,
                <br /> August Kranti Marg, Kemps Corner,
                <br /> Mumbai 400036
              </span>
            </li>
          </ul>

          {/* Facebook icon at bottom-left */}
          <div className="absolute bottom-3 left-4 bg-white rounded-full p-1">
            <FaFacebook className="text-black w-4 h-4" />
          </div>

          {/* Decorative circles bottom-right */}
          <div className="absolute bottom-[-40px] right-[-20px] w-40 h-40 bg-[#4B1B95] rounded-full opacity-90 hidden sm:block"></div>
          <div className="absolute bottom-20 right-3 w-20 h-20 bg-[#FFFF]/40 rounded-full opacity-80 hidden sm:block"></div>
        </div>

        {/* Contact Form */}
        <form className="rounded-xl space-y-6 pr-0 md:pr-10 font-visby max-w-full mx-auto md:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg mb-2 font-semibold">First Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-semibold">Last Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-semibold">Phone Number</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-lg mb-2 font-semibold">Subject</label>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px] 
                   appearance-none relative 
                   checked:after:content-['✔'] checked:after:absolute 
                   checked:after:text-[#583490] checked:after:text-[12px] 
                   checked:after:left-[3px] checked:after:top-[-1px]"
                />
                Volunteer
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px] 
                   appearance-none relative 
                   checked:after:content-['✔'] checked:after:absolute 
                   checked:after:text-[#583490] checked:after:text-[12px] 
                   checked:after:left-[3px] checked:after:top-[-1px]"
                />
                Donation
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px] 
                   appearance-none relative 
                   checked:after:content-['✔'] checked:after:absolute 
                   checked:after:text-[#583490] checked:after:text-[12px] 
                   checked:after:left-[3px] checked:after:top-[-1px]"
                />
                General Inquiry
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg mb-2 font-semibold">Message</label>
            <textarea
              rows="3"
              className="w-full border-b border-gray-400 focus:border-purple-500 outline-none py-2 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#EDE2FF] text-lg font-semibold h-[48px] w-full sm:w-[184px] rounded-[10px] shadow"
          >
            Send Message
          </button>
        </form>
      </div>

      <section className="p-6 md:p-10 mx-4 md:mx-20 pb-12 bg-[#583490] text-white rounded-[30px] mt-25 mb-10">
        <h3 className="text-lg md:text-3xl text-[#D2635D] font-semibold mb-6 font-visby text-center md:text-left">
          Help us save lives. Donate or partner today.
        </h3>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base font-didact">
          <div className="overflow-x-auto">
            <h4 className="mb-2 md:text-xl">Bank Details</h4>
            <table className="w-full text-white rounded-lg border border-gray-300 border-collapse">
              <tbody>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300 bg-[#60438f]">
                    Account Name
                  </td>
                  <td className="py-2 px-3 border border-gray-300 bg-[#60438f]">
                    Asian Cancer Foundation
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">
                    Account No
                  </td>
                  <td className="py-2 px-3 border border-gray-300">00802560000419</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">
                    Account Type
                  </td>
                  <td className="py-2 px-3 border border-gray-300">Current</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">
                    Bank Name
                  </td>
                  <td className="py-2 px-3 border border-gray-300">HDFC Bank</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">Branch</td>
                  <td className="py-2 px-3 border border-gray-300">Worli</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">IFSC Code</td>
                  <td className="py-2 px-3 border border-gray-300">HDFC0000080</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* International Donors */}
          <div className="overflow-x-auto">
            <h4 className="mb-2 md:text-xl">Bank Details (For International Donors)</h4>
            <table className="w-full text-white rounded-lg border border-gray-300 border-collapse">
              <tbody>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300 bg-[#60438f]">
                    Account Name
                  </td>
                  <td className="py-2 px-3 border border-gray-300 bg-[#60438f]">
                    Asian Cancer Foundation
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">Account No</td>
                  <td className="py-2 px-3 border border-gray-300">13990200006309</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">Account Type</td>
                  <td className="py-2 px-3 border border-gray-300">Current</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">Bank Name</td>
                  <td className="py-2 px-3 border border-gray-300">SBI Bank</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">Branch</td>
                  <td className="py-2 px-3 border border-gray-300">New Delhi Main Branch</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium border border-gray-300">IFSC Code</td>
                  <td className="py-2 px-3 border border-gray-300">SBIN0000691</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-4 md:mx-20 py-12 pb-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#D2635D] font-visby text-center md:text-left">
          Why Give to Asian Cancer Foundation?
        </h2>
        <ul className="space-y-3 mb-8 text-base md:text-2xl font-didact max-w-3xl mx-auto md:mx-0">
          <li>
            • Regular updates on how your contribution is used (photos, progress
            notes, impact reports).
          </li>
          <li>• Flexibility to contribute any monetary amount - no fixed “tiers”</li>
          <li>• Transparent use of funds, with regular review & compliance</li>
          <li>
            • Recognition & custom engagement opportunities for institutional
            donors
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactUs;
