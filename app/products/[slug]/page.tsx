import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, Zap, ListTree } from "lucide-react";
import {
  getCatalogProductBySlug,
  getCatalogProducts,
} from "@/lib/catalogData";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ProductEnquireModal } from "@/components/ProductEnquireModal";
import { ProductCard } from "@/components/ProductCard";
import { ProductCategorySidebar } from "@/components/ProductCategorySidebar";

export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getCatalogProducts();
  return products.map((product) => ({ slug: product.slug }));
}

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;
  const [product, allProducts] = await Promise.all([
    getCatalogProductBySlug(slug),
    getCatalogProducts(),
  ]);

  if (!product) {
    notFound();
  }

  const relatedProducts = allProducts
    .filter(
      (candidate) =>
        candidate.slug !== product.slug &&
        candidate.category === product.category,
    )
    .slice(0, 3);

  return (
    <main className="pt-2 md:pt-4 pb-8 md:pb-12 min-h-screen bg-[#F5F5F5] overflow-x-clip">
      <SectionWrapper className="px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-[#639922] mb-2.5 transition font-semibold group uppercase text-[11px] sm:text-xs tracking-wide">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-start">
          {/* Left Sidebar - Categories */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <ProductCategorySidebar products={allProducts} currentProductSlug={slug} />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden relative">
          {product.offer && (
             <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 bg-[#639922] text-white text-[9px] font-bold tracking-wide uppercase px-2 sm:px-2.5 py-1 rounded shadow-lg">
               {product.offer}
             </div>
          )}

          <div className="grid grid-cols-2 gap-0">
            {/* Left: Standard Single Image */}
            <div className="col-span-1 bg-white border-r border-slate-100 flex flex-col min-w-0">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] overflow-hidden">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-slate-100/50 flex items-center justify-center border-2 border-dashed border-slate-200">
                    <Zap className="w-20 h-20 text-slate-300" />
                  </div>
                )}
              </div>

              {product.features && product.features.length > 0 && <div className="border-t border-slate-100" />}
            </div>

            {/* Right: Focused Details */}
            <div className="col-span-1 p-2 sm:p-3 flex flex-col justify-start min-w-0">
              
              <h1 className="text-[20px] sm:text-[28px] md:text-[32px] font-extrabold text-[#2C2C2A] mb-1.5 tracking-tight leading-[1.05] break-words text-left">
                {product.name}
              </h1>

              {product.price !== undefined && (
                 <p className="text-[16px] sm:text-xl font-extrabold text-[#639922] mb-2 sm:mb-3 text-left">
                   ₹{product.price.toFixed(2)}
                 </p>
              )}

              {product.description && product.description.trim() !== "" && (
                <div className="mb-2.5 sm:mb-3 max-h-[84px] sm:max-h-[110px] overflow-y-auto pr-1">
                  <p className="text-slate-600 leading-relaxed font-medium text-[13px] break-words">
                    {product.description}
                  </p>
                </div>
              )}

              {product.varieties && product.varieties.length > 0 && (
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-[10px] font-bold text-[#2C2C2A] uppercase tracking-wide sm:tracking-wider mb-2">
                    Available Variations
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {product.varieties.map((variety, i) => (
                      <span key={i} className="px-2.5 py-1 border border-slate-200 bg-slate-50 text-slate-700 font-semibold text-[10px] rounded-md shadow-sm">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid block for Features and Specs horizontally */}
              <div className="hidden">
                {/* Features List */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide sm:tracking-widest mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-[#639922]" />
                      Key Features
                    </h3>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-[#2C2C2A]">
                          <Check className="w-4 h-4 text-[#639922] mr-3 shrink-0 mt-[2px]" />
                          <span className="font-semibold text-[12px] leading-snug break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* specifications Card */}
                {product.specifications && product.specifications.length > 0 && (
                    <div>
                    <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide sm:tracking-widest mb-2 sm:mb-2.5 flex items-center">
                        <ListTree className="w-4 h-4 mr-2 text-[#639922]" />
                      Specifications
                    </h3>
                    <div className="border-t border-b border-slate-200">
                      <table className="w-full text-left text-[12px] table-fixed">
                        <tbody className="divide-y divide-slate-100">
                            {product.specifications.map((spec, i) => (
                            <tr key={i} className="group hover:bg-slate-50 transition-colors">
                          <th className="py-2 px-1 align-top font-semibold text-slate-500 w-[44%] pr-2.5 text-[9px] tracking-wide sm:tracking-widest uppercase break-words">
                                  {spec.key}
                                </th>
                          <td className="py-2 align-top font-bold text-[#2C2C2A] break-words">
                                  {spec.value}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                )}
              </div>

              {/* CTA Section */}
              <div className="hidden">
                <ProductEnquireModal productName={product.name} />
              </div>

            </div>

            {(product.features?.length || product.specifications?.length) ? (
              <div className="col-span-2 grid grid-cols-2 border-t border-slate-100">
                <div className="p-2.5 sm:p-3 border-r border-slate-100 min-h-[120px]">
                  {product.features && product.features.length > 0 && (
                    <>
                      <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-[#639922]" />
                        Key Features
                      </h3>
                      <ul className="space-y-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-[#2C2C2A]">
                            <Check className="w-4 h-4 text-[#639922] mr-2 shrink-0 mt-[2px]" />
                            <span className="font-semibold text-[12px] leading-snug break-words">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="p-2.5 sm:p-3 min-h-[120px]">
                  {product.specifications && product.specifications.length > 0 && (
                    <>
                      <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center">
                        <ListTree className="w-4 h-4 mr-2 text-[#639922]" />
                        Specifications
                      </h3>
                      <table className="w-full text-left text-[12px] table-fixed">
                        <tbody className="divide-y divide-slate-100">
                          {product.specifications.map((spec, i) => (
                            <tr key={i} className="group hover:bg-slate-50 transition-colors">
                              <th className="py-2 px-1 align-top font-semibold text-slate-500 w-[44%] pr-2.5 text-[9px] tracking-wide uppercase break-words">
                                {spec.key}
                              </th>
                              <td className="py-2 align-top font-bold text-[#2C2C2A] break-words">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                </div>
              </div>
            ) : null}

            <div className="col-span-2 border-t border-slate-100 px-2.5 sm:px-4 py-3 flex justify-center">
              <div className="[&>button]:w-auto [&>button]:min-w-[200px] [&>button]:px-8">
                <ProductEnquireModal productName={product.name} />
              </div>
            </div>
          </div>
            </div>

        {relatedProducts.length > 0 && (
          <section className="mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 mb-3.5">
              <div>
                <h2 className="text-[18px] sm:text-[22px] font-extrabold text-[#2C2C2A] tracking-tight leading-tight">
                  Related Products
                </h2>
                <p className="text-slate-600 mt-0.5 text-[13px]">
                  More options in the {product.category} category.
                </p>
              </div>
              <Link
                href="/products"
                className="text-sm font-semibold text-[#639922] hover:text-[#2C2C2A] transition-colors"
              >
                View all products
              </Link>
            </div>

            <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-2">
              <div className="flex w-max gap-4 sm:gap-5">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="w-[250px] sm:w-[270px] md:w-[290px] shrink-0">
                    <ProductCard product={relatedProduct} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
