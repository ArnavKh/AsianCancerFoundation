import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, preview, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 bg-[#f8f5f0]">
      {/* Title row */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <h2 className="text-3xl font-semibold text-[#583490] font-visby">
          {title}
        </h2>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>

      {/* Always visible text */}
      <div className="mt-3 text-gray-700 text-2xl font-didact">{preview}</div>

      {/* Expandable text */}
      {isOpen && (
        <div className="mt-3 text-gray-700 text-xl font-didact">
          {children}
        </div>
      )}
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <section className="p-6 bg-[#f8f5f0] rounded-lg px-20 pb-30">
      <h1 className="text-center text-5xl font-bold text-[#583490] mb-6 font-visby pt-10 pb-20">
        PRIVACY NOTICE
      </h1>

      <AccordionItem
        title="Privacy Policy – Asian Cancer Foundation (ACF)"
        preview="Asian Cancer Foundation (“ACF”, “we”, “our”, “us”) is committed to protecting the privacy of all donors, supporters, beneficiaries, and visitors to our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023."
      >
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Information We Collect</h2>
          <ul className="font-didact text-2xl pl-5">
            <li>• Name, email address, phone number, and postal address.</li>
            <li>• Payment information (bank details, card/UPI/NetBanking) processed securely via Razorpay.</li>
            <li>• PAN details (if applicable, for donations above prescribed limits).</li>
            <li>• Any voluntary information you share with us through forms or emails.</li>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">How We Use Information</h2>
          <ul className="font-didact text-2xl pl-5">
            <li>• To process donations and issue receipts.</li>
            <li>• To comply with statutory and regulatory requirements.</li>
            <li>• To keep you informed about our initiatives, campaigns, and impact (unless you opt out).</li>
            <li>• For internal record-keeping and audits.</li>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Sharing of Information</h2>
          <ul className="font-didact text-2xl pl-5">
            <li>• We do not sell or rent personal information.</li>
            <li>• Information may be shared with payment gateways, auditors, regulators, or government authorities as required by law.</li>
            <li>• Razorpay processes your payment details as per its own privacy and security standards.</li>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Data Security</h2>
          <p className="font-didact text-2xl">We implement reasonable technical and organisational safeguards to protect your personal data against unauthorised access, alteration, or disclosure.
          </p>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Your Rights</h2>
          <ul className="font-didact text-2xl pl-5">
            <li>• Access, correction, or deletion of your personal information.</li>
            <li>• 
            Withdrawal of consent for communications.</li>
          </ul>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Terms & Conditions – Asian Cancer Foundation (ACF)"
        preview="By accessing and using the Asian Cancer Foundation (“ACF”) website and its donation facility, you agree to the following terms and conditions:"
      >
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">General</h2>
          <ul className="font-didact text-2xl pl-5">
            <li>• ACF is a not-for-profit company incorporated under Section 8 of the Companies Act, 2013.</li>
            <li>• Donations are accepted in Indian Rupees (INR) and, where permitted, in foreign currency in compliance with FEMA and FCRA (if applicable).</li>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Donations</h2>
          <ul className="font-didact text-2xl pl-5">
            <li>1. All donations made to ACF are voluntary and non-commercial.</li>
            <li>2. Donations qualify for tax exemption under Section 80G of the Income-tax Act, 1961 (if applicable), and receipts will be issued accordingly.</li>
            <li>3. The donor is responsible for providing correct information (including PAN where required).All donations made to ACF are voluntary and non-commercial.</li>
            <li>4. Donations qualify for tax exemption under Section 80G of the Income-tax Act, 1961 (if applicable), and receipts will be issued accordingly.</li>
            <li>5. The donor is responsible for providing correct information (including PAN where required).</li>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Use of Funds</h2>
          <ul className="font-didact text-2xl pl-5">
            <li>• Donations are used towards ACF’s charitable objects including, but not limited to, cancer awareness, treatment support, research, and education.</li>
            <li>• ACF reserves the right to allocate funds to programs as per need and priority.</li>
          </ul>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Intellectual Property</h2>
          <p className="font-didact text-2xl">All content on the website (logos, text, images, etc.) is owned by ACF and cannot be copied or used without prior permission.
          </p>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Limitation of Liability</h2>
          <p className="font-didact text-2xl">ACF shall not be responsible for any loss or damage due to technical errors, failed transactions, or issues beyond its reasonable control.
          </p>
        </div>
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Governing Law</h2>
          <p className="font-didact text-2xl">These Terms shall be governed by the laws of India and subject to the jurisdiction of the courts at Mumbai.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Refund & Cancellation Policy – Asian Cancer Foundation (ACF)"
        preview="Asian Cancer Foundation (“ACF”) deeply values the support of its donors. However, as a charitable organization, we maintain the following policy regarding cancellations and refunds:"
      >
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Cancellations</h2>
          <p className="font-didact text-2xl">Once a donation is made successfully through our online payment gateway, it cannot ordinarily be cancelled.
          </p>
        </div>

        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Refunds</h2>
          <p className="font-didact text-2xl">Refunds will be considered only in exceptional cases such as:
          </p>
          <ul className="font-didact text-2xl pl-5">
            <li>• Duplicate transaction due to technical error.</li>
            <li>• Incorrect amount entered due to donor error.</li>
          </ul>

          <p className="font-didact text-2xl">Requests for refund must be made within 7 working days of the donation, by writing to acf@asiancancerfoundation.org.
          </p>

          <p className="font-didact text-2xl">All refunds (if approved) will be processed to the original payment method within 10–15 working days.
          </p>
        </div>
        
        <div className="py-4">
          <h2 className="font-visby text-3xl font-bold">Tax Exemption Receipts</h2>
          <p className="font-didact text-2xl">In case a refund is issued, the original tax exemption receipt (if issued) shall stand cancelled and become invalid.
          </p>
        </div>
      </AccordionItem>

      <div>
        <h2 className="text-3xl font-semibold text-[#583490] font-visby pt-3">Contact for Queries – Asian Cancer Foundation (ACF)</h2>
        
        <div className="mt-3 text-gray-700 text-xl font-didact">
        <p>ACI Cumballa Hill Hospital, 93/95, August Kranti Marg, Mumbai 400036</p>
        <p>Email: acf@asiancancerfoundation.org</p>
        <p>Phone: [+91-9821362990]</p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
