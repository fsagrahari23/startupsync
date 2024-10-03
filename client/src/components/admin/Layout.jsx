import AdminDashboard from "@/pages/admin/AdminDash";
import { Outlet } from "react-router-dom";

const AdminStartupLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header*/}
      <AdminDashboard />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminStartupLayout;
