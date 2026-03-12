import { COLORS } from "../../constants/colors";

const AuthHeader = ({ isLogin, step, steps }) => (
  <div className="mb-12 animate-in fade-in slide-in-from-left-4 duration-700">
    <div
      className="font-['DM_Mono'] text-[12px] tracking-[0.4em] uppercase mb-4 font-bold italic"
      style={{ color: COLORS.red }}
    >
      {isLogin
        ? "// Sign In"
        : `// Sign Up ${steps[step] ? `- ${steps[step]}` : ""}`}
    </div>

    <h1
      className="font-['Unbounded'] text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase italic"
      style={{ color: COLORS.dark }}
    >
      {isLogin
        ? "Sign In to ColloQ."
        : step === 0
          ? "Create Account."
          : "Complete Profile."}
    </h1>
  </div>
);

export default AuthHeader;
