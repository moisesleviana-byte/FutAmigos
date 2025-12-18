
import React, { useState } from 'react';
import Header from '../components/Header';
import { MOCK_ATHLETES } from '../constants';
import { Position, ViewType } from '../types';

interface Props {
  onNavigate: (view: ViewType) => void;
}

const PresencePage: React.FC<Props> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'Chamada' | 'Histórico'>('Chamada');
  const [presentIds, setPresentIds] = useState<string[]>(['1', '2', '3']);
  const [filter, setFilter] = useState<string>('Todos');

  const togglePresence = (id: string) => {
    setPresentIds(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  const filteredAthletes = MOCK_ATHLETES.filter(a => {
    if (filter === 'Todos') return true;
    if (filter === 'Goleiros') return a.position === Position.GOLEIRO;
    if (filter === 'Defesa') return a.position === Position.DEFESA;
    if (filter === 'Ataque') return a.position === Position.ATAQUE;
    return true;
  });

  return (
    <div className="pb-32">
      <Header 
        title="Controle de Presença" 
        rightAction={<button className="material-symbols-outlined text-text-secondary-light">more_vert</button>}
      />
      
      {/* Segmented Buttons */}
      <div className="px-4 py-3 sticky top-[60px] z-10 bg-background-light dark:bg-background-dark">
        <div className="flex bg-gray-200 dark:bg-surface-dark rounded-full p-1 h-12">
          <button 
            onClick={() => setActiveTab('Chamada')}
            className={`flex-1 rounded-full font-bold text-sm transition-all ${activeTab === 'Chamada' ? 'bg-white dark:bg-border-dark shadow-sm text-text-main-light dark:text-white' : 'text-text-secondary-light'}`}
          >
            Chamada
          </button>
          <button 
            onClick={() => setActiveTab('Histórico')}
            className={`flex-1 rounded-full font-bold text-sm transition-all ${activeTab === 'Histórico' ? 'bg-white dark:bg-border-dark shadow-sm text-text-main-light dark:text-white' : 'text-text-secondary-light'}`}
          >
            Histórico
          </button>
        </div>
      </div>

      <div className="px-4 mt-2">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Treino - 12 Out</h1>
          <button className="size-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center border border-gray-100 shadow-sm">
            <span className="material-symbols-outlined text-lg text-text-secondary-light">calendar_today</span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-text-secondary-light text-xl">groups</span>
              <span className="text-xs font-bold text-text-secondary-light">Elenco</span>
            </div>
            <p className="text-3xl font-bold">{MOCK_ATHLETES.length}</p>
          </div>
          <div className="flex-1 bg-primary p-4 rounded-2xl shadow-md shadow-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-black text-xl">check_circle</span>
              <span className="text-xs font-bold text-black opacity-80">Confirmados</span>
            </div>
            <p className="text-3xl font-bold text-black">{presentIds.length}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-4 pb-6 overflow-x-auto no-scrollbar items-center">
        <div className="border-r border-gray-200 pr-2 mr-1">
          <button className="size-9 rounded-full bg-white dark:bg-surface-dark border border-gray-100 shadow-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-lg text-text-secondary-light">filter_list</span>
          </button>
        </div>
        {['Todos', 'Goleiros', 'Defesa', 'Ataque'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`h-9 px-5 rounded-full text-xs font-bold transition-all border ${filter === f ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-white dark:bg-surface-dark text-text-main-light dark:text-white border-gray-100'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Athlete List */}
      <div className="px-4 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          {filteredAthletes.map(athlete => (
            <div 
              key={athlete.id}
              onClick={() => togglePresence(athlete.id)}
              className={`flex items-center justify-between p-3 pr-4 rounded-2xl border transition-all cursor-pointer ${presentIds.includes(athlete.id) ? 'bg-primary/5 border-primary/40' : 'bg-white dark:bg-surface-dark border-transparent shadow-sm'}`}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`size-12 rounded-full bg-cover bg-center ${presentIds.includes(athlete.id) ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                  style={{ backgroundImage: `url(${athlete.avatar})` }}
                />
                <div>
                  <p className="text-sm font-bold leading-tight">{athlete.name}</p>
                  <p className="text-[10px] font-bold text-text-secondary-light mt-0.5">{athlete.position} • {athlete.status}</p>
                </div>
              </div>
              <div className="relative">
                <div className={`w-12 h-7 rounded-full transition-colors ${presentIds.includes(athlete.id) ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`} />
                <div className={`absolute top-1 left-1 size-5 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform ${presentIds.includes(athlete.id) ? 'translate-x-5' : 'translate-x-0'}`}>
                  {presentIds.includes(athlete.id) && <span className="material-symbols-outlined text-[10px] font-black text-primary">check</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fab Action */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/90 to-transparent">
        <button className="w-full h-14 bg-primary text-black font-bold rounded-xl shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          Salvar Chamada
          <span className="material-symbols-outlined">check_circle</span>
        </button>
      </div>
    </div>
  );
};

export default PresencePage;
