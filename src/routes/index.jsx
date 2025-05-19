import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import GuestOnlyRoute from "@/components/GuestOnlyRoute";
import Signin from "@/pages/signin/Index";
import { HomeRoute } from "./HomeRoute";
import GuardRoute from "@/components/GuardRoute";
import { CategoryRoute } from "./CategoryRoute";

export function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <GuestOnlyRoute>
            <Signin />
          </GuestOnlyRoute>
        }
      />
      <Route path="/" element={<GuardRoute />}>
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoryRoute />} />
        <Route path="" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}
