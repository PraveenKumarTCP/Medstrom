"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import Button from "../../_components/Button";
import productsDataRaw from "../../_data/products.json";

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
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (product && !activeImage) {
      setActiveImage(product.image);
    }
  }, [product, activeImage]);

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

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Product Hero Section */}
      <div className="pt-32 pb-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8 text-[12.5px] font-medium">
            <Link href="/products" className="text-[#2A317A] hover:text-[#4BCBF5]">Our Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 font-bold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            
            {/* Left: Images */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-10 flex items-center justify-center aspect-[4/3]">
                <img src={activeImage || product.image} alt={product.name} className="max-h-[380px] object-contain transition-all" />
              </div>
              
              {/* Thumbnails + Video Toggle */}
              <div className="flex gap-4 overflow-x-auto pb-2 items-center">
                {/* Product Images */}
                {[product.image, ...(product.thumbnails || []).filter((img: string) => img !== product.image)].map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    className={`cursor-pointer border-2 bg-white rounded-lg p-3 flex items-center justify-center w-[110px] h-[85px] shrink-0 transition-colors ${activeImage === img ? 'border-[#2A317A]' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img src={img} alt="thumbnail" className="h-full object-contain" />
                  </div>
                ))}
                
                {/* Video Thumbnail (Always present as requested) */}
                <div 
                  onClick={() => setIsVideoOpen(true)}
                  className="cursor-pointer border-2 border-transparent bg-white rounded-lg p-3 flex flex-col items-center justify-center w-[110px] h-[85px] shrink-0 transition-colors hover:border-[#4BCBF5] shadow-sm relative group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2A317A] flex items-center justify-center text-white mb-1 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-[#2A317A]">Watch Video</span>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-start pt-2">
              <h1 className="text-3xl lg:text-[34px] font-bold text-[#2A317A] mb-4 tracking-tight">{product.name}</h1>
              <p className="text-[#555] text-[13px] leading-relaxed mb-8 max-w-2xl">{product.description}</p>
              
              {/* Key Features Box */}
              {product.keyFeatures && (
                <div className="bg-white rounded-[16px] border border-gray-100 p-8 pt-6 mb-8 shadow-sm">
                  <h3 className="text-[16px] font-bold text-[#2A317A] mb-6">Key Features</h3>
                  <ul className="space-y-6">
                    {product.keyFeatures.map((feature: string, idx: number) => (
                      <li key={idx} className="flex gap-5 items-start">
                        <div className="w-8 h-8 shrink-0 rounded-full bg-gray-200 flex items-center justify-center mt-0.5"></div>
                        <span className="text-[13px] text-[#484848] leading-[1.6] pt-1">{feature}</span>
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

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-[#4BCBF5] transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-[1100px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
             <video 
               src="https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm" 
               autoPlay 
               controls 
               className="w-full h-full object-contain"
             ></video>
          </div>
        </div>
      )}

      {/* Tabs Section */}
      <div className="bg-[#EFEFEF] py-16 pb-32">
        <div className="container mx-auto px-4 max-w-[1280px]">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Tab Headers */}
            <div className="border-b border-gray-200 flex px-6 pt-6 gap-2">
              <button 
                onClick={() => setActiveTab('description')} 
                className={`py-3 px-8 rounded-t-[10px] text-[13.5px] font-bold transition-all ${activeTab === 'description' ? 'bg-[#2A317A] text-white' : 'bg-transparent text-[#666] hover:bg-gray-50'}`}
              >
                Product Description
              </button>
              <button 
                onClick={() => setActiveTab('technical')} 
                className={`py-3 px-8 rounded-t-[10px] text-[13.5px] font-bold transition-all ${activeTab === 'technical' ? 'bg-[#2A317A] text-white' : 'bg-transparent text-[#666] hover:bg-gray-50'}`}
              >
                Technical Information
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8 lg:px-12 lg:py-10">
              {activeTab === 'description' && product.tabDescription && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="flex flex-col pt-2">
                    <h3 className="text-[16.5px] font-bold text-[#2A317A] mb-5 tracking-tight">{product.tabDescription.title}</h3>
                    <div className="space-y-5 text-[12.5px] text-[#484848] leading-relaxed">
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
                      <img src="/images/home/history.png" alt="Why Medstrom" className="absolute inset-0 w-full h-full object-cover" />
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
                          <th className="py-4 px-6 font-bold text-[#484848] text-[12px] w-[200px] border-r border-gray-200">{info.label}</th>
                          <td className="py-4 px-6 text-[#555] text-[12.5px]">{info.value}</td>
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

      <Footer />
    </main>
  );
}
