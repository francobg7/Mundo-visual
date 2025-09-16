"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type Slide = {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryLink: string;
  ctaSecondaryLink: string;
  backgroundImage: string;
  modelImage?: string;
};

const slides: Slide[] = [
  {
    title: "SLY SHOP",
    description: "Encuentra tu estilo urbano con piezas únicas y auténticas.",
    ctaPrimary: "Shop Now",
    ctaSecondary: "Ver Colección",
    ctaPrimaryLink: "/products",
    ctaSecondaryLink: "/products?category=streetwear",
    backgroundImage: "/hero-bg-1.jpg",
    modelImage: "/model-1.png",
  },
  {
    title: "NEW DROP",
    description: "Últimas prendas de temporada disponibles ahora mismo.",
    ctaPrimary: "Explorar",
    ctaSecondary: "Detalles",
    ctaPrimaryLink: "/products",
    ctaSecondaryLink: "/products?category=sneakers",
    backgroundImage: "/hero-bg-2.jpg",
    modelImage: "/model-2.png",
  },
  {
    title: "STREETWEAR",
    description: "Eleva tu look con la mejor selección urbana del mercado.",
    ctaPrimary: "Comprar",
    ctaSecondary: "Explorar",
    ctaPrimaryLink: "/products",
    ctaSecondaryLink: "/products?category=accesorios-lujo",
    backgroundImage: "/hero-bg-3.jpg",
    modelImage: "/model-3.png",
  },
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-between bg-black text-white overflow-hidden"
      style={{
        backgroundImage: `url('${slide.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease-in-out",
      }}
    >
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido principal - Overlay con carrusel */}
      <div className="relative z-10 bg-black/70 backdrop-blur-sm p-8 md:p-12 max-w-lg ml-4 md:ml-12 rounded-2xl border border-gray-800 shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wider leading-tight">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          {slide.description}
        </p>
        
        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href={slide.ctaPrimaryLink}>
            <button className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg">
              {slide.ctaPrimary}
            </button>
          </Link>
          <Link href={slide.ctaSecondaryLink}>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
              {slide.ctaSecondary}
            </button>
          </Link>
        </div>

        {/* Indicadores del carrusel */}
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i === current ? "bg-yellow-400 scale-125" : "bg-gray-500 hover:bg-gray-300"
              }`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Imagen decorativa del modelo (a la derecha) */}
      {slide.modelImage && (
        <div className="hidden lg:block absolute right-8 xl:right-16 bottom-0 z-10">
          <img
            src={slide.modelImage}
            alt="Modelo streetwear"
            className="h-[75vh] xl:h-[80vh] object-contain drop-shadow-2xl transition-opacity duration-800"
            style={{
              filter: "drop-shadow(0 0 20px rgba(0,0,0,0.8))",
            }}
          />
        </div>
      )}

      {/* Elementos decorativos adicionales */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-yellow-400/30 rotate-45 hidden xl:block"></div>
      <div className="absolute bottom-20 left-1/2 w-16 h-16 border-2 border-white/20 rotate-12 hidden xl:block"></div>

      {/* Navegación manual (flechas) */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Siguiente slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection; 