import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import AuthLogin from "./pages/auth/Login";
import Authregister from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./pages/startup/Dashboard";
import AdminDashboard from "./pages/admin/AdminDash";
import EIRGrantPage from "./pages/admin/EirGrant";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "./components/ui/skeleton";
import Unauth from "./pages/Unauth";
import { NotFound } from "./pages/NotFound";
import { CheckAuth } from "./components/common/Check-auth";
import AuthLayout from "./components/auth/Layout";
import KYC from "./pages/startup/Kyc";
import ProgressForm from "./components/startup/ProgressForm";
import Notification from "./components/startup/Notification";
import StartupLayout from "./components/startup/Layout";
import Home from "./pages/startup/Home";
import StartupProfile from "./pages/auth/Profile";
import AdminStartupLayout from "./components/admin/Layout";
import AdminHome from "./components/admin/Home";
import NotificationPage from "./pages/admin/Notification";
import ReportsPage from "./pages/admin/ReportPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  let { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
  }

  // if(isLoading){return <div>Loading</div>}
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white"></div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<Authregister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminStartupLayout />
            </CheckAuth>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="home" element={<AdminHome />} />
          <Route path="kycs" element={<KYC />} />
          <Route path="progresses" element={<ProgressForm />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="notifications" element={<NotificationPage />} />
        </Route>
        <Route
          path="/startup"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <StartupLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="kyc" element={<KYC />} />
          <Route path="progress" element={<ProgressForm />} />
          <Route path="reports" element={<EIRGrantPage />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="account" element={<StartupProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<Unauth />} />
      </Routes>
    </>
  );
};

export default App;
