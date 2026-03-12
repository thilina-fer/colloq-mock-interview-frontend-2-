import { useEffect, useRef, useState } from "react";

const Reveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0 translate-y-8";

    switch (animation) {
      case "fade-up":
        return "opacity-100 translate-y-0";
      case "fade-in":
        return "opacity-100";
      case "slide-left":
        return "opacity-100 translate-x-0";
      case "slide-right":
        return "opacity-100 translate-x-0";
      case "zoom-in":
        return "opacity-100 scale-100";
      default:
        return "opacity-100 translate-y-0";
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case "fade-up":
        return "transform translate-y-12 transition-all";
      case "fade-in":
        return "transition-opacity";
      case "slide-left":
        return "transform -translate-x-12 transition-all";
      case "slide-right":
        return "transform translate-x-12 transition-all";
      case "zoom-in":
        return "transform scale-90 transition-all";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`${getInitialClass()} ${getAnimationClass()}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
