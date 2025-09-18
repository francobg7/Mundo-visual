import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png" // Cambia esta ruta por la imagen que quieras usar
          alt="SLY SHOP Hero"
          fill
          className="object-cover object-top" // Cambia object-center por la posición que quieras
          priority
        />
      </div>
      
      {/* Overlay oscuro para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Contenido opcional */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">
            SLY SHOP
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Streetwear & Sneakers Collection
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 