import { useLocation, Navigate } from "react-router-dom";

export function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register"))
  ) {
    // eslint-disable-next-line react/prop-types
    if (user?.role === "admin") {
      return <Navigate to="/*" />;
    } else {
      return <Navigate to="/startup/home" />;
    }
  }
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("startup")
  ) {
    return <Navigate to="*" />;
  }
  return <>{children}</>;
}
