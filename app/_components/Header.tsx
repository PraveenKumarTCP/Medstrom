"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { topNavLinks, mainNavLinks } from "../_data/homeData";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the full original header height (~150px)
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full relative z-50">
      {/* ── Top utility bar ──────────────────── */}
      <div className="w-full bg-white relative z-40">
        <div
          className="bg-[#2A317A] text-white"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-12">
            {/* Top nav links — hide on mobile, show from xl up with wrap support */}
            <nav className="hidden xl:flex flex-wrap items-center justify-center md:justify-start flex-1 overflow-hidden">
              {topNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11px] xl:text-[14.5px] px-3 lg:px-4 py-2 lg:py-3 text-white transition-colors font-medium hover:text-white/80"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language selector — centered on small screens, right-aligned on larger */}
            <div className="flex items-center gap-1.5 ml-auto xl:ml-0 py-2">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-white"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  strokeWidth="1.5"
                />
                <path d="M2 12h20" strokeWidth="1.5" />
              </svg>
              <button className="flex items-center gap-1.5 text-white hover:text-white/80 transition-colors font-medium text-[13px] lg:text-[14.5px]">
                English (en)
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-3 h-3"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main nav bar Placeholder ─────────────────────────── */}
      <div className="h-[70px] w-full relative z-40">
        {/* Main Navbar */}
        <div
          className={`bg-white border-b border-[#E2EAF4] w-full transition-all duration-300 ease-in-out ${isScrolled
            ? "fixed top-0 left-0 z-50 shadow-md translate-y-0"
            : "absolute top-0 left-0 z-40 translate-y-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            }`}
        >
          <div className="container mx-auto h-[70px] flex items-center px-4 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex flex-col shrink-0 leading-none mr-12">
              <img src="/medstrom/images/medstrom-logo.svg" alt="Medstrom Logo" className="h-10 xl:h-12 w-auto" />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden xl:flex flex-wrap items-center flex-1 justify-center gap-1 xl:gap-6 mr-4 xl:mr-8 overflow-hidden">
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                const isHighlight = (link as { label: string; href: string; highlight?: boolean }).highlight;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[14px] xl:text-[16px] font-semibold whitespace-nowrap transition-colors duration-200 px-2 xl:px-3 py-2 ${isActive
                      ? "text-[#47C1EF] underline decoration-[#47C1EF] decoration-2 underline-offset-8"
                      : "text-[#484848] hover:text-[#47C1EF]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Search box — rounded pill, soft border */}
            <div className="hidden xl:flex items-center ml-auto bg-white border-[1.5px] border-[#E5E7EB] rounded-lg overflow-hidden h-[42px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] w-[300px]">
              <input
                type="text"
                placeholder="Search Everything"
                className="flex-1 w-full h-full bg-white outline-none text-[13.5px] text-[#4B5563] px-4 border-none"
              />
              <button
                aria-label="Search"
                className="h-full bg-white hover:bg-gray-50 flex items-center justify-center transition-colors px-3 cursor-pointer border-l-0"
              >
                <img src="/medstrom/images/search.svg" alt="Search" className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile: search + hamburger */}
            <div className="xl:hidden flex items-center gap-2 ml-auto">
              <button aria-label="Search" className="p-2 text-[#666] hover:text-[#1B61A6] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button
                className="p-2 text-[#1B61A6]"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* ── Mobile drawer ───────────────────────────────── */}
          {mobileOpen && (
            <div className="xl:hidden border-t border-[#E2EAF4] bg-white">
              {/* Top links */}
              <div className="border-b border-[#E2EAF4] bg-[#F4F8FC] py-2">
                {topNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-6 py-2 text-[#666] hover:text-[#1B61A6] hover:bg-[#EDF3F9] transition-colors text-[13px]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Main links */}
              <div className="pb-2 pt-1">
                {mainNavLinks.map((link) => {
                  const isHighlight = (link as { label: string; href: string; highlight?: boolean }).highlight;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`block px-6 py-3 font-semibold hover:bg-[#F4F8FC] transition-colors text-[14px] ${isHighlight ? "text-[#00AEEF]" : "text-[#333]"
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              {/* Mobile search */}
              <div className="px-4 pb-4">
                <div className="flex items-center border-[1.5px] border-[#E5E7EB] rounded-lg overflow-hidden h-[42px]">
                  <input
                    type="text"
                    placeholder="Search Everything"
                    className="flex-1 outline-none bg-white text-[13.5px] px-4 h-full border-none text-[#4B5563]"
                  />
                  <button className="w-[42px] h-full flex items-center justify-center bg-white">
                    <svg className="w-[18px] h-[18px] text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 1.5a7.5 7.5 0 010 15.15z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
