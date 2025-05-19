import { Route, Routes } from "react-router-dom";
import Home from "@/pages/dashboard/Index";
import Layout from "@/components/Layout";

export function HomeRoute() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}
