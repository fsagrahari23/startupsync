import React, { useEffect, useState } from "react";
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
import { AdminstartupViewHeaderMenuItems } from "@/config";

function MenuItems() {
  const navigate = useNavigate();
  const handleNavigate = (categoryItem) => {
    switch (categoryItem.id) {
      case "reports":
        navigate("/admin/reports");
        break;
      case "notifications":
        navigate("/admin/notifications");
        break;
      default:
        navigate("/admin/home");
        break;
    }
  };
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {AdminstartupViewHeaderMenuItems.map((item) => {
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

const AdminDashboard = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">Admin</span>
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

export default AdminDashboard;
