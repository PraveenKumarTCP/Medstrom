import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ── Left & Middle Content (Spans 8 cols on LG) ──────────────── */}
          <div className="lg:col-span-8 flex flex-col">

            {/* Header Section */}
            <div className="mb-8">
              <h4 className="text-[#2A317A] font-bold text-md mb-3" data-aos="fade-up">
                About Medstrom
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15]" data-aos="fade-up" data-aos-delay="100">
                Precision-Driven Hospital{" "}
                <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">
                  Bed <br className="hidden sm:block" /> Solutions
                </span>{" "}
                for Better Care
              </h2>
            </div>

            {/* Content Split: Grey Box + Text (Grid 2 cols within) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 flex-1">

              {/* Left Grey Image Placeholder */}
              <div className=" sm:col-span-5 rounded-xl overflow-hidden min-h-[350px] w-full h-full" data-aos="fade-right" data-aos-delay="200">
                <img src="/medstrom/images/home/abt-2.png" alt="" className="h-full w-full object-cover" />
              </div>

              {/* Middle Text / Actions */}
              <div className=" sm:col-span-7 flex flex-col justify-start text-justify" data-aos="fade-left" data-aos-delay="300">
                <p className="text-[#484848] leading-relaxed mb-6">
                  We have built a service culture that supports all staff who use our products and we care passionately about attaining the best possible outcomes for patients. Uncertainty surrounding Brexit prompted our commitment to start manufacturing in the UK in 2020, sourcing many components locally. Our manufacturing model allows us to control supply chain, quality, cost and highly responsive delivery times.
                </p>

                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
                    <svg className="w-6 h-6 text-[#47C1EF] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-[#484848] leading-relaxed">
                      Our Clinical Advisors and Service teams understand your contract needs and adapt ideas to provide solutions to local needs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#47C1EF] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-[#484848] leading-relaxed">
                      Our flexibility, honesty and dedication to ‘do the right thing’ means we work hand-in-hand with our new customers to make contract transitions seamless.
                    </span>
                  </li>
                  <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="600">
                    <svg className="w-6 h-6 text-[#47C1EF] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-[#484848] leading-relaxed">
                      We constantly look for improvements for our customers and provide management reporting and data analytics to hold ourselves accountable for the service you engage us for.
                    </span>
                  </li>
                </ul>

                {/* CTA & Phone */}
                <div className="flex items-center flex-wrap gap-4 mt-auto pt-2" data-aos="fade-up" data-aos-delay="700">
                  <Button href="/about" variant="primary" fontSize="12px">Read More</Button>
                  <div className="flex items-center gap-3 ml-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_0_5px_rgba(0,0,0,0.3)] shrink-0">
                      <svg
                        className="w-6 h-6 text-[#4BCBF5]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col leading-tight gap-2">
                      <span className="text-[14px]">For emergency, Call Now</span>
                      <span className="text-[16px] font-bold text-[#333]">+0345 371 1717</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Images (Spans 4 cols on LG) ── */}
          <div className="lg:col-span-4 flex flex-col gap-4 pt-1 mt-6 lg:mt-0">
            {/* Top Image */}
            <div className="flex-1 w-full rounded-xl overflow-hidden shadow-sm relative min-h-[250px]" data-aos="fade-left" data-aos-delay="400">
              <img
                src="/medstrom/images/home/abt-1.png"
                alt="Hospital staff looking at a screen"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Bottom Youtube Video Block */}
            <div className="flex-1 w-full rounded-xl overflow-hidden shadow-sm relative bg-black min-h-[250px]" data-aos="fade-left" data-aos-delay="600">
              <iframe
                src="https://www.youtube.com/embed/0q1sCOXzTzk?rel=0"
                title="Why medstrom+ Youtube Video"
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                height={"100%"}
                width={"100%"}
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
