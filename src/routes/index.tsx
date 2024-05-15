import { Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "../pages/profile";
import { Home } from "../pages/home";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile /> } />

      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};