import { COLORS } from "../../constants/colors";

const StatCard = ({ label, value, icon: Icon }) => (
  <div
    className="bg-white border-2 p-6 flex items-center justify-between"
    style={{ borderColor: COLORS.dark }}
  >
    <div>
      <p className="font-['DM_Mono'] text-[10px] uppercase text-neutral-400 font-bold tracking-widest">
        {label}
      </p>
      <p className="font-['Unbounded'] text-2xl font-black uppercase">
        {value}
      </p>
    </div>
    <Icon style={{ color: COLORS.red }} size={24} />
  </div>
);

export default StatCard;
