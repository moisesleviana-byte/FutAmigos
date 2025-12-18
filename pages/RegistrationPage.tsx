
import React from 'react';
import Header from '../components/Header';

interface Props {
  onBack: () => void;
}

const RegistrationPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pb-28">
      <Header title="Novo Atleta" onBack={onBack} />
      
      <div className="px-4 pt-6">
        <h2 className="text-text-main-light dark:text-text-main-dark text-xl font-bold mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          Dados Pessoais
        </h2>
        
        <div className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-sm font-medium pb-2 ml-1">Nome Completo</span>
            <input 
              className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 p-4 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
              placeholder="Ex: João da Silva"
              type="text"
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-sm font-medium pb-2 ml-1">CPF</span>
            <div className="relative">
              <input 
                className="w-full rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 p-4 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="000.000.000-00"
                type="tel"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary-light">id_card</span>
            </div>
          </label>
          
          <label className="flex flex-col">
            <span className="text-sm font-medium pb-2 ml-1">Data de Nascimento</span>
            <div className="relative">
              <input 
                className="w-full rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 p-4 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                type="date"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary-light pointer-events-none">calendar_month</span>
            </div>
          </label>
        </div>

        <div className="h-px bg-border-light dark:bg-border-dark my-8"></div>

        <h2 className="text-text-main-light dark:text-text-main-dark text-xl font-bold mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>contacts</span>
          Contato
        </h2>

        <div className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-sm font-medium pb-2 ml-1">Celular / WhatsApp</span>
            <div className="flex">
              <input 
                className="flex-1 rounded-l-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 p-4 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="(00) 00000-0000"
                type="tel"
              />
              <div className="w-14 h-14 border border-l-0 border-border-light dark:border-border-dark rounded-r-xl bg-surface-light dark:bg-surface-dark flex items-center justify-center text-text-secondary-light">
                <span className="material-symbols-outlined">smartphone</span>
              </div>
            </div>
          </label>
          
          <label className="flex flex-col">
            <span className="text-sm font-medium pb-2 ml-1">Email</span>
            <div className="flex">
              <input 
                className="flex-1 rounded-l-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-14 p-4 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                placeholder="exemplo@email.com"
                type="email"
              />
              <div className="w-14 h-14 border border-l-0 border-border-light dark:border-border-dark rounded-r-xl bg-surface-light dark:bg-surface-dark flex items-center justify-center text-text-secondary-light">
                <span className="material-symbols-outlined">mail</span>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-background-light dark:bg-background-dark/80 backdrop-blur-md p-4 border-t border-border-light dark:border-white/5">
        <button 
          onClick={() => onBack()}
          className="w-full flex items-center justify-center h-14 bg-primary text-black font-bold rounded-full shadow-lg active:scale-95 transition-all"
        >
          Confirmar Cadastro
          <span className="material-symbols-outlined ml-2">check_circle</span>
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
