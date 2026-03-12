import { Star } from "lucide-react";
import { PRICING } from "../../constants/pricing";
import { COLORS } from "../../constants/colors";
import Reveal from "./Reveal";

const PricingSection = ({ onGetStarted }) => (
  <section id="pricing" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
    <Reveal animation="fade-up">
      <div className="text-center mb-32">
        <h2 className="font-['Unbounded'] text-4xl md:text-6xl font-black uppercase mb-6 italic">
          Investment
        </h2>
        <p
          className="font-['DM_Mono'] text-sm tracking-widest uppercase"
          style={{ color: COLORS.muted500 }}
        >
          The cost of the career you deserve.
        </p>
      </div>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-10">
      {PRICING.map((plan, i) => (
        <Reveal key={plan.name} animation="fade-up" delay={i * 200}>
          <div
            className={`group p-12 border-2 flex flex-col relative transition-all duration-500 hover:-translate-y-4 ${
              plan.popular
                ? "bg-white"
                : "bg-transparent hover:bg-white hover:shadow-xl"
            }`}
            style={{
              borderColor: COLORS.dark,
              boxShadow: plan.popular
                ? "20px 20px 0px 0px rgba(26,26,26,1)"
                : undefined,
            }}
          >
            {plan.popular && (
              <div
                className="absolute top-0 right-12 -translate-y-1/2 px-6 py-2 font-['Unbounded'] text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg"
                style={{ backgroundColor: COLORS.red, color: COLORS.softBg }}
              >
                Highest Value
              </div>
            )}

            <h3 className="font-['Unbounded'] text-2xl font-bold uppercase mb-4 transition-colors">
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-4xl font-['Unbounded'] font-black tracking-tighter">
                ${plan.price}
              </span>
              {plan.price !== "Custom" && (
                <span
                  className="font-['DM_Mono'] text-sm font-bold uppercase"
                  style={{ color: COLORS.muted400 }}
                >
                  /mo
                </span>
              )}
            </div>

            <ul className="space-y-5 mb-16 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 font-['DM_Mono'] text-[11px] italic border-b border-neutral-100 pb-3 leading-none group-hover:border-neutral-200 transition-colors"
                  style={{ color: COLORS.muted600 }}
                >
                  <Star
                    size={12}
                    style={{ color: COLORS.red }}
                    className="group-hover:rotate-45 transition-transform"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={onGetStarted}
              className={`w-full py-5 font-['Unbounded'] text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                plan.popular ? "hover:text-white" : "border-2"
              }`}
              style={{
                backgroundColor: plan.popular ? COLORS.dark : "transparent",
                color: plan.popular ? COLORS.white : COLORS.dark,
                borderColor: COLORS.dark,
              }}
            >
              Select Plan
            </button>
          </div>
        </Reveal>
      ))}
    </div>

    <style>{`
      #pricing .group:hover h3 {
        color: ${COLORS.red};
      }
      #pricing button:hover {
        background: ${COLORS.dark};
        color: white;
      }
      #pricing .group button:hover {
        background: ${COLORS.red};
      }
    `}</style>
  </section>
);

export default PricingSection;
