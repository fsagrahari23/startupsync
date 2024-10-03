import React, { useEffect, useState } from "react";
import ProgressChart from "@/components/startup/ProgressChart";
import DashboardCard from "@/components/startup/DashBoardCard";
import Sidebar from "@/components/startup/Navbar";
import { FaUsers, FaFileAlt, FaChartLine, FaBars } from "react-icons/fa";
import { startupViewHeaderMenuItems } from "@/config";
import { Label } from "@radix-ui/react-label";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { HousePlug, LogOut, Menu, UserCog } from "lucide-react";
import { logOutUser } from "@/store/auth-slice";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function MenuItems() {
  const navigate = useNavigate();
  const handleNavigate = (categoryItem) => {
    switch (categoryItem.id) {
      case "kyc":
        // Handle KYC navigation
        navigate("/startup/kyc");
        break;
      case "progress":
        // Handle Progress navigation
        navigate("/startup/progress");
        break;
      case "reports":
        // Handle Reports navigation
        navigate("/startup/reports");
        break;
      case "notifications":
        // Handle Notifications navigation
        navigate("/startup/notifications");
        break;
      case "bidding":
        // Handle Bidding navigation
        navigate("/startup/user-bidding");
        break;
      case "rules":
        // Handle Bidding navigation
        navigate("/bidding/rules");
        break;

      default:
        // Handle default navigation
        navigate("/startup/home");
        break;
    }
  };
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {startupViewHeaderMenuItems.map((item) => {
        return (
          <Label
            onClick={() => handleNavigate(item)}
            key={item.id}
            className="text-sm font-medium"
          >
            <span>{item.label}</span>
          </Label>
        );
      })}
    </nav>
  );
}
function HeaderRightContain() {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cart = cartItems.items;

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold uppercase">
              {user.username}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user.username}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/startup/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => dispatch(logOutUser())}>
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

const Dashboard = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">StartUp</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden sm:block"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <SheetHeader className="border-b px-3 py-4">
              <MenuItems />
              <HeaderRightContain />
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>
        <div className="hidden lg:block">
          <HeaderRightContain />
        </div>
      </div>
    </header>
  );
};

export default Dashboard;
