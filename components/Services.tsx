import React from 'react';
import { SERVICES } from '../constants';
import { IconCheck, IconGlobe, IconCpu, IconRobot } from './Icons';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white relative inline-block font-tech tracking-wider">
            NOSSOS SERVIÇOS
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-red-600 rounded-full shadow-[0_0_10px_red]"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Soluções de hardware avançadas com garantia e qualidade técnica.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-gray-950 rounded border border-gray-800 overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:border-red-900 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white font-bold text-lg font-tech uppercase tracking-wide drop-shadow-md">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-4 h-20 border-b border-gray-800/50 pb-4">{service.description}</p>
                <button className="text-red-500 font-bold text-sm uppercase tracking-wider hover:text-red-400 flex items-center gap-1 group-hover:gap-2 transition-all font-tech">
                    Orçar Agora <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BGTECH DIGITAL - Banner Promocional */}
        <div className="mt-16 relative rounded-xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-gray-950 via-[#0a1020] to-blue-900/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12 items-center relative z-10">
            <div className="md:col-span-2 space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/30 border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-widest font-tech">
                  <IconCpu className="w-3 h-3" />
                  BGTECH DIGITAL SOLUTIONS
               </div>
               <h3 className="text-3xl md:text-4xl font-black text-white font-tech leading-tight">
                  SUA EMPRESA NO FUTURO COM <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    LIA DIGITAL & SITES DE ALTA PERFORMANCE
                  </span>
               </h3>
               <p className="text-gray-300 text-lg leading-relaxed">
                  Não consertamos apenas hardware. Criamos soluções digitais. Conheça a 
                  <span className="text-white font-bold"> Lia Digital</span>, a secretária com Inteligência Artificial que atende seus clientes 24h, e desenvolvemos sites institucionais que vendem por você.
               </p>
               
               <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded border border-gray-800">
                     <IconRobot className="w-5 h-5 text-blue-400" />
                     <span className="text-sm font-medium">Chatbots com IA</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded border border-gray-800">
                     <IconGlobe className="w-5 h-5 text-cyan-400" />
                     <span className="text-sm font-medium">Criação de Sites</span>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-col justify-center items-center md:items-end space-y-4 border-t md:border-t-0 md:border-l border-gray-800 pt-8 md:pt-0 md:pl-8">
               <p className="text-gray-400 text-sm text-center md:text-right">
                  Quer um site moderno ou uma IA para seu negócio?
               </p>
               <a 
                  href="https://bgtechdigital2.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded overflow-hidden shadow-lg shadow-blue-900/40 transition-all font-tech tracking-wide text-center w-full md:w-auto"
               >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                     ACESSAR BGTECH DIGITAL
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                     </svg>
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 ease-out"></div>
               </a>
               <p className="text-xs text-blue-500/70 font-mono text-center md:text-right uppercase">
                  *Tecnologia exclusiva BGTECH
               </p>
            </div>
          </div>
        </div>

        {/* Amenities Banner */}
        <div className="mt-16 bg-gray-950 border border-gray-800 rounded p-8 shadow-2xl flex flex-wrap justify-between items-center gap-6 md:gap-0">
            {[
                'Orçamento em 24h', 
                'Laboratório Próprio', 
                'Garantia de Serviço', 
                'Parcelamento em 12x'
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                    <div className="w-10 h-10 bg-red-900/20 border border-red-900/50 rounded flex items-center justify-center text-red-500 shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                        <IconCheck className="w-6 h-6" />
                    </div>
                    <span className="text-gray-200 font-semibold font-tech tracking-wide">{item}</span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Services;