import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';
import HeroCarousel from "@/components/HeroCarousel";
import { CardCarousel } from "@/components/ui/card-carousel";
import { Component as BlogPostsSection } from "@/components/ui/blog-posts";
import { getCatalogProducts, getCatalogServices } from "@/lib/catalogData";

export const metadata: Metadata = {
  title: 'Super Solar Fencing | Top Solar Solutions in Coimbatore',
  description: 'Protect your premises with advanced solar fencing. Super Solar Fencing provides professional installation, top-grade materials, and maintenance in Tamil Nadu.',
};

export default async function Home() {
  const [services, products] = await Promise.all([
    getCatalogServices(),
    getCatalogProducts(),
  ]);
  const siteUrl = "https://supersolarfence.com";
  const tamilPdfPath = "/pdf/Notes_260313_112341.pdf";
  const gazettePdfPath = "/pdf/Forest Dept -Solar Fence-Gazette-Date 04.07.2023.pdf";
  const tamilPdfViewerUrl = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(
    `${siteUrl}${tamilPdfPath}`,
  )}`;
  const gazettePdfViewerUrl = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(
    `${siteUrl}${gazettePdfPath}`,
  )}`;

  const fallbackImages = [
    {
      src: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
      alt: "Solar Panels",
      href: "/services"
    },
    {
      src: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
      alt: "Solar Power Systems",
      href: "/services"
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
      alt: "Hydropower Plants",
      href: "/services"
    },
    {
      src: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop",
      alt: "Maintenance Service",
      href: "/services"
    },
  ];

  const serviceCarouselImages = services.slice(0, 8).map((service, index) => {
    const fallback = fallbackImages[index % fallbackImages.length];
    const validSrc = service.image?.startsWith("http") ? service.image : fallback.src;

    return {
      src: validSrc,
      alt: service.title || fallback.alt,
      href: "/services",
    };
  });

  const carouselImages =
    serviceCarouselImages.length > 0 ? serviceCarouselImages : fallbackImages;

  const fallbackProductImages = [
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=1600&auto=format&fit=crop",
  ];

  const productSectionPosts = [
    {
      id: 1,
      title: "Solar fencing materials",
      category: "Solar Security",
      imageUrl: "/home_products/product1.jpeg",
      href: "/products",
      views: 1860,
      readTime: 6,
      rating: 5,
    },
    {
      id: 2,
      title: "Solar Panel (Mono & Polycrystalline)",
      category: "Perimeter Safety",
      imageUrl: "/home_products/product2.jpg",
      href: "/products",
      views: 1490,
      readTime: 7,
      rating: 5,
    },
    {
      id: 3,
      title: "GI wire",
      category: "Farm Solutions",
      imageUrl: "/home_products/product3.jpg",
      href: "/products",
      views: 1330,
      readTime: 5,
      rating: 4,
    },
    {
      id: 4,
      title: "Auto Cut Battery Charger 10A",
      category: "Commercial",
      imageUrl: "/home_products/product4.jpeg",
      href: "/products",
      views: 2100,
      readTime: 8,
      rating: 5,
    }
  ];

  return (
    <>
      {/* Mobile-first hero with responsive media and clear CTA hierarchy */}
      <section className="relative w-full min-h-[min(55svh,360px)] sm:min-h-[min(78vh,760px)] md:min-h-[min(52vh,560px)] md:max-h-[560px] overflow-hidden bg-[#1F2924]">
        <HeroCarousel />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/55 to-black/70" />

        <div className="relative z-[2] mx-auto flex min-h-[min(50svh,340px)] w-full max-w-[1400px] items-center px-4 py-6 sm:min-h-[min(70vh,720px)] sm:px-6 sm:py-16 md:min-h-[min(52vh,560px)] md:py-12">
          <div className="max-w-[290px] space-y-4 sm:max-w-3xl sm:space-y-6">
            <p className="animate-fade-in-up text-[10px] font-bold uppercase tracking-[0.2em] text-[#9CCF63] sm:text-[13px]">
              Trusted Solar Protection
            </p>
            <h1 className="animate-fade-in-up delay-100 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Super Solar
              <br className="hidden sm:block" />
              <span className="relative block sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9CCF63]">Power Fencing Technology</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-[12px] leading-5 text-gray-200 sm:max-w-2xl sm:text-base sm:leading-7">
              Durable, low-maintenance fencing systems built for farms, factories,
              and open land with dependable solar-powered performance.
            </p>
            <div className="animate-fade-in-up delay-300 flex flex-row flex-wrap gap-2.5 sm:gap-3 sm:flex-row sm:items-center">
              <Link
                href="/products"
                className="hover-electric-glow inline-flex min-h-[38px] items-center justify-center rounded-lg bg-[#639922] px-4 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#547f1d] sm:min-h-[46px] sm:rounded-xl sm:px-6 sm:text-sm"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[38px] items-center justify-center rounded-lg border border-white/40 bg-white/10 px-4 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur transition hover:border-[#639922] hover:bg-white/20 hover:text-[#9CCF63] sm:min-h-[46px] sm:rounded-xl sm:px-6 sm:text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized PDF Guidelines Banner */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 py-4 sm:p-5 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={tamilPdfViewerUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-3.5 bg-[#f8faf9] border border-[#639922]/30 rounded-xl p-3 sm:p-4 hover:border-[#639922]/60 hover:shadow-sm transition-all active:scale-[0.98] group"
            >
              <div className="w-11 h-11 rounded-full bg-[#639922]/10 text-[#639922] flex items-center justify-center group-hover:bg-[#639922] group-hover:text-white transition-colors shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] sm:text-sm font-extrabold text-[#2C2C2A] leading-tight">Solar Work Details (Tamil)</span>
                <span className="text-[10px] sm:text-xs text-slate-500 mt-0.5 tracking-wide font-medium">View Guidelines PDF</span>
              </div>
            </a>
            
            <a 
              href={gazettePdfViewerUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-3.5 bg-[#f8faf9] border border-[#639922]/30 rounded-xl p-3 sm:p-4 hover:border-[#639922]/60 hover:shadow-sm transition-all active:scale-[0.98] group"
            >
              <div className="w-11 h-11 rounded-full bg-[#639922]/10 text-[#639922] flex items-center justify-center group-hover:bg-[#639922] group-hover:text-white transition-colors shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] sm:text-sm font-extrabold text-[#2C2C2A] leading-tight">Forest Dept Gazette</span>
                <span className="text-[10px] sm:text-xs text-slate-500 mt-0.5 tracking-wide font-medium">Government Notification</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] px-4 py-8 sm:px-6 lg:px-8 lg:py-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Stats cards are horizontal on mobile and 3-column on larger screens */}
          <div className="mb-2">
            <div className="grid grid-cols-3 gap-2 sm:gap-5">
            <div className="group rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#639922]/30">
              <p className="text-xl font-extrabold text-[#639922] sm:text-4xl transition-colors duration-300 group-hover:text-[#547f1d]">40k+</p>
              <p className="mt-1 sm:mt-2 text-[8px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-[#639922] transition-colors duration-300 leading-tight">
                Happy<br className="sm:hidden" /> Customers
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#639922]/30 delay-100">
              <p className="text-xl font-extrabold text-[#639922] sm:text-4xl transition-colors duration-300 group-hover:text-[#547f1d]">25k+</p>
              <p className="mt-1 sm:mt-2 text-[8px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-[#639922] transition-colors duration-300 leading-tight">
                Projects<br className="sm:hidden" /> Completed
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#639922]/30 delay-200">
              <p className="text-xl font-extrabold text-[#639922] sm:text-4xl transition-colors duration-300 group-hover:text-[#547f1d]">30+</p>
              <p className="mt-1 sm:mt-2 text-[8px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-[#639922] transition-colors duration-300 leading-tight">
                Product<br className="sm:hidden" /> Lines
              </p>
            </div>
            </div>
          </div>

          {/* Products Section */}
          <BlogPostsSection
            title="Our Products"
            description="Explore premium solar fencing and protection systems built for long-term security, durability, and performance."
            backgroundLabel="PRODUCTS"
            backgroundPosition="right"
            posts={productSectionPosts}
            className="mb-4 mt-0"
          />

          {/* Service Highlights */}
          <div className="mb-1 mt-10">
            <CardCarousel
              images={carouselImages}
              autoplayDelay={3200}
              showPagination={true}
              showNavigation={false}
              showBadge={false}
              title="Our Services"
              subtitle=""
            />
          </div>

          {/* About section uses single-column first, then two-column on large screens */}
          <div className="mb-8 mt-10 sm:mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">
            <div className="relative order-2 hidden lg:order-1 lg:block">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-[#EDE8DE] sm:-left-4 sm:-top-4" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
                <Image 
                  src="/about-section-home.avif"
                  alt="Installation of solar panels"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 space-y-4 lg:order-2 lg:space-y-5">
              <span className="block text-[15px] font-bold uppercase tracking-[0.18em] text-[#639922] sm:text-[17px]">
                About Us
              </span>
              <div className="relative lg:hidden">
                <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-[#EDE8DE]" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
                  <Image
                    src="https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg"
                    alt="Installation of solar panels"
                    fill
                    loading="lazy"
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2C2C2A] sm:text-4xl md:text-[42px] lg:text-5xl">
                Trusted Solar Fencing
                <br className="hidden sm:block" />
                Experts in Coimbatore
              </h2>
              <p className="max-w-xl text-[15px] leading-7 text-[#64748B] sm:text-base">
                Super Solar Power Fencing Technology is a trusted provider of solar fencing solutions, delivering reliable protection systems for farms, industrial areas, and open lands.
                <br /><br />
                We focus on quality products, efficient installation, and customer satisfaction. Our systems are designed to be durable, low maintenance, and highly effective in securing your properties.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#639922] px-7 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#547f1d]"
                >
                  Find Out More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motive / Why Choose Us Section */}
      <section className="bg-[#F5F5F5] px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 max-w-3xl">
            <span className="mb-3 block text-[15px] font-bold uppercase tracking-[0.2em] text-[#639922] sm:text-[17px]">
              Why Choose Us
            </span>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-[#2C2C2A] sm:text-4xl md:text-[44px]">
              Committed to Security, Quality, and Reliability
            </h2>
            <p className="max-w-2xl text-[15px] leading-7 text-[#64748B] sm:text-base">
              We provide cost-effective fencing systems suitable for all types of customers. By using high-quality materials and proven technology backed by an experienced team, we ensure long-lasting performance and complete peace of mind.
            </p>
          </div>

          {/* Mobile-first responsive grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {[
              { num: "01", text: "Quality\nProducts" },
              { num: "02", text: "Experienced\nTeam" },
              { num: "03", text: "Reliable\nSupport" },
              { num: "04", text: "Affordable\nSolutions" }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative min-h-[126px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#639922]/40 active:scale-[0.98] sm:min-h-[138px] sm:p-4"
              >
                <span
                  className="pointer-events-none absolute left-2 top-0 text-[64px] leading-none font-black tracking-tighter text-slate-200 transition-all duration-300 group-hover:text-[#639922]/15 sm:left-3 sm:-top-1 sm:text-[80px]"
                >
                  {item.num}
                </span>
                <span className="relative z-10 block whitespace-pre-line pl-8 pt-3 text-[11px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#2C2C2A] transition-colors duration-300 group-hover:text-[#639922] sm:pl-10 sm:pt-4 sm:text-[12px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}
