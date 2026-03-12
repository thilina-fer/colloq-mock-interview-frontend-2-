import RoleToggle from "./RoleToggle";

// Sticky top navigation bar with the step/auth label and role switcher.
const AuthTopBar = ({ isLogin, step, role, setRole, setStep, loading }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 bg-white border-b border-[#E8E5DF]">
    <span className="font-['DM_Mono'] text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-neutral-400">
      {isLogin
        ? "— Authentication"
        : `— STEP 0${step + 1} / 0${isLogin ? 1 : role === "interviewer" ? 3 : 2}`}
    </span>
    <RoleToggle
      role={role}
      setRole={setRole}
      setStep={setStep}
      loading={loading}
    />
  </div>
);

export default AuthTopBar;
