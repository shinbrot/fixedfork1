'use client';

import { useInView } from '@/hooks/use-in-view';
import { Truck, Users, MapPin, Clock, Settings } from 'lucide-react';

export default function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Truck,
      title: 'Berbagai Kapasitas',
      description: 'Unit forklift kapasitas 3, 4, 5, 7, 8, 10, 15, 16, dan 20 ton tersedia untuk kebutuhan yang beragam.',
    },
    {
      icon: Users,
      title: 'Operator Berpengalaman',
      description: 'Setiap unit dilengkapi dengan operator yang berpengalaman untuk memastikan kelancaran kerja.',
    },
    {
      icon: Clock,
      title: 'Sewa Fleksibel',
      description: 'Sistem penyewaan harian dan bulanan yang fleksibel sesuai kebutuhan operasional perusahaan Anda.',
    },
    {
      icon: MapPin,
      title: 'Layanan Nasional',
      description: 'Melayani penyewaan forklift di seluruh Indonesia dengan pusat gudang di Kawasan Industri Medan.',
    },
    {
      icon: Settings,
      title: 'Maintenance Terjamin',
      description: 'Unit forklift selalu dalam kondisi prima dengan perawatan berkala dan pengecekan rutin.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-300">
            Layanan <span className="text-blue-900 dark:text-blue-400">Profesional</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Kami menyediakan layanan penyewaan forklift lengkap dengan berbagai pilihan 
            kapasitas dan sistem sewa yang fleksibel untuk memenuhi kebutuhan industri Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 transform group hover:bg-blue-50 dark:hover:bg-slate-600"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="bg-blue-900 dark:bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-800 dark:group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-6 w-6 text-white group-hover:animate-bounce-gentle" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}