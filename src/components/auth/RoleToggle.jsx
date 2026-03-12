// Candidate / Interviewer toggle switcher.
// Disables clicks while loading to prevent mid-request role changes.
const RoleToggle = ({ role, setRole, setStep, loading }) => (
  <div className="flex w-full sm:w-auto border-[2px] border-[#1A1A1A] bg-white">
    <button
      className={`flex-1 sm:flex-none px-3 sm:px-6 py-2 text-[9px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-widest uppercase transition-all ${
        role === "candidate"
          ? "bg-[#1A1A1A] text-[#F5F3EE]"
          : "text-[#1A1A1A] hover:bg-neutral-50 border-r-[2px] border-[#1A1A1A]"
      }`}
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
      className={`flex-1 sm:flex-none px-3 sm:px-6 py-2 text-[9px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-widest uppercase transition-all ${
        role === "interviewer"
          ? "bg-[#1A1A1A] text-[#F5F3EE]"
          : "text-[#1A1A1A] hover:bg-neutral-50"
      }`}
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
);

export default RoleToggle;
