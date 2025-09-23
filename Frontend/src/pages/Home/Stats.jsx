import React from "react";

const Stats = () => {
  return (
    <section className="bg-[#f8f5f0] py-16 text-center">
      <div className="flex flex-col md:flex-row justify-center gap-20 space-x-35 text-[#7DA586] font-didact">
        <div>
          <h2 className="text-7xl font-black font-visby">70%</h2>
          <p className="mt-2 text-2xl">diagnosed at an <br></br> advanced stage</p>
        </div>
        <div>
          <h2 className="text-7xl font-black font-visby">20L +</h2>
          <p className="mt-2 text-2xl">new cases projected <br></br>for 2025</p>
        </div>
        <div>
          <h2 className="text-7xl font-black font-visby">50%</h2>
          <p className="mt-2 text-2xl">cases are preventable<br></br> by lifestyle changes</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
