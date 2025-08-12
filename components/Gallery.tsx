'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const images: GalleryImage[] = [
    {
      src: 'https://files.catbox.moe/h2v27l.jpg',
      alt: 'Forklift Beroperasi',
      title: 'Forklift',
      description: 'Unit forklift untuk kebutuhan industri berat'
    },
    {
      src: 'https://files.catbox.moe/fmzkfu.jpg',
      alt: 'Forklift Toyota 7 ton',
      title: 'Forklift Toyota 7 Ton',
      description: 'Forklift Toyota yang handal untuk operasional gudang dan pabrik'
    },
    {
      src: 'https://files.catbox.moe/3gigr5.jpg',
      alt: 'Area gudang industri',
      title: 'Operasional Gudang',
      description: 'Forklift dalam operasional sehari-hari di area gudang industri'
    },
    {
      src: 'https://files.catbox.moe/mmcmcd.jpg',
      alt: 'Forklift Komatsu ',
      title: 'Forklift Komatsu',
      description: 'Unit forklift Komatsu untuk kebutuhan kapasitas besar'
    },
    {
      src: 'https://files.catbox.moe/qcwpqg.jpg',
      alt: 'Fotklift Toyota',
      title: 'Forklift Toyota',
      description: 'Forklift toyota dengan kapasitan yang lebih kecil'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-300">
            Galeri <span className="text-blue-900 dark:text-blue-400">Forklift</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Lihat koleksi lengkap unit forklift berkualitas tinggi yang siap melayani 
            kebutuhan operasional industri Anda.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 transform"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                  <p className="text-sm opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in-up">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 transform"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg animate-scale-in"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}