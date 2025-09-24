import React from "react";
import TopLeft from "../../assets/Our Impact/Topleft.png"
import TopRight from "../../assets/Our Impact/Topigh.png";
import Middle from "../../assets/Our Impact/Middle.png";
import BottomLeft from "../../assets/Our Impact/bottomLeft.png";
import BottomMiddle from "../../assets/Our Impact/MiddleBottom.png";
import BottomRight from "../../assets/Our Impact/bottomRight.png";

export default function OurImpact() {
  return (
    <div className="bg-[#fdf9f6] py-20 px-6 md:px-20 text-white">
      <h2 className="font-bold text-center text-purple-800 mb-15 font-visby text-[40px]">
        Our Impact
      </h2>

      <div className="grid grid-cols-3 gap-3">

        <div className="mt-20 space-y-5">
        <div className="h-78 rounded-[30px]"><img className="w-full h-full rounded-[30px]"src={TopLeft}/></div>
        <div className="bg-[#EF8B67] h-54 rounded-[30px] text-center text-4xl font-visby font-bold"><h1 className="pt-10">100+</h1><p className="pt-4">Medical<br></br>Consultations</p></div>
        <div className="bg-[#D2635D] h-93 rounded-[30px] font-didact text-lg p-7 pt-9"><p>“Asian Cancer Foundation partnered with us to conduct virtual awareness sessions on oral & lung cancer across six community centres in Mumbai, reaching senior citizens, youth & patients with chronic illnesses […] We are grateful to ACF for recognising the importance of health education in underserved communities & look forward to continued collaboration.”</p> <p className="pt-12">- Rangoonwala Foundation (India) Trust</p></div>
        <div className="h-91 rounded-[30px]"><img className="w-full h-full rounded-[30px]"src={BottomLeft}/></div>
        </div>

        <div className="mt-10 space-y-5">
        <div className="bg-[#EF8B67] h-78 rounded-[30px] text-center text-4xl font-visby font-bold"><h1 className="pt-15">100+</h1><p className="pt-4">Life-saving<br></br>surgeries<br></br>funded</p></div>
        <div className="h-104 rounded-[30px]"><img className="w-full h-full rounded-[30px]"src={Middle}/></div>
        <div className="bg-[#EF8B67] h-101 rounded-[30px] font-didact text-lg p-7 pt-9"><p>“I was admitted in June 2024 with a stomach tumour […] Thanks to the Asian Cancer Foundation, I received timely surgery at Cumballa Hill Hospital, with all doctors, nurses, and foundation members being kind and supportive […] I am truly blessed for their financial and emotional support.”</p><p className="pt-13">-  Arjun Rahis Sohorat, </p></div>
        <div className="h-63 rounded-[30px]"><img className="w-full h-full rounded-[30px]"src={BottomMiddle}/></div>
        </div>

        <div className=" space-y-5">
        <div className="h-78 rounded-[30px]"><img className="w-full h-full rounded-[30px]"src={TopRight}/></div>
        <div className="bg-[#EF8B67] h-39 rounded-[30px] text-center text-4xl font-visby font-bold"><h1 className="pt-7">100+</h1><p className="pt-4">Patients Supported</p></div>
        <div className="bg-[#D2635D] h-89 rounded-[30px] font-didact text-lg p-7 pt-9"><p>“On behalf of my family, we thank the Asian Cancer Foundation for their financial support […] Your generosity allowed me to access critical medical care and focus on healing instead of financial stress […] Your kindness has had a profound medical and emotional impact, giving me and my family hope in difficult times.”</p><p className="pt-7">- Anonymous</p></div>
        <div className="h-78 rounded-[30px]"><img className="w-full h-full rounded-[30px]"src={BottomRight}/></div>
        <div className="bg-[#EF8B67] h-67 rounded-[30px] text-4xl font-visby font-bold text-center"><h1 className="pt-10 text-5xl">550</h1><p className="pt-4">Screening &<br></br>diagnostic<br></br>tests</p></div>
        </div>
      </div>
    </div>
  );
}
