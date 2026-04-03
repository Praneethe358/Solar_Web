import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Sun, Shield } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { productData } from "@/lib/dummyData";

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex border-b bg-slate-900 border-slate-800 text-white min-h-[600px] items-center">
        <div className="absolute inset-0 bg-emerald-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center h-full pt-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Next-Gen <span className="text-emerald-500">Solar Security</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Protect your perimeter with industry-leading solar powered fencing solutions. Reliable, sustainable, and built for maximum endurance.
            </p>
            <div className="flex space-x-4">
              <Link href="/products" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition flex items-center space-x-2">
                <span>View Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition backdrop-blur-sm">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Super Solar Fencing?</h2>
          <p className="text-slate-600">Our systems provide maximum deterrent with zero environmental impact and minimal maintenance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "High Output Power", desc: "Delivers maximum non-lethal shock to deter any intrusion effectively." },
            { icon: Sun, title: "100% Solar Powered", desc: "Completely off-grid capable with high-capacity battery backups for cloudy days." },
            { icon: ShieldCheck, title: "Durable Materials", desc: "Weather-resistant components designed to withstand harsh outdoor conditions over decades." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-slate-600 max-w-xl">Browse our top-rated solar energizers and premium accessories.</p>
          </div>
          <Link href="/products" className="hidden sm:flex text-emerald-600 font-medium items-center hover:text-emerald-700">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all h-full">
              <div className="h-48 bg-slate-100 w-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-slate-300 group-hover:scale-110 transition duration-300" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase mb-2">{product.category}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">{product.shortDescription}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="font-bold text-lg text-slate-900">${product.price.toFixed(2)}</span>
                  <span className="text-emerald-600 text-sm font-medium">Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products" className="inline-flex text-emerald-600 font-medium items-center hover:text-emerald-700">
            View All Products <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </SectionWrapper>

      <section className="bg-emerald-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to secure your perimeter?</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Get in touch with our security experts for a custom quote and perimeter assessment.
          </p>
          <Link href="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-md font-bold text-lg transition shadow-lg">
            Request an Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
