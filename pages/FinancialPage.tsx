
import React from 'react';
import Header from '../components/Header';
import { MOCK_ATHLETES, MOCK_PAYMENTS } from '../constants';

interface Props {
  onBack: () => void;
}

const FinancialPage: React.FC<Props> = ({ onBack }) => {
  const currentAthlete = MOCK_ATHLETES[1]; // Carlos Silva
  const currentPayment = MOCK_PAYMENTS[0]; // Outubro

  return (
    <div className="pb-24">
      <Header title="Financeiro" onBack={onBack} />
      
      {/* Profile Header */}
      <div className="flex p-4 gap-4 items-center">
        <div 
          className="size-16 rounded-full bg-cover bg-center shadow-md border-2 border-white"
          style={{ backgroundImage: `url(${currentAthlete.avatar})` }}
        />
        <div>
          <h3 className="text-xl font-bold leading-none">{currentAthlete.name}</h3>
          <p className="text-sm text-text-secondary-light dark:text-gray-400 mt-1">
            Titular • Camisa {currentAthlete.number}
          </p>
        </div>
      </div>

      {/* Monthly Status Card */}
      <div className="px-4 mt-2">
        <h3 className="text-lg font-bold mb-3">Mensalidade Atual</h3>
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg relative overflow-hidden p-5 pl-8">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase font-bold text-text-secondary-light">{currentPayment.month} {currentPayment.year}</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm font-bold text-text-secondary-light">R$</span>
                <span className="text-4xl font-bold tracking-tighter">80,00</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full">
              Pendente
            </span>
          </div>
          <div className="h-px bg-gray-100 dark:bg-gray-800 my-4" />
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-text-secondary-light uppercase">Vencimento</p>
              <p className="text-sm font-bold">{currentPayment.dueDate}</p>
            </div>
            <button className="h-12 px-6 bg-primary text-black font-bold rounded-full flex items-center gap-2 shadow-md shadow-primary/20 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px]">payments</span>
              Pagar Agora
            </button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-8">
        <h3 className="px-4 text-lg font-bold mb-4">Formas de Pagamento</h3>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
          <div className="flex-none w-28 h-28 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm">
            <div className="size-12 rounded-full bg-gray-50 dark:bg-background-dark flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined text-3xl">qr_code_2</span>
            </div>
            <span className="text-xs font-bold">PIX</span>
          </div>
          <div className="flex-none w-28 h-28 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm">
            <div className="size-12 rounded-full bg-gray-50 dark:bg-background-dark flex items-center justify-center text-blue-500">
              <span className="material-symbols-outlined text-3xl">credit_card</span>
            </div>
            <span className="text-xs font-bold">Cartão</span>
          </div>
          <div className="flex-none w-28 h-28 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm">
            <div className="size-12 rounded-full bg-gray-50 dark:bg-background-dark flex items-center justify-center text-orange-500">
              <span className="material-symbols-outlined text-3xl">barcode</span>
            </div>
            <span className="text-xs font-bold">Boleto</span>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="px-4 mt-8 pb-10">
        <h3 className="text-lg font-bold mb-4">Histórico</h3>
        <div className="flex flex-col gap-3">
          {MOCK_PAYMENTS.slice(1).map((pay, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-50 dark:border-white/5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <div>
                  <p className="text-sm font-bold">{pay.month} {pay.year}</p>
                  <p className="text-[10px] text-text-secondary-light">Pago em {pay.paidDate}</p>
                </div>
              </div>
              <span className="font-bold text-sm">R$ {pay.amount.toFixed(2).replace('.', ',')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialPage;
