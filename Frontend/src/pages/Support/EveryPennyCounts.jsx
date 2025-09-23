import React from 'react'

const EveryPennyCounts = () => {
  return (
    <section className="px-4 md:px-20 py-12 md:py-16 bg-white">
        <h2 className="text-2xl md:text-3xl text-purple-700 mb-8 font-visby font-extrabold">
          EVERY PENNY COUNTS
        </h2>

        <p className="text-base md:text-2xl mb-6 font-visby font-semibold">
          You Can Start By Donating A Little Monthly
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          {["₹ 1,000", "₹ 2,500", "₹ 5,000", "₹ 10,000+"].map((amt, i) => (
            <button
              key={i}
              className="bg-[#f9f3ec] border-4 border-purple-600 rounded-[10px]
               text-purple-700 font-bold w-59 h-29 text-2xl font-visby"
            >
              {amt}
            </button>
          ))}
        </div>

        <p className="text-base md:text-2xl font-semibold mb-6 font-visby ">
          Support Breast Cancer Surgeries
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {["₹ 2,50,000", "₹250,00,000"].map((amt, i) => (
            <button
              key={i}
              className="bg-[#f9f3ec] px-6 md:px-12 py-3 md:py-5 rounded-[10px] shadow-purple-700 shadow-md
       font-bold font-visby w-59 h-29 sm:w-auto text-center text-2xl"
            >
              <div>
                <div className="text-purple-700 text-2xl font-bold">{amt}</div>
                <div className="text-sm md:text-base font-normal mt-1">
                  {i === 0 ? "Per Surgery" : "For 100 Surgeries"}
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="text-base md:text-2xl font-semibold mb-6 font-visby">
          Support Head And Neck Cancer Surgeries
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {["₹ 3,00,000", "₹300,00,000"].map((amt, i) => (
            <button
              key={i}
              className="bg-[#f9f3ec] px-6 md:px-12 py-3 md:py-5 rounded-[10px] shadow-purple-700 shadow-md
       font-bold font-visby w-59 h-29 sm:w-auto text-center text-2xl"
            >
              <div>
                <div className="text-purple-700 text-2xl font-bold">{amt}</div>
                <div className="text-sm md:text-base font-normal mt-1">
                  {i === 0 ? "Per Surgery" : "For 100 Surgeries"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
  )
}

export default EveryPennyCounts