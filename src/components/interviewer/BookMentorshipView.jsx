import { Loader2 } from 'lucide-react';

export default function BookMentorshipView({ isProcessing, onBook }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-10 animate-in fade-in px-4">
      <div className="text-center space-y-4">
        <div className="font-['DM_Mono'] text-[#E63946] text-[12px] font-black tracking-[0.5em] uppercase font-bold italic">
          // Professional Calibration
        </div>
        <h1 className="font-['Unbounded'] text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight italic leading-none">
          The Upgrade.
        </h1>
      </div>
      <button
        onClick={onBook}
        disabled={isProcessing}
        className="bg-[#1A1A1A] text-white px-12 sm:px-20 py-6 sm:py-8 font-['Unbounded'] text-sm font-black uppercase tracking-[0.4em] shadow-[20px_20px_0px_0px_rgba(230,57,70,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-500"
      >
        {isProcessing ? <Loader2 size={24} className="animate-spin" /> : 'Initialize Protocol Now'}
      </button>
    </div>
  );
}
