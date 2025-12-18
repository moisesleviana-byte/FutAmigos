
import React from 'react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, rightAction }) => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 border-b border-gray-200/20 dark:border-white/5">
      {onBack && (
        <button 
          onClick={onBack}
          className="text-text-main-light dark:text-text-main-dark flex size-12 shrink-0 items-center justify-start rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
      )}
      <h2 className="text-text-main-light dark:text-text-main-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2">
        {title}
      </h2>
      <div className="flex size-12 items-center justify-end">
        {rightAction || <div className="w-12" />}
      </div>
    </div>
  );
};

export default Header;
