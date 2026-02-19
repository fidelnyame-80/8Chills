import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-white/10">
      <div className="place-self-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-3xl text-white font-bold mb-4">8Chills</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium liquor delivery in Accra. <br />
            Authentic. Fast. Ice Cold.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Shop All</li>
            <li className="hover:text-white transition cursor-pointer">New Arrivals</li>
            <li className="hover:text-white transition cursor-pointer">Best Sellers</li>
            <li className="hover:text-white transition cursor-pointer">Gift Sets</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" /> +233 24 976 2228
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" /> hello@8chills.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4" /> Adenta, Accra
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-6 text-2xl">
            <Instagram className="hover:text-amber-500 transition cursor-pointer" />
            <Facebook className="hover:text-amber-500 transition cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-white/10">
        (c) 2025 8Chills Liquor Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
