"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_02.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_03.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_04.webm",
];

const slides = [
    {
        id: 1,
        title: "Welcome to Medstrom",
        description: "Explore Our new range of solutions for improved patients outcomes",
    },
    {
        id: 2,
        title: "Efficiency Meets Intelligence",
        description: "Introducing the TSI OmniTrak™ Solution – make your job easier wirelessly connecting modules to take measurements, create reports.",
    },
    {
        id: 3,
        title: "Stay Safe In the Face of Wildfire Smoke",
        description: "Wildfires occurring in the wildland-urban interface present a major health hazard for local communities not only outside but also inside buildings.",
    }
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative w-full overflow-hidden flex items-center justify-center h-screen">
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0 bg-black"
                ></video>
                {/* Optional dark overlay to ensure text legibility */}
                <div className="absolute inset-0 bg-[#1C2D4A]/40 z-[1] mix-blend-multiply"></div>
            </div>

            {/* Hero Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: '.custom-pagination' }}
                navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
                className="h-full w-full z-20"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="container mx-auto flex flex-col items-center justify-end pb-32 h-full px-4 md:px-12 w-full text-center text-white">
                                <div className="relative max-w-3xl z-20 flex flex-col items-center">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-3xl md:text-5xl lg:text-[42px] font-bold leading-tight mb-4 whitespace-pre-line drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="text-sm md:text-[16px] max-w-xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                                    >
                                        {slide.description}
                                    </motion.p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Arrows */}
                <button className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors cursor-pointer outline-none border-none">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors cursor-pointer outline-none border-none">
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Custom Pagination at the bottom center */}
                <div className="custom-pagination"></div>
            </Swiper>

            <style jsx global>{`
                .custom-pagination {
                    position: absolute !important;
                    bottom: 4rem !important; /* 64px roughly */
                    left: 0 !important;
                    width: 100% !important;
                    display: flex !important;
                    justify-content: center !important;
                    z-index: 30 !important;
                }
                
                @media (min-width: 768px) {
                    .custom-pagination {
                        bottom: 4.5rem !important;
                    }
                }
                .custom-pagination .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: #ffffff;
                    opacity: 0.6;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    margin: 0 6px !important;
                    cursor: pointer;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #38bdf8;
                    opacity: 1;
                    width: 24px;
                    border-radius: 4px;
                    box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
                }
            `}</style>
        </section>
    );
}
