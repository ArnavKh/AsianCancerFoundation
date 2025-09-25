import React from 'react'

const SupportCards = () => {
  return (
    <section className="px-4 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 gap-x-75 gap-y-8 pb-35 mr-76">
      {[
        {
          title: "CSR Partnerships",
          subtitle: "Align Your Brand With A Life- Saving Mission.",
          hoverText: "Support surgeries, awareness drives & patient care initiatives through your CSR program. Partner with ACF to make a measurable impact on public health.",
        },
        {
          title: "Corporate Collaborations",
          subtitle: "Purpose Meets Partnership",
          hoverText: "Co-create impact through co-branded campaigns, event sponsorships, or cause-drive merchandise. Let your brand stand for something bigger, because doing good is good business.",
        },
        {
          title: "Monthly Giving",
          subtitle: "Small Commitment. Lasting Change",
          hoverText: "Become a monthly donor & help us provide continuous care. Even small monthly contributions can help fund follow-ups, nutrition, screenings & surgeries for patients.",
        },
        {
          title: "One-Time Donations",
          subtitle: "One Gift. One Life Changed.",
          hoverText: "Make a direct impact. Your single donation can conver critical needs like surgery, diganostic tests, or accommodation for underprivileged cancer patients.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="group flex flex-col justify-center bg-white rounded-[30px] p-6 shadow-sm hover:shadow transition w-128 h-51 align-middle"
        >
          <h3 className="text-lg md:text-3xl font-semibold font-visby mb-2 group-hover:hidden">
            {item.title}
          </h3>

          <p className="text-[#583490] text-sm md:text-lg font-semibold font-visby group-hover:hidden">
            {item.subtitle}
          </p>

          <p className="hidden group-hover:block font-visby text-center text-xl">
            {item.hoverText}
          </p>
        </div>
      ))}
    </section>
  )
}

export default SupportCards
