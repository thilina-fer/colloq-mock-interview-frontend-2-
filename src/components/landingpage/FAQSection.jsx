import { FAQ } from "../../constants/faq";
import { COLORS } from "../../constants/colors";
import FAQItem from "./FAQItem";
import Reveal from "./Reveal";

const FAQSection = () => (
  <section className="py-16 sm:py-24 md:py-40 px-5 sm:px-6 md:px-12 max-w-4xl mx-auto">
    <Reveal animation="fade-up">
      <div className="text-center mb-10 sm:mb-16 md:mb-20">
        <h2 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase mb-4 italic">
          Protocol FAQ
        </h2>
        <div
          className="h-1 w-12 mx-auto"
          style={{ backgroundColor: COLORS.red }}
        />
      </div>
    </Reveal>
    <div className="space-y-4">
      {FAQ.map((item, i) => (
        <Reveal key={item.q} animation="fade-in" delay={i * 100}>
          <FAQItem {...item} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default FAQSection;
