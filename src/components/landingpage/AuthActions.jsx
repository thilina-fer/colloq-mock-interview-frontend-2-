import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { COLORS } from "../../constants/colors";

const AuthActions = ({
  step,
  loading,
  ctaLabel,
  isLogin,
  next,
  googleAuth,
  setStep,
  onBack,
  setIsLogin,
  setErrors,
}) => (
  <div className="pt-8 space-y-6">
    <button
      onClick={next}
      disabled={loading}
      className="w-full flex items-center justify-center gap-4 py-6 font-['Unbounded'] text-[11px] font-black uppercase tracking-[0.3em] hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-500 disabled:opacity-40 shadow-2xl"
      style={{ backgroundColor: COLORS.dark, color: COLORS.softBg }}
    >
      {loading ? (
        <Loader2 size={20} className="animate-spin" />
      ) : (
        <>
          {ctaLabel} <ArrowRight size={20} />
        </>
      )}
    </button>

    {step === 0 && (
      <button
        onClick={googleAuth}
        disabled={loading}
        className="w-full flex items-center justify-center gap-4 py-4 border-2 bg-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-neutral-50 transition-all duration-300 hover:shadow-lg"
        style={{ borderColor: COLORS.dark, color: COLORS.dark }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 2.09 2.18 4.93l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        {isLogin ? "Sign In with Google" : "Sign Up with Google"}
      </button>
    )}

    <div className="flex items-center justify-between pt-6">
      <button
        onClick={step > 0 ? () => setStep(step - 1) : onBack}
        className="flex items-center gap-2 font-['DM_Mono'] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 group"
        style={{ color: COLORS.muted400 }}
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        {step > 0 ? "Step Back" : "Exit Protocol"}
      </button>

      {step === 0 && (
        <div
          className="text-[11px] font-['DM_Mono'] uppercase tracking-tighter font-bold italic"
          style={{ color: COLORS.muted400 }}
        >
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              if (!loading) {
                setIsLogin(!isLogin);
                setStep(0);
                setErrors({});
              }
            }}
            className="font-black underline underline-offset-8 transition-colors decoration-2"
            style={{ color: COLORS.dark }}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>
      )}
    </div>

    <style>{`
      .pt-8 > button:first-child:hover {
        background: ${COLORS.red};
      }
      .pt-8 .italic button:hover,
      .pt-8 .group:hover {
        color: ${COLORS.red} !important;
      }
    `}</style>
  </div>
);

export default AuthActions;
