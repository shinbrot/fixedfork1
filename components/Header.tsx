'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-100 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <img src="/logo.png" alt="Logo UD. Jasa Auto Mandiri" className="h-9 w-9" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">UD. Jasa Auto Mandiri</h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">Sewa Forklift Profesional</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
              onClick={() => window.open('https://wa.me/6285277829024?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20forklift', '_blank')}
            >
              Sewa Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200 text-slate-700 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 dark:border-slate-700">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Theme:</span>
                <ThemeToggle />
              </div>
              <Button 
                className="bg-blue-900 hover:bg-blue-800 text-white mt-4 w-full"
                onClick={() => {
                  window.open('https://wa.me/6285277829024?text=Halo,%20saya%20tertarik%20dengan%20layanan%20sewa%20forklift', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Sewa Sekarang
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}