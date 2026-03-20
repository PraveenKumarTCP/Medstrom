"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

import productsDataRaw from "../_data/products.json";

// Import raw JSON and map type
type Product = typeof productsDataRaw[keyof typeof productsDataRaw][0];
const productsData: Record<string, Product[]> = productsDataRaw;

const categories = Object.keys(productsData);

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Pressure Area Care");

  return (
    <section className="py-18 bg-[#F9F9F9]" id="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h4 className="text-[#2A317A] font-bold text-md mb-3">Our Products</h4>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-5">
            Engineered for Safety, Mobility,{" "}
            <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">
              and Dignity
            </span>
          </h2>
          <p className="text-[#666] text-[13.5px] leading-relaxed max-w-3xl text-center mx-auto">
            Our range of specialist hospital beds has been designed to reduce patient harm from falls, promote safe and early patient mobilisation and enable dignified care of the plus-size patient.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-3 flex flex-col gap-3">
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
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData[activeCategory]?.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-[#DDE4EE] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 p-3">
                {/* Image Placeholder */}
                <Link href={`/products/${product.id}`} className="bg-[#F9F9F9] p-6 h-[180px] flex items-center justify-center relative group rounded-xl border-b border-gray-100 cursor-pointer">
                  <img src={product.image} alt={product.name} className="max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </Link>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1 items-center ">
                  <Link href={`/products/${product.id}`} className="text-[20px] font-bold text-[#1C2D4A] hover:text-[#4BCBF5] mb-3 text-center transition-colors">
                    {product.name}
                  </Link>
                  <p className="text-[#484848] leading-relaxed flex-1 mb-6 text-justify">
                    {product.description}
                  </p>
                  <div className="w-full mt-auto pt-2">
                    <Button variant="secondary" href="#" fontSize="text-[15px]" padding="py-3! w-full">Make an Enquiry</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Global CTA */}
        <div className="text-center mt-12">
          <Button href="#" fontSize="12px">View All Our Products</Button>
        </div>
      </div>
    </section>
  );
}
