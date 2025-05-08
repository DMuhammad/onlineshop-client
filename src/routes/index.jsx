import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "@/pages/dashboard/Index";

export function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="dashboard/" element={<Dashboard />} />
    </Routes>
  );
}
