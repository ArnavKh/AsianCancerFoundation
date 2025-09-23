import React from "react";

export default function OurImpact() {
  return (
    <div className="bg-[#fdf9f6] py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-15">
        Our Impact
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{ gridAutoRows: "minmax(120px, auto)" }}
      >
        {/* ---------------- BLOCK 1 (Image - top-left) ---------------- */}
        <div
          className="rounded-2xl overflow-hidden shadow-md bg-white md:row-span-2"
        >
          <div className="h-full flex items-center justify-center bg-gray-300">
            Image placeholder 1
          </div>
        </div>

        {/* ---------------- BLOCK 2 (Stat - top-center: surgeries) ---------------- */}
        <div className="rounded-2xl shadow-md bg-[#EF8B67] flex items-center justify-center p-6 text-center text-white font-semibold md:row-span-2">
          <div>
            <div className="text-3xl">0</div>
            <div >Life-saving surgeries funded</div>
          </div>
        </div>

        {/* ---------------- BLOCK 3 (Image - top-right) ---------------- */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white md:row-span-2">
          <div className="h-full flex items-center justify-center bg-gray-300">
            Image placeholder 2
          </div>
        </div>

        {/* ---------------- BLOCK 4 (Stat - under left image: Medical consultations) ---------------- */}
        <div className="rounded-2xl shadow-md bg-[#EF8B67] flex items-center justify-center p-6 text-center font-semibold h-65 text-white">
          <div>
            <div className="text-2xl">0</div>
            <div>Medical consultations</div>
          </div>
        </div>

        {/* ---------------- BLOCK 5 (Image - center: doctors / camp) ---------------- */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white md:row-span-2">
          <div className="h-full flex items-center justify-center bg-gray-300">
            Image placeholder 3 (doctors / camp)
          </div>
        </div>

        {/* ---------------- BLOCK 6 (Stat - right middle: 100+ patients) ---------------- */}
        <div className="rounded-2xl shadow-md bg-[#EF8B67] flex items-center justify-center p-6 text-center text-white font-semibold">
          <div>
            <div className="text-3xl">100+</div>
            <div>Patients supported</div>
          </div>
        </div>

        {/* ---------------- BLOCK 7 (Testimonial - left big pink box) ---------------- */}
        <div className="rounded-2xl shadow-md bg-[#D2635D] p-6 md:h-70 text-white">
          <p className="text-sm mb-4 text-white">
            “Asian Cancer Foundation partnered with us to conduct virtual
            awareness sessions on oral & lung cancer across six community
            centres in Mumbai, reaching senior citizens, youth & patients with
            chronic illnesses […] We are grateful to ACF for recognising the
            importance of health education in underserved communities & look
            forward to continued collaboration.”
          </p>
          <p className="font-medium">- Rangoonwala Foundation (India) Trust</p>
        </div>

        {/* ---------------- BLOCK 8 (Testimonial - center small orange) ---------------- */}
        <div className="rounded-2xl shadow-md bg-[#D2635D] p-6 flex flex-col justify-center text-white">
          <p className="text-sm text-white mb-4 ">
            “On behalf of my family, we thank the Asian Cancer Foundation for
            their financial support […] Your generosity allowed me to access
            critical medical care and focus on healing instead of financial
            stress.”
          </p>
          <p className="font-medium">- Anonymous</p>
        </div>
        {/* ---------------- BLOCK 9 (Testimonial - right small pink) ---------------- */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white">
          <div className="h-full flex items-center justify-center bg-gray-300">
            Image placeholder 4
          </div>
        </div>

        {/* ---------------- BLOCK 10 (Image bottom-left small) ---------------- */}
        <div className="rounded-2xl shadow-md bg-[#EF8B67] p-6 flex flex-col justify-center md:h-70">
          <p className="text-sm text-white mb-4">
            “I was admitted in June 2024 with a stomach tumour […] Thanks to the
            Asian Cancer Foundation, I received timely surgery at Cumballa Hill
            Hospital, with all doctors, nurses, and foundation members being
            kind and supportive […]”
          </p>
          <p className="font-medium text-white">- Arjun Rahis Sohorat</p>
        </div>

        {/* ---------------- BLOCK 11 (Image bottom-center small) ---------------- */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white">
          <div className="h-full flex items-center justify-center bg-gray-300">
            Image placeholder 5
          </div>
        </div>
        {/* ---------------- BLOCK 12 (Image bottom-center small 2) ---------------- */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white md:col-start-2 md:h-50">
          <div className="h-full flex items-center justify-center bg-gray-300">
            Image placeholder 6
          </div>
        </div>

        {/* ---------------- BLOCK 13 (Stat bright orange bottom-right: 550 tests) ---------------- */}
        <div className="rounded-2xl shadow-md bg-[#EF8B67] flex items-center justify-center p-6 text-center text-white font-semibold md:col-start-3">
          <div>
            <div className="text-3xl">550</div>
            <div>Screening & diagnostic tests</div>
          </div>
        </div>
      </div>

      {/* --------- Quick notes for adjusting ---------- 
         - To change a block's width: add `md:col-span-2` (or 3) to that block's className
         - To change a block's height: add `md:row-span-2` (or 3) or add `h-64` / `h-80` inside the block
         - Blocks are independent — change any block and the grid will re-flow
      */}
    </div>
  );
}
