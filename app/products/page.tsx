import { Metadata } from 'next';
import ProductsCatalogClient from "@/app/products/ProductsCatalogClient";
import { getCatalogProducts } from "@/lib/catalogData";

export const metadata: Metadata = {
  title: "Products | Solar Fencing Products & Accessories",
  description: "Explore our wide range of solar fencing products, including solar fence energizers, GI wire, and solar fencing materials supplied directly from Coimbatore.",
  keywords: [
    "solar fencing products",
    "solar fence energizer",
    "GI wire solar fencing accessories",
    "solar fencing materials supplier"
  ],
  alternates: {
    canonical: "https://supersolarfence.com/products",
  },
  openGraph: {
    title: "Products | Solar Fencing Products & Accessories",
    description: "Explore our wide range of solar fencing products, including solar fence energizers, GI wire, and solar fencing materials.",
    url: "https://supersolarfence.com/products",
    siteName: "Super Solar Power Fencing Technology",
    images: [{ url: "https://supersolarfence.com/about-section-home.avif", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Solar Fencing Products & Accessories",
    description: "Explore our wide range of solar fencing products, including solar fence energizers, GI wire, and solar fencing materials.",
    images: ["https://supersolarfence.com/about-section-home.avif"],
  },
};

export default async function ProductsPage() {
  const products = await getCatalogProducts();

  return (
    <ProductsCatalogClient initialProducts={products} />
  );
}
