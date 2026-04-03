"use client";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-10 pb-2 overflow-x-auto no-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap",
            activeCategory === cat
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 transform scale-105"
              : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
