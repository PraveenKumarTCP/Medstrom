"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Button from "../_components/Button";
import productsDataRaw from "../_data/products.json";

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
              <div key={product.id} className="group flex flex-col bg-white rounded-xl border border-[#DDE4EE] overflow-hidden hover:shadow-xl transition-all duration-500 p-3">
                {/* Image Area */}
                <Link href={`/products/${product.id}`} className="block aspect-[4/3] bg-[#F1F1F1] p-6 relative overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-[17px] font-bold text-[#2A317A] mb-3 hover:text-[#4BCBF5] transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-[12px] text-[#555] leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <Button
                      href={`/products/${product.id}`}
                      variant="primary"
                      padding="py-3 w-full"
                      className="bg-[#4BCBF5] hover:bg-[#3ab1d6]"
                    >
                      Make an Enquiry
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
