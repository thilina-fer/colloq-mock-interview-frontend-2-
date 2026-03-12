import { COLORS } from "../../constants/colors";

const AuthSpecializationStep = ({ specs, form, toggleSpec }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {specs.map((spec) => {
      const selected = form.specializations.includes(spec.id);
      return (
        <button
          key={spec.id}
          onClick={() => toggleSpec(spec.id)}
          className="flex flex-col items-start gap-4 p-6 border-2 transition-all duration-500 text-left hover:scale-[1.02]"
          style={{
            backgroundColor: selected ? COLORS.dark : COLORS.authInputBg,
            borderColor: selected ? COLORS.dark : COLORS.borderLight,
            color: selected ? COLORS.softBg : COLORS.muted600,
            boxShadow: selected ? "0 20px 30px rgba(26,26,26,0.2)" : undefined,
          }}
        >
          <div style={{ color: selected ? COLORS.red : "#D4D4D4" }}>
            <spec.Icon size={14} />
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.1em] font-['Unbounded'] leading-tight">
            {spec.name}
          </span>
        </button>
      );
    })}
  </div>
);

export default AuthSpecializationStep;
