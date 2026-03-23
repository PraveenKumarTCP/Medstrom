import React from "react";

export default function Insight() {
  return (
    <div className="relative">
      <section className="pt-14 pb-42 bg-[#2A317A] overflow-hidden" id="insight">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-[1.15] mb-5" data-aos="fade-up">
            360° Insight into Advanced Bed Technology
          </h2>
          <p className="text-white leading-relaxed max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Medstrom is an award-winning, independent UK manufacturer of hospital beds, plus number one provider of 'total bed management' and specialist equipment rental services to the UK National Health Service.
          </p>
        </div>
      </section>


      <div className="container mx-auto px-4 max-w-[1200px] -mt-32 mb-24 relative z-10">
        <div className="w-full aspect-[16/9] rounded-2xl bg-[#E2EAF4] shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
          <video
            src="https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_02.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
