
import React, { useState } from 'react';
import RegistrationPage from './pages/RegistrationPage';
import FinancialPage from './pages/FinancialPage';
import EvaluationPage from './pages/EvaluationPage';
import DrawPage from './pages/DrawPage';
import PresencePage from './pages/PresencePage';
import TacticsPage from './pages/TacticsPage';
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('presence');

  const renderView = () => {
    switch (currentView) {
      case 'registration': return <RegistrationPage onBack={() => setCurrentView('presence')} />;
      case 'financial': return <FinancialPage onBack={() => setCurrentView('presence')} />;
      case 'evaluation': return <EvaluationPage onBack={() => setCurrentView('presence')} />;
      case 'draw': return <DrawPage onBack={() => setCurrentView('presence')} />;
      case 'presence': return <PresencePage onNavigate={setCurrentView} />;
      case 'tactics': return <TacticsPage onBack={() => setCurrentView('presence')} />;
      default: return <PresencePage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-background-light dark:bg-background-dark shadow-2xl relative min-h-screen">
        {renderView()}
        
        {/* Simple Bottom Tab Bar for Main Navigation (Optional helper) */}
        {currentView !== 'tactics' && currentView !== 'draw' && (
          <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 z-50 flex justify-around p-2">
            <button 
              onClick={() => setCurrentView('presence')}
              className={`flex flex-col items-center p-2 ${currentView === 'presence' ? 'text-primary' : 'text-text-secondary-light'}`}
            >
              <span className="material-symbols-outlined">how_to_reg</span>
              <span className="text-[10px]">Presença</span>
            </button>
            <button 
              onClick={() => setCurrentView('draw')}
              className={`flex flex-col items-center p-2 ${currentView === 'draw' ? 'text-primary' : 'text-text-secondary-light'}`}
            >
              <span className="material-symbols-outlined">shuffle</span>
              <span className="text-[10px]">Sorteio</span>
            </button>
            <button 
              onClick={() => setCurrentView('tactics')}
              className={`flex flex-col items-center p-2 ${currentView === 'tactics' ? 'text-primary' : 'text-text-secondary-light'}`}
            >
              <span className="material-symbols-outlined">strategy</span>
              <span className="text-[10px]">Tática</span>
            </button>
            <button 
              onClick={() => setCurrentView('financial')}
              className={`flex flex-col items-center p-2 ${currentView === 'financial' ? 'text-primary' : 'text-text-secondary-light'}`}
            >
              <span className="material-symbols-outlined">payments</span>
              <span className="text-[10px]">Financeiro</span>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};

export default App;
