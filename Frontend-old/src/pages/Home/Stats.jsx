import React from "react";

const Stats = () => {
  return (
    <section className="bg-[#f8f5f0] py-16 text-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-around text-[#7DA586] font-didact">
        {/* Stat 1 */}
        <div className="mb-10 md:mb-0 px-4 md:px-0">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-visby">70%</h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl leading-snug">
            diagnosed at an <br /> advanced stage
          </p>
        </div>

        {/* Stat 2 */}
        <div className="mb-10 md:mb-0 px-4 md:px-0">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-visby">20L +</h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl leading-snug">
            new cases <br /> projected for 2025
          </p>
        </div>

        {/* Stat 3 */}
        <div className="px-4 md:px-0">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-visby">50%</h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl leading-snug">
            cases are preventable <br /> by lifestyle changes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
