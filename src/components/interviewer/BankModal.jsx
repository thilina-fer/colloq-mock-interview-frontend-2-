import { Shield, X, Loader2 } from "lucide-react";

export default function BankModal({
  isOpen,
  bankForm,
  isProcessing,
  onChange,
  onSubmit,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white border-2 border-[#1A1A1A] w-full max-w-lg shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] sm:shadow-[30px_30px_0px_0px_rgba(26,26,26,1)]">
        <div className="p-6 sm:p-10">
          <div className="flex justify-between items-start mb-8 sm:mb-10">
            <div>
              <div className="font-['DM_Mono'] text-[#E63946] text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                // Bank Link
              </div>
              <h2 className="font-['Unbounded'] text-xl sm:text-2xl font-black uppercase italic tracking-tighter">
                Enter Bank Details.
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 border-2 border-[#1A1A1A] hover:bg-[#E63946] hover:text-white transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <input
              required
              className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold uppercase focus:border-[#1A1A1A] outline-none transition-all"
              placeholder="ACCOUNT HOLDER"
              value={bankForm.holderName}
              onChange={(e) =>
                onChange({ ...bankForm, holderName: e.target.value })
              }
            />
            <input
              required
              className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold uppercase focus:border-[#1A1A1A] outline-none transition-all"
              placeholder="BANK NAME"
              value={bankForm.bankName}
              onChange={(e) =>
                onChange({ ...bankForm, bankName: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <input
                required
                type="password"
                className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold focus:border-[#1A1A1A] outline-none transition-all"
                placeholder="ACC NUMBER"
                value={bankForm.accountNumber}
                onChange={(e) =>
                  onChange({ ...bankForm, accountNumber: e.target.value })
                }
              />
              <input
                required
                className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold uppercase focus:border-[#1A1A1A] outline-none transition-all"
                placeholder="SWIFT CODE"
                value={bankForm.swiftCode}
                onChange={(e) =>
                  onChange({ ...bankForm, swiftCode: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#1A1A1A] text-white py-5 font-['Unbounded'] text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#E63946] transition-all flex items-center justify-center gap-4"
            >
              {isProcessing ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <Shield size={16} /> Link Account
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
