import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import GoogleButton from "./GoogleButton";

// Bottom action area: primary CTA, optional Google button (step 0),
// back button, and the sign-in / sign-up toggle link.
const ActionButtons = ({
  loading,
  next,
  ctaLabel,
  step,
  setStep,
  googleAuth,
  isLogin,
  setIsLogin,
  setErrors,
}) => (
  <div className="pt-4 space-y-4">
    {/* Primary CTA */}
    <button
      onClick={next}
      disabled={loading}
      className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 bg-[#1A1A1A] text-[#F5F3EE] font-['Unbounded'] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.16em] sm:tracking-[0.2em] hover:bg-[#E63946] transition-all duration-300 disabled:opacity-40"
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <>
          {ctaLabel} <ArrowRight size={16} />
        </>
      )}
    </button>

    {/* Google OAuth — shown on step 0 only */}
    {step === 0 && <GoogleButton googleAuth={googleAuth} loading={loading} />}

    {/* Back link + sign-in / sign-up toggle */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2 pt-2">
      {step > 0 ? (
        <button
          onClick={() => setStep(step - 1)}
          className="flex items-center gap-2 text-neutral-400 hover:text-[#1A1A1A] font-['DM_Mono'] text-[10px] font-bold uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={12} /> Back
        </button>
      ) : (
        <div />
      )}

      {step === 0 && (
        <div className="text-[10px] font-['DM_Mono'] text-neutral-400 uppercase tracking-tight sm:text-right">
          {isLogin ? "No account? " : "Already registered? "}
          <button
            onClick={() => {
              if (!loading) {
                setIsLogin(!isLogin);
                setStep(0);
                setErrors({});
              }
            }}
            className="text-[#1A1A1A] font-black underline underline-offset-4 hover:text-[#E63946] transition-colors decoration-2"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </div>
      )}
    </div>
  </div>
);

export default ActionButtons;
