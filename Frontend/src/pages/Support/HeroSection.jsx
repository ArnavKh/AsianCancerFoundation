import React from 'react'

const HeroSection = () => {
  return (
      <section className="px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="w-20 md:w-47 h-6 md:h-8 bg-[#d9665b] ml-1"></div>
          <h1 className="text-3xl md:text-7xl font-bold leading-snug font-visby">
            YOUR SUPPORT <br />
            <span className="text-[#d9665b]">
              CAN SAVE <br></br>LIVES
            </span>
          </h1>
          <p className="mt-6 text-gray-700 text-base md:text-lg font-didact">
            Join Asian Cancer Foundation to ensure<br></br> everyone has access
            to timely and quality <br></br>treatment.
          </p>
        </div>
      </section>
  )
}

export default HeroSection