import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="slyg shopp" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            SLYG SHOPP.
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 slyg shopp.</p>
        <p className="text-sm text-gray-400">Todos los derechos reservados.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Enlaces</p>
        <Link href="/">Página principal</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Términos de servicio</Link>
        <Link href="/">Política de privacidad</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Productos</p>
        <Link href="/">Todos los productos</Link>
        <Link href="/">Novedades</Link>
        <Link href="/">Más vendidos</Link>
        <Link href="/">Ofertas</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Información</p>
        <Link href="/">Acerca de</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Programa de afiliados</Link>
      </div>
    </div>
  );
};

export default Footer;
