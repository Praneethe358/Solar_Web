'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { CatalogProduct } from '@/lib/types';

interface ProductCategorySidebarProps {
  products: CatalogProduct[];
  currentProductSlug: string;
}

interface GroupedProducts {
  [category: string]: CatalogProduct[];
}

export function ProductCategorySidebar({
  products,
  currentProductSlug,
}: ProductCategorySidebarProps) {
  // Group products by category
  const groupedByCategory: GroupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {} as GroupedProducts
  );

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedByCategory).sort();

  // State for expanded categories
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(sortedCategories) // All categories expanded by default
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <aside className="w-full lg:w-72 bg-white border border-slate-200 rounded-xl p-5 h-fit sticky top-[130px] max-h-[calc(100vh-150px)] overflow-y-auto shadow-sm">
      <h3 className="text-sm font-bold text-[#2C2C2A] uppercase tracking-widest mb-4 flex items-center pb-3 border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#639922] mr-2.5"></span>
        Browse Categories
      </h3>

      <div className="space-y-0.5">
        {sortedCategories.map((category) => {
          const isExpanded = expandedCategories.has(category);
          const categoryProducts = groupedByCategory[category];
          const productCount = categoryProducts.length;

          return (
            <div key={category} className="border-b border-slate-100 last:border-b-0">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between px-3 py-3 hover:bg-slate-50 transition-colors rounded-lg group"
              >
                <div className="flex items-center flex-1 min-w-0">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-[#639922] mr-2.5 flex-shrink-0 group-hover:text-[#7dbb33]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 mr-2.5 flex-shrink-0 group-hover:text-[#639922]" />
                  )}
                  <span className="text-sm font-bold text-slate-800 group-hover:text-[#639922] transition-colors truncate leading-tight">
                    {category}
                  </span>
                </div>
                <span className="ml-2 flex-shrink-0 text-xs font-bold text-white bg-[#639922] px-2 py-1 rounded-full group-hover:bg-[#7dbb33] transition-colors">
                  {productCount}
                </span>
              </button>

              {isExpanded && (
                <div className="bg-slate-50 rounded-lg py-2 px-2 mx-1 mb-2 border border-slate-100 animate-in slide-in-from-top-2 duration-200">
                  {categoryProducts.map((product) => {
                    const isCurrentProduct = product.slug === currentProductSlug;
                    return (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className={`block px-3 py-2 rounded-md text-xs transition-all truncate font-medium leading-snug ${
                          isCurrentProduct
                            ? 'bg-[#639922] text-white font-semibold shadow-sm'
                            : 'text-slate-700 hover:bg-white hover:text-[#639922] hover:shadow-sm'
                        }`}
                        title={product.name}
                      >
                        {product.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200">
        <Link
          href="/products"
          className="block text-center px-3 py-2.5 rounded-lg text-xs font-bold text-[#639922] hover:bg-[#639922] hover:text-white border-2 border-[#639922] transition-all"
        >
          View All Products
        </Link>
      </div>
    </aside>
  );
}
