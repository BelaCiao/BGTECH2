import React from 'react';
import { SERVICES } from '../constants';
import { IconCheck } from './Icons';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 relative inline-block">
            NOSSOS SERVIÇOS
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-red-600 rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Soluções completas para seus equipamentos com tecnologia de ponta.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white font-bold text-xl">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 h-20">{service.description}</p>
                <button className="text-red-600 font-bold text-sm uppercase tracking-wider hover:text-red-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Orçar Agora <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Banner */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 shadow-2xl flex flex-wrap justify-between items-center gap-6 md:gap-0">
            {[
                'Orçamento em 24h', 
                'Laboratório Próprio', 
                'Garantia de Serviço', 
                'Parcelamento em 12x'
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                    <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center text-red-500">
                        <IconCheck className="w-6 h-6" />
                    </div>
                    <span className="text-white font-semibold">{item}</span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Services;