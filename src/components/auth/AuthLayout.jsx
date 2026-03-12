// Outer shell: full-screen two-panel flex row.
// Receives the sidebar node and the right-panel children.
const AuthLayout = ({ sidebar, children }) => (
  <div className="h-screen w-full flex font-['DM_Sans'] antialiased overflow-hidden bg-white">
    {sidebar}
    {children}
  </div>
);

export default AuthLayout;
