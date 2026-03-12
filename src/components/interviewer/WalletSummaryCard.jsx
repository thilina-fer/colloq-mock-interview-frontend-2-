import { Download, Wallet } from 'lucide-react';

export default function WalletSummaryCard({ balance, bankConnected }) {
  return (
    <div className="lg:col-span-2 bg-[#1A1A1A] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E63946] opacity-10 translate-x-32 -translate-y-32 rotate-45" />
      <div className="relative z-10 space-y-8 sm:space-y-12">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <p className="font-['DM_Mono'] text-[11px] font-bold uppercase text-[#F5F3EE]/40 tracking-[0.3em]">
              Available Assets
            </p>
            <p className="font-['Unbounded'] text-4xl sm:text-6xl font-black tracking-tighter leading-none">
              ${balance.toFixed(2)}
            </p>
          </div>
          <Wallet size={40} className="text-[#E63946] shrink-0 sm:!size-12" />
        </div>
        <div className="flex gap-6 pt-8 sm:pt-12 border-t border-white/10">
          <button
            disabled={!bankConnected}
            className={`flex-1 py-4 sm:py-5 font-['Unbounded'] text-[11px] font-black uppercase tracking-[0.2em] shadow-xl transition-all flex items-center justify-center gap-3 ${
              bankConnected
                ? 'bg-[#E63946] text-white hover:scale-[1.02]'
                : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
            }`}
          >
            <Download size={18} />
            {bankConnected ? 'Withdraw' : 'Connect Bank to Withdraw'}
          </button>
        </div>
      </div>
    </div>
  );
}
