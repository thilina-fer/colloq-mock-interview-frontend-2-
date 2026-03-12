import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { COLORS } from "../../constants/colors";
import { SPECS } from "../../constants/specializations";
import { STEPS } from "../../constants/authSteps";

import AuthAccountStep from "./AuthAccountStep";
import AuthActions from "./AuthActions";
import AuthHeader from "./AuthHeader";
import AuthProfileStep from "./AuthProfileStep";
import AuthSidebar from "./AuthSidebar";
import AuthSpecializationStep from "./AuthSpecializationStep";
import AuthSuccessAlert from "./AuthSuccessAlert";
import AuthTopBar from "./AuthTopBar";

const AuthView = () => {
  const navigate = useNavigate();
  const onBack = () => navigate("/");
  const [role, setRole] = useState("candidate");
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    company: "",
    designation: "",
    experience: "",
    githubUrl: "",
    linkedinUrl: "",
    specializations: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const toggleSpec = (id) => {
    setForm((p) => ({
      ...p,
      specializations: p.specializations.includes(id)
        ? p.specializations.filter((s) => s !== id)
        : [...p.specializations, id],
    }));
  };

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.email) e.email = "Required";
      if (!form.password) e.password = "Required";
      if (!isLogin && !form.name) e.name = "Required";
    } else if (step === 1) {
      if (!form.bio) e.bio = "Required";
      if (role === "interviewer") {
        if (!form.company) e.company = "Required";
        if (!form.designation) e.designation = "Required";
        if (!form.experience) e.experience = "Required";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const finish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSuccess(true);
    setLoading(false);
  };

  const next = () => {
    if (!validate()) return;
    if (isLogin) {
      finish();
      return;
    }
    if (step === 0) setStep(1);
    else if (step === 1 && role === "interviewer") setStep(2);
    else finish();
  };

  const googleAuth = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    if (isLogin) finish();
    else setStep(1);
  };

  const ctaLabel = isLogin
    ? "Sign In"
    : step === 2 || (step === 1 && role === "candidate")
      ? "Complete"
      : "Continue";

  return (
    <div className="h-screen w-full flex font-['DM_Sans'] antialiased overflow-hidden bg-white animate-in fade-in duration-700">
      <AuthSidebar step={step} steps={STEPS} onBack={onBack} />

      <div className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">
        <button
          onClick={onBack}
          className="absolute top-10 left-10 p-4 hover:bg-neutral-50 rounded-full transition-all duration-300 z-30 lg:hidden group"
        >
          <ArrowLeft
            size={24}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>

        <AuthTopBar
          isLogin={isLogin}
          step={step}
          role={role}
          setRole={setRole}
          setStep={setStep}
          loading={loading}
        />

        <div className="flex-1 flex justify-center items-center w-full px-6 md:px-16 lg:px-0">
          <div className="w-full max-w-2xl">
            <AuthHeader isLogin={isLogin} step={step} steps={STEPS} />

            {success && <AuthSuccessAlert />}

            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {step === 0 && (
                <AuthAccountStep
                  isLogin={isLogin}
                  form={form}
                  handleChange={handleChange}
                  errors={errors}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              )}

              {step === 1 && (
                <AuthProfileStep
                  role={role}
                  form={form}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}

              {step === 2 && (
                <AuthSpecializationStep
                  specs={SPECS}
                  form={form}
                  toggleSpec={toggleSpec}
                />
              )}

              <AuthActions
                step={step}
                loading={loading}
                ctaLabel={ctaLabel}
                isLogin={isLogin}
                next={next}
                googleAuth={googleAuth}
                setStep={setStep}
                onBack={onBack}
                setIsLogin={setIsLogin}
                setErrors={setErrors}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lg\\:hidden {
          color: ${COLORS.dark};
        }
      `}</style>
    </div>
  );
};

export default AuthView;
