import Link from "next/link";
import { AboutProductVideos } from "@/components/AboutProductVideos";
import { ResponsiveLightboxImage } from "@/components/ResponsiveLightboxImage";

export const revalidate = 30;

export default async function AboutPage() {
  const factsheetBasic = [
    ["Nature of Business", "Manufacture and sales"],
    ["Additional Business", "Installation and service"],
    ["Company CEO", "R. Thirumoorthi"],
    [
      "Registered Address",
      "Siruvani Main Road, GH Hospital (opposite), High School Bus Stop, Post Pooluvapatti, Coimbatore-641101",
    ],
    ["Total Number of Employees", "11 to 25 People"],
    ["Legal Status of Firm", "Proprietorship"],
    ["Annual Turnover", "40 L - 1.5 Cr"],
    ["Since", "2006"],
  ];

  const factsheetStatutory = [
    ["GST No.", "33BCJPT0648D1ZP"],
  ];

  const paymentModes = ["Cash", "Online Payment"];

  const whyUs = [
    "Advanced processing facility",
    "Experienced professionals",
    "Strict quality standards",
    "Ethical business policies",
    "Transparent dealings",
    "Absolute client satisfaction",
    "Timely delivery",
  ];

  const infraImages = [
    "/about_images/about1.jpeg",
    "/about_images/about2.jpeg",
    "/about_images/about3.jpeg",
  ];

  const youtubeLinks = [
    {
      title: "Solar Electric Fencing",
      videoId: "pGtLzAmOs0o",
      thumbnail: "https://img.youtube.com/vi/pGtLzAmOs0o/maxresdefault.jpg",
    },
    {
      title: "Solar Powered Electric Fence",
      videoId: "aJogUEAH9BI",
      thumbnail: "https://img.youtube.com/vi/aJogUEAH9BI/maxresdefault.jpg",
    },
    {
      title: "Precast Prestressed Wall Fence",
      videoId: "w5Wja6brPqI",
      thumbnail: "https://img.youtube.com/vi/w5Wja6brPqI/maxresdefault.jpg",
    },
  ];

  return (
    <>
      <section className="bg-[#F5F5F5] px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-[1200px] space-y-5 sm:space-y-8">
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-[28px] sm:text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight mb-3 sm:mb-4 leading-tight">
                  About Us
                </h2>
                <div className="relative mb-4 w-full aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100 lg:hidden">
                  <ResponsiveLightboxImage
                    src="/about_images/about1.jpeg"
                    alt="About Super Solar Power Fencing Technology"
                    imageClassName="object-contain"
                  />
                </div>
                <p className="text-[#5F5E5A] text-[14px] sm:text-[15px] leading-7 sm:leading-relaxed">
                  Established in 2006 at Coimbatore, Tamil Nadu, <strong>Super Solar Power Fencing Technology</strong> is a trusted proprietorship firm 
                  dedicated to manufacturing and supplying high-quality agriculture and industrial solar fencing solutions. 
                  Leveraging modern technology and quality-approved parameters, our products provide unparalleled safety, durability, 
                  and long-term reliability in securing varied properties.
                  <br /><br />
                  Under the experienced guidance of our CEO, <strong>R. Thirumoorthi</strong>, we have earned strong market credibility, delivering 
                  efficient installations, regular maintenance, and round-the-clock service to our ever-expanding and highly satisfied client base across the region.
                </p>
              </div>

              <div className="hidden lg:block lg:col-span-5">
                <div className="relative w-full aspect-square xl:aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <ResponsiveLightboxImage
                    src="/about_images/about1.jpeg"
                    alt="About Super Solar Power Fencing Technology"
                    imageClassName="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <AboutProductVideos videos={youtubeLinks} />

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              <h3 className="text-[26px] sm:text-2xl md:text-3xl font-extrabold text-[#2C2C2A] mb-3 sm:mb-4 tracking-tight leading-tight">Our Infrastructure</h3>
              <p className="text-[#5F5E5A] text-[14px] sm:text-[15px] mb-4 sm:mb-6">Our Board Image</p>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] px-6 sm:px-8 py-2.5 sm:py-3 bg-[#639922] text-white rounded-md font-bold hover:bg-[#5F5E5A] transition"
              >
                Contact Us
              </Link>

            <div className="relative mt-4 sm:mt-6 w-full aspect-video sm:aspect-auto sm:h-[400px] lg:h-[500px] rounded-lg sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <ResponsiveLightboxImage
                src="/about_images/banner.jpeg"
                alt="Super Solar Power Fencing Technology banner"
                imageClassName="object-contain"
              />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
            <h3 className="text-[26px] sm:text-2xl md:text-3xl font-extrabold text-[#2C2C2A] text-center mb-5 sm:mb-8">Factsheet</h3>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-[22px] sm:text-xl md:text-2xl font-bold text-[#2C2C2A] mb-3 sm:mb-4">Basic Information</h4>
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden">
                  {factsheetBasic.map(([label, value]) => (
                    <div key={label} className="grid md:grid-cols-3 gap-1.5 sm:gap-2 md:gap-6 p-3.5 sm:p-4 bg-white">
                      <p className="text-[#5F5E5A] text-[11px] sm:text-sm font-bold uppercase tracking-wide sm:normal-case">{label}</p>
                      <p className="md:col-span-2 text-[#2C2C2A] text-[14px] sm:text-[15px] font-medium leading-6">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[22px] sm:text-xl md:text-2xl font-bold text-[#2C2C2A] mb-3 sm:mb-4">Statutory Profile</h4>
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden">
                  {factsheetStatutory.map(([label, value]) => (
                    <div key={label} className="grid md:grid-cols-3 gap-1.5 sm:gap-2 md:gap-6 p-3.5 sm:p-4 bg-white">
                      <p className="text-[#5F5E5A] text-[11px] sm:text-sm font-bold uppercase tracking-wide sm:normal-case">{label}</p>
                      <p className="md:col-span-2 text-[#2C2C2A] text-[14px] sm:text-[15px] font-medium leading-6">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[22px] sm:text-xl md:text-2xl font-bold text-[#2C2C2A] mb-3 sm:mb-4">Packaging/Payment and Shipment Details</h4>
                <div className="grid md:grid-cols-3 gap-2 md:gap-6 p-3.5 sm:p-4 border border-slate-200 rounded-lg sm:rounded-xl bg-white">
                  <p className="text-[#5F5E5A] text-[11px] sm:text-sm font-bold uppercase tracking-wide sm:normal-case">Payment Mode</p>
                  <ul className="md:col-span-2 flex flex-wrap gap-2">
                    {paymentModes.map((mode) => (
                      <li key={mode} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] sm:text-[13px] text-[#2C2C2A] font-semibold">
                        {mode}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm h-full">
              <h3 className="text-[26px] sm:text-2xl md:text-3xl font-extrabold text-[#2C2C2A] mb-3 sm:mb-4 tracking-tight leading-tight">Why Us?</h3>
              <p className="text-[#5F5E5A] text-[14px] sm:text-[15px] leading-7 sm:leading-relaxed mb-4 sm:mb-6">
                Due to our massive knowledge of this business, we have been able to attain a huge client base in the industry.
              </p>
              <p className="text-[#2C2C2A] text-[14px] sm:text-[15px] font-bold mb-3">
                Factors which differentiate us from others in the market are:
              </p>
              <ul className="list-disc pl-5 text-[#5F5E5A] text-[14px] sm:text-[15px] leading-7 sm:leading-relaxed space-y-1">
                {whyUs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm h-full flex flex-col">
              <h3 className="text-[26px] sm:text-2xl md:text-3xl font-extrabold text-[#2C2C2A] mb-3 sm:mb-4 tracking-tight leading-tight">Infrastructural Set-Up</h3>
              <p className="text-[#5F5E5A] text-[14px] sm:text-[15px] mb-4 sm:mb-6">Office Image</p>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] px-6 sm:px-8 py-2.5 sm:py-3 bg-[#639922] text-white rounded-md font-bold hover:bg-[#5F5E5A] transition w-fit"
              >
                Contact Us
              </Link>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {infraImages.map((image, index) => (
                  <div key={image} className="relative aspect-square sm:aspect-[4/3] rounded-md overflow-hidden border border-slate-200 bg-slate-100">
                    <ResponsiveLightboxImage
                      src={image}
                      alt={`Infrastructure image ${index + 1}`}
                      sources={infraImages}
                      initialIndex={index}
                      imageClassName="object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
