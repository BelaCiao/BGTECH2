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
      // Criando FormData para garantir entrega robusta via multipart/form-data
      const body = new FormData();
      body.append("name", formData.name);
      body.append("phone", formData.phone);
      body.append("email", formData.email);
      body.append("subject", formData.subject);
      body.append("message", formData.message);
      
      // Configurações Especiais do FormSubmit
      body.append("_subject", `Contato Site: ${formData.subject}`);
      body.append("_captcha", "false"); // Evita captcha
      body.append("_template", "table"); // Formata como tabela bonita
      body.append("_replyto", formData.email); // Permite responder direto ao cliente
      body.append("_honey", ""); // Honeypot anti-spam

      const response = await fetch("https://formsubmit.co/maicongn@hotmail.com", {
        method: "POST",
        body: body,
        headers: { 
            "Accept": "application/json"
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        console.error("Erro servidor:", response);
        setStatus('error');
        alert("Ocorreu um erro no servidor de email. Tente pelo WhatsApp.");
      }
    } catch (error) {
      console.error("Erro rede:", error);
      setStatus('error');
      alert("Erro de conexão. Por favor, verifique sua internet.");
    }
  };

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
                                <p className="text-gray-400 text-sm">(53) 99993-5369</p>
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
                
                {status === 'success' ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                            <IconCheck className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800">Mensagem Enviada!</h4>
                        <p className="text-gray-600">Recebemos seu contato e responderemos o mais breve possível.</p>
                        {/* Aviso importante para ativação do FormSubmit */}
                        <div className="bg-blue-50 p-4 rounded-lg text-xs text-blue-800 max-w-xs mx-auto mt-4">
                            <strong>Nota:</strong> Verifique seu e-mail (inclusive Spam) para confirmar o recebimento.
                        </div>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-gray-500 font-medium hover:text-gray-800 underline"
                        >
                            Enviar nova mensagem
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                                    required 
                                    disabled={status === 'sending'}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                                    required 
                                    disabled={status === 'sending'}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                                required 
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                            <input 
                                type="text" 
                                name="subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" 
                                required 
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                            <textarea 
                                name="message" 
                                rows={4} 
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none" 
                                required
                                disabled={status === 'sending'}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'sending' ? (
                                <>
                                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Enviando...
                                </>
                            ) : (
                                <>Enviar Mensagem</>
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