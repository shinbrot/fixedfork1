'use client';

import { useInView } from '@/hooks/use-in-view';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    {
      icon: Award,
      number: '2005',
      label: 'Tahun Berdiri',
    },
    {
      icon: Users,
      number: '500+',
      label: 'Klien Terpercaya',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Layanan Siaga',
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Asuransi Unit',
    },
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {/* Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isInView ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-300">
                Tentang <span className="text-blue-900 dark:text-blue-400">UD. Jasa Auto Mandiri</span>
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                UD. Jasa Auto Mandiri adalah perusahaan penyewaan forklift profesional yang telah 
                berdiri sejak tahun 2005. Kami melayani penyewaan forklift berbagai kapasitas 
                lengkap dengan operator berpengalaman untuk kebutuhan industri di seluruh Indonesia.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Komitmen Kami</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Komitmen kami adalah memberikan layanan cepat, aman, dan handal kepada perusahaan 
                besar maupun skala menengah. Dengan pengalaman lebih dari 19 tahun, kami memahami 
                kebutuhan operasional industri dan siap memberikan solusi terbaik.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Nilai-Nilai Perusahaan</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Profesionalisme dalam setiap layanan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Keselamatan kerja sebagai prioritas utama</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Kepuasan pelanggan adalah kesuksesan kami</span>
                </li>
              </ul>
            </div>
          {/* Misi & Visi - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Misi</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Menyediakan armada forklift yang berkualitas, terawat, dan siap pakai untuk berbagai kebutuhan industri</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Memberikan layanan yang responsif, tepat waktu, dan mengutamakan kepuasan pelanggan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mengembangkan SDM yang profesional dan berkompeten di bidang material handling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Menjaga standar keselamatan kerja yang tinggi dalam setiap layanan</span>
                </li>
              </ul>
            </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Visi</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Menjadi penyedia solusi rental forklift yang terpercaya, cepat, dan efisien, 
                mendukung kelancaran logistik dan operasional pelanggan di seluruh Indonesia.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isInView ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:bg-blue-50 dark:hover:bg-slate-700 group"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="bg-blue-900 dark:bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 dark:group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="h-6 w-6 text-white group-hover:animate-bounce-gentle" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}