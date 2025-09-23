import React from "react";
import "./Impact.css";
import ImpactImage from "../../assets/Home/ImpactImage.png";

const Impact = () => {
  const items = [
    { title: "Early Detection", desc: "Mobile screening camps" },
    {
      title: "Support & Advocacy",
      desc: "Counselling, survivor support & advocacy for better cancer care access",
    },
    {
      title: "Training",
      desc: "Education for healthcare workers & volunteers to promote early detection & support patients",
    },
    {
      title: "Treatment",
      desc: "Free surgeries for underprivileged patients, in partnership with the Asian Cancer Institute, Mumbai",
    },
    {
      title: "Awareness and Education",
      desc: "Cancer awareness drives, tobacco-cessation programmes & breast health education",
    },
    {
      title: "Financial Support",
      desc: "Aid to low-income patients for life-saving cancer treatments",
    },
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <section className="bg-white py-18 relative">
      <h2 className="text-3xl font-bold font-visby text-purple-900 mb-8 pl-12">
        What we do, <br />
        How we drive impact
      </h2>

      <img
        src={ImpactImage}
        alt="Impact"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 object-cover"
      />

      <div className="impact-wrapper relative z-10">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className={`kard kard${
              index + 1
            } text-center p-3 bg-white/80 rounded-xl shadow`}
          >
            <h3 className="font-semibold text-xl text-black font-visby pb-2">
              {item.title}
            </h3>
            <p className="font-didact">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
