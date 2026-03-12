import { CheckCircle2 } from "lucide-react";

// Inline success banner shown after a successful auth / registration.
const SuccessAlert = () => (
  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#F5F3EE] border-l-[4px] border-[#1A1A1A] mb-6 md:mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
    <CheckCircle2 size={20} className="text-[#1A1A1A] mt-0.5 shrink-0" />
    <div className="min-w-0">
      <div className="font-['Unbounded'] text-[13px] sm:text-sm font-bold text-[#1A1A1A] mb-0.5">
        Verified.
      </div>
      <div className="text-[9px] sm:text-[10px] text-neutral-500 font-['DM_Mono'] uppercase tracking-[0.08em] sm:tracking-wider leading-relaxed">
        Authentication successful. Welcome to the network.
      </div>
    </div>
  </div>
);

export default SuccessAlert;
