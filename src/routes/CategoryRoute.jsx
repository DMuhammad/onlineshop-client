import { Route, Routes } from "react-router-dom";
import Category from "@/pages/categories/Index";
import Layout from "@/components/Layout";

export function CategoryRoute() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Category />} />
      </Routes>
    </Layout>
  );
}
