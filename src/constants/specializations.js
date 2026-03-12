import { Layout, Database, Cpu, Globe, Code2 } from "lucide-react";

// Icon is stored as a component reference so this file stays plain JS
// (no JSX). Render with <spec.Icon size={14} /> in components.
export const SPECS = [
  { id: "frontend", name: "Frontend", Icon: Layout },
  { id: "backend", name: "Backend", Icon: Database },
  { id: "mobile", name: "Mobile", Icon: Cpu },
  { id: "devops", name: "DevOps", Icon: Globe },
  { id: "ai", name: "AI / ML", Icon: Cpu },
  { id: "fullstack", name: "Full Stack", Icon: Code2 },
];

export default SPECS;
