import Link from "next/link";
import { Globe, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Super Solar Fencing</h3>
            <p className="text-sm text-slate-400">
              Trusted experts in premium solar fencing solutions for agriculture, industrial, and residential sectors.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-white transition"><Globe className="w-5 h-5"/></Link>
              <Link href="#" className="hover:text-white transition"><Mail className="w-5 h-5"/></Link>
              <Link href="#" className="hover:text-white transition"><MessageCircle className="w-5 h-5"/></Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-emerald-400 transition">Products</Link></li>
              <li><Link href="/works" className="hover:text-emerald-400 transition">Our Works</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-emerald-400 transition">Energizers</Link></li>
              <li><Link href="/products" className="hover:text-emerald-400 transition">Insulators & Wires</Link></li>
              <li><Link href="/products" className="hover:text-emerald-400 transition">Solar Panels</Link></li>
              <li><Link href="/products" className="hover:text-emerald-400 transition">Complete Kits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 123 Fencing St, Industrial Hub, TX</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@supersolarfencing.com</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Super Solar Fencing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
