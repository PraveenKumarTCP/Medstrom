"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const icons: Record<string, string> = {
  bed: "/medstrom/images/bed.png",
  maintenance: "/medstrom/images/clipboard.png",
  decontamination: "/medstrom/images/security.png",
  advisors: "/medstrom/images/doctor-consultaion.png",
  tracking: "/medstrom/images/search.png",
  upholstery: "/medstrom/images/upholstery.png",
  audit: "/medstrom/images/legal.png",
  rental: "/medstrom/images/rental-service.png",
};

const servicesCards = [
  {
    id: 1,
    title: "Total Bed Management",
    description: "Medstrom's ethos is clear: the right patient, product, and timing. With clinician guidance, we offer current knowledge to help you effectively use our solutions.",
    icon: "bed",
  },
  {
    id: 2,
    title: "Planned Preventative Maintenance",
    description: "Proactive maintenance can often prevent the need for costly repairs in the future, thus minimising whole life costs.",
    icon: "maintenance",
  },
  {
    id: 3,
    title: "Decontamination Services",
    description: "Specialist ozone laundry combines with on-site product decontamination, achieving world-class audit results.",
    icon: "decontamination",
  },
  {
    id: 4,
    title: "Clinical Advisors",
    description: "Our national team of RN and RGN qualified Clinical Managers and Clinical Advisors support our customers 24 hours a day, 7 days a week, 365 days a year.",
    icon: "advisors",
  },
  {
    id: 5,
    title: "Product Tracking",
    description: "i-Tracker, Medstrom's bespoke asset management system, offers multiple unique benefits to our customers.",
    icon: "tracking",
  },
  {
    id: 6,
    title: "Upholstery Services",
    description: "Rejuvenate tired medical furniture through Medstrom's dedicated and cost-effective upholstery service",
    icon: "upholstery",
  },
  {
    id: 7,
    title: "Audit Services",
    description: "First-class audit management services that deliver comprehensive prevalence and incidence data customised to your requirements",
    icon: "audit",
  },
  {
    id: 8,
    title: "Rental Services",
    description: "Flexible rental solutions that ensure patients receive the right product at the right time.",
    icon: "rental",
  },
];

export default function Services() {
  return (
    <section className="py-24 overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        {/* ── Section header ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-8 items-end gap-6">
          <div className="md:col-span-9">
            <h4 className="text-[#2A317A] font-bold text-md mb-3" data-aos="fade-up">
              Our Services
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-5" data-aos="fade-up" data-aos-delay="100">
              Advanced Clinical Solutions for{" "}
              <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">
                Safer Patient Care
              </span>
            </h2>
            <p className="text-[#666] text-[13px] leading-relaxed max-w-[800px]" data-aos="fade-up" data-aos-delay="200">
              The Medstrom ethos is straightforward: right patient, right product, right time. We empower clinicians
              with updated knowledge and relevant clinical solutions for effective product use.
            </p>
          </div>

          {/* Nav buttons (right-aligned) */}
          <div className="md:col-span-3 flex justify-end gap-3 pb-2 services-nav-container" data-aos="fade-left" data-aos-delay="300">
            <button
              className="services-prev w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white bg-[#4BCBF5] hover:bg-[#3ab1d6] transition-colors shadow-sm focus:outline-none"
              aria-label="Previous service"
            >
              <svg className="w-5 h-5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="services-next w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white bg-[#4BCBF5] hover:bg-[#3ab1d6] transition-colors shadow-sm focus:outline-none"
              aria-label="Next service"
            >
              <svg className="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Horizontal Divider ─────────────────────────── */}
        <div className="w-full h-[1px] bg-[#DDDDDD]"></div>

        {/* ── Swiper Component ───────────────────────────── */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Swiper
            className="services-swiper !pb-12"
            modules={[Navigation]}
            navigation={{
              nextEl: ".services-next",
              prevEl: ".services-prev",
            }}
            spaceBetween={0}
            loop={true}
            centeredSlides={false}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16, centeredSlides: false },
              768: { slidesPerView: 2, spaceBetween: 0, centeredSlides: false },
              1024: { slidesPerView: 3, spaceBetween: 0, centeredSlides: false },
            }}
          >
          {servicesCards.map((card) => (
            <SwiperSlide key={card.id} className="!h-auto group/slide border-r border-[#DDDDDD] sm:border-l-0">
              <div className="flex flex-col h-full bg-transparent px-6 lg:px-10 py-12 transition-all duration-500">
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-[64px] h-[64px] bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0 p-3">
                    <img src={icons[card.icon]} alt={card.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1C2D4A] leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#555] leading-relaxed mb-8 flex-1">
                  {card.description}
                </p>

                {/* Link */}
                <div className="mt-auto">
                  <Link
                    href="#"
                    className="relative inline-block font-bold text-[14px] text-[#4BCBF5] transition-colors group/link"
                  >
                    View Services
                    <span className="absolute left-0 bottom-[-4px] w-[10%] h-[2px] bg-[#2A317A] transition-all duration-500 ease-in-out group-hover/link:w-full"></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
