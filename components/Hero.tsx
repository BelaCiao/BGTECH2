import React, { useState } from 'react';
import { IconPC, IconLaptop, IconTV, IconMicrowave, IconAudio, IconWhatsApp, IconCheck, IconMail } from './Icons';
import { BRANDS_MAP, DEFECTS_MAP, WHATSAPP_NUMBER } from '../constants';
import { DeviceType, WizardData } from '../types';
import ParticleBackground from './ParticleBackground';

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
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleNext = () => setStep((prev) => Math.min(prev + 1, STEPS));

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

  const handleSendEmail = async () => {
    setEmailStatus('sending');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/maicongn@hotmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `Novo Orçamento: ${data.deviceType} - ${data.clientName}`,
            _template: "table",
            _captcha: "false", 
            "Nome do Cliente": data.clientName,
            "Telefone": data.clientPhone,
            "Aparelho": data.deviceType || "Não informado",
            "Marca": data.brand,
            "Defeito": data.defect,
            "Detalhes": data.details || "Nenhum detalhe extra",
            "Origem": "Wizard de Orçamento"
        })
      });

      const result = await response.json();

      if (response.ok) {
        setEmailStatus('success');
      } else {
        alert("Erro ao enviar. Tente pelo WhatsApp.");
        setEmailStatus('error');
      }
    } catch (error) {
      alert("Erro de conexão. Tente pelo WhatsApp.");
      setEmailStatus('error');
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] bg-gray-950 flex items-center overflow-hidden py-12 md:py-0 border-b border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <img
            src="https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1920&auto=format&fit=crop"
            alt="Background Tech"
            className="w-full h-full object-cover opacity-5 mix-blend-overlay"
        />
        {/* Gradiente inspirado nos flyers (Azul escuro/Preto/Vermelho) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#050b14] to-red-950/30"></div>
        
        {/* Particle Component with Brand Colors */}
        <ParticleBackground 
          particleColor="rgba(220, 38, 38, 0.4)"  // Red particles
          lineColor="rgba(59, 130, 246, 0.2)"     // Blue lines (circuit style)
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest font-tech">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
            Assistência Técnica Especializada
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] font-tech">
            NÃO COMPRE OUTRO.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              NÓS SALVAMOS SEU PC E NOTEBOOK
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Manutenção avançada, troca de telas e formatação. A solução definitiva para sua máquina voltar a voar com desempenho máximo.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
             {['Orçamento Gratuito', 'Garantia de 90 dias', 'Laboratório Próprio'].map(tag => (
                 <span key={tag} className="px-4 py-2 bg-gray-900/80 text-gray-300 text-sm rounded border border-gray-700/50 shadow-lg backdrop-blur-sm font-tech uppercase tracking-wide">
                     {tag}
                 </span>
             ))}
          </div>
        </div>

        {/* Right Content: Wizard Card */}
        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-md mx-auto lg:ml-auto border border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gray-950 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
            <h3 className="font-bold text-white font-tech tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                ORÇAMENTO ONLINE
            </h3>
            <div className="text-xs font-medium text-gray-500 font-mono">PASSO {step}/{STEPS}</div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-800">
            <div className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(220,38,38,0.8)]" style={{ width: `${(step / STEPS) * 100}%` }}></div>
          </div>

          <div className="p-6 md:p-8 min-h-[350px] flex flex-col justify-center">
            {/* STEP 1: Device Type */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white font-tech mb-4">Selecione o Equipamento</h4>
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
                      className={`p-4 rounded border flex flex-col items-center gap-2 transition-all duration-300
                        ${item.type === DeviceType.PC || item.type === DeviceType.NOTEBOOK 
                            ? 'border-red-600/50 bg-red-900/10 text-red-400 hover:bg-red-900/20 hover:border-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.2)]' 
                            : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:text-gray-200 hover:bg-gray-800'}`}
                    >
                      {item.icon}
                      <span className="text-xs font-bold font-tech uppercase">{item.type.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Brand */}
            {step === 2 && data.deviceType && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white font-tech mb-4">Selecione a Marca</h4>
                <div className="grid grid-cols-2 gap-3">
                  {BRANDS_MAP[data.deviceType].map((brand) => (
                    <button
                      key={brand}
                      onClick={() => updateData('brand', brand)}
                      className="p-3 rounded border border-gray-700 bg-gray-800/50 text-gray-300 hover:border-red-500 hover:bg-red-900/20 hover:text-red-400 transition-all text-sm font-medium text-left font-tech"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-300 mt-4 block mx-auto font-tech uppercase tracking-wide">Voltar</button>
              </div>
            )}

            {/* STEP 3: Defect */}
            {step === 3 && data.deviceType && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white font-tech mb-4">Qual o Problema?</h4>
                <div className="space-y-2">
                  {DEFECTS_MAP[data.deviceType].map((defect) => (
                    <button
                      key={defect}
                      onClick={() => updateData('defect', defect)}
                      className="w-full p-3 rounded border border-gray-700 bg-gray-800/50 text-gray-300 hover:border-red-500 hover:bg-red-900/20 hover:text-red-400 transition-all text-sm font-medium text-left font-tech"
                    >
                      {defect}
                    </button>
                  ))}
                </div>
                 <button onClick={() => setStep(2)} className="text-sm text-gray-500 hover:text-gray-300 mt-4 block mx-auto font-tech uppercase tracking-wide">Voltar</button>
              </div>
            )}

            {/* STEP 4: Personal Data */}
            {step === 4 && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white font-tech mb-2">Seus Dados</h4>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-gray-500"
                  value={data.clientName}
                  onChange={(e) => setData({...data, clientName: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder-gray-500"
                  value={data.clientPhone}
                  onChange={(e) => setData({...data, clientPhone: e.target.value})}
                />
                <textarea
                   placeholder="Detalhes adicionais (opcional)..."
                   className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm h-20 resize-none placeholder-gray-500"
                   value={data.details}
                   onChange={(e) => setData({...data, details: e.target.value})}
                />
                <button
                    disabled={!data.clientName || !data.clientPhone}
                    onClick={handleNext}
                    className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded font-bold text-lg shadow-lg hover:from-red-500 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-tech tracking-wide border border-red-500/30"
                >
                    VER RESUMO
                </button>
                 <button onClick={() => setStep(3)} className="text-sm text-gray-500 hover:text-gray-300 mt-2 block mx-auto font-tech uppercase tracking-wide">Voltar</button>
              </div>
            )}

            {/* STEP 5: Success */}
            {step === 5 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <IconCheck className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-white font-tech uppercase">Solicitação Pronta!</h4>
                    <p className="text-gray-400 mt-2 text-sm">Escolha como enviar para nossa equipe.</p>
                </div>
                
                <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-4 bg-green-600 text-white rounded font-bold text-lg shadow-lg hover:bg-green-500 hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 group font-tech tracking-wide border border-green-500/30"
                >
                    <IconWhatsApp className="w-6 h-6 group-hover:animate-bounce" />
                    ENVIAR VIA WHATSAPP
                </a>

                {emailStatus === 'success' ? (
                    <div className="w-full py-4 bg-blue-900/30 text-blue-300 rounded border border-blue-500/30 text-sm animate-fade-in-up">
                        <span className="block text-lg mb-1 font-tech font-bold">✓ Enviado!</span>
                        <span className="font-normal">Verifique seu email (e spam) para confirmação.</span>
                    </div>
                ) : (
                    <button
                        onClick={handleSendEmail}
                        disabled={emailStatus === 'sending'}
                        className="w-full py-3 bg-gray-800 text-gray-300 rounded font-bold hover:bg-gray-700 hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 font-tech border border-gray-700"
                    >
                        {emailStatus === 'sending' ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                ENVIANDO...
                            </span>
                        ) : (
                            <>
                                <IconMail className="w-5 h-5" />
                                ENVIAR POR E-MAIL
                            </>
                        )}
                    </button>
                )}
                
                <button onClick={() => setStep(4)} className="text-sm text-gray-500 hover:text-gray-300 mt-4 font-tech uppercase tracking-wide">Editar dados</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;