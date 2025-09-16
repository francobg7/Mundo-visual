"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, isHomepage = false }: { product: ProductType; isHomepage?: boolean }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    quantity: 1, // Cantidad individual
  });

  const { addToCart } = useCartStore();

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "quantity";
    value: string | number;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: productTypes.quantity,
      selectedSize: productTypes.size,
      selectedColor: "estándar", // Color por defecto
    });
    toast.success(`${productTypes.quantity} ${productTypes.quantity === 1 ? 'producto agregado' : 'productos agregados'} al carrito`)
  };

  return (
    <div className="border border-gray-200 hover:border-black transition-all duration-300 rounded-lg overflow-hidden bg-white">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/3]">
          <Image
            src={Object.values(product.images)[0]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        
        {/* Mostrar información completa solo si NO es homepage */}
        {!isHomepage && (
          <>
            {/* PRODUCT TYPES */}
            <div className="flex items-center gap-4 text-xs">
              {/* SIZES */}
              <div className="flex flex-col gap-1">
                <span className="text-gray-500">Tamaño</span>
                <select
                  name="size"
                  id="size"
                  className="ring ring-gray-300 rounded-md px-2 py-1"
                  onChange={(e) =>
                    handleProductType({ type: "size", value: e.target.value })
                  }
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              {/* QUANTITY */}
              <div className="flex flex-col gap-1">
                <span className="text-gray-500">Cantidad</span>
                <select
                  name="quantity"
                  id="quantity"
                  className="ring ring-gray-300 rounded-md px-2 py-1"
                  onChange={(e) =>
                    handleProductType({ type: "quantity", value: parseInt(e.target.value) })
                  }
                  value={productTypes.quantity}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                </select>
              </div>
            </div>
            {/* PRICE AND ADD TO CART BUTTON */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-md px-4 py-2 text-sm font-medium cursor-pointer flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Agregar al carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
