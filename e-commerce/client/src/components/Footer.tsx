import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 w-full bg-black py-16 px-8">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between md:gap-0">
        <div className="flex flex-col gap-6 items-center md:items-start">
        <Link href="/" className="flex items-center">
            <Image src="/logo-slyg.png" alt="SLY SHOP" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
              SLY SHOP.
          </p>
        </Link>
          <p className="text-sm text-gray-400">© 2025 SLY SHOP.</p>
        <p className="text-sm text-gray-400">Todos los derechos reservados.</p>
      </div>
        <div className="flex flex-col gap-6 text-sm text-gray-400 items-center md:items-start">
          <p className="text-sm text-amber-50 font-semibold">Enlaces</p>
          <Link href="/" className="hover:text-white transition-colors">Página principal</Link>
          <Link href="/" className="hover:text-white transition-colors">Contacto</Link>
          <Link href="/" className="hover:text-white transition-colors">Términos de servicio</Link>
          <Link href="/" className="hover:text-white transition-colors">Política de privacidad</Link>
        </div>
        <div className="flex flex-col gap-6 text-sm text-gray-400 items-center md:items-start">
          <p className="text-sm text-amber-50 font-semibold">Productos</p>
          <Link href="/" className="hover:text-white transition-colors">Todos los productos</Link>
          <Link href="/" className="hover:text-white transition-colors">Novedades</Link>
          <Link href="/" className="hover:text-white transition-colors">Más vendidos</Link>
          <Link href="/" className="hover:text-white transition-colors">Ofertas</Link>
      </div>
        <div className="flex flex-col gap-6 text-sm text-gray-400 items-center md:items-start">
          <p className="text-sm text-amber-50 font-semibold">Información</p>
          <Link href="/" className="hover:text-white transition-colors">Acerca de</Link>
          <Link href="/" className="hover:text-white transition-colors">Contacto</Link>
          <Link href="/" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/" className="hover:text-white transition-colors">Programa de afiliados</Link>
      </div>
      </div>
    </div>
  );
};

export default Footer;
