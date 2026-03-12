import { CheckCircle2 } from "lucide-react";

// Inline success banner shown after a successful auth / registration.
const SuccessAlert = () => (
  <div className="flex items-start gap-4 p-5 bg-[#F5F3EE] border-l-[4px] border-[#1A1A1A] mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
    <CheckCircle2 size={20} className="text-[#1A1A1A] mt-0.5" />
    <div>
      <div className="font-['Unbounded'] text-sm font-bold text-[#1A1A1A] mb-0.5">
        Verified.
      </div>
      <div className="text-[10px] text-neutral-500 font-['DM_Mono'] uppercase tracking-wider">
        Authentication successful. Welcome to the network.
      </div>
    </div>
  </div>
);

export default SuccessAlert;
