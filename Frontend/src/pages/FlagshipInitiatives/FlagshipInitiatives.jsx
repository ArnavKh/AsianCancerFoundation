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

  return (
    <section className="py-12 bg-[#f9f3ec] pb-55">
      <h2 className="text-center text-5xl font-semibold text-[#583490] mb-10 font-visby py-10 pb-20">
        Flagship Initiatives
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-218 p-5">
          <button
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <img src={Image1} alt="Breast Cancer Care" className="w-18 h-24" />
              <div>
                <h3 className="font-bold text-4xl font-visby">Breast Cancer Care</h3>
                <p className="text-2xl font-semibold font-visby pt-5">
                  Providing life saving breast cancer care
                </p>
              </div>
            </div>
            <ChevronDownCircle
              className={`h-10 w-10 transition-transform ${
                openIndex === 1 ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === 1 && (
            <div className="ml-8 px-20 pb-6 text-2xl font-visby">
              <span className="text-[#EF8B67] text-[29px] font-bold">1 in 2</span> women with breast cancer die from delayed diagnosis and lack of timely surgery.
              <br /><br />
              Together, we will ensure life-saving breast cancer care reaches those who need it most
              by facilitating <span className="text-[#EF8B67] text-[29px] font-bold">100</span> surgeries and providing comprehensive pre & post-operative support.
            </div>
          )}
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-218 p-5">
          <button
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <img src={Image2} alt="Head, Face And Neck Cancer" className="w-21 h-23" />
              <div>
                <h3 className="font-bold text-4xl font-visby">Head, Face And Neck Cancer</h3>
                <p className="text-2xl font-semibold font-visby pt-5">
                  Providing surgical care for India’s most common<br /> cancer in men
                </p>
              </div>
            </div>
            <ChevronDownCircle
              className={`h-10 w-10 transition-transform ${
                openIndex === 2 ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === 2 && (
            <div className="ml-8 px-23 pb-6 text-2xl font-visby">
              In India, <span className="text-[#EF8B67] text-[29px] font-bold">80%</span> of head and neck cancers are diagnosed at late stages, despite being largely
              preventable and highly treatable if detected early. Low awareness, delayed care, stigma, and
              financial barriers often turn these curable cases into life-threatening ones.
              <br /><br />
              Mostly affecting men through tobacco and betel nut use, early surgery can be life-saving.
              This year, we are enabling 100 life-saving surgeries.
            </div>
          )}
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-218 p-5">
          <button
            onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <img src={Image3} alt="Cervical Cancer Treatment And Vaccination" className="w-21 h-21" />
              <div>
                <h3 className="font-bold text-4xl font-visby">Cervical Cancer Treatment And Vaccination</h3>
                <p className="text-2xl font-semibold font-visby pt-5">
                  Expanding access to preventive vaccination and<br /> timely treatment for women
                </p>
              </div>
            </div>
            <ChevronDownCircle
              className={`h-10 w-10 transition-transform ${
                openIndex === 3 ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === 3 && (
            <div className="ml-8 px-23 pb-6 text-2xl font-visby">
              Cervical cancer is the second most common cancer among Indian women, with over <span className="text-[#EF8B67] text-[29px] font-bold">123,000</span> new
              cases and <span className="text-[#EF8B67] text-[29px] font-bold">77,000</span> deaths each year. India alone carries more than one-fifth of the global burden.
              <br /><br />
              Despite being preventable through HPV vaccination and early screening, most women are diagnosed
              late due to low awareness and limited access. This year, we are running community vaccination
              drives, awareness campaigns, and providing free or subsidised treatment to ensure women receive
              life-saving prevention and care.
            </div>
          )}
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-218 p-5">
          <button
            onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <img src={Image4} alt="Adopt A Patient" className="w-21 h-21" />
              <div>
                <h3 className="font-bold text-4xl font-visby">Adopt A Patient</h3>
                <p className="text-2xl font-semibold font-visby pt-5">
                  Directly fund life-saving treatments
                </p>
              </div>
            </div>
            <ChevronDownCircle
              className={`h-10 w-10 transition-transform ${
                openIndex === 4 ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === 4 && (
            <div className="ml-8 px-23 pb-6 text-2xl font-visby">
              Through our Adopt a Patient program, you can <span className="text-[#EF8B67] font-bold">fund</span> an entire cancer treatment for <span className="text-[#EF8B67] font-bold">someone who
              cannot afford it.</span>Your support doesn’t just cover costs—it gives a patient a fighting chance at life.
              <br /><br />
              Donors stay connected every step of the way, receiving updates and progress notes, while choosing
              a contribution level that meets each patient’s needs.
            </div>
          )}
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-218 p-5">
          <button
            onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <img src={Image5} alt="CME And Paramedical Training" className="w-21 h-21" />
              <div>
                <h3 className="font-bold text-4xl font-visby pl-2">Continuing Medical Education (CME) And Paramedical Training</h3>
                <p className="text-2xl font-semibold font-visby pt-5 pl-2">
                  Strengthening oncology care through training and skill-building
                </p>
              </div>
            </div>
            <ChevronDownCircle
              className={`h-10 w-10 transition-transform ${
                openIndex === 5 ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === 5 && (
            <div className="ml-8 px-26 pb-6 text-2xl font-visby">
              Up-to-date knowledge and hands-on skills are critical for early detection and effective treatment
              of cancer. Yet many doctors and paramedical staff lack access to structured oncology training.
              <br /><br />
              We are organising expert-led CME sessions and practical workshops on cancer screening, diagnostics,
              treatment, and patient care equipping healthcare providers with the skills needed to improve survival
              and strengthen local health systems.
            </div>
          )}
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-[30px] border-4 border-[#7DA586] shadow-sm w-218 p-5">
          <button
            onClick={() => setOpenIndex(openIndex === 6 ? null : 6)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <img src={Image6} alt="Nutritious Recipes For Cancer Recovery" className="w-21 h-21" />
              <div>
                <h3 className="font-bold text-4xl font-visby pl-2">Nutritious Recipes For Cancer Recovery</h3>
                <p className="text-2xl font-semibold font-visby pt-5 pl-2">
                  Supporting recovery with targeted nutrition
                </p>
              </div>
            </div>
            <ChevronDownCircle
              className={`h-10 w-10 transition-transform ${
                openIndex === 6 ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === 6 && (
            <div className="ml-8 px-25 pb-6 text-2xl font-visby">
              A simple, <span className="text-[#EF8B67] font-bold">affordable recipe book</span> for cancer patients, especially those undergoing head & neck treatment.
              Proper nutrition is often overlooked but it helps boost immunity, aids recovery, & supports overall
              well-being during & after treatment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
