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
      <div className="pt-32 pb-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8 text-[12.5px] font-medium">
            <Link href="/products" className="text-[#2A317A] hover:text-[#4BCBF5]">Our Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 font-bold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            
            {/* Left: Images/Video Gallery */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-10 flex items-center justify-center aspect-[4/3] overflow-hidden">
                {activeMedia && isVideo(activeMedia) ? (
                   <video key={activeMedia} src={activeMedia} autoPlay controls muted className="w-full h-full object-contain rounded-lg" />
                ) : (
                   <img src={activeMedia || product.image} alt={product.name} className="max-h-[380px] object-contain transition-all" />
                )}
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 items-center">
                {/* Image Thumbnails */}
                {[product.image, ...(product.thumbnails || []).filter((img: string) => img !== product.image)].map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveMedia(img)}
                    className={`cursor-pointer border-2 bg-white rounded-lg p-3 flex items-center justify-center w-[110px] h-[85px] shrink-0 transition-colors ${activeMedia === img ? 'border-[#2A317A]' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img src={img} alt="thumbnail" className="h-full object-contain" />
                  </div>
                ))}
                
                {/* Video Thumbnail */}
                <div 
                  onClick={() => setActiveMedia(videoUrl)}
                  className={`cursor-pointer border-2 bg-white rounded-lg p-3 flex flex-col items-center justify-center w-[110px] h-[85px] shrink-0 transition-colors relative group overflow-hidden ${activeMedia === videoUrl ? 'border-[#2A317A]' : 'border-transparent hover:border-gray-200'}`}
                >
                  <video src={videoUrl} className="absolute inset-0 w-full h-full object-cover" />
                  <span className="relative z-10 text-[10px] font-bold text-white drop-shadow-md bg-black/40 px-2 py-1 rounded">Video</span>
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

      {/* Related Products Section (Catalog functionality) */}
      <div className="bg-white py-24 pb-32">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="flex items-center justify-between mb-12">
            <div>
               <h4 className="text-[#4BCBF5] font-bold text-[14px] uppercase tracking-wider mb-2">Explore More</h4>
               <h2 className="text-3xl font-bold text-[#2A317A]">Related Products</h2>
            </div>
            <Link href="/products" className="text-[#2A317A] font-bold text-[15px] hover:text-[#4BCBF5] border-b-2 border-[#2A317A] hover:border-[#4BCBF5] transition-all pb-1">View Full Catalog</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(productsDataRaw).flat().slice(0, 4).map((p: any) => (
              <div key={p.id} className="group flex flex-col bg-white rounded-xl border border-[#DDE4EE] overflow-hidden hover:shadow-xl transition-all duration-500 p-3">
                <Link href={`/products/${p.id}`} className="block aspect-[4/3] bg-[#F1F1F1] p-6 relative overflow-hidden rounded-xl">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/products/${p.id}`}>
                    <h3 className="text-[17px] font-bold text-[#2A317A] mb-3 hover:text-[#4BCBF5] transition-colors">{p.name}</h3>
                  </Link>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed line-clamp-2 mb-6">{p.description}</p>
                  <Button href={`/products/${p.id}`} variant="primary" padding="py-3 w-full" fontSize="text-[12px]" className="bg-[#4BCBF5] hover:bg-[#3ab1d6]">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-[#F9F9F9] py-24">
        <div className="container mx-auto px-4 max-w-[1280px]">
           <div className="text-center mb-16">
              <h4 className="text-[#4BCBF5] font-bold text-[14px] uppercase tracking-wider mb-2">Customer Feedback</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2A317A]">Product Reviews</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1, 2, 3].map(i => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                     {[...Array(5)].map((_, idx) => (
                        <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                     ))}
                  </div>
                  <p className="text-[14px] text-gray-600 leading-relaxed italic mb-6">"Medstrom Aria Flex has transformed our ward's pressure ulcer management. The adaptive therapy is a game changer for critical patient care."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                     <div>
                        <h5 className="font-bold text-[#2A317A] text-[15px]">Senior Clinician</h5>
                        <p className="text-[12px] text-gray-400 font-medium">Acute Care Trust</p>
                     </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
