
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-8 text-center border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
             <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold italic text-sm">BG</span>
                  </div>
                  <span className="text-white font-bold">BGTECH ELETRÔNICA</span>
             </div>
             <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="text-xs text-gray-600 pt-4 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-2">
            <span>CNPJ: 00.000.000/0001-00 | Rua General Bacelar - Centro, Rio Grande/RS</span>
            <span className="font-tech uppercase tracking-wide text-gray-700 text-[10px]">Desenvolvido por Maicon G Nascimento</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
