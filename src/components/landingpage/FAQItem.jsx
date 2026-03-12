import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { COLORS } from "../../constants/colors";

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: `1px solid ${COLORS.dark10}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 sm:py-6 flex justify-between items-center text-left group gap-4"
      >
        <span className="font-['Unbounded'] text-xs sm:text-sm font-bold uppercase transition-colors leading-snug">
          {q}
        </span>
        {open ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-40 pb-6" : "max-h-0"}`}
      >
        <p
          className="font-['DM_Mono'] text-xs leading-relaxed"
          style={{ color: COLORS.muted500 }}
        >
          {a}
        </p>
      </div>

      <style>{`
        button:hover span {
          color: ${COLORS.red};
        }
      `}</style>
    </div>
  );
};

export default FAQItem;
