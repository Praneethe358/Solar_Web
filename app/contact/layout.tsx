import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Solar Fencing Company Coimbatore",
  description: "Contact the leading solar fencing company in Coimbatore for inquiries, solar fence installation quotes, and installations near you in Tamil Nadu.",
  keywords: [
    "contact solar fencing company Coimbatore",
    "solar fencing enquiry Tamil Nadu",
    "solar fence installation quote",
    "solar fencing near me"
  ],
  alternates: {
    canonical: "https://supersolarfence.com/contact",
  },
  openGraph: {
    title: "Contact Us | Solar Fencing Company Coimbatore",
    description: "Contact the leading solar fencing company in Coimbatore for inquiries and solar fence installation quotes in Tamil Nadu.",
    url: "https://supersolarfence.com/contact",
    siteName: "Super Solar Power Fencing Technology",
    images: [{ url: "https://supersolarfence.com/about-section-home.avif", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Solar Fencing Company Coimbatore",
    description: "Contact the leading solar fencing company in Coimbatore for inquiries and solar fence installation quotes in Tamil Nadu.",
    images: ["https://supersolarfence.com/about-section-home.avif"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}