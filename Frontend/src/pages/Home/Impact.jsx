import React from "react";
import "./Impact.css";
import ImpactImage from "../../assets/Home/ImpactImage.png";

const Impact = () => {
  const items = [
    { title: (<>Early Detection</>), desc: (<>Mobile screening camps</>) },
    {
      title: (<>Support & <br></br>Advocacy</>),
      desc: (<>Counselling, survivor<br></br> support & advocacy<br></br> for better cancer care<br></br> access</>),
    },
    {
      title: (<>Training</>),
      desc: (<>Education for healthcare<br></br> workers &<br></br> volunteers to promote early<br></br> detection &<br></br> support patients</>),
    },
    {
      title: (<>Treatment</>),
      desc:( <>Free surgeries for<br></br> underprivileged<br></br> patients, in partnership with<br></br> the Asian<br></br> Cancer Institute, Mumbai</>),
    },
    {
      title: (<>Awareness & Education</>),
      desc: (<>Cancer awareness drives<br></br>, tobacco-<br></br>cessation programmes &<br></br> breast health<br></br> education</>),
    },
    {
      title: (<>Financial<br></br>Support</>),
      desc: (<>Aid to low-income patients<br></br> for life-saving<br></br> cancer treatments</>),
    },
  ];


  const duplicatedItems = [...items, ...items];

  return (
    <section className="bg-white py-22 relative">
      <h2 className="text-4xl font-bold font-visby text-purple-900 mb-8 pl-12">
        What we do, <br />
        How we drive impact
      </h2>

      <img
        src={ImpactImage}
        alt="Impact"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 object-cover hidden md:block"
      />

      <div className="impact-wrapper relative z-10">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className={`kard kard${
              index + 1
            } text-center p-3 bg-white/80 pt-10 rounded-[30px] shadow`}
          >
            <h3 className="font-semibold text-2xl text-black font-visby pb-2">
              {item.title}
            </h3>
            <p className="font-didact text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
