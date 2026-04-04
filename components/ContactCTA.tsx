"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="w-full overflow-hidden bg-[#EAE6DF] py-10 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
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
          <div className="mx-auto mt-6 w-full max-w-3xl space-y-3 sm:mt-7 sm:hidden">
            <Link 
              href="mailto:contact@yourinfo.com"
              className="group inline-flex min-h-[48px] w-full items-center justify-start gap-3 rounded-full border-2 border-[#639922] bg-transparent px-5 text-[13px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <Mail className="h-5 w-5 shrink-0" />
              Email
            </Link>

            <Link 
              href="/contact"
              className="group inline-flex min-h-[48px] w-full items-center justify-start gap-3 rounded-full border-2 border-[#639922] bg-transparent px-5 text-[13px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Message
            </Link>

            <Link 
              href="tel:+111222333444"
              className="inline-flex min-h-[52px] w-full items-center justify-start gap-3 rounded-full border-2 border-[#639922] bg-[#639922] px-5 text-[14px] font-extrabold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:border-[#547f1d] hover:bg-[#547f1d] active:scale-[0.99]"
            >
              <Phone className="h-5 w-5 shrink-0" />
              Call Now
            </Link>
          </div>

          {/* Tablet/Desktop button arrangement */}
          <div className="mx-auto mt-4 hidden w-full max-w-3xl grid-cols-2 gap-4 sm:grid">
            <Link 
              href="mailto:contact@yourinfo.com"
              className="inline-flex min-h-[48px] items-center justify-start gap-3 rounded-full border-2 border-[#639922] bg-transparent px-5 text-[13px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <Mail className="h-5 w-5 shrink-0" />
              Email
            </Link>
            <Link 
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-start gap-3 rounded-full border-2 border-[#639922] bg-transparent px-5 text-[13px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Message
            </Link>
            <div className="col-span-2 flex justify-center pt-1">
              <Link 
                href="tel:+111222333444"
                className="inline-flex min-h-[52px] w-full max-w-[360px] items-center justify-start gap-3 rounded-full border-2 border-[#639922] bg-[#639922] px-5 text-[14px] font-extrabold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:border-[#547f1d] hover:bg-[#547f1d] active:scale-[0.99]"
              >
                <Phone className="h-5 w-5 shrink-0" />
                Call Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}