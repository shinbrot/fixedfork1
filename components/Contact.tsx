'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = () => {
    const message = `Halo, saya ${formData.name} dari ${formData.company}. ${formData.message}. Nomor HP: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/6285277829024?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 852-7782-9024',
      action: () => window.open('tel:+6285277829024', '_self')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+62 852-7782-9024',
      action: () => window.open('https://wa.me/6285277829024', '_blank')
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      content: 'Kawasan Industri Medan, Sumatera Utara',
      action: null
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 08:00 - 17:00 WIB',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-300">
            Hubungi <span className="text-blue-900 dark:text-blue-400">Kami</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Siap melayani kebutuhan penyewaan forklift Anda. Hubungi kami sekarang 
            untuk konsultasi dan penawaran terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-1 space-y-6 transition-all duration-1000 delay-200 ${isInView ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-slate-700 hover:shadow-md hover:scale-105 transition-all duration-300 transform group ${
                      info.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={info.action || undefined}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="bg-blue-900 dark:bg-blue-600 p-2 rounded-lg flex-shrink-0 group-hover:bg-blue-800 dark:group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                      <info.icon className="h-5 w-5 text-white group-hover:animate-bounce-gentle" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">{info.title}</h4>
                      <p className="text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="h-6 w-6 text-green-600 animate-bounce-gentle" />
                <h4 className="font-semibold text-green-800 dark:text-green-300">Chat Langsung</h4>
              </div>
              <p className="text-green-700 dark:text-green-200 mb-4 text-sm">
                Butuh respon cepat? Chat langsung via WhatsApp untuk konsultasi dan penawaran.
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300 transform"
                onClick={() => window.open('https://wa.me/6285277829024?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20forklift', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isInView ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-500">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Kirim Pesan</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      className="w-full hover:border-blue-300 focus:border-blue-500 transition-colors duration-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nomor Telepon *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 081234567890"
                      className="w-full hover:border-blue-300 focus:border-blue-500 transition-colors duration-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Nama Perusahaan
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama perusahaan"
                    className="w-full hover:border-blue-300 focus:border-blue-500 transition-colors duration-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Pesan & Kebutuhan *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Jelaskan kebutuhan forklift Anda (kapasitas, durasi sewa, lokasi, dll)"
                    rows={4}
                    className="w-full hover:border-blue-300 focus:border-blue-500 transition-colors duration-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
                    required
                  />
                </div>

                <Button 
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold hover:scale-105 transition-all duration-300 transform hover:shadow-lg"
                  onClick={handleWhatsAppSubmit}
                  disabled={!formData.name || !formData.phone || !formData.message}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Kirim via WhatsApp
                </Button>

                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  Dengan mengklik tombol di atas, pesan akan dikirim langsung ke WhatsApp kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}