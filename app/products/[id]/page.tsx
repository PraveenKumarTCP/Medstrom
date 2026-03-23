"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import Button from "../../_components/Button";
import productsDataRaw from "../../_data/products.json";

import ProductCard from "../../_components/ProductCard";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  let product = null;
  for (const category in productsDataRaw) {
    const found = (productsDataRaw as any)[category].find((p: any) => p.id === id);
    if (found) {
      product = found;
      break;
    }
  }

  const [activeTab, setActiveTab] = useState<'description' | 'technical'>('description');
  const [activeMedia, setActiveMedia] = useState<string | undefined>(undefined);

  const videoUrl = "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm";

  useEffect(() => {
    if (product && !activeMedia) {
      setActiveMedia(product.image);
    }
  }, [product, activeMedia]);

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col pt-32 text-center bg-[#F9F9F9]">
        <Header />
        <h1 className="text-3xl font-bold text-[#2A317A] mt-20">Product Not Found</h1>
        <p className="mt-4 text-gray-500">The product you are looking for does not exist.</p>
        <Footer />
      </main>
    );
  }

  const isVideo = (url: string) => url.endsWith('.webm') || url.endsWith('.mp4');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Product Hero Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8 text-[16px] font-medium">
            <Link href="/products" className="text-[#2A317A] hover:text-[#4BCBF5]">Our Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 font-bold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Images/Video Gallery */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8">
              <div className="bg-[#F6F6F6] rounded-[20px] flex items-center justify-center aspect-[4/3] overflow-hidden mb-6 p-10">
                {activeMedia && isVideo(activeMedia) ? (
                  <video key={activeMedia} src={activeMedia} autoPlay controls muted className="w-full h-full object-contain rounded-lg" />
                ) : (
                  <img src={activeMedia || product.image} alt={product.name} className="max-h-[380px] object-contain transition-all duration-500" />
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 items-center">
                {[product.image, ...(product.thumbnails || []).filter((img: string) => img !== product.image)].map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveMedia(img)}
                    className={`cursor-pointer border-2 bg-[#F6F6F6] rounded-xl p-3 flex items-center justify-center w-[100px] h-[80px] shrink-0 transition-all ${activeMedia === img ? 'border-[#2A317A]' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img src={img} alt="thumbnail" className="h-full object-contain" />
                  </div>
                ))}

                <div
                  onClick={() => setActiveMedia(videoUrl)}
                  className={`cursor-pointer border-2 bg-[#F6F6F6] rounded-xl flex items-center justify-center w-[100px] h-[80px] shrink-0 transition-all relative group overflow-hidden ${activeMedia === videoUrl ? 'border-[#2A317A]' : 'border-transparent hover:border-gray-200'}`}
                >
                  <video src={`${videoUrl}#t=0.1`} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="bg-black/40 p-2 rounded-full shadow-lg group-hover:bg-black/60 transition-all duration-300">
                      <svg className="w-5 h-5 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-[35px] font-bold text-[#2A317A] mb-4 tracking-tight leading-[1.1]">{product.name}</h1>
              <p className="text-[#555] leading-relaxed mb-6 max-w-2xl">{product.description}</p>

              {/* Key Features Box */}
              {product.keyFeatures && (
                <div className="bg-white rounded-[24px] border border-gray-100 p-8 lg:p-10 mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                  <h3 className="text-xl font-bold text-[#2A317A] mb-8">Key Features</h3>
                  <ul className="space-y-8">
                    {product.keyFeatures.map((feature: any, idx: number) => (
                      <li key={idx} className="flex gap-6 items-center">
                        <div className="w-[52px] h-[52px] shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.08)] p-3">
                          <img src={feature.icon} alt="" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[16px] text-[#484848] font-medium leading-relaxed">{feature.message}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <Button href="#" padding="px-8 py-3.5" radius="rounded" fontSize="text-[13.5px]">Make an Enquiry</Button>
                <Button href="#" padding="px-8 py-3.5" radius="rounded" variant="outline" fontSize="text-[13.5px]" className="bg-[#F8F9FA] text-[#888] border-gray-200 hover:text-white transition-all">Download Brochure</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div className=" py-16">
        <div className="container mx-auto px-4">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Tab Headers */}
            <div className="border-b border-gray-200 flex px-6 pt-6 gap-2">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-3 px-8 rounded-t-[10px] text-[16px] font-bold transition-all ${activeTab === 'description' ? 'bg-[#2A317A] text-white' : 'bg-transparent text-[#666] hover:bg-gray-50'}`}
              >
                Product Description
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`py-3 px-8 rounded-t-[10px] text-[16px] font-bold transition-all ${activeTab === 'technical' ? 'bg-[#2A317A] text-white' : 'bg-transparent text-[#666] hover:bg-gray-50'}`}
              >
                Technical Information
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8 lg:px-12 lg:py-10">
              {activeTab === 'description' && product.tabDescription && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="flex flex-col pt-2">
                    <h3 className="text-xl font-bold text-[#2A317A] mb-5 tracking-tight">{product.tabDescription.title}</h3>
                    <div className="space-y-5 text-[#484848] leading-relaxed">
                      {product.tabDescription.content.map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[16px] overflow-hidden aspect-[16/10] bg-gray-100 flex items-center justify-center relative shadow-sm">
                    {product.tabDescription.mediaUrl && product.tabDescription.mediaUrl.includes('youtube.com') ? (
                      <iframe
                        src={product.tabDescription.mediaUrl}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img src="/medstrom/images/home/history.png" alt="Why Medstrom" className="absolute inset-0 w-full h-full object-cover" />
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'technical' && product.technicalInfo && (
                <div className="w-full lg:w-1/2 border border-gray-200 rounded-[8px] overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {product.technicalInfo.map((info: any, idx: number) => (
                        <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}>
                          <th className="py-4 px-6 font-bold text-[#484848] text-[16px] w-[250px] border-r border-gray-200">{info.label}</th>
                          <td className="py-4 px-6 text-[#555] text-[16px]">{info.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Related Products Section (Catalog functionality) */}
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h4 className="text-[#2A317A] font-bold text-md mb-3" data-aos="fade-up">
                Explore More
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15]" data-aos="fade-up" data-aos-delay="100">
                <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">
                  Related  Products
                </span>
              </h2>
            </div>
            <Link href="/products" className="text-[#2A317A] font-bold text-[15px] hover:text-[#4BCBF5] border-b-2 border-[#2A317A] hover:border-[#4BCBF5] transition-all pb-1">View All Products</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(productsDataRaw).flat().slice(0, 4).map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
