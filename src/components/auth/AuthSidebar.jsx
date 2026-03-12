import StepIndicator from "./StepIndicator";
import ColloQLogo from "./ColloQLogo";

// Dark left-panel branding sidebar.
// Hidden on screens smaller than lg (1024 px) — exactly the original behaviour.
const AuthSidebar = ({ step, steps }) => (
  <div className="hidden lg:flex w-[420px] shrink-0 bg-[#1A1A1A] text-[#F5F3EE] flex-col p-12 relative overflow-hidden">
    {/* Decorative Swiss design line */}
    <div className="absolute top-0 left-24 w-px h-full bg-[#F5F3EE]/10" />

    {/* Logo */}
    <ColloQLogo className="mb-auto relative z-10" />

    {/* Large headline */}
    <div className="font-['Unbounded'] text-[54px] font-black leading-[0.9] tracking-tighter mb-12 flex-1 flex items-end relative z-10">
      {step === 0 ? (
        <span>
          Inter<span className="text-[#E63946]">—</span>
          <br />
          view
          <br />
          Ready.
        </span>
      ) : (
        <span>
          Build
          <br />
          your<span className="text-[#E63946]">.</span>
          <br />
          Profile.
        </span>
      )}
    </div>

    <StepIndicator steps={steps} currentStep={step} />

    {/* Footer copy */}
    <div className="font-['DM_Mono'] text-[11px] text-[#F5F3EE]/40 tracking-wider leading-relaxed border-t border-[#F5F3EE]/10 pt-6 relative z-10 uppercase">
      JOIN THE CONVERSATION.
      <br />
      YOUR CAREER STARTS HERE.
      <br />
      POWERED BY COLLOQ.
    </div>
  </div>
);

export default AuthSidebar;
