"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pinWrapRef.current) return;

    const pinWrap = pinWrapRef.current;
    
    const setupAnimation = () => {
      // Forzar un recalculo del layout
      pinWrap.style.width = 'max-content';
      
      // Pequeño delay para asegurar que las imágenes estén renderizadas
      setTimeout(() => {
        const pinWrapWidth = pinWrap.scrollWidth;
        const horizontalScrollLength = pinWrapWidth - window.innerWidth;

        if (horizontalScrollLength > 0) {
          // Limpiar animaciones previas
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          
          // Animación horizontal con GSAP ScrollTrigger
          gsap.to(pinWrap, {
            x: -horizontalScrollLength,
            ease: "none",
            scrollTrigger: {
              trigger: "#sectionPin",
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${horizontalScrollLength}`,
              invalidateOnRefresh: true,
              onRefresh: () => {
                // Recalcular en cada refresh
                const newPinWrapWidth = pinWrap.scrollWidth;
                const newHorizontalScrollLength = newPinWrapWidth - window.innerWidth;
                return newHorizontalScrollLength;
              }
            },
          });
        }
        
        ScrollTrigger.refresh();
      }, 100);
    };

    // Configurar la animación
    setupAnimation();

    // Escuchar cambios de tamaño de ventana
    const handleResize = () => {
      ScrollTrigger.refresh();
      setupAnimation();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="horizontal-scroll-container" ref={containerRef}>
      <section id="sectionPin">
        <div className="pin-wrap" ref={pinWrapRef}>
          <div>
            <h2>
              Explora nuestra colección streetwear con un scroll horizontal innovador
            </h2>
          </div>
          <div className="relative w-[60vw] h-[70vh]">
            <Image
              src="/pics/golden-goose2.jpg"
              alt="Golden Goose Sneakers"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[60vw] h-[70vh]">
            <Image
              src="/pics/valentino.jpg"
              alt="Streetwear Collection 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[60vw] h-[70vh]">
            <Image
              src="/pics/nike3.jpg"
              alt="Streetwear Collection 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2>
              SLY SHOP - Tu destino para el mejor streetwear urbano
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll; 