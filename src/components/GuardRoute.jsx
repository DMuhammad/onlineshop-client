import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/signin" replace />;

  return children || <Outlet />;
}
