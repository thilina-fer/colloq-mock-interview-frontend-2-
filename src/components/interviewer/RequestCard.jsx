import { Check, Loader2 } from "lucide-react";

export default function RequestCard({ request, isProcessing, onAccept }) {
  return (
    <div className="bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[10px_10px_0px_0px_rgba(26,26,26,0.05)]">
      <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 items-start">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F8F6F1] border-2 border-[#1A1A1A] flex items-center justify-center text-xl sm:text-2xl font-black font-['Unbounded'] shrink-0">
          {request.candidate[0]}
        </div>
        <div className="space-y-1 min-w-0">
          <h4 className="font-['Unbounded'] text-base sm:text-lg font-black uppercase italic tracking-tight leading-none">
            {request.candidate}
          </h4>
          <p className="font-['DM_Mono'] text-[10px] text-neutral-400 font-bold uppercase">
            {request.type} Assessment
          </p>
        </div>
      </div>
      <div className="flex gap-4 border-t border-dashed pt-6 sm:pt-8">
        <button
          onClick={() => onAccept(request.id)}
          className="flex-1 bg-[#1A1A1A] text-white py-4 font-['Unbounded'] text-[10px] font-black uppercase hover:bg-[#E63946] transition-all flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Check size={14} />
          )}
          Approve Protocol
        </button>
      </div>
    </div>
  );
}
