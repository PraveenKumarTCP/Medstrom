import React from "react";
import Button from "./Button";

const cardsData = [
  {
    id: 1,
    title: "Acute Care",
    description: "With growing and aging populations, the demand for acute care is rising year-round. Increasing patient complexity and risks, such as pressure ulcers and falls, require timely and effective care solutions.",
    image: "/medstrom/images/home/client-1.png",
    fallbackColor: "bg-[#B47556]"
  },
  {
    id: 2,
    title: "ITU & Critical Care",
    description: "Prolonged immobility can lead to further complications and disability, especially in critically ill ICU patients. Early mobilisation is proven to improve recovery and patient outcomes.",
    image: "/medstrom/images/home/client-2.png",
    fallbackColor: "bg-[#28536B]"
  },
  {
    id: 3,
    title: "Specialist Care",
    description: "The number of complex patients in general wards is increasing. Specialist beds and surfaces improve patient care while enhancing caregiver efficiency and reducing manual handling risks.",
    image: "/medstrom/images/home/client-3.png",
    fallbackColor: "bg-[#6A7F93]"
  }
];

export default function OurClinicians() {
  return (
    <section className="py-20 bg-[#F9F9F9] overflow-hidden" id="our-clinicians">
      <div className="container mx-auto px-4">

        {/* ── Section header ─────────────────────────────── */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h4 className="text-[#2A317A] font-bold text-md mb-3" data-aos="fade-up">
            Our Clinians
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-5" data-aos="fade-up" data-aos-delay="100">
            Clinically Led Solutions for{" "}
            <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">
              Better Outcomes
            </span>
          </h2>
          <p className="text-[#666] text-[13.5px] leading-relaxed max-w-4xl text-center mx-auto" data-aos="fade-up" data-aos-delay="200">
            The Medstrom ethos is simple: right patient, right product, right time. This ethos drives our product offering, but also enables us to educate and lead the way with clinical solutions that are pertinent in todays healthcare arena. Led by clinicians, for clinicians, we continuously update our knowledge to help you utilise our products effectively.
          </p>
        </div>

        {/* ── Hover Cards grid ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 block aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={card.id * 100}
            >
              {/* Background image & Fallback */}
              <div className={`absolute inset-0 ${card.fallbackColor}`}></div>
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Advanced Gradient Overlay (darkens gracefully on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2D4A] via-[#1C2D4A]/10 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-90"></div>

              {/* Animated Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 transform translate-y-[20%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight text-shadow-md">
                  {card.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="overflow-hidden">
                    <p className="text-[13px] text-white/90 leading-[1.6] pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-[150ms] text-shadow-md">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA button ────────────────────────────────── */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Button href="#" variant="primary" fontSize="12px">View What Our Clinician Do</Button>
        </div>
      </div>
    </section>
  );
}
