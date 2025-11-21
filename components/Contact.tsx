import React, { useState } from 'react';
import { IconMapPin, IconPhone, IconMail, IconCheck } from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/maicongn@hotmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `Contato Site: ${formData.subject}`,
            _captcha: "false",
            _template: "table",
            _replyto: formData.email,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        alert("Ocorreu um erro no servidor de email.");
      }
    } catch (error) {
      setStatus('error');
      alert("Erro de conexão.");
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-900 rounded border border-gray-800 shadow-2xl overflow-hidden grid lg:grid-cols-5">
            
            {/* Info Card (Darker) */}
            <div className="lg:col-span-2 bg-black p-10 text-white flex flex-col justify-between border-r border-gray-800">
                <div>
                    <h3 className="text-2xl font-bold mb-6 font-tech uppercase tracking-wide">Onde Estamos</h3>
                    <p className="text-gray-400 mb-8">Traga seu aparelho para um orçamento sem compromisso. Estacionamento próprio.</p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group">
                            <IconMapPin className="w-6 h-6 text-red-600 group-hover:text-red-500 transition-colors mt-1" />
                            <div>
                                <p className="font-bold text-white font-tech tracking-wide">Endereço</p>
                                <p className="text-gray-500 text-sm">Rua Almirante Teixeira, 566<br/>São João, Rio Grande - RS</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group">
                            <IconPhone className="w-6 h-6 text-red-600 group-hover:text-red-500 transition-colors mt-1" />
                            <div>
                                <p className="font-bold text-white font-tech tracking-wide">Telefone</p>
                                <p className="text-gray-500 text-sm">(53) 99187-2933</p>
                                <p className="text-gray-500 text-sm">(53) 99933-5369</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group">
                            <IconMail className="w-6 h-6 text-red-600 group-hover:text-red-500 transition-colors mt-1" />
                            <div>
                                <p className="font-bold text-white font-tech tracking-wide">E-mail</p>
                                <p className="text-gray-500 text-sm">maicongn@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 relative h-40 bg-gray-800 rounded overflow-hidden group cursor-pointer border border-gray-700">
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                        alt="Mapa" 
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-4 py-2 rounded text-xs font-bold shadow-lg font-tech uppercase tracking-wide group-hover:bg-red-500 transition-colors">
                            Ver no Mapa
                        </span>
                    </div>
                </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-3 p-10">
                <h3 className="text-2xl font-bold text-white mb-6 font-tech uppercase tracking-wide">Envie uma mensagem</h3>
                
                {status === 'success' ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-900/30 border border-green-600/50 rounded-full flex items-center justify-center text-green-500 mb-4">
                            <IconCheck className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold text-white font-tech">MENSAGEM ENVIADA!</h4>
                        <p className="text-gray-400">Recebemos seu contato e responderemos o mais breve possível.</p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-gray-500 font-medium hover:text-gray-300 underline"
                        >
                            Enviar nova mensagem
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded bg-gray-950 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder-gray-600" 
                                    required 
                                    disabled={status === 'sending'}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Telefone</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded bg-gray-950 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder-gray-600" 
                                    required 
                                    disabled={status === 'sending'}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded bg-gray-950 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder-gray-600" 
                                required 
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Assunto</label>
                            <input 
                                type="text" 
                                name="subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded bg-gray-950 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder-gray-600" 
                                required 
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                            <textarea 
                                name="message" 
                                rows={4} 
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded bg-gray-950 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none placeholder-gray-600" 
                                required
                                disabled={status === 'sending'}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded shadow-lg shadow-red-900/30 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-tech uppercase tracking-wide border border-red-500/50"
                        >
                            {status === 'sending' ? (
                                <>
                                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    ENVIANDO...
                                </>
                            ) : (
                                <>ENVIAR MENSAGEM</>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;