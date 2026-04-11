"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="w-full overflow-hidden bg-[#EAE6DF] py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Mobile-first content stack with center alignment */}
          <div className="text-center">
            <h2 className="mb-3 text-[28px] font-semibold tracking-tight text-[#2C2C2A] sm:text-[34px] md:text-[38px]">
              Get a <span className="font-extrabold text-[#2C2C2A]">Free Quote</span> or get in <span className="font-extrabold text-[#2C2C2A]">Touch!</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              We have many options to reach us.
            </p>
          </div>

          {/* Buttons: mobile = stacked, tablet/desktop = Email+Message side by side, Call Now below */}
          <div className="mx-auto mt-6 flex w-full max-w-sm flex-col space-y-3 sm:mt-7 sm:hidden">
            <Link
              href="mailto:supersolarfenc@gmail.com"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <Mail className="h-4 w-4 shrink-0" />
              Email
            </Link>

            <Link
              href="https://wa.me/918760285985"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 0C5.394 0 .005 5.389.005 12.025c0 2.123.551 4.195 1.6 6.012L.012 24l6.111-1.6c1.764.965 3.755 1.474 5.908 1.474 6.634 0 12.025-5.389 12.025-12.025S18.667 0 12.031 0zm3.385 17.387c-.496.068-1.572.336-3.874-1.282-1.92-1.35-3.32-3.414-4.52-5.7-.633-1.21-.976-2.585-.562-3.693.307-.82 1.055-1.22 1.66-1.294.3-.035.65.04.912.228.293.208.536.726.804 1.345.385.882.52 1.155.674 1.408.204.336.195.66-.02 1.026-.264.45-.632.742-1.07 1.077-.168.128-.352.28-.5.485-.18.252-.405.518-.088 1.092.348.63 1.05 1.545 1.706 2.148.868.803 1.83 1.418 2.57 1.758.398.182.72.19 1.055-.008.388-.23.633-.51 1.008-1.022.38-.52.748-.68 1.144-.576.386.108 2.455 1.173 2.87 1.385.412.213.682.343.782.532.1.188.1.99-.24 2.115-.178.59-.806 1.485-1.8 1.67-.144.027-.308.064-.475.084z"/></svg>
              Message
            </Link>

            <Link
              href="tel:+918760285985"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-[#639922] px-4 text-[13px] font-extrabold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:border-[#547f1d] hover:bg-[#547f1d] active:scale-[0.99]"
            >
              <Phone className="h-4 w-4 shrink-0" />
              Call Now
            </Link>
          </div>

          {/* Tablet/Desktop button arrangement */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl grid-cols-2 gap-4 sm:grid">
            <div className="col-span-2 flex justify-center gap-4">
              <Link
                href="mailto:supersolarfenc@gmail.com"
                className="inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
              >
                <Mail className="h-4 w-4 shrink-0" />
                Email
              </Link>
              <Link
                href="https://wa.me/918760285985"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 0C5.394 0 .005 5.389.005 12.025c0 2.123.551 4.195 1.6 6.012L.012 24l6.111-1.6c1.764.965 3.755 1.474 5.908 1.474 6.634 0 12.025-5.389 12.025-12.025S18.667 0 12.031 0zm3.385 17.387c-.496.068-1.572.336-3.874-1.282-1.92-1.35-3.32-3.414-4.52-5.7-.633-1.21-.976-2.585-.562-3.693.307-.82 1.055-1.22 1.66-1.294.3-.035.65.04.912.228.293.208.536.726.804 1.345.385.882.52 1.155.674 1.408.204.336.195.66-.02 1.026-.264.45-.632.742-1.07 1.077-.168.128-.352.28-.5.485-.18.252-.405.518-.088 1.092.348.63 1.05 1.545 1.706 2.148.868.803 1.83 1.418 2.57 1.758.398.182.72.19 1.055-.008.388-.23.633-.51 1.008-1.022.38-.52.748-.68 1.144-.576.386.108 2.455 1.173 2.87 1.385.412.213.682.343.782.532.1.188.1.99-.24 2.115-.178.59-.806 1.485-1.8 1.67-.144.027-.308.064-.475.084z"/></svg>
                Message
              </Link>
            </div>
            <div className="col-span-2 flex justify-center pt-1">
              <Link
                href="tel:+918760285985"
                className="inline-flex min-h-[46px] w-full max-w-[280px] items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-[#639922] px-4 text-[13px] font-extrabold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:border-[#547f1d] hover:bg-[#547f1d] active:scale-[0.99]"
              >
                <Phone className="h-4 w-4 shrink-0" />
                Call Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
