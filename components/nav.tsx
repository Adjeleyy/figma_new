"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full relative">
      <nav className="flex justify-between items-center w-full h-[86px] px-6 sm:px-15 lg:px-20 xl:px-30">
        <a href="#hero"><img src="/navbar.svg" alt="narendra" className="w-[60px] h-[86px] gap-[10px] py-[13px]" /></a>

        {/* Desktop menu */}
        <div className="hidden sm:block">
          <ol className="flex list-decimal list-inside gap-6 font-spartan font-semibold text-[12px] lg:text-[16px] xl:text-[20px] text-[#336699] marker:text-[#FF6666] leading-none tracking-normal">
            <li>Services</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ol>
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden flex flex-col gap-[5px]"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-[2px] bg-[#336699]"></span>
          <span className="block w-6 h-[2px] bg-[#336699]"></span>
          <span className="block w-6 h-[2px] bg-[#336699]"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ol className="sm:hidden absolute top-[86px] right-0 w-fit flex flex-col list-decimal list-inside gap-4 px-15 py-4 font-spartan font-semibold text-[16px] text-[#336699] marker:text-[#FF6666] z-50">
          <li>Services</li>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      )}
    </div>
  );
}
