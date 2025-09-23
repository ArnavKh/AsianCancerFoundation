import React from "react";
import HeroImage from "../../assets/Contact/HeroImage.png";

const ContactUs = () => {
  return (
    <div className="bg-[#fefaf6] text-gray-900">
      {/* Header Section */}
      <div className="relative">
        <img
          src={HeroImage}
          alt="Contact Header"
          className="w-full h-108 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="container grid md:grid-cols-2 py-12 pt-25">
        {/* Contact Information */}
        <div className="bg-[#6c3bbf] text-white rounded-[30px] p-8 shadow-lg h-108 w-105 ml-20">
          <h2 className="text-2xl font-visby font-medium mb-2 ">
            Contact Information
          </h2>
          <p className="mb-20 font-didact text-lg">
            Got questions? Let’s Connect!
          </p>

          <ul className="space-y-4 font-didact">
            <li className="flex items-center space-x-3">
              <span>📞</span>
              <span>+91 2262771134</span>
            </li>
            <li className="flex items-center space-x-3">
              <span>📧</span>
              <span>acf@asiancancerfoundation.org</span>
            </li>
            <li className="flex items-center space-x-3">
              <span>📍</span>
              <span>
                ACI Cumbala Hill Hospital 92/95,
                <br /> August Kranti Marg, Kemps Corner, Mumbai 400036
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="rounded-xl space-y-6 pr-10 font-visby">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg mb-2 font-semibold">
                First Name
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-semibold">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none py-2"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-lg mb-2 font-semibold">Subject</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" /> Volunteer
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" /> Donation
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" /> General Inquiry
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg mb-2 font-semibold">Message</label>
            <textarea
              rows="1"
              className="w-full border-b border-gray-400 focus:border-purple-500 outline-none py-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#EDE2FF] text-lg px-6 py-3 rounded-[10px] shadow"
          >
            Send Message
          </button>
        </form>
      </div>

      <section className="p-10 m-20 px-4 md:px-20 pb-15 bg-purple-800 text-white rounded-[30px]">
        <h3 className="text-lg md:text-3xl text-orange-400 font-semibold mb-6 font-visby">
          Help us save lives. Donate or partner today.
        </h3>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base font-didact">
          <div>
            <h4 className="mb-2 md:text-xl">Bank Details</h4>
            <div className="overflow-x-auto">
              <table className="w-124 text-white rounded-lg border border-gray-300 border-collapse">
                <tbody>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300 bg-purple-600">
                      Account Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300 bg-purple-600">
                      Asian Cancer Foundation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account No
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      00802560000419
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account Type
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      Current
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Bank Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      HDFC Bank
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Branch
                    </td>
                    <td className="py-2 px-3 border border-gray-300">Warli</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      IFSC Code
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      HDFC0000080
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* International Donors */}
          <div>
            <h4 className="mb-2 md:text-xl">
              Bank Details (For International Donors)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-124 text-white rounded-lg border border-gray-300 border-collapse">
                <tbody>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300 bg-purple-600">
                      Account Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300 bg-purple-600">
                      Asian Cancer Foundation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account No
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      13990200006309
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Account Type
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      Current
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Bank Name
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      Federal Bank
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      Branch
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      Chembur
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border border-gray-300">
                      IFSC Code
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      FDRL0001399
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-20 py-12 pb-35">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-orange-400 font-visby">
          Why Give to Asian Cancer Foundation?
        </h2>
        <ul className="space-y-3 mb-8 text-base md:text-2xl font-didact">
          <li>
            • Regular updates on how your contribution is used (photos, progress
            notes, impact reports).
          </li>
          <li>
            • Flexibility to contribute any monetary amount - no fixed “tiers”
          </li>
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
