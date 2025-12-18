
import React, { useState } from 'react';
import Header from '../components/Header';

interface Props {
  onBack: () => void;
}

const TacticsPage: React.FC<Props> = ({ onBack }) => {
  const [formation, setFormation] = useState('3-2-1');

  return (
    <div className="pb-32 flex flex-col h-screen overflow-hidden">
      <Header 
        title="Prancheta Tática" 
        onBack={onBack} 
        rightAction={<button className="text-xs font-bold text-red-600">Limpar</button>}
      />
      
      {/* Formations List */}
      <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
        {['3-2-1', '2-3-1', '3-1-2', '1-4-1'].map(f => (
          <button 
            key={f}
            onClick={() => setFormation(f)}
            className={`h-9 px-4 rounded-full flex items-center gap-2 text-xs font-bold transition-all ${formation === f ? 'bg-primary text-black shadow-lg ring-2 ring-primary/30' : 'bg-white dark:bg-surface-dark text-text-secondary-light border border-gray-100'}`}
          >
            <span className="material-symbols-outlined text-sm">strategy</span>
            {f}
          </button>
        ))}
      </div>

      {/* Field */}
      <div className="flex-1 p-4 relative flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-w-sm aspect-[3/4.5] bg-field rounded-2xl grass-pattern border-4 border-white/20 relative shadow-2xl">
          {/* Field Markings */}
          <div className="absolute inset-0 border-field-line">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/40 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 size-24 rounded-full border-2 border-white/40 -translate-x-1/2 -translate-y-1/2" />
            {/* Penalties */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-20 border-b-2 border-x-2 border-white/40 rounded-b-xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-20 border-t-2 border-x-2 border-white/40 rounded-t-xl" />
          </div>

          {/* Player Icons (Positions based on 3-2-1 formation for demo) */}
          {formation === '3-2-1' && (
            <>
              {/* Goalkeeper */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 size-10 rounded-full bg-black border-2 border-primary text-primary flex items-center justify-center font-black text-xs shadow-lg">GK</div>
              {/* Defenders */}
              <div className="absolute bottom-20 left-1/4 -translate-x-1/2 size-10 rounded-full bg-primary border-2 border-white flex items-center justify-center font-black text-sm shadow-lg">3</div>
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 size-10 rounded-full bg-primary border-2 border-white flex items-center justify-center font-black text-sm shadow-lg">4</div>
              <div className="absolute bottom-20 right-1/4 translate-x-1/2 size-10 rounded-full bg-primary border-2 border-white flex items-center justify-center font-black text-sm shadow-lg">2</div>
              {/* Midfield */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 size-10 rounded-full bg-primary border-2 border-white flex items-center justify-center font-black text-sm shadow-lg">8</div>
              <div className="absolute top-1/2 right-1/3 translate-x-1/2 size-10 rounded-full bg-primary border-2 border-white flex items-center justify-center font-black text-sm shadow-lg">5</div>
              {/* Striker */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-12 rounded-full bg-primary border-2 border-white flex items-center justify-center font-black text-lg shadow-lg ring-4 ring-primary/20">9</div>
            </>
          )}
          
          {/* Arrow SVG Overlay Example */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 450">
            <path d="M 150 200 Q 240 150 240 100" stroke="#f9f506" strokeWidth="3" fill="none" strokeDasharray="5,5" />
            <polygon points="240,100 235,105 245,105" fill="#f9f506" transform="rotate(-30 240 100)" />
          </svg>
        </div>
      </div>

      {/* Tools Dock */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-[320px] px-4">
        <div className="bg-white dark:bg-surface-dark p-2 rounded-full shadow-2xl flex items-center justify-between border border-gray-100 dark:border-white/10">
          <button className="flex flex-col items-center gap-1 group">
            <div className="size-10 rounded-full bg-gray-50 dark:bg-background-dark flex items-center justify-center group-hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-lg">draw</span>
            </div>
            <span className="text-[8px] font-bold">Desenhar</span>
          </button>
          <button className="size-14 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center -mt-8 border-4 border-background-light dark:border-background-dark active:scale-90 transition-all">
            <span className="material-symbols-outlined text-black text-2xl">save</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="size-10 rounded-full bg-gray-50 dark:bg-background-dark flex items-center justify-center group-hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-lg">share</span>
            </div>
            <span className="text-[8px] font-bold">Enviar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TacticsPage;
