import { STEPS } from "../../constants/authSteps";

// Step section label + main heading above the form.
const AuthHeader = ({ isLogin, step }) => (
  <div className="mb-8">
    <div className="font-['DM_Mono'] text-[11px] text-[#E63946] tracking-[0.3em] uppercase mb-3">
      {isLogin ? "Welcome Back" : STEPS[step]}
    </div>
    <h1 className="font-['Unbounded'] text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
      {isLogin
        ? "Login to ColloQ."
        : step === 0
          ? "Create an account."
          : "About your role."}
    </h1>
  </div>
);

export default AuthHeader;
