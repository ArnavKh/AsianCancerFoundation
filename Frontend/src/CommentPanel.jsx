import React from "react";
import { ArrowLeft } from "lucide-react";

export default function CommentPanel({ setPanelView }) {
  return (
    <>
      {/* Header */}
      <div className="shrink-0 relative">
        <button
          onClick={() => setPanelView("donation")}
          className="absolute left-0 top-0"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-visby text-lg font-semibold text-center mb-3">
          Comment
        </h2>
        <hr className="border-0 h-px bg-gray-300" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <textarea
          className="w-full border-2 rounded-lg p-4 mb-4 font-didact border-purple-600 shadow-purple-600 shadow-sm"
          rows={18}
          placeholder="Enter your comment"
        ></textarea>
      </div>

      {/* Footer */}
      <div className="shrink-0">
        <button
          onClick={() => setPanelView("donation")}
          className="px-4 py-2 bg-[#EDE2FF] text-lg rounded-[10px] w-full font-visby font-semibold"
        >
          Save
        </button>
      </div>
    </>
  );
}
