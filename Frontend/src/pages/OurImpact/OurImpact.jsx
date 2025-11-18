import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

import TopLeft from "../../assets/Our Impact/Topleft.png";
import TopRight from "../../assets/Our Impact/Topigh.png";
import Middle from "../../assets/Our Impact/Middle.png";
import BottomLeft from "../../assets/Our Impact/bottomLeft.png";
import BottomMiddle from "../../assets/Our Impact/MiddleBottom.png";
import BottomRight from "../../assets/Our Impact/bottomRight.png";

export default function OurImpact() {
  const [triggered, setTriggered] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const c1Ref = useRef(null);
  const c2Ref = useRef(null);
  const c3Ref = useRef(null);
  const c4Ref = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const y = e.clientY;
      [
        { id: "c1", ref: c1Ref },
        { id: "c2", ref: c2Ref },
        { id: "c3", ref: c3Ref },
        { id: "c4", ref: c4Ref },
      ].forEach(({ id, ref }) => {
        if (triggered[id]) return;
        const rect = ref.current?.getBoundingClientRect();
        if (rect && y >= rect.top && y <= rect.bottom) {
          setTriggered(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [triggered, isMobile]);

  return (
    <div className="bg-[#fdf9f6] py-20 text-white">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-visby text-center text-[#583490] mb-15">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="space-y-6">

            <div className="rounded-[30px] overflow-hidden">
              <img src={TopLeft} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Counter 1 – exactly your original size */}
            <div
              ref={c1Ref}
              className="bg-[#EF8B67] rounded-[30px] text-center pt-10 pb-8 px-6 text-4xl md:text-4xl lg:text-4xl font-visby font-bold leading-none"
            >
              <h1>
                {isMobile ? "100" : triggered.c1 ? <CountUp end={100} duration={2} /> : "0"}+
              </h1>
              <p className="mt-4 text-2xl lg:text-3xl xl:text-4xl leading-tight">
                Medical<br className="lg:hidden" /> Consultations
              </p>
            </div>

            {/* Testimonial 1 */}
            <div className="bg-[#D2635D] rounded-[30px] p-7 pt-9 font-didact text-lg lg:text-xl leading-relaxed">
              <p className="italic">
                “Asian Cancer Foundation partnered with us to conduct virtual awareness sessions on oral & lung cancer across six community centres in Mumbai […] We are grateful to ACF for recognising the importance of health education in underserved communities & look forward to continued collaboration.”
              </p>
              <p className="mt-6 font-medium">- Rangoonwala Foundation (India) Trust</p>
            </div>

            <div className="rounded-[30px] overflow-hidden">
              <img src={BottomLeft} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">

            {/* Counter 2 – tallest one, biggest number */}
            <div
              ref={c2Ref}
              className="bg-[#EF8B67] rounded-[30px] text-center pt-12 lg:pt-16 pb-10 px-6 text-4xl md:text-4xl lg:text-4xl font-visby font-bold leading-none"
            >
              <h1>
                {isMobile ? "100" : triggered.c2 ? <CountUp end={100} duration={2} /> : "0"}+
              </h1>
              <p className="mt-6 text-2xl lg:text-3xl xl:text-4xl leading-tight">
                Life-saving<br className="lg:hidden" /> surgeries<br className="lg:hidden" /> funded
              </p>
            </div>

            <div className="rounded-[30px] overflow-hidden">
              <img src={Middle} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="bg-[#EF8B67] rounded-[30px] p-7 pt-9 font-didact text-lg lg:text-xl leading-relaxed">
              <p className="italic">
                “I was admitted in June 2024 with a stomach tumour […] Thanks to the Asian Cancer Foundation, I received timely surgery at Cumballa Hill Hospital[…] I am truly blessed for their financial and emotional support.”
              </p>
              <p className="mt-8 font-medium">- Arjun Rahis Sohorat</p>
            </div>

            <div className="rounded-[30px] overflow-hidden">
              <img src={BottomMiddle} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            <div className="rounded-[30px] overflow-hidden">
              <img src={TopRight} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Counter 3 */}
            <div
              ref={c3Ref}
              className="bg-[#EF8B67] rounded-[30px] text-center py-8 lg:py-10 px-6 text-4xl md:text-4xl lg:text-4xl font-visby font-bold leading-none"
            >
              <h1>
                {isMobile ? "100" : triggered.c3 ? <CountUp end={100} duration={2} /> : "0"}+
              </h1>
              <p className="mt-4 text-2xl lg:text-3xl xl:text-4xl">Patients Supported</p>
            </div>

            <div className="bg-[#D2635D] rounded-[30px] p-7 pt-9 font-didact text-lg lg:text-xl leading-relaxed">
              <p className="italic">
                “On behalf of my family, we thank the Asian Cancer Foundation for their financial support […] Your generosity allowed me to access critical medical care and focus on healing instead of financial stress […] Your kindness has had a profound impact.”
              </p>
              <p className="mt-6 font-medium">- Anonymous</p>
            </div>

            <div className="rounded-[30px] overflow-hidden">
              <img src={BottomRight} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Counter 4 – 550 is the biggest number */}
            <div
              ref={c4Ref}
              className="bg-[#EF8B67] rounded-[30px] text-center pt-10 pb-8 px-6 text-5xl md:text-5xl lg:text-5xl font-visby font-bold leading-none"
            >
              <h1>
                {isMobile ? "550" : triggered.c4 ? <CountUp end={550} duration={2.5} /> : "0"}
              </h1>
              <p className="mt-6 text-4xl lg:text-3xl xl:text-4xl leading-tight">
                Screening &<br className="lg:hidden" /> diagnostic<br className="lg:hidden" /> tests
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}