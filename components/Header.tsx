import React, { useState } from 'react';
import { IconPhone, IconWhatsApp, IconMenu } from './Icons';
import { WHATSAPP_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-xs md:text-sm flex justify-between items-center z-50 relative">
        <span className="font-semibold tracking-wide text-gray-300">ATENDIMENTO EM RIO GRANDE E REGIÃO</span>
        <div className="flex items-center gap-4">
            <span className="hidden md:block w-px h-3 bg-gray-700"></span>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <IconPhone className="w-3 h-3" />
                <span>(53) 99999-9999</span>
            </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg transform -skew-x-6">
                <span className="text-white font-black italic text-2xl skew-x-6">BG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">BGTECH</span>
                <span className="text-xs font-bold text-red-600 tracking-[0.2em]">ELETRÔNICA</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Serviços', 'Avaliações', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-gray-600 font-medium hover:text-red-600 transition-all relative group text-sm uppercase tracking-wide"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-105"
              >
                <IconWhatsApp className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <IconMenu className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {['Serviços', 'Avaliações', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-left py-3 px-2 text-gray-700 font-medium border-b border-gray-50 active:bg-gray-50"
                >
                  {item}
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                 className="mt-4 bg-green-500 text-white text-center py-3 rounded-xl font-bold shadow-md"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;