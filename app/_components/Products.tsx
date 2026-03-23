"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

import ProductCard from "./ProductCard";

import productsDataRaw from "../_data/products.json";

// Import raw JSON and map type
type Product = typeof productsDataRaw[keyof typeof productsDataRaw][0];
const productsData: Record<string, Product[]> = productsDataRaw;

const categories = Object.keys(productsData);

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Pressure Area Care");

  return (
    <section className="py-18 bg-[#F9F9F9] overflow-hidden" id="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h4 className="text-[#2A317A] font-bold text-md mb-3" data-aos="fade-up">Our Products</h4>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-5" data-aos="fade-up" data-aos-delay="100">
            Engineered for Safety, Mobility,{" "}
            <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">
              and Dignity
            </span>
          </h2>
          <p className="text-[#666] text-[13.5px] leading-relaxed max-w-3xl text-center mx-auto" data-aos="fade-up" data-aos-delay="200">
            Our range of specialist hospital beds has been designed to reduce patient harm from falls, promote safe and early patient mobilisation and enable dignified care of the plus-size patient.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-3 flex flex-col gap-3" data-aos="fade-right" data-aos-delay="300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-4 px-6 text-[16px] font-bold text-center rounded-md border transition-all duration-300 ${activeCategory === cat
                  ? "bg-[#2A317A] text-white border-[#2A317A] shadow-md"
                  : "bg-white text-[#484848] border-gray-200 hover:border-[#2A317A] hover:text-[#2A317A]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {productsData[activeCategory]?.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>

        </div>

        {/* Global CTA */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Button href="/products" fontSize="12px">View All Our Products</Button>
        </div>
      </div>
    </section>
  );
}
