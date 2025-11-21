import React, { useState } from 'react';
import { IconPC, IconLaptop, IconTV, IconMicrowave, IconAudio, IconWhatsApp, IconCheck, IconMail } from './Icons';
import { BRANDS_MAP, DEFECTS_MAP, WHATSAPP_NUMBER } from '../constants';
import { DeviceType, WizardData } from '../types';

const STEPS = 5;

const Hero: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>({
    deviceType: null,
    brand: '',
    defect: '',
    clientName: '',
    clientPhone: '',
    details: ''
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, STEPS));
  // const handleBack = () => setStep((prev) => Math.max(prev - 1, 1)); // Optional back button logic

  const updateData = (field: keyof WizardData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (field === 'deviceType' || field === 'brand' || field === 'defect') {
      handleNext();
    }
  };

  const getWhatsAppLink = () => {
    const text = `*ORÇAMENTO VIA SITE BGTECH*%0A%0A*Cliente:* ${data.clientName}%0A*Telefone:* ${data.clientPhone}%0A*Aparelho:* ${data.deviceType}%0A*Marca:* ${data.brand}%0A*Defeito:* ${data.defect}%0A*Detalhes:* ${data.details}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const getMailToLink = () => {
     const subject = `Orçamento BGTECH - ${data.deviceType}`;
     const body = `Nome: ${data.clientName}%0D%0ATelefone: ${data.clientPhone}%0D%0AAparelho: ${data.deviceType}%0D%0AMarca: ${data.brand}%0D%0ADefeito: ${data.defect}%0D%0ADetalhes: ${data.details}`;
     return `mailto:contato@bgtech.com.br?subject=${subject}&body=${body}`;
  }

  return (
    <section className="relative w-full min-h-[80vh] bg-gray-900 flex items-center overflow-hidden py-12 md:py-0">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <img
            src="https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1920&auto=format&fit=crop"
            alt="Background Tech"
            className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-gray-900/80"></div>
        {/* Red Blob Animation */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-blob mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Aberto Agora
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            ESPECIALISTAS EM<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              ELETRÔNICA GAMER
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Conserto de PC Gamer, Notebooks e TVs com garantia e procedência. Mais de 10 anos recuperando seus equipamentos.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
             {['Orçamento Gratuito', 'Garantia de 90 dias', 'Técnicos Certificados'].map(tag => (
                 <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700 shadow-sm">
                     {tag}
                 </span>
             ))}
          </div>
        </div>

        {/* Right Content: Wizard Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden w-full max-w-md mx-auto lg:ml-auto border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Orçamento Expresso</h3>
            <div className="text-xs font-medium text-gray-500">Passo {step} de {STEPS}</div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200">
            <div className="h-full bg-red-600 transition-all duration-500 ease-out" style={{ width: `${(step / STEPS) * 100}%` }}></div>
          </div>

          <div className="p-6 md:p-8 min-h-[350px] flex flex-col justify-center">
            {/* STEP 1: Device Type */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Qual é o aparelho?</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { type: DeviceType.PC, icon: <IconPC className="w-6 h-6" /> },
                    { type: DeviceType.NOTEBOOK, icon: <IconLaptop className="w-6 h-6" /> },
                    { type: DeviceType.TV, icon: <IconTV className="w-6 h-6" /> },
                    { type: DeviceType.MICROONDAS, icon: <IconMicrowave className="w-6 h-6" /> },
                    { type: DeviceType.AUDIO, icon: <IconAudio className="w-6 h-6" /> },
                    { type: DeviceType.OUTROS, icon: <span className="text-lg font-bold">...</span> }
                  ].map((item) => (
                    <button
                      key={item.type}
                      onClick={() => updateData('deviceType', item.type)}
                      className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all hover:shadow-md
                        ${item.type === DeviceType.PC || item.type === DeviceType.NOTEBOOK 
                            ? 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100 hover:border-red-300' 
                            : 'border-gray-200 text-gray-600 hover:border-red-200 hover:text-red-600'}`}
                    >
                      {item.icon}
                      <span className="text-xs font-bold">{item.type.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Brand */}
            {step === 2 && data.deviceType && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Qual a marca?</h4>
                <div className="grid grid-cols-2 gap-3">
                  {BRANDS_MAP[data.deviceType].map((brand) => (
                    <button
                      key={brand}
                      onClick={() => updateData('brand', brand)}
                      className="p-3 rounded-lg border border-gray-200 text-gray-700 hover:border-red-500 hover:bg-red-50 hover:text-red-700 transition-all text-sm font-medium text-left"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-gray-600 mt-4 block mx-auto">Voltar</button>
              </div>
            )}

            {/* STEP 3: Defect */}
            {step === 3 && data.deviceType && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Qual o defeito principal?</h4>
                <div className="space-y-2">
                  {DEFECTS_MAP[data.deviceType].map((defect) => (
                    <button
                      key={defect}
                      onClick={() => updateData('defect', defect)}
                      className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 hover:border-red-500 hover:bg-red-50 hover:text-red-700 transition-all text-sm font-medium text-left"
                    >
                      {defect}
                    </button>
                  ))}
                </div>
                 <button onClick={() => setStep(2)} className="text-sm text-gray-400 hover:text-gray-600 mt-4 block mx-auto">Voltar</button>
              </div>
            )}

            {/* STEP 4: Personal Data */}
            {step === 4 && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Seus dados de contato</h4>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  value={data.clientName}
                  onChange={(e) => setData({...data, clientName: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  value={data.clientPhone}
                  onChange={(e) => setData({...data, clientPhone: e.target.value})}
                />
                <textarea
                   placeholder="Detalhes adicionais (opcional)..."
                   className="w-full p-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm h-20 resize-none"
                   value={data.details}
                   onChange={(e) => setData({...data, details: e.target.value})}
                />
                <button
                    disabled={!data.clientName || !data.clientPhone}
                    onClick={handleNext}
                    className="w-full py-3 bg-red-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                >
                    Ver Resumo
                </button>
                 <button onClick={() => setStep(3)} className="text-sm text-gray-400 hover:text-gray-600 mt-2 block mx-auto">Voltar</button>
              </div>
            )}

            {/* STEP 5: Success */}
            {step === 5 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <IconCheck className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-2xl font-black text-gray-800">Tudo Pronto!</h4>
                    <p className="text-gray-500 mt-2">Escolha como deseja enviar sua solicitação de orçamento.</p>
                </div>
                
                <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-green-600 hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 group"
                >
                    <IconWhatsApp className="w-6 h-6 group-hover:animate-bounce" />
                    Enviar via WhatsApp
                </a>

                <a
                    href={getMailToLink()}
                    className="block w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                    <IconMail className="w-5 h-5" />
                    Enviar via E-mail
                </a>
                <button onClick={() => setStep(4)} className="text-sm text-gray-400 hover:text-gray-600 mt-4">Editar dados</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;