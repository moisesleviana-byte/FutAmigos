
import React, { useState } from 'react';
import Header from '../components/Header';
import { MOCK_ATHLETES } from '../constants';

interface Props {
  onBack: () => void;
}

const EvaluationPage: React.FC<Props> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState(MOCK_ATHLETES[1].id);
  const selectedAthlete = MOCK_ATHLETES.find(a => a.id === selectedId)!;
  const [rating, setRating] = useState(4);

  return (
    <div className="pb-28">
      <Header 
        title="Avaliar Atleta" 
        onBack={onBack} 
        rightAction={
          <button className="text-sm font-bold text-text-secondary-light">Pular</button>
        } 
      />
      
      <div className="text-center py-6 px-6">
        <h2 className="text-2xl font-bold">Como foi o desempenho?</h2>
        <p className="text-sm text-text-secondary-light mt-1">Selecione um jogador para avaliar</p>
      </div>

      {/* Selector Scroll */}
      <div className="overflow-x-auto no-scrollbar px-4 pb-6">
        <div className="flex gap-4 w-max">
          {MOCK_ATHLETES.map(athlete => (
            <div 
              key={athlete.id} 
              onClick={() => setSelectedId(athlete.id)}
              className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${selectedId === athlete.id ? 'opacity-100 scale-105' : 'opacity-50'}`}
            >
              <div className={`p-1 rounded-full border-2 ${selectedId === athlete.id ? 'border-primary' : 'border-transparent'}`}>
                <div 
                  className="size-14 rounded-full bg-cover bg-center shadow-sm"
                  style={{ backgroundImage: `url(${athlete.avatar})` }}
                />
              </div>
              <span className="text-[10px] font-bold truncate w-14 text-center">{athlete.name.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Evaluation Card */}
      <div className="px-4">
        <div className="bg-background-light dark:bg-surface-dark/50 rounded-3xl p-6 flex flex-col items-center">
          <div 
            className="size-24 rounded-full bg-cover bg-center mb-4 border-4 border-white shadow-lg"
            style={{ backgroundImage: `url(${selectedAthlete.avatar})` }}
          />
          <h3 className="text-xl font-bold">{selectedAthlete.name}</h3>
          <div className="flex items-center gap-2 mt-2 mb-6 text-[10px] font-bold uppercase text-text-secondary-light">
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-white/10 rounded-full">{selectedAthlete.position}</span>
            <span className="size-1 rounded-full bg-gray-400" />
            <span>Camisa {selectedAthlete.number}</span>
          </div>

          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map(star => (
              <button 
                key={star} 
                onClick={() => setRating(star)}
                className={`transition-transform active:scale-90 ${star <= rating ? 'text-primary' : 'text-gray-300'}`}
              >
                <span 
                  className="material-symbols-outlined text-4xl" 
                  style={{ fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0" }}
                >
                  star
                </span>
              </button>
            ))}
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{rating}.0</p>
            <p className="text-sm text-text-secondary-light font-medium">Bom jogo</p>
          </div>
        </div>
      </div>

      {/* Feedback Field */}
      <div className="px-4 mt-6">
        <label className="text-sm font-bold block mb-2 px-1">Comentário (Opcional)</label>
        <div className="relative">
          <textarea 
            className="w-full rounded-2xl bg-gray-50 dark:bg-surface-dark border-none p-4 text-sm focus:ring-2 focus:ring-primary shadow-inner resize-none"
            rows={3}
            placeholder="O que ele fez bem? O que pode melhorar?"
          />
          <span className="material-symbols-outlined absolute bottom-3 right-3 text-gray-400 text-lg">edit</span>
        </div>
      </div>

      {/* Tags */}
      <div className="px-4 mt-6">
        <p className="text-sm font-bold mb-3 px-1">Tags rápidas</p>
        <div className="flex flex-wrap gap-2">
          {['⚽️ Bom Passe', '🏃‍♂️ Rápido', '🛡️ Defensivo', '🎯 Finalização'].map(tag => (
            <button key={tag} className="px-4 py-2 bg-gray-100 dark:bg-surface-dark rounded-full text-xs font-bold hover:bg-primary/20 transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/5">
        <button className="w-full h-14 bg-primary text-black font-bold rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
          Confirmar Avaliação
          <span className="material-symbols-outlined">check_circle</span>
        </button>
      </div>
    </div>
  );
};

export default EvaluationPage;
