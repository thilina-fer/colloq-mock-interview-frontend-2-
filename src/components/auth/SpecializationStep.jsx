// Step 2 — Specialization tile grid.
// Each spec's Icon is a Lucide component reference rendered at size 14.
const SpecializationStep = ({ specs, form, toggleSpec }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[360px] sm:max-h-[250px] overflow-y-auto pr-1">
    {specs.map(({ id, name, Icon }) => {
      const selected = form.specializations.includes(id);
      return (
        <button
          key={id}
          onClick={() => toggleSpec(id)}
          className={`flex flex-col items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 border-[2px] transition-all text-left ${
            selected
              ? "bg-[#1A1A1A] border-[#1A1A1A] text-[#F5F3EE]"
              : "bg-[#F8F6F1] border-[#E8E5DF] text-neutral-600"
          }`}
        >
          <div className={selected ? "text-[#E63946]" : "text-neutral-400"}>
            <Icon size={14} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-tight">
            {name}
          </span>
        </button>
      );
    })}
  </div>
);

export default SpecializationStep;
