"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full overflow-hidden bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-bold text-xl text-emerald-600">
            Super Solar Fencing
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-slate-600 hover:text-emerald-600 transition">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-emerald-600 transition">About</Link>
            <Link href="/products" className="text-slate-600 hover:text-emerald-600 transition">Products</Link>
            <Link href="/works" className="text-slate-600 hover:text-emerald-600 transition">Works</Link>
            <Link href="/contact" className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition">Get Quote</Link>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-6 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">About</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Products</Link>
          <Link href="/works" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Works</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-4 text-center font-medium bg-emerald-600 text-white rounded-md">Get Quote</Link>
        </div>
      )}
    </nav>
  );
}
