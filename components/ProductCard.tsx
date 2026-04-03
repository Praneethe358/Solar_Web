import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export interface ProductType {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  price: number;
}

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link 
      href={`/products/${product.slug}`} 
      className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300 h-full transform hover:-translate-y-1"
    >
      <div className="h-56 bg-gradient-to-br from-slate-50 to-slate-100 w-full flex items-center justify-center relative overflow-hidden">
        {/* Placeholder styling since no real images used */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-emerald-900/5 transition-opacity duration-300 pointer-events-none" />
        <Shield className="w-16 h-16 text-slate-300 group-hover:scale-110 group-hover:text-emerald-500 transition-transform duration-500 ease-out" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase bg-emerald-50 px-2 py-1 rounded-sm">
            {product.category}
          </span>
          <span className="font-bold text-lg text-slate-900">${product.price.toFixed(2)}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-emerald-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
          {product.shortDescription}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-500 group-hover:text-emerald-600 transition-colors">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
