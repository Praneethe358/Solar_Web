"use client";

import { useState, useEffect } from "react";
import { categories, productData } from "@/lib/dummyData";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ProductCard } from "@/components/ProductCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { CategoryFilter } from "@/components/CategoryFilter";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate remote loading latency for UX purposes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // 600ms artificial delay to show off beautiful skeleton loaders
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredProducts = activeCategory === "All" 
    ? productData 
    : productData.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <SectionWrapper>
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-emerald-600">Products</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Explore our comprehensive range of high-performance solar energizers, heavy-duty accessories, and complete kits designed for ultimate perimeter security and reliability.
          </p>
        </div>

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
          {isLoading ? (
            Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-slate-300">📦</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500">We couldn't find any products in the <span className="font-semibold">{activeCategory}</span> category.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}
