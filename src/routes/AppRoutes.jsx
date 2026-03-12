import { BrowserRouter, Route, Routes } from "react-router";
import AuthView from "../components/landingpage/AuthView";
import LandingPage from "../pages/LandingPage";
import CandidateDashboard from "../pages/CandidateDashboard";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthView />} />
      <Route path="/candidate" element={<CandidateDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
