import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { REVIEW_STATS } from '../constants';
import { IconStar } from './Icons';

const Reviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-gray-950 relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Testimonials */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 font-tech uppercase tracking-wide">
              O QUE DIZEM<br />
              <span className="text-red-600">NOSSOS CLIENTES</span>
            </h2>
            <div className="space-y-6">
                {[
                    { name: "Carlos Eduardo", text: "Salvaram meu PC Gamer! O atendimento foi excelente e o preço justo. Recomendo demais.", type: "PC Gamer" },
                    { name: "Ana Paula", text: "Troca de tela do notebook super rápida. Deixei de manhã e peguei a tarde.", type: "Notebook" },
                    { name: "Roberto Santos", text: "Consertaram minha TV de 60 polegadas que a autorizada tinha condenado. Top!", type: "Smart TV" }
                ].map((review, i) => (
                    <div key={i} className="bg-gray-900 p-6 rounded border border-gray-800 shadow-sm hover:border-gray-700 transition-colors">
                        <div className="flex items-center gap-1 text-yellow-500 mb-2">
                            {[1,2,3,4,5].map(star => (
                                <React.Fragment key={star}>
                                    <IconStar className="w-4 h-4" />
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="text-gray-300 italic mb-4">"{review.text}"</p>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="font-bold text-white font-tech tracking-wide">{review.name}</p>
                                <p className="text-xs text-gray-500 font-mono uppercase">{review.type}</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center text-gray-400 font-bold text-xs border border-gray-700">
                                {review.name.substring(0,2).toUpperCase()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Right: Stats Chart */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
            <div className="text-center mb-8">
                <span className="text-6xl font-black text-white font-tech">4.9</span>
                <div className="flex justify-center gap-1 text-yellow-500 my-2">
                    {[1,2,3,4,5].map(star => (
                        <React.Fragment key={star}>
                            <IconStar className="w-6 h-6" />
                        </React.Fragment>
                    ))}
                </div>
                <p className="text-gray-400 text-sm">Baseado em 458 avaliações no Google</p>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={REVIEW_STATS}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis type="number" hide />
                        <YAxis 
                            dataKey="stars" 
                            type="category" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#9CA3AF', fontSize: 14, fontWeight: 'bold' }}
                            width={30}
                            tickFormatter={(val) => `${val} ★`}
                        />
                        <Tooltip 
                            cursor={{fill: 'transparent'}}
                            contentStyle={{ backgroundColor: '#000', borderColor: '#333', borderRadius: '4px', color: '#fff' }}
                        />
                        <Bar dataKey="percentage" barSize={20} radius={[0, 4, 4, 0]}>
                            {REVIEW_STATS.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.stars === 5 ? '#DC2626' : '#374151'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;