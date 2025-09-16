"use client";

import { useEffect, useRef } from "react";
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
    
    // Esperar a que las imágenes se carguen para calcular el ancho correcto
    const images = pinWrap.querySelectorAll('img');
    let loadedImages = 0;
    
    const setupAnimation = () => {
      const pinWrapWidth = pinWrap.scrollWidth;
      const horizontalScrollLength = pinWrapWidth - window.innerWidth;

      if (horizontalScrollLength > 0) {
        // Animación horizontal con GSAP ScrollTrigger
        const scrollTween = gsap.to(pinWrap, {
          x: -horizontalScrollLength,
          ease: "none",
          scrollTrigger: {
            trigger: "#sectionPin",
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${horizontalScrollLength}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Opcional: agregar efectos adicionales durante el scroll
            }
          },
        });

        return scrollTween;
      }
    };

    // Si hay imágenes, esperar a que se carguen
    if (images.length > 0) {
      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              setupAnimation();
            }
          };
        }
      });
      
      if (loadedImages === images.length) {
        setupAnimation();
      }
    } else {
      setupAnimation();
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.refresh();
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
          <img
            src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt="Streetwear Collection 1"
          />
          <img
            src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt="Streetwear Collection 2"
          />
          <img
            src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt="Streetwear Collection 3"
          />
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