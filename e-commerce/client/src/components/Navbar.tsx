import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-700">
      <div className="mx-auto p-4 sm:px-6 lg:px-8 max-w-screen-2xl flex items-center justify-between">
        {/* LEFT */}
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="/logo-slyg.png"
            alt="SLY SHOP"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            SLY SHOP
          </p>
        </Link>
        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <SearchBar />
          <Link href="/">
            <Home className="w-4 h-4 text-white hover:text-gray-300"/>
          </Link>
          <Bell className="w-4 h-4 text-white hover:text-gray-300"/>
          <ShoppingCartIcon/>
          <Link href="/login" className="text-white font-medium hover:text-gray-300">Iniciar sesión</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
