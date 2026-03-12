import SidebarNavItem from "./SidebarNavItem";

export default function SidebarNavSection({
  section,
  currentView,
  onViewChange,
  isExpanded,
}) {
  return (
    <>
      <div
        className={`px-4 ${section.sectionPadding} opacity-30 text-[9px] font-black uppercase tracking-[0.2em]`}
      >
        {section.label}
      </div>
      {section.items.map((item) => (
        <SidebarNavItem
          key={item.id}
          item={item}
          isActive={currentView === item.id}
          onClick={onViewChange}
          isExpanded={isExpanded}
        />
      ))}
    </>
  );
}
