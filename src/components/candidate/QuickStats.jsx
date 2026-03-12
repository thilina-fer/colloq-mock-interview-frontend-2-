import { Clock, Shield, Target } from "lucide-react";

import StatCard from "./StatCard";

const QuickStats = ({ pendingCount, completedCount }) => {
  const stats = [
    { label: "Avg AI Score", value: "86%", icon: Target },
    { label: "Pending Protocols", value: pendingCount, icon: Clock },
    { label: "Total Verified", value: completedCount, icon: Shield },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export default QuickStats;
