// Step progress list displayed inside the dark sidebar.
// Receives the full steps array and the zero-based currentStep index.
const StepIndicator = ({ steps, currentStep }) => (
  <div className="flex flex-col border-t border-[#F5F3EE]/20 mb-12 relative z-10">
    {steps.map((label, i) => (
      <div
        key={i}
        className={`flex items-center gap-5 py-4 border-b border-[#F5F3EE]/10 transition-all duration-500 ${
          currentStep === i ? "opacity-100 translate-x-2" : "opacity-30"
        }`}
      >
        <span className="font-['DM_Mono'] text-xs text-[#E63946] w-6">
          0{i + 1}
        </span>
        <div
          className={`flex-1 h-px ${currentStep === i ? "bg-[#E63946]" : "bg-[#F5F3EE]/20"}`}
        />
        <span className="text-xs font-semibold tracking-widest uppercase text-[#F5F3EE]">
          {label}
        </span>
      </div>
    ))}
  </div>
);

export default StepIndicator;
