"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-[#F9F9F9] pt-16 pb-6" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 px-2">

          {/* Logo & Newsletter (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6" data-aos="fade-up">
            <Link href="/" className="inline-block">
              <img src="/medstrom/images/medstrom-logo.svg" alt="Medstrom - Improved Patient Outcomes" className="h-16 object-contain" />
            </Link>

            <div className="flex w-full mt-2 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full bg-[#f1f1f1] text-[#484848] px-4 py-3 outline-none"
              />
              <button
                className="bg-[#2A317A] px-4 py-3 flex items-center justify-center transition-colors hover:bg-[#4BCBF5] focus:outline-none group flex-shrink-0"
              >
                <img src="/medstrom/images/send.png" alt="" className="h-5" />
              </button>
            </div>

            <div className="flex gap-2.5 mt-2">
              {['Facebook', 'Youtube', 'Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-[45px] h-[45px] rounded-full border border-[#4BCBF5] bg-[#4BCBF5] flex items-center justify-center text-white transition-all shadow-sm">
                  <span className="sr-only">{social}</span>
                  {social === 'Facebook' && <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>}
                  {social === 'Youtube' && <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>}
                  {social === 'Twitter' && <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>}
                  {social === 'LinkedIn' && <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Col span 2) */}
          <div className="lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-bold text-[#484848] text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 flex flex-col">
              {['Why Medstrom?', 'Total Bed Management', 'Clinical Solutions', 'Careers', 'News & Events', 'Carbon Reduction Plan'].map((link) => (
                <li key={link}><Link href="#" className="flex  font-medium text-[#484848] hover:text-[#4BCBF5] transition-colors leading-relaxed">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company (Col span 2) */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-bold text-[#484848] text-xl mb-6">Company</h4>
            <ul className="space-y-4 flex flex-col">
              {['Modern Slavery Statement', 'Gender Pay Gap Report', 'Data Collection', 'Environmental Policy', 'Cookie Policy', 'Vulnerability Policy', 'Site by Distract'].map((link) => (
                <li key={link}><Link href="#" className="flex  font-medium text-[#484848] hover:text-[#4BCBF5] transition-colors leading-relaxed">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Products (Col span 2) */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-bold text-[#484848] text-xl mb-6">Products</h4>
            <ul className="space-y-4 flex flex-col">
              {['Hospital Beds', 'Critical Care Beds', 'Pressure Area Care', 'Bariatric'].map((link) => {
                const href = link === 'Hospital Beds' || link === 'Bariatric' ? '/products' : '#';
                const isActive = pathname === href;
                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className={`flex font-medium transition-colors leading-relaxed ${isActive ? "text-[#47C1EF]" : "text-[#484848] hover:text-[#47C1EF]"
                        }`}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact (Col span 3) */}
          <div className="lg:col-span-3 lg:pl-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-xl font-bold text-[#484848] mb-6">Contact Us</h4>
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#2A317A] mt-[2px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className=" text-gray-500 leading-[1.6]">Medstrom Ltd. 2 Cygnus Court, Beverley Road,<br />Pegasus Business Park, Castle<br />Donington DE74 2SA</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#2A317A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className=" text-gray-500 font-medium tracking-wide">0345 371 1717</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#2A317A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className=" text-gray-500 font-medium tracking-wide">info@medstrom.co.uk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="border-t border-[#DDDDDD] mt-4 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 px-2">
          <p className="text-[14px]! text-[#484848] font-medium"> © {new Date().getFullYear()} Medstrom Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="text-[14px] text-[#484848] font-medium hover:text-[#47C1EF] transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-[14px] text-[#484848] font-medium hover:text-[#47C1EF] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
