import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import indianCities from "../src/data/indianCities.json";

export default function AddressDetailsPanel({ setPanelView }) {
  const [formData, setFormData] = useState({
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Auto-fill logic: Detect Indian cities and fill state + country
  useEffect(() => {
    const cityInput = formData.city.trim().toLowerCase();

    if (!cityInput) return;

    const matchedCity = indianCities.find(
      (item) => item.city.toLowerCase() === cityInput
    );

    if (matchedCity) {
      setFormData((prev) => ({
        ...prev,
        state: matchedCity.state,
        country: "India",
      }));
    }
  }, [formData.city]);

  return (
    <>
      {/* Green dedication bar */}
      <div className="bg-[#DCE6D9] -m-6 mb-4 py-2 rounded-t-[20px] flex items-center justify-center gap-2">
        <span className="font-visby font-semibold text-sm text-black">
          ❤️ Dedicated to name
        </span>
      </div>

      {/* Header */}
      <div className="shrink-0 relative">
        <button
          onClick={() => setPanelView("donation")}
          className="absolute left-0 top-0"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-visby text-lg font-semibold text-center mb-3">
          Enter your address
        </h2>
        <hr className="border-0 h-px bg-gray-300" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto mt-6">
        {/* Stacked address block */}
        <div className="mb-6">
          <div className="rounded-[10px] border border-gray-300 overflow-hidden">
            <input
              type="text"
              name="street"
              placeholder="Street address"
              value={formData.street}
              onChange={handleChange}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
            />
            <div className="h-px bg-gray-200" />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment / suit / floor"
              value={formData.apartment}
              onChange={handleChange}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
            />
            <div className="h-px bg-gray-200" />
            <input
              type="text"
              name="city"
              placeholder="Town or City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* State, Zip, Country block */}
        <div className="mb-6">
          <div className="rounded-[10px] border border-gray-300 overflow-hidden">
            <div className="flex">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="flex-1 p-4 text-sm placeholder-gray-400 outline-none border-r border-gray-200"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip code"
                value={formData.zip}
                onChange={handleChange}
                className="w-1/3 p-4 text-sm placeholder-gray-400 outline-none"
              />
            </div>
            <div className="h-px bg-gray-200" />
            <div className="relative">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-4 pr-10 text-sm placeholder-gray-400 outline-none"
              />
              {/* Chevron icon */}
              <svg
                className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0">
        <button
          onClick={() => console.log("Continue to payment", formData)}
          className="w-full py-3 bg-purple-100 hover:bg-purple-200 rounded-lg font-visby font-semibold text-black"
        >
          Continue
        </button>
      </div>
    </>
  );
}
