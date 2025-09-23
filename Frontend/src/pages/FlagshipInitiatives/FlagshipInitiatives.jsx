import { useState } from "react";
import { Ribbon, Headphones, Syringe, HandHeart, BookOpenCheck, BookOpen } from "lucide-react";

const initiatives = [
  {
    title: "Breast Cancer Care",
    description: "Providing life saving breast cancer care",
    details:
      "Our program supports breast cancer patients with timely diagnosis, affordable treatment, and post-recovery care.",
    icon: <Ribbon className="w-18 h-24 text-black" />,
  },
  {
    title: "Head, Face And Neck Cancer",
    description: "Providing surgical care for India’s most common cancer in men",
    details:
      "This initiative focuses on advanced surgical treatments and awareness programs to reduce head and neck cancer cases.",
    icon: <Headphones className="w-21 h-23 text-black" />, // placeholder
  },
  {
    title: "Cervical Cancer Treatment And Vaccination",
    description:
      "Expanding access to preventive vaccination and timely treatment for women",
    details:
      "We aim to make HPV vaccines widely accessible and ensure early detection and effective cervical cancer treatment.",
    icon: <Syringe className="w-21 h-21 text-black" />,
  },
  {
    title: "Adopt A Patient",
    description: "Directly fund life-saving treatments",
    details:
      "Donors can adopt patients and contribute directly to their treatment costs, ensuring continuity of life-saving care.",
    icon: <HandHeart className="w-21 h-21 text-black" />,
  },
  {
    title: "Continuing Medical Education (CME) And Paramedical Training",
    description:
      "Strengthening oncology care through training and skill-building",
    details:
      "We provide training for medical professionals to strengthen cancer care infrastructure and improve patient outcomes.",
    icon: <BookOpenCheck className="w-21 h-21 text-black" />,
  },
  {
    title: "Nutritious Recipes For Cancer Recovery",
    description: "Supporting recovery with targeted nutrition",
    details:
      "Our nutritional programs provide easy, affordable, and balanced meal plans to support cancer patients’ recovery.",
    icon: <BookOpen className="w-21 h-21 text-black" />,
  },
];

export default function FlagshipInitiatives() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 bg-[#f9f3ec]">
      <h2 className="text-center text-5xl font-semibold text-purple-800 mb-10 font-visby py-10">
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
                  <p className="text-2xl text-gray-600">{item.description}</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Expandable Content */}
            {openIndex === index && (
              <div className="px-6 pb-6 text-sm text-gray-700">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}