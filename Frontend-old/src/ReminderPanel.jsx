import React from "react";
import { ArrowLeft } from "lucide-react";
import Notifications from "./assets/Notification.png"; // Adjust path if needed

export default function ReminderPanel({ setPanelView, onClose }) {
  return (
    <>
      {/* Header */}
      <div className="shrink-0 relative w-full">
        <button
          onClick={() => setPanelView("donation")}
          className="absolute left-0 top-0"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-visby text-lg font-semibold text-center mb-3">
          Maybe next time?
        </h2>
        <hr className="border-0 h-px bg-white absolute left-0 right-0" />
      </div>

      {/* Content */}
      <div className="flex-1 mt-6 flex flex-col items-center text-center overflow-y-auto">
        <img
          src={Notifications}
          alt="Reminder"
          className="w-24 h-24 mb-4"
        />

        <p className="mb-4 font-didact px-12 pb-5">
          Please leave your email address below and we’ll send you a
          gentle reminder later.
        </p>

        <input
          type="email"
          className="w-full p-3 border border-white rounded-lg mb-3 font-visby placeholder-white text-white outline-none focus:ring-0 focus:border-white"
          placeholder="Email address"
        />

        <label className="flex items-center gap-2 mb-6 justify-center">
          <input type="checkbox" className="w-4 h-4" />
          <span className="font-didact">
            I agree to Terms and <a href="/privacypolicy">Privacy Notice</a>
          </span>
        </label>
      </div>

      {/* Footer */}
      <div className="shrink-0">
        <button className="w-full py-3 bg-purple-100 rounded-lg font-visby font-semibold mb-2 text-black">
          Remind me later
        </button>
        <button
          className="w-full py-3 bg-gray-100 rounded-lg font-visby font-semibold text-black"
          onClick={onClose}
        >
          No, Thanks
        </button>
      </div>
    </>
  );
}
