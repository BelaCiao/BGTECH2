import React from 'react';
import { IconMapPin, IconPhone, IconMail } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-white relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-5">
            
            {/* Info Card (Dark) */}
            <div className="lg:col-span-2 bg-gray-900 p-10 text-white flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                    <p className="text-gray-400 mb-8">Traga seu aparelho para um orçamento sem compromisso. Estacionamento próprio.</p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <IconMapPin className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <p className="font-bold text-white">Endereço</p>
                                <p className="text-gray-400 text-sm">Rua General Bacelar, 123<br/>Centro, Rio Grande - RS</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <IconPhone className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <p className="font-bold text-white">Telefone</p>
                                <p className="text-gray-400 text-sm">(53) 3232-0000</p>
                                <p className="text-gray-400 text-sm">(53) 99999-9999</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <IconMail className="w-6 h-6 text-red-500 mt-1" />
                            <div>
                                <p className="font-bold text-white">E-mail</p>
                                <p className="text-gray-400 text-sm">contato@bgtech.com.br</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 relative h-40 bg-gray-800 rounded-xl overflow-hidden group cursor-pointer">
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                        alt="Mapa" 
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                            Ver no Google Maps
                        </span>
                    </div>
                </div>
            </div>

            {/* Form Card (Light) */}
            <div className="lg:col-span-3 p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada! Entraremos em contato em breve.'); }}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none" required></textarea>
                    </div>
                    <button type="submit" className="w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;