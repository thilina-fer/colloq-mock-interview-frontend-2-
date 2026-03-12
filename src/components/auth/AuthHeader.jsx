import { STEPS } from "../../constants/authSteps";

// Step section label + main heading above the form.
const AuthHeader = ({ isLogin, step }) => (
  <div className="mb-6 md:mb-8">
    <div className="font-['DM_Mono'] text-[10px] sm:text-[11px] text-[#E63946] tracking-[0.24em] sm:tracking-[0.3em] uppercase mb-2.5 sm:mb-3">
      {isLogin ? "Welcome Back" : STEPS[step]}
    </div>
    <h1 className="font-['Unbounded'] text-[28px] sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
      {isLogin
        ? "Login to ColloQ."
        : step === 0
          ? "Create an account."
          : "About your role."}
    </h1>
  </div>
);

export default AuthHeader;
