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
      <div className="bg-black text-white py-2 px-4 text-xs md:text-sm flex justify-between items-center z-50 relative border-b border-gray-800">
        <span className="font-semibold tracking-wide text-gray-400 font-tech">ATENDIMENTO EM RIO GRANDE E REGIÃO</span>
        <div className="flex items-center gap-4">
            <span className="hidden md:block w-px h-3 bg-gray-800"></span>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <IconPhone className="w-3 h-3" />
                <span className="font-tech tracking-wider font-bold text-red-500">Buscamos seu equipamento.</span>
            </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-gray-950/90 border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-900 rounded flex items-center justify-center shadow-lg shadow-red-900/20 transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-300">
                <span className="text-white font-tech font-bold text-2xl skew-x-12 group-hover:skew-x-0">BG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight tracking-tight font-tech">BGTECH</span>
                <span className="text-[10px] font-bold text-red-500 tracking-[0.3em] uppercase">Eletrônica</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Serviços', 'Avaliações', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-gray-300 font-tech font-medium hover:text-red-500 transition-all relative group text-sm uppercase tracking-wider"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full skew-x-12"></span>
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded font-tech font-bold flex items-center gap-2 shadow-lg shadow-green-900/20 hover:shadow-green-500/30 transition-all transform hover:-translate-y-0.5 skew-x-[-10deg]"
              >
                <div className="skew-x-[10deg] flex items-center gap-2">
                    <IconWhatsApp className="w-5 h-5" />
                    <span>WHATSAPP</span>
                </div>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <IconMenu className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {['Serviços', 'Avaliações', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-left py-3 px-2 text-gray-300 font-tech font-medium border-b border-gray-800 active:bg-gray-800 hover:text-red-500"
                >
                  {item}
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                 className="mt-4 bg-green-600 text-white text-center py-3 rounded font-tech font-bold shadow-md"
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