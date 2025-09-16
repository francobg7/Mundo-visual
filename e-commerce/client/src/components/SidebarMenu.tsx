"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Search, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevenir scroll del body
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-black">SLY SHOP</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* SHOP Section */}
              <div>
                <h3 className="text-lg font-bold text-black mb-4">SHOP</h3>
                <div className="space-y-3 ml-4">
                  <Link 
                    href="/products?category=sneakers" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    SNEAKERS
                  </Link>
                  <Link 
                    href="/products?category=streetwear" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    STREETWEAR
                  </Link>
                  <Link 
                    href="/products?category=accesorios-lujo" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    ACCESORIOS
                  </Link>
                  <Link 
                    href="/products" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    TODOS LOS PRODUCTOS
                  </Link>
                </div>
              </div>

              {/* BRANDS Section */}
              <div>
                <h3 className="text-lg font-bold text-black mb-4">BRANDS</h3>
                <div className="space-y-3 ml-4">
                  <Link 
                    href="/products?brand=jordan" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    JORDAN
                  </Link>
                  <Link 
                    href="/products?brand=nike" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    NIKE
                  </Link>
                  <Link 
                    href="/products?brand=adidas" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    ADIDAS
                  </Link>
                  <Link 
                    href="/products?brand=supreme" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    SUPREME
                  </Link>
                </div>
              </div>

              {/* ABOUT Section */}
              <div>
                <h3 className="text-lg font-bold text-black mb-4">ABOUT</h3>
                <div className="space-y-3 ml-4">
                  <Link 
                    href="/about" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    NUESTRA HISTORIA
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    CONTACTO
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={onClose}
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              {/* SELL TO US Section */}
              <div>
                <Link 
                  href="/sell" 
                  className="block text-lg font-bold text-black hover:text-gray-700 transition-colors"
                  onClick={onClose}
                >
                  SELL TO US
                </Link>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <div className="flex items-center border-b border-gray-300 pb-2">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto p-6 border-t">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarMenu; 