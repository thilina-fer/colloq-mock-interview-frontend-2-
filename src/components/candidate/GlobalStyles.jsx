import { COLORS } from "../../constants/colors";

const GlobalStyles = () => (
  <style>{`
    *::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    *::-webkit-scrollbar-track {
      background: ${COLORS.softBg};
    }

    *::-webkit-scrollbar-thumb {
      background: ${COLORS.dark};
      border-radius: 0px;
    }

    *::-webkit-scrollbar-thumb:hover {
      background: ${COLORS.red};
    }

    .animate-in {
      animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
);

export default GlobalStyles;
