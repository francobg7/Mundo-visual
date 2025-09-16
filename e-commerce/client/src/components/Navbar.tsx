"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const { cart, hasHydrated } = useCartStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const totalItems = hasHydrated ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black h-16 flex items-center justify-between px-4 md:px-6">
        {/* LEFT SIDE - Hamburger + Search */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:opacity-70 hover:scale-105 transition-all duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
          <button className="text-white hover:opacity-70 hover:scale-105 transition-all duration-200">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* CENTER - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity duration-200">
        <Image
          src="/logo-slyg.png"
              alt="SLY SHOP"
              width={32}
              height={32}
              className="w-8 h-8"
        />
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wider">
              SLY SHOP
            </h1>
      </Link>
        </div>

        {/* RIGHT SIDE - Cart */}
        <div className="flex items-center">
          <Link href="/cart" className="relative text-white hover:opacity-70 hover:scale-105 transition-all duration-200">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
        </Link>
      </div>
    </nav>

      {/* Sidebar Menu */}
      <SidebarMenu 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
};

export default Navbar;
