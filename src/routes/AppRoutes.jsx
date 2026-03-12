import { BrowserRouter, Route, Routes } from "react-router";
import AuthView from "../components/landingpage/AuthView";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthView />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
