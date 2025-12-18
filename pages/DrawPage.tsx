
import React, { useState } from 'react';
import Header from '../components/Header';
import { MOCK_ATHLETES } from '../constants';

interface Props {
  onBack: () => void;
}

const DrawPage: React.FC<Props> = ({ onBack }) => {
  const [playersPerTeam, setPlayersPerTeam] = useState(7);
  const [isBalanced, setIsBalanced] = useState(true);

  return (
    <div className="pb-24">
      <Header 
        title="Sorteio de Jogos" 
        onBack={onBack} 
        rightAction={<button className="material-symbols-outlined">settings</button>}
      />
      
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-3xl font-bold leading-tight">
          Vamos organizar <br />
          <span className="text-text-secondary-light">a pelada de hoje?</span>
        </h1>

        {/* Player Count */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-black/5">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Jogadores por time</span>
            <span className="bg-primary/20 text-[10px] font-bold px-2 py-1 rounded">Max 12 jogadores</span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {[5, 6, 7, 8, 9].map(num => (
              <button 
                key={num}
                onClick={() => setPlayersPerTeam(num)}
                className={`flex-1 min-w-[3rem] h-12 rounded-full font-bold transition-all ${
                  playersPerTeam === num 
                    ? 'bg-primary text-black shadow-lg ring-2 ring-primary ring-offset-2' 
                    : 'bg-gray-100 dark:bg-gray-800 text-text-secondary-light'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Toggle */}
        <label className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border border-black/5 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-full">
              <span className="material-symbols-outlined text-lg">equalizer</span>
            </div>
            <div>
              <p className="text-sm font-bold">Equilibrar Habilidade</p>
              <p className="text-[10px] text-text-secondary-light">Usa o ranking dos atletas</p>
            </div>
          </div>
          <div className="relative">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isBalanced}
              onChange={() => setIsBalanced(!isBalanced)}
            />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
          </div>
        </label>

        {/* Draw Button */}
        <div className="flex flex-col items-center py-4">
          <button className="w-full max-w-[280px] h-16 bg-primary text-black font-bold text-xl rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">casino</span>
            SORTEAR TIMES
          </button>
          <p className="mt-3 text-xs text-text-secondary-light">14 atletas disponíveis na lista</p>
        </div>

        <div className="h-px bg-black/5 dark:bg-white/5 my-2" />

        {/* Results */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="font-bold text-lg">Times Definidos</h3>
            <button className="text-[10px] font-bold text-text-secondary-light flex items-center gap-1 uppercase">
              <span className="material-symbols-outlined text-sm">shuffle</span> Refazer
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            {/* Team A */}
            <div className="bg-white dark:bg-surface-dark p-4 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-8 bg-blue-500 rounded-full" />
                <span className="font-bold text-lg">Time A</span>
              </div>
              <ul className="space-y-3">
                {MOCK_ATHLETES.slice(0, 3).map(a => (
                  <li key={a.id} className="flex items-center gap-2">
                    <img src={a.avatar} className="size-8 rounded-full object-cover" />
                    <span className="text-xs font-medium">{a.name.split(' ')[0]}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2 opacity-50">
                  <div className="size-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">add</span>
                  </div>
                  <span className="text-xs italic">Vaga</span>
                </li>
              </ul>
            </div>

            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-primary text-black text-[10px] font-black p-2 rounded-full border-4 border-background-light dark:border-background-dark shadow-md">
                VS
              </div>
            </div>

            {/* Team B */}
            <div className="bg-white dark:bg-surface-dark p-4 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-8 bg-red-500 rounded-full" />
                <span className="font-bold text-lg">Time B</span>
              </div>
              <ul className="space-y-3">
                {MOCK_ATHLETES.slice(3, 5).map(a => (
                  <li key={a.id} className="flex items-center gap-2">
                    <img src={a.avatar} className="size-8 rounded-full object-cover" />
                    <span className="text-xs font-medium">{a.name.split(' ')[0]}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2 opacity-50">
                  <div className="size-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">add</span>
                  </div>
                  <span className="text-xs italic">Vaga</span>
                </li>
                <li className="flex items-center gap-2 opacity-50">
                  <div className="size-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">add</span>
                  </div>
                  <span className="text-xs italic">Vaga</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-8 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center gap-2 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">share</span>
            Compartilhar Times
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawPage;
