"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  shortDescription?: string;
  sizes?: string[];
  colors?: string[];
  images?: Record<string, string>;
  description?: string;
  category?: string;
};

type ProductList3DProps = {
  products: Product[];
  className?: string;
};

const ProductList3D: React.FC<ProductList3DProps> = ({ products, className = "" }) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (product: Product) => {
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      shortDescription: product.shortDescription || "",
      description: product.description || product.shortDescription || "",
      sizes: product.sizes || ["M"],
      colors: product.colors || ["estándar"],
      images: product.images || { default: product.image },
      category: product.category || "general",
      quantity: 1,
      selectedSize: product.sizes?.[0] || "M",
      selectedColor: "estándar"
    };
    
    addToCart(cartProduct);
    toast.success("Producto agregado al carrito");
  };

  return (
    <div className={`p-8 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <CardContainer key={product.id} className="inter-var">
            <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border border-gray-200 w-auto sm:w-[25rem] h-auto rounded-xl p-8">
              {/* Imagen del producto */}
              <CardItem
                translateZ="50"
                className="w-full mt-4"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover/card:shadow-xl"
                  />
                </div>
              </CardItem>

              {/* Nombre del producto */}
              <CardItem
                translateZ="40"
                className="text-2xl font-bold text-neutral-800 mt-6"
              >
                {product.name}
              </CardItem>

              {/* Descripción corta (si existe) */}
              {product.shortDescription && (
                <CardItem
                  as="p"
                  translateZ="30"
                  className="text-neutral-500 text-base max-w-sm mt-3"
                >
                  {product.shortDescription}
                </CardItem>
              )}

              {/* Precio */}
              <CardItem
                translateZ="40"
                className="text-3xl font-bold text-neutral-900 mt-4"
              >
                ${product.price.toFixed(2)}
              </CardItem>

              {/* Botones de acción */}
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/products/${product.id}`}
                  className="px-6 py-3 rounded-xl text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
                >
                  Ver más
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-3 rounded-xl bg-neutral-100 text-black hover:bg-neutral-200 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ProductList3D; 