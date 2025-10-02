import { useState } from "react";
import { ChevronDownCircle } from "lucide-react";

import Image1 from "../../assets/Flagship/1.png";
import Image2 from "../../assets/Flagship/2.png";
import Image3 from "../../assets/Flagship/3.png";
import Image4 from "../../assets/Flagship/4.png";
import Image5 from "../../assets/Flagship/5.png";
import Image6 from "../../assets/Flagship/6.png";

export default function FlagshipInitiatives() {
  const [openIndex, setOpenIndex] = useState(null);

  const initiatives = [
    {
      id: 1,
      title: "Breast Cancer Care",
      desc: "Providing life saving breast cancer care",
      img: Image1,
      alt: "Breast Cancer Care",
      content: (
        <>
          <span className="text-[#583490] text-[29px] font-bold">1 in 2</span> women with breast cancer die from delayed diagnosis and lack of timely surgery.
          <br /><br />
          Together, we will ensure life-saving breast cancer care reaches those who need it most
          by facilitating <span className="text-[#583490] text-[29px] font-bold">100</span> surgeries and providing comprehensive pre & post-operative support.
        </>
      )
    },
    {
      id: 2,
      title: "Head, Face And Neck Cancer",
      desc: "Providing surgical care for India’s most common cancer in men",
      img: Image2,
      alt: "Head, Face And Neck Cancer",
      content: (
        <>
          In India, <span className="text-[#583490] text-[29px] font-bold">80%</span> of head and neck cancers are diagnosed at late stages, despite being largely preventable and highly treatable if detected early.
          <br /><br />
          Mostly affecting men through tobacco and betel nut use, early surgery can be life-saving. This year, we are enabling 100 life-saving surgeries.
        </>
      )
    },
    {
      id: 3,
      title: "Cervical Cancer Treatment And Vaccination",
      desc: "Expanding access to preventive vaccination and timely treatment for women",
      img: Image3,
      alt: "Cervical Cancer Treatment And Vaccination",
      content: (
        <>
          Cervical cancer is the second most common cancer among Indian women, with over <span className="text-[#583490] text-[29px] font-bold">123,000</span> new cases and <span className="text-[#583490] text-[29px] font-bold">77,000</span> deaths each year.
          <br /><br />
          Despite being preventable through HPV vaccination and early screening, most women are diagnosed late due to low awareness and limited access. This year, we are running community vaccination drives, awareness campaigns, and providing free or subsidised treatment to ensure women receive life-saving prevention and care.
        </>
      )
    },
    {
      id: 4,
      title: "Adopt A Patient",
      desc: "Directly fund life-saving treatments",
      img: Image4,
      alt: "Adopt A Patient",
      content: (
        <>
          Through our Adopt a Patient program, you can <span className="text-[#583490] font-bold">fund</span> an entire cancer treatment for <span className="text-[#583490] font-bold">someone who cannot afford it.</span>
          <br /><br />
          Your support doesn’t just cover costs—it gives a patient a fighting chance at life. Donors stay connected every step of the way, receiving updates and progress notes, while choosing a contribution level that meets each patient’s needs.
        </>
      )
    },
    {
      id: 5,
      title: "Continuing Medical Education (CME) And Paramedical Training",
      desc: "Strengthening oncology care through training and skill-building",
      img: Image5,
      alt: "CME And Paramedical Training",
      content: (
        <>
          Up-to-date knowledge and hands-on skills are critical for early detection and effective treatment of cancer. Yet many doctors and paramedical staff lack access to structured oncology training.
          <br /><br />
          We are organising expert-led CME sessions and practical workshops on cancer screening, diagnostics, treatment, and patient care equipping healthcare providers with the skills needed to improve survival and strengthen local health systems.
        </>
      )
    },
    {
      id: 6,
      title: "Nutritious Recipes For Cancer Recovery",
      desc: "Supporting recovery with targeted nutrition",
      img: Image6,
      alt: "Nutritious Recipes For Cancer Recovery",
      content: (
        <>
          A simple, <span className="text-[#583490] font-bold">affordable recipe book</span> for cancer patients, especially those undergoing head & neck treatment.
          <br /><br />
          Proper nutrition is often overlooked but it helps boost immunity, aids recovery, & supports overall well-being during & after treatment.
        </>
      )
    }
  ];

  return (
    <section className="py-12 bg-[#f9f3ec] pb-15 md:pb-55 px-4">
      <h2 className="text-center text-3xl sm:text-5xl font-semibold text-[#583490] mb-10 font-visby py-10 pb-20">
        Flagship Initiatives
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {initiatives.map((item) => (
          <div
            key={item.id}
            className={`group bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-full p-5 
              ${openIndex !== item.id ? "hover:bg-[#583490] hover:text-white" : ""}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === item.id ? null : item.id)}
              className="flex w-full items-start justify-between p-4 text-left"
            >
              {/* Left: Image + Text (stacked vertically on small screens) */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <img
                  src={item.img}
                  alt={item.alt}
                  className={`w-20 h-20 object-contain transition 
                    ${openIndex !== item.id ? "group-hover:invert" : ""}`}
                />
                <div>
                  <h3 className="font-bold text-2xl sm:text-4xl font-visby">{item.title}</h3>
                  <p className="text-xl sm:text-2xl font-semibold font-visby pt-2 sm:pt-4">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Right: Chevron Icon (fixed size, aligned with title) */}
              <div className="ml-2 mt-1 sm:mt-4">
                <ChevronDownCircle
                  className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform ${
                    openIndex === item.id ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Collapsible Content */}
            {openIndex === item.id && (
              <div className="ml-2 sm:ml-8 px-2 sm:px-20 pb-4 sm:pb-6 text-lg sm:text-2xl font-visby">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
