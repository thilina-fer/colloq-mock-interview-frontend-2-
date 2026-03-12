import { useEffect, useRef, useState } from "react";

const Reveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
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

  const getInitialClass = () => {
    switch (animation) {
      case "fade-up":
        return "transform translate-y-8 opacity-0 transition-all";
      case "fade-in":
        return "opacity-0 transition-opacity";
      case "slide-left":
        return "transform -translate-x-8 opacity-0 transition-all";
      default:
        return "";
    }
  };

  const getVisibleClass = () => {
    if (!isVisible) return "";
    switch (animation) {
      case "fade-up":
        return "translate-y-0 opacity-100";
      case "fade-in":
        return "opacity-100";
      case "slide-left":
        return "translate-x-0 opacity-100";
      default:
        return "opacity-100";
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
      className={`${getInitialClass()} ${getVisibleClass()}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
