import Link from "next/link";
import React from "react";

const newsArticles = [
  { id: 1, title: "Meet the Medstrom Team: Emma", date: "18 March 2026", image: "/medstrom/images/home/news-1.jpg" },
  { id: 2, title: "Infection Control Challenges in Corridor Care", date: "6 March 2026", image: "/medstrom/images/home/news-2.png" },
  { id: 3, title: "Fundamentals of Care | The Importance of Patient Washing", date: "17 February 2026", image: "/medstrom/images/home/news-3.jpg" },
];

export default function News() {
  return (
    <section className="py-18 bg-white overflow-hidden" id="news">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h4 className="text-[#2A317A] font-bold text-md mb-3" data-aos="fade-up">Our News</h4>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-5" data-aos="fade-up" data-aos-delay="100">
            Stay Updated with{" "}
            <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">Medstrom</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <div key={article.id} className="group flex flex-col gap-4 cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="rounded-xl overflow-hidden shadow-sm border border-[#E2EAF4] aspect-[16/10] relative flex shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col px-1 mt-1">
                <h3 className="text-[20px] font-bold text-[#333] mb-2 leading-relaxed group-hover:text-[#2A317A] transition-colors line-clamp-1">{article.title}</h3>
                <p className="text-[14px]! text-gray-500 font-medium">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
