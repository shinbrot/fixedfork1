'use client';

import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight transform hover:scale-105 transition-transform duration-300">
                Sewa Forklift
                <span className="text-blue-900 dark:text-blue-400 block">Profesional</span>
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Penyewaan forklift terpercaya sejak 2005 dengan operator berpengalaman. 
                Melayani seluruh Indonesia dengan berbagai kapasitas 3-20 ton.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 animate-bounce-gentle" />
                <span className="text-slate-700 dark:text-slate-300">Sudah termasuk operator</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 animate-bounce-gentle" style={{ animationDelay: '0.2s' }} />
                <span className="text-slate-700 dark:text-slate-300">Sewa harian & bulanan</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 animate-bounce-gentle" style={{ animationDelay: '0.4s' }} />
                <span className="text-slate-700 dark:text-slate-300">Layanan seluruh Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 animate-bounce-gentle" style={{ animationDelay: '0.6s' }} />
                <span className="text-slate-700 dark:text-slate-300">Unit berkualitas tinggi</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <Button 
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                onClick={() => window.open('https://wa.me/6285277829024?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20forklift', '_blank')}
              >
                Sewa Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                onClick={() => window.open('https://wa.me/6285277829024?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20forklift', '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Chat WhatsApp
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right">
            <div className="bg-blue-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform opacity-0 animate-scale-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <img
                src="https://files.catbox.moe/h2v27l.jpg"
                alt="Forklift di gudang industri"
                className="w-full h-96 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
              <div
  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform animate-bounce-gentle"
  style={{
    animationDelay: '1.5s',
    animationDuration: '3s', // default bounce = 1s
    animationTimingFunction: 'ease-in-out',
  }}
>

                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">19+</div>
                  <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}