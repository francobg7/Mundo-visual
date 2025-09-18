import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] flex">
      {/* Mitad izquierda - Imagen */}
      <div className="w-1/2 h-full relative overflow-hidden">
        <Image
          src="/hero-left.jpg" // Aquí pondrás tu imagen
          alt="SLY SHOP Left"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay para la imagen */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Mitad derecha - Video */}
      <div className="w-1/2 h-full relative overflow-hidden">
        <video
          className="w-full h-full object-contain" // Cambia object-cover por object-contain
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero2.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Overlay para el video */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Texto centrado sobre ambas mitades */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider drop-shadow-2xl">
            SLY SHOP
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-lg">
            Streetwear & Sneakers Collection
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 