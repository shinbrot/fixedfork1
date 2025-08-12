'use client';

import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg">
                <img src="/logo.png" alt="Logo UD. Jasa Auto Mandiri" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">UD. Jasa Auto Mandiri</h3>
                <p className="text-slate-400 dark:text-slate-500 text-sm">Sewa Forklift Profesional</p>
              </div>
            </div>
            <p className="text-slate-300 dark:text-slate-400 mb-6 leading-relaxed">
              Penyewaan forklift terpercaya sejak 2005 dengan layanan profesional 
              dan operator berpengalaman. Melayani seluruh Indonesia dengan komitmen 
              kualitas dan keselamatan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.open('https://wa.me/6285277829024?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20forklift', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat WhatsApp</span>
              </button>
              <button
                onClick={() => window.open('tel:+6285277829024', '_self')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Telepon</span>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-slate-300 dark:text-slate-400">
              <li>Sewa Forklift Harian</li>
              <li>Sewa Forklift Bulanan</li>
              <li>Operator Berpengalaman</li>
              <li>Maintenance & Support</li>
              <li>Layanan 24/7</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-slate-300 dark:text-slate-400">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">+62 852-7782-9024</span>
              </div>
              <div className="flex items-start space-x-2">
                <MessageCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">WhatsApp: +62 852-7782-9024</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Kawasan Industri Medan<br />Sumatera Utara</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              © {currentYear} UD. Jasa Auto Mandiri. All rights reserved.
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-sm mt-2 md:mt-0">
              Sewa Forklift Profesional | Melayani Seluruh Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}