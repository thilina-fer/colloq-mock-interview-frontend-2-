import { Check } from "lucide-react";

export default function BankStatusCard({
  bankConnected,
  bankAccount,
  onOpenModal,
}) {
  return (
    <div className="bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[200px]">
      {bankConnected ? (
        <div className="space-y-8 animate-in fade-in">
          <Check className="text-green-500" size={32} />
          <div className="space-y-2 italic">
            <h3 className="font-['Unbounded'] text-lg font-black uppercase tracking-tight">
              Synced.
            </h3>
            <p className="text-[10px] font-['DM_Mono'] uppercase font-black text-neutral-400">
              {bankAccount.bankName}
            </p>
            <button
              onClick={onOpenModal}
              className="text-[10px] font-black uppercase text-[#E63946] underline text-left"
            >
              Update Bank
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onOpenModal}
          className="mt-auto w-full py-4 bg-[#1A1A1A] text-white font-['Unbounded'] text-[10px] font-black uppercase tracking-widest hover:bg-[#E63946] transition-all"
        >
          Connect Bank
        </button>
      )}
    </div>
  );
}
