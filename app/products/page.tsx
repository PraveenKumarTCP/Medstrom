"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Button from "../_components/Button";
import productsDataRaw from "../_data/products.json";

import ProductCard from "../_components/ProductCard";

// Import raw JSON and map type
type Product = typeof productsDataRaw[keyof typeof productsDataRaw][0];
const productsData: Record<string, Product[]> = productsDataRaw as any;

const categories = ["All", ...Object.keys(productsData)];

export default function ProductsListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const getFilteredProducts = () => {
    if (activeCategory === "All") {
      return Object.values(productsData).flat();
    }
    return productsData[activeCategory] || [];
  };

  const filteredProducts = getFilteredProducts();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-[#2A317A] font-bold text-md mb-3">Our Products</h4>
          <h1 className="text-3xl md:text-5xl lg:text-[40px] font-bold text-[#484848] leading-[1.1] mb-6">
            Engineered for Safety, Mobility, <span className="text-[#2A317A]">and Dignity</span>
          </h1>
          <p className="text-[#484848] leading-relaxed max-w-4xl mx-auto mb-12">
            Our range of specialist hospital beds has been designed to reduce patient harm from falls,
            promote safe and early patient mobilisation and enable dignified care of the plus-size patient.
          </p>

          {/* Horizontal Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-3 px-8 rounded-lg font-bold transition-all duration-300 border ${activeCategory === cat
                  ? "bg-[#2A317A] text-white border-[#2A317A] shadow-md"
                  : "bg-[#F1F1F1] text-[#484848] border-transparent hover:border-[#2A317A] hover:bg-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
