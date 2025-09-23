import React from 'react'

const SupportCards = () => {
  return (
    <section className="px-4 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-35">
        {[
          {
            title: "CSR Partnerships",
            subtitle: "Align Your Brand With A Life- Saving Mission.",
          },
          {
            title: "Corporate Collaborations",
            subtitle: "Purpose Meets Partnership",
          },
          {
            title: "Monthly Giving",
            subtitle: "Small Commitment. Lasting Change",
          },
          {
            title: "One-Time Donations",
            subtitle: "One Gift. One Life Changed.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center bg-white rounded-[30px] p-6 shadow-sm hover:shadow-md transition w-128 h-51 align-middle"
          >
            <h3 className="text-lg md:text-3xl font-semibold font-visby mb-2">
              {item.title}
            </h3>
            <p className="text-purple-700 text-sm md:text-lg font-semibold font-visby">
              {item.subtitle}
            </p>
          </div>
        ))}
      </section>
  )
}

export default SupportCards