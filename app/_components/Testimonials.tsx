import Link from "next/link";
import React from "react";
import Button from "./Button";

const testimonials = [
  {
    id: 1,
    name: "Stacy Hartshorn",
    title: "Strategic Development Manager & Implementation Project Lead for Bed and Mattresses, Norfolk and Norwich University Hospitals NHS Foundation Trust",
    quote: "The Medstrom team has always shown professionalism, efficiency and care for our equipment, staff and patients.",
    image: "/medstrom/images/home/t-1.png"
  },
  {
    id: 2,
    name: "Suzanne Birchall",
    title: "Clinical Procurement Nurse, Milton Keynes University Hospital NHS Foundation Trust",
    quote: "The planning and support we got from Medstrom gave us confidence in the implementation process.",
    image: "/medstrom/images/home/t-2.png"
  },
  {
    id: 3,
    name: "Claire O'Keeffe",
    title: "Stroke Rehabilitation Ward Manager, Cardiff and Vale Health Board",
    quote: "We always receive a good service from Medstrom. Our clinical advisor has been fantastic at assisting with training all the staff on using the beds.",
    image: "/medstrom/images/home/t-3.png"
  },
  {
    id: 4,
    name: "Julie Hatch",
    title: "Tissue Viability Specialist Nurse, Princess Alexandra Hospital NHS Trust",
    quote: "Medstrom communicated well with PAH about requirements beforehand and the staff working alongside PAH clinicians were very approachable, helpful, professional and organised.",
    image: "/medstrom/images/home/t-4.png"
  },
  {
    id: 5,
    name: "Martin Quinton",
    title: "Critical Care Practitioner, Sheffield Children's Hospital",
    quote: "The device is good, but the support is as good. It's that whole family package which works really well for us.",
    image: "/medstrom/images/home/t-5.png"
  },
  {
    id: 6,
    name: "Keith Dickinson",
    title: "Chief Finance Officer, Blackpool Teaching Hospitals NHS Foundation Trust",
    quote: "I would like to put on record my sincere thanks and appreciation of all the hard work and professionalism you and your organisation have shown.",
    image: "/medstrom/images/home/t-6.png"
  },
];

export default function Testimonials() {
  return (
    <section className="py-22 bg-[#F9F9F9] overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h4 className="text-[#2A317A] font-bold text-md mb-3" data-aos="fade-up">Testimonials</h4>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-5" data-aos="fade-up" data-aos-delay="100">
            Delivering Confidence in{" "}
            <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">Every Care Setting</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {testimonials.map((t, index) => (
            <div key={t.id} className="bg-white rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-start gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                <div className="flex flex-col pt-0.5">
                  <h4 className="text-lg font-bold text-[#2A317A] mb-1">{t.name}</h4>
                  <p className="text-[14px]! text-[#484848] font-medium leading-relaxed">{t.title}</p>
                </div>
              </div>
              <p className="text-[#484848] leading-relaxed">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Button href="#" padding="px-12 py-3.5">View All Our Testimonials</Button>
        </div>
      </div>
    </section>
  );
}
