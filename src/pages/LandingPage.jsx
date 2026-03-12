import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { COLORS } from "../constants/colors";

import DualValueSection from "../components/landingpage/DualValueSection";
import FAQSection from "../components/landingpage/FAQSection";
import FooterCTA from "../components/landingpage/FooterCTA";
import HeroSection from "../components/landingpage/HeroSection";
import Navbar from "../components/landingpage/Navbar";
import PricingSection from "../components/landingpage/PricingSection";
import ProcessSection from "../components/landingpage/ProcessSection";
import TrustBar from "../components/landingpage/TrustBar";

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Unbounded:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToAuth = () => navigate("/auth");

  return (
    <div
      className="min-h-screen font-['DM_Sans'] selection:text-white overflow-x-hidden"
      style={{ backgroundColor: COLORS.softBg, color: COLORS.dark }}
    >
      <Navbar scrolled={scrolled} onGetStarted={goToAuth} />
      <HeroSection onGetStarted={goToAuth} />
      <TrustBar />
      <ProcessSection />
      <DualValueSection />
      <PricingSection onGetStarted={goToAuth} />
      <FAQSection />
      <FooterCTA onGetStarted={goToAuth} />

      <style>{`
        ::selection {
          background: ${COLORS.red};
          color: white;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 50s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
