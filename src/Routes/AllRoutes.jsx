import { Routes, Route } from "react-router-dom";
import { ConnectionForm } from "../component/form/ConnectionForm";
import { LoginForm } from "../component/form/LoginForm";
import { Dashboard } from "../pages/Dashboard";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard/:page" element={<Dashboard />} />
    </Routes>
  );
};
