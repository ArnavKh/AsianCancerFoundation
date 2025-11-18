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

  const [isMobile, setIsMobile] = useState(false);

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

    function handleMouseMove(e) {
      const y = e.clientY;
      const counters = [
        { id: "c1", ref: c1Ref },
        { id: "c2", ref: c2Ref },
        { id: "c3", ref: c3Ref },
        { id: "c4", ref: c4Ref },
      ];

      counters.forEach(({ id, ref }) => {
        if (triggered[id]) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        if (y >= rect.top && y <= rect.bottom) {
          setTriggered((prev) => ({ ...prev, [id]: true }));
        }
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [triggered, isMobile]);

  return (
    <div className="bg-[#fdf9f6] py-20 px-6 md:px-45 text-white md:pb-45 pb-25">
      <h2 className="text-3xl md:text-4xl font-bold font-visby text-center text-[#583490] mb-15">
        Our Impact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Left Column */}
        <div className="mt-10 space-y-5">
          <div className="h-60 rounded-[30px]">
            <img
              className="w-full h-full rounded-[30px]"
              src={TopLeft}
              alt=""
            />
          </div>

          {/* Counter 1 */}
          <div
            ref={c1Ref}
            className="bg-[#EF8B67] h-54 rounded-[30px] text-center text-4xl font-visby font-bold"
          >
            <h1 className="pt-10">
              {isMobile ? (
                "100"
              ) : triggered.c1 ? (
                <CountUp end={100} duration={2} />
              ) : (
                0
              )}
              +
            </h1>
            <p className="pt-4">
              Medical
              <br />
              Consultations
            </p>
          </div>

          {/* 🟣 Testimonial 1 (Left Column) */}
          <div className="bg-[#D2635D] h-100 rounded-[30px] font-didact text-lg p-7 pt-9">
            {isMobile ? (
              <>
                {/* Mobile text version */}
                <p>
                  “Asian Cancer Foundation partnered with us to conduct virtual
                  awareness sessions on oral & lung cancer across six community
                  centres in Mumbai […] We are grateful to ACF for recognising
                  the importance of health education in underserved communities
                  & look forward to continued collaboration”
                </p>
                <p className="">- Rangoonwala Foundation (India) Trust</p>
              </>
            ) : (
              <>
                <p>
                  “Asian Cancer Foundation partnered with us to conduct virtual
                  awareness sessions on oral & lung cancer across six community
                  centres in Mumbai, reaching senior citizens, youth & patients
                  with chronic illnesses […] We are grateful to ACF for
                  recognising the importance of health education in underserved
                  communities & look forward to continued collaboration.”
                </p>
                <p className="pt-4">- Rangoonwala Foundation (India) Trust</p>
              </>
            )}
          </div>

          <div className="h-80 rounded-[30px]">
            <img
              className="w-full h-full rounded-[30px]"
              src={BottomLeft}
              alt=""
            />
          </div>
        </div>

        {/* Middle Column */}
        <div className="mt-5 space-y-5">
          {/* Counter 2 */}
          <div
            ref={c2Ref}
            className="bg-[#EF8B67] h-78 rounded-[30px] text-center text-4xl font-visby font-bold"
          >
            <h1 className="pt-15">
              {isMobile ? (
                "100"
              ) : triggered.c2 ? (
                <CountUp end={100} duration={2} />
              ) : (
                0
              )}
              +
            </h1>
            <p className="pt-4">
              Life-saving
              <br />
              surgeries
              <br />
              funded
            </p>
          </div>

          <div className="h-104 rounded-[30px]">
            <img className="w-full h-full rounded-[30px]" src={Middle} alt="" />
          </div>

          {/* 🟣 Testimonial 2 (Middle Column) */}
          <div className="bg-[#EF8B67] md:h-101 h-75 rounded-[30px] font-didact text-lg p-7 pt-9">
            {isMobile ? (
              <>
                {/* Mobile text version */}
                <p>
                  “I was admitted in June 2024 with a stomach tumour […] Thanks
                  to the Asian Cancer Foundation, I received timely surgery at
                  Cumballa Hill Hospital[…] I am truly blessed for their
                  financial and emotional support”
                </p>
                <p className="pt-10">- Arjun Rahis Sohorat</p>
              </>
            ) : (
              <>
                <p>
                  “I was admitted in June 2024 with a stomach tumour […] Thanks
                  to the Asian Cancer Foundation, I received timely surgery at
                  Cumballa Hill Hospital, with all doctors, nurses, and
                  foundation members being kind and supportive […] I am truly
                  blessed for their financial and emotional support.”
                </p>
                <p className="pt-13">- Arjun Rahis Sohorat</p>
              </>
            )}
          </div>

          <div className="h-63 rounded-[30px]">
            <img
              className="w-full h-full rounded-[30px]"
              src={BottomMiddle}
              alt=""
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          <div className="h-78 rounded-[30px]">
            <img
              className="w-full h-full rounded-[30px]"
              src={TopRight}
              alt=""
            />
          </div>

          {/* Counter 3 */}
          <div
            ref={c3Ref}
            className="bg-[#EF8B67] h-39 rounded-[30px] text-center text-4xl font-visby font-bold p-5"
          >
            <h1 className="">
              {isMobile ? (
                "100"
              ) : triggered.c3 ? (
                <CountUp end={100} duration={2} />
              ) : (
                0
              )}
              +
            </h1>
            <p className="">Patients Supported</p>
          </div>

          {/* 🟣 Testimonial 3 (Right Column) */}
          <div className="bg-[#D2635D] md:h-89 rounded-[30px] font-didact text-lg p-7 pt-9 h-65">
            {isMobile ? (
              <>
                {/* Mobile text version */}
                <p>
                  “On behalf of my family, we thank the Asian Cancer Foundation
                  for their financial support […] Your generosity allowed me to
                  access critical medical care and focus on healing instead of
                  financial stress […]”
                </p>
                <p className="pt-6">- Anonymous</p>
              </>
            ) : (
              <>
                <p>
                  “On behalf of my family, we thank the Asian Cancer Foundation
                  for their financial support […] Your generosity allowed me to
                  access critical medical care and focus on healing instead of
                  financial stress […] Your kindness has had a profound medical
                  and emotional impact, giving me and my family hope in
                  difficult times.”
                </p>
                <p className="pt-7">- Anonymous</p>
              </>
            )}
          </div>

          <div className="h-78 rounded-[30px]">
            <img
              className="w-full h-full rounded-[30px]"
              src={BottomRight}
              alt=""
            />
          </div>

          {/* Counter 4 */}
          <div
            ref={c4Ref}
            className="bg-[#EF8B67] h-67 rounded-[30px] text-4xl font-visby font-bold text-center"
          >
            <h1 className="pt-10 text-5xl">
              {isMobile ? (
                "550"
              ) : triggered.c4 ? (
                <CountUp end={550} duration={2.5} />
              ) : (
                0
              )}
            </h1>
            <p className="pt-4">
              Screening &<br /> diagnostic <br /> tests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
