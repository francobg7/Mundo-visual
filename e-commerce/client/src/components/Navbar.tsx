import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-black pb-4 bg-white">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo-slyg.png"
          alt="SLYG SHOPP"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider text-black">
          SLYG SHOPP
        </p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-black hover:text-gray-600"/>
        </Link>
        <Bell className="w-4 h-4 text-black hover:text-gray-600"/>
        <ShoppingCartIcon/>
        <Link href="/login" className="text-black font-medium hover:text-gray-600">Iniciar sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;
