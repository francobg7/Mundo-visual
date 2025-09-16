import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-700 pb-4 bg-black px-4 py-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
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
    </nav>
  );
};

export default Navbar;
