import { COLORS } from "../../constants/colors";

const AuthTopBar = ({ isLogin, step, role, setRole, setStep, loading }) => (
  <div
    className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-10 bg-white border-b animate-in slide-in-from-top-4 duration-700"
    style={{ borderColor: COLORS.borderLight }}
  >
    <span
      className="font-['DM_Mono'] text-[12px] tracking-[0.3em] uppercase"
      style={{ color: COLORS.muted400 }}
    >
      {isLogin
        ? "— Authentication Protocol"
        : `— STEP 0${step + 1} / 0${isLogin ? 1 : role === "interviewer" ? 3 : 2}`}
    </span>

    <div
      className="flex border-[2px] bg-white shadow-lg overflow-hidden"
      style={{ borderColor: COLORS.dark }}
    >
      <button
        className={`px-8 py-3 text-[11px] font-black tracking-widest uppercase transition-all duration-300 ${
          role === "candidate" ? "" : "hover:bg-neutral-50 border-r-[2px]"
        }`}
        style={{
          backgroundColor: role === "candidate" ? COLORS.dark : "transparent",
          color: role === "candidate" ? COLORS.softBg : COLORS.dark,
          borderColor: COLORS.dark,
        }}
        onClick={() => {
          if (!loading) {
            setRole("candidate");
            setStep(0);
          }
        }}
      >
        Candidate
      </button>
      <button
        className="px-8 py-3 text-[11px] font-black tracking-widest uppercase transition-all duration-300 hover:bg-neutral-50"
        style={{
          backgroundColor: role === "interviewer" ? COLORS.dark : "transparent",
          color: role === "interviewer" ? COLORS.softBg : COLORS.dark,
        }}
        onClick={() => {
          if (!loading) {
            setRole("interviewer");
            setStep(0);
          }
        }}
      >
        Interviewer
      </button>
    </div>
  </div>
);

export default AuthTopBar;
