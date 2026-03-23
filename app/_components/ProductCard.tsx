"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
  "data-aos"?: string;
  "data-aos-delay"?: string | number;
}

export default function ProductCard({
  product,
  index = 0,
  "data-aos": aos,
  "data-aos-delay": aosDelay,
}: ProductCardProps) {
  const isClickable = product.id === 1; // Only Medstrom Aria Flex (ID 1) is currently clickable
  const productHref = isClickable ? `/products/${product.id}` : "#";

  return (
    <div
      className="group flex flex-col bg-white rounded-xl border border-[#DDE4EE] overflow-hidden hover:shadow-xl transition-all duration-500 p-3 h-full"
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      {/* Image Area */}
      <div className={`block aspect-[4/3] bg-[#F1F1F1] p-6 relative overflow-hidden rounded-xl ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}>
        {isClickable ? (
          <Link href={productHref} className="block w-full h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        {isClickable ? (
          <Link href={productHref}>
            <h3 className="text-[17px] font-bold text-[#2A317A] mb-3 hover:text-[#4BCBF5] transition-colors line-clamp-2 min-h-[52px]">{product.name}</h3>
          </Link>
        ) : (
          <h3 className="text-[17px] font-bold text-[#2A317A] mb-3 line-clamp-2 min-h-[52px]">{product.name}</h3>
        )}

        <p className="text-[12px] text-[#555] leading-relaxed mb-6 line-clamp-3 flex-1">
          {product.description}
        </p>

        <div className="mt-auto">
          <Button
            href={productHref}
            variant="primary"
            padding="py-3 w-full"
            className={`${isClickable ? 'bg-[#4BCBF5] hover:bg-[#3ab1d6]' : 'bg-gray-300 cursor-not-allowed pointer-events-none'}`}
          >
            {isClickable ? "Make an Enquiry" : "Coming Soon"}
          </Button>
        </div>
      </div>
    </div>
  );
}
