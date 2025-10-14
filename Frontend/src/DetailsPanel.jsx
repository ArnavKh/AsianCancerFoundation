import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useDonationStore } from "./store/useDonationStore.js";

export default function DetailsPanel({ setPanelView }) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");

  const [identityOption, setIdentityOption] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [optInFor80G, setOptInFor80G] = useState(false);

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isMobileValid = /^[0-9]{10}$/.test(mobile);
  const isPanValid = !optInFor80G || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

  //  zustand 
    const {
    newamount,
    newcomment,
    newpan,
    newname,
    newemail,
    newmobileNumber,
    newdonationType,
    newaddress,
    newsetAmount,
    newsetComment,
    newsetName,
    newsetEmail,
    newsetMobileNumber,
    newsetpan,
    newsetDonationType,
    newsetAddress,
    newsetidentityOption,newidentityOption
  } = useDonationStore();



  const isFormValid =
    title &&
    firstName.trim() &&
    lastName.trim() &&
    isEmailValid &&
    isMobileValid &&
    termsAccepted &&
    isPanValid;

  const handleContinue = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill in all required fields correctly before continuing.");
      return;
    }

      const fullName = `${title} ${firstName} ${lastName}`.trim();

      console.log(`Loacl ---> name : ${fullName} , email : ${email} , mobile :${mobile} identity: ${identityOption}`);


  newsetName(fullName);
  newsetEmail(email);
  newsetMobileNumber(mobile);
  newsetpan(pan);
  newsetidentityOption(identityOption);

  console.log(`Zustand ----> name : ${newname} , email : ${newemail} , mobile :${newmobileNumber} identity: ${newidentityOption}`);
    setPanelView("addressDetails");
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Green dedication bar */}
      <div className="bg-[#DCE6D9] -m-6 mb-4 py-2 rounded-t-[20px] flex items-center justify-center gap-2 shrink-0">
        <span className="font-visby font-semibold text-sm text-black">
          ❤️ Dedicated to name
        </span>
      </div>

      {/* Header */}
      <div className="shrink-0 relative px-2">
        <button
          onClick={() => setPanelView("donation")}
          className="absolute left-0 top-0"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-visby text-lg font-semibold text-center mb-3">
          Enter your details
        </h2>
        <hr className="border-0 h-px bg-gray-300" />
      </div>

      {/* Scrollable Content */}
      <form
      id="donation-form"
        onSubmit={handleContinue}
        className="flex-1 overflow-y-auto px-2 pb-24" // 👈 add padding bottom so last fields don't hide behind button
      >
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded-lg p-3 text-sm font-didact"
              required
            >
              <option value="">Title</option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="ms">Ms</option>
              <option value="dr">Dr</option>
            </select>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded-lg p-3 text-sm font-didact"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border rounded-lg p-3 w-full mb-3 text-sm font-didact"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border rounded-lg p-3 w-full mb-3 text-sm font-didact ${
              email && !isEmailValid ? "border-red-500" : ""
            }`}
            required
          />
          <input
            type="tel"
            placeholder="Mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className={`border rounded-lg p-3 w-full mb-3 text-sm font-didact ${
              mobile && !isMobileValid ? "border-red-500" : ""
            }`}
            required
          />

          {/* PAN field visible only if opted for 80G */}
          {optInFor80G && (
            <input
              type="text"
              placeholder="PAN Card Number"
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              className={`border rounded-lg p-3 w-full mb-3 text-sm font-didact ${
                pan && !isPanValid ? "border-red-500" : ""
              }`}
              required
            />
          )}

          {/* Mutually exclusive checkboxes */}
          <div className="space-y-2 mb-6">
            <label className="font-didact flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px]
                  appearance-none relative checked:after:content-['✔'] checked:after:absolute 
                  checked:after:text-[#583490] checked:after:text-[12px] 
                  checked:after:left-[3px] checked:after:top-[-1px]"
                checked={identityOption === "organisation"}
                onChange={() =>
                  setIdentityOption(
                    identityOption === "organisation" ? "" : "organisation"
                  )
                }
              />
              Donate as an organisation
            </label>

            <label className="font-didact flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px]
                  appearance-none relative checked:after:content-['✔'] checked:after:absolute 
                  checked:after:text-[#583490] checked:after:text-[12px] 
                  checked:after:left-[3px] checked:after:top-[-1px]"
                checked={identityOption === "anonymous"}
                onChange={() =>
                  setIdentityOption(
                    identityOption === "anonymous" ? "" : "anonymous"
                  )
                }
              />
              Dedicate anonymously
            </label>

            <label className="font-didact flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px]
                  appearance-none relative checked:after:content-['✔'] checked:after:absolute 
                  checked:after:text-[#583490] checked:after:text-[12px] 
                  checked:after:left-[3px] checked:after:top-[-1px]"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <span className="font-didact">
                I agree to Terms and{" "}
                {/* <Link to ="/privacypolicy"> */}
                <a href="/privacypolicy" className="">
                  Privacy Notice
                </a>
                {/* </Link> */}
              </span>
            </label>

            <label className="font-didact flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px]
                  appearance-none relative checked:after:content-['✔'] checked:after:absolute 
                  checked:after:text-[#583490] checked:after:text-[12px] 
                  checked:after:left-[3px] checked:after:top-[-1px]"
                checked={optInFor80G}
                onChange={(e) => setOptInFor80G(e.target.checked)}
              />
              <span className="font-didact">
                Opt in to receive the 80G Certificate
              </span>
            </label>
          </div>
        </div>
      </form>

      <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 bg-white">
        <button
          type="submit"
          form="donation-form"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg font-visby font-semibold text-black
            ${
              isFormValid
                ? "bg-[#EDE2FF]"
                : "bg-[#EDE2FF] cursor-not-allowed"
            }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
