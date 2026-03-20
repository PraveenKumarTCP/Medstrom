import Link from "next/link";
import React from "react";
import Button from "./Button";

const testimonials = [
  { id: 1, name: "Stacy Hartshorn", title: "Strategic Development Manager & Implementation Project Lead for Bed and Mattresses, Norfolk and Norwich University Hospitals NHS Foundation Trust", quote: "The Medstrom team has always shown professionalism, efficiency and care for our equipment, staff and patients.", image: "/images/home/client-1.png" },
  { id: 2, name: "Stacy Hartshorn", title: "Strategic Development Manager & Implementation Project Lead for Bed and Mattresses, Norfolk and Norwich University Hospitals NHS Foundation Trust", quote: "The Medstrom team has always shown professionalism, efficiency and care for our equipment, staff and patients.", image: "/images/home/client-1.png" },
  { id: 3, name: "Stacy Hartshorn", title: "Strategic Development Manager & Implementation Project Lead for Bed and Mattresses, Norfolk and Norwich University Hospitals NHS Foundation Trust", quote: "The Medstrom team has always shown professionalism, efficiency and care for our equipment, staff and patients.", image: "/images/home/client-1.png" },
  { id: 4, name: "Stacy Hartshorn", title: "Strategic Development Manager & Implementation Project Lead for Bed and Mattresses, Norfolk and Norwich University Hospitals NHS Foundation Trust", quote: "The Medstrom team has always shown professionalism, efficiency and care for our equipment, staff and patients.", image: "/images/home/client-1.png" },
  { id: 5, name: "Stacy Hartshorn", title: "Strategic Development Manager & Implementation Project Lead for Bed and Mattresses, Norfolk and Norwich University Hospitals NHS Foundation Trust", quote: "The Medstrom team has always shown professionalism, efficiency and care for our equipment, staff and patients.", image: "/images/home/client-1.png" },
  { id: 6, name: "Stacy Hartshorn", title: "Strategic Development Manager & Implementation Project Lead for Bed and Mattresses, Norfolk and Norwich University Hospitals NHS Foundation Trust", quote: "The Medstrom team has always shown professionalism, efficiency and care for our equipment, staff and patients.", image: "/images/home/client-1.png" },
];

export default function Testimonials() {
  return (
    <section className="py-22 bg-[#F9F9F9]" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h4 className="text-[#2A317A] font-bold text-md mb-3">Testimonials</h4>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-5">
            Delivering Confidence in{" "}
            <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">Every Care Setting</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
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
        <div className="text-center mt-12">
          <Button href="#" padding="px-12 py-3.5">View All Our Testimonials</Button>
        </div>
      </div>
    </section>
  );
}
