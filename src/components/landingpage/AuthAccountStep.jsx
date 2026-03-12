import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { COLORS } from "../../constants/colors";

const INPUT_BASE = {
  backgroundColor: COLORS.authInputBg,
  fontFamily: "DM Sans, sans-serif",
  fontWeight: 500,
};

const AuthAccountStep = ({
  isLogin,
  form,
  handleChange,
  errors,
  showPassword,
  setShowPassword,
}) => (
  <div className="space-y-6">
    {!isLogin && (
      <div className="space-y-2 group">
        <label
          className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono'] group-focus-within:text-[#E63946] transition-colors"
          style={{ color: COLORS.muted400 }}
        >
          Identity Name
        </label>
        <div className="relative group">
          <User
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: COLORS.muted400 }}
          />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full py-4 pl-16 pr-6 border-2 outline-none transition-all duration-300 focus:bg-white focus:shadow-xl"
            style={{
              ...INPUT_BASE,
              borderColor: errors.name ? COLORS.red : COLORS.borderLight,
            }}
            placeholder="Jane Smith"
          />
        </div>
      </div>
    )}

    <div className="space-y-2 group">
      <label
        className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono'] group-focus-within:text-[#E63946] transition-colors"
        style={{ color: COLORS.muted400 }}
      >
        Secure Email
      </label>
      <div className="relative">
        <Mail
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2"
          style={{ color: COLORS.muted400 }}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full py-4 pl-16 pr-6 border-2 outline-none transition-all duration-300 focus:bg-white focus:shadow-xl"
          style={{
            ...INPUT_BASE,
            borderColor: errors.email ? COLORS.red : COLORS.borderLight,
          }}
          placeholder="name@colloq.io"
        />
      </div>
    </div>

    <div className="space-y-2 group">
      <label
        className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono'] group-focus-within:text-[#E63946] transition-colors"
        style={{ color: COLORS.muted400 }}
      >
        Credential Token
      </label>
      <div className="relative">
        <Lock
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2"
          style={{ color: COLORS.muted400 }}
        />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full py-4 pl-16 pr-16 border-2 outline-none transition-all duration-300 focus:bg-white focus:shadow-xl"
          style={{
            ...INPUT_BASE,
            borderColor: errors.password ? COLORS.red : COLORS.borderLight,
          }}
          placeholder="••••••••"
        />
        <button
          type="button"
          className="absolute right-5 top-1/2 -translate-y-1/2 transition-all"
          style={{ color: COLORS.muted400 }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  </div>
);

export default AuthAccountStep;
