import { useState } from "react";
import { ChevronDownCircle } from "lucide-react"; // ✅ import the icon

import Image1 from "../../assets/Flagship/1.png";
import Image2 from "../../assets/Flagship/2.png";
import Image3 from "../../assets/Flagship/3.png";
import Image4 from "../../assets/Flagship/4.png";
import Image5 from "../../assets/Flagship/5.png";
import Image6 from "../../assets/Flagship/6.png";

const initiatives = [
  {
    title: (<>Breast Cancer Care</>),
    description: (<>Providing life saving breast cancer care</>),
    details: (
      <>1 in 2 women with breast cancer die from delayed diagnosis and lack of timely surgery. <br></br> <br></br> Together, we will ensure life-saving breast cancer care reaches those who need it most by facilitating 100 surgeries and providing comprehensive pre & post-operative support.</>
    ),
    icon: <img src={Image1} alt="Breast Cancer Care" className="w-18 h-24" />,
  },
  {
    title: (<>Head, Face And Neck Cancer</>),
    description: (<>Providing surgical care for India’s most common<br></br> cancer in men</>),
    details: (
      <>In India, 80% of head and neck cancers are diagnosed at late stages, despite being largely preventable and highly treatable if detected early. Low awareness, delayed care, stigma, and financial barriers often turn these curable cases into life-threatening ones. <br></br> <br></br> Mostly affecting men through tobacco and betel nut use, early surgery can be life-saving. This year, we are enabling 100 life-saving surgeries.</>
    ),
    icon: <img src={Image2} alt="Head, Face And Neck Cancer" className="w-21 h-23" />,
  },
  {
    title: (<>Cervical Cancer Treatment And Vaccination</>),
    description: (<>Expanding access to preventive vaccination and<br></br> timely treatment for women</>),
    details: (
      <>Cervical cancer is the second most common cancer among Indian women, with over 123,000 new cases and 77,000 deaths each year. India alone carries more than one-fifth of the global burden. <br></br> <br></br> Despite being preventable through HPV vaccination and early screening, most women are diagnosed late due to low awareness and limited access. This year, we are running community vaccination drives, awareness campaigns, and providing free or subsidised treatment to ensure women receive life-saving prevention and care.</>
    ),
    icon: <img src={Image3} alt="Cervical Cancer Treatment And Vaccination" className="w-21 h-21" />,
  },
  {
    title: (<>Adopt A Patient</>),
    description: (<>Directly fund life-saving treatments</>),
    details: (
      <>Through our Adopt a Patient program, you can fund an entire cancer treatment for someone who cannot afford it. Your support doesn’t just cover costs—it gives a patient a fighting chance at life.<br></br> <br></br>Donors stay connected every step of the way, receiving updates and progress notes, while choosing a contribution level that meets each patient’s needs.</>
    ),
    icon: <img src={Image4} alt="Adopt A Patient" className="w-21 h-21" />,
  },
  {
    title: (<>Continuing Medical Education<br></br> (CME) And Paramedical Training</>),
    description: (<>Strengthening oncology care through training and skill-building</>),
    details: (
      <>Up-to-date knowledge and hands-on skills are critical for early detection and effective treatment of cancer. Yet many doctors and paramedical staff lack access to structured oncology training. <br></br> <br></br> We are organising expert-led CME sessions and practical workshops on cancer screening, diagnostics, treatment, and patient care equipping healthcare providers with the skills needed to improve survival and strengthen local health systems.</>
    ),
    icon: <img src={Image5} alt="CME And Paramedical Training" className="w-21 h-21" />,
  },
  {
    title: (<>Nutritious Recipes For Cancer Recovery</>),
    description: (<>Supporting recovery with targeted nutrition</>),
    details: (
      <>A simple, affordable recipe book for cancer patients, especially those undergoing head & neck treatment.
Proper nutrition is often overlooked but it helps boost immunity, aids recovery, & supports overall well-being during & after treatment</>
    ),
    icon: <img src={Image6} alt="Nutritious Recipes For Cancer Recovery" className="w-21 h-21" />,
  },
];

export default function FlagshipInitiatives() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 bg-[#f9f3ec] pb-55">
      <h2 className="text-center text-5xl font-semibold text-[#583490] mb-10 font-visby py-10 pb-20">
        Flagship Initiatives
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-218 p-5"
          >
            {/* Header */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <div>
                  <h3 className="font-bold text-4xl font-visby">{item.title}</h3>
                  <p className="text-2xl font-semibold font-visby pt-5">{item.description}</p>
                </div>
              </div>

              {/* ✅ ChevronDownCircle instead of SVG */}
              <ChevronDownCircle
                className={`h-10 w-10 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expandable Content */}
            {openIndex === index && (
              <div className="ml-8 px-20 pb-6 text-2xl font-visby">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
