import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

// Productos de streetwear y sneakers
const products: ProductsType = [
  // Sneakers
  {
    id: 1,
    name: "Nike Air Jordan 1 Retro High",
    shortDescription:
      "Icónicas sneakers Jordan 1 en colorway Chicago, perfectas para streetwear.",
    description:
      "Las legendarias Air Jordan 1 Retro High en el clásico colorway Chicago. Fabricadas con cuero premium y suela de goma duradera. Un ícono del streetwear que combina estilo y comodidad. Perfectas para cualquier outfit urbano.",
    price: 189.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["chicago", "bred", "royal"],
    images: {
      chicago: "/images/jordan1-chicago.jpg",
      bred: "/images/jordan1-bred.jpg",
      royal: "/images/jordan1-royal.jpg",
    },
    category: "sneakers",
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost 350 V2",
    shortDescription:
      "Sneakers Yeezy Boost 350 V2 con tecnología Boost y diseño futurista.",
    description:
      "Las icónicas Yeezy Boost 350 V2 con tecnología Boost de Adidas para máxima comodidad. Upper de Primeknit transpirable y suela Boost responsiva. Un must-have en cualquier colección de streetwear.",
    price: 299.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["zebra", "cream", "black"],
    images: {
      zebra: "/images/yeezy-zebra.jpg",
      cream: "/images/yeezy-cream.jpg",
      black: "/images/yeezy-black.jpg",
    },
    category: "sneakers",
  },
  {
    id: 3,
    name: "Nike Dunk Low Retro",
    shortDescription:
      "Clásicas Nike Dunk Low en colorways exclusivos, perfectas para el streetwear urbano.",
    description:
      "Las legendarias Nike Dunk Low Retro con construcción de cuero premium y colores vibrantes. Diseño atemporal que combina con cualquier outfit streetwear. Comodidad y estilo en cada paso.",
    price: 149.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["panda", "chicago", "university-blue"],
    images: {
      panda: "/images/dunk-panda.jpg",
      chicago: "/images/dunk-chicago.jpg",
      "university-blue": "/images/dunk-blue.jpg",
    },
    category: "sneakers",
  },
  // Streetwear
  {
    id: 4,
    name: "Supreme Box Logo Hoodie",
    shortDescription:
      "Hoodie Supreme con el icónico Box Logo, esencial en cualquier guardarropa streetwear.",
    description:
      "Hoodie Supreme con el legendario Box Logo bordado. Fabricado en algodón premium con interior de felpa suave. Fit oversized perfecto para el estilo streetwear urbano. Pieza de colección imprescindible.",
    price: 599.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["black", "gray", "red"],
    images: {
      black: "/images/supreme-black.jpg",
      gray: "/images/supreme-gray.jpg",
      red: "/images/supreme-red.jpg",
    },
    category: "streetwear",
  },
  {
    id: 5,
    name: "Off-White Diagonal Arrows Tee",
    shortDescription:
      "Camiseta Off-White con el icónico diseño de flechas diagonales y logo.",
    description:
      "Camiseta Off-White con el característico diseño de flechas diagonales y branding distintivo. Fabricada en algodón 100% premium con corte oversized. Perfecta para crear looks streetwear únicos.",
    price: 399.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["white", "black", "yellow"],
    images: {
      white: "/images/offwhite-white.jpg",
      black: "/images/offwhite-black.jpg",
      yellow: "/images/offwhite-yellow.jpg",
    },
    category: "streetwear",
  },
  {
    id: 6,
    name: "Fear of God Essentials Hoodie",
    shortDescription:
      "Hoodie Fear of God Essentials con diseño minimalista y calidad premium.",
    description:
      "Hoodie Fear of God Essentials con diseño minimalista y construcción de alta calidad. Algodón French Terry suave con fit oversized. Logo reflectante sutil. Comodidad y estilo en una sola prenda.",
    price: 199.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["cream", "black", "brown"],
    images: {
      cream: "/images/fog-cream.jpg",
      black: "/images/fog-black.jpg",
      brown: "/images/fog-brown.jpg",
    },
    category: "streetwear",
  },
  // Accesorios de lujo
  {
    id: 7,
    name: "Louis Vuitton Keepall 50",
    shortDescription:
      "Bolso de viaje Louis Vuitton Keepall 50 en canvas Monogram clásico.",
    description:
      "El icónico bolso de viaje Keepall 50 de Louis Vuitton en canvas Monogram. Diseño atemporal con herrajes dorados y asas de cuero natural. Perfecto para viajes de fin de semana con estilo.",
    price: 1899.99,
    sizes: ["50cm"],
    colors: ["monogram", "damier"],
    images: {
      monogram: "/images/lv-keepall-mono.jpg",
      damier: "/images/lv-keepall-damier.jpg",
    },
    category: "accesorios-lujo",
  },
  {
    id: 8,
    name: "Rolex Submariner Date",
    shortDescription:
      "Reloj Rolex Submariner Date, el icónico reloj de buceo de lujo.",
    description:
      "El legendario Rolex Submariner Date con caja de acero Oystersteel y bisel giratorio unidireccional. Movimiento automático perpetuo y resistencia al agua hasta 300 metros. Un clásico atemporal.",
    price: 12999.99,
    sizes: ["41mm"],
    colors: ["black", "green", "blue"],
    images: {
      black: "/images/rolex-sub-black.jpg",
      green: "/images/rolex-sub-green.jpg",
      blue: "/images/rolex-sub-blue.jpg",
    },
    category: "accesorios-lujo",
  },
  {
    id: 9,
    name: "Gucci GG Marmont Belt",
    shortDescription:
      "Cinturón Gucci GG Marmont en cuero con hebilla dorada icónica.",
    description:
      "Cinturón Gucci GG Marmont en cuero matelassé con la icónica hebilla GG dorada. Diseño elegante que eleva cualquier outfit. Disponible en diferentes anchos y colores.",
    price: 599.99,
    sizes: ["85", "90", "95", "100", "105"],
    colors: ["black", "brown", "white"],
    images: {
      black: "/images/gucci-belt-black.jpg",
      brown: "/images/gucci-belt-brown.jpg",
      white: "/images/gucci-belt-white.jpg",
    },
    category: "accesorios-lujo",
  },
  // Runners/Running
  {
    id: 10,
    name: "Nike Air Max 270",
    shortDescription:
      "Sneakers Nike Air Max 270 con la unidad Air más grande de Nike.",
    description:
      "Las Nike Air Max 270 con la unidad Air Sole más grande de Nike para máxima comodidad. Upper de mesh transpirable y diseño futurista. Perfectas para uso diario y actividades deportivas.",
    price: 179.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["white", "black", "red"],
    images: {
      white: "/images/airmax270-white.jpg",
      black: "/images/airmax270-black.jpg",
      red: "/images/airmax270-red.jpg",
    },
    category: "runners",
  },
  {
    id: 11,
    name: "Adidas Ultraboost 22",
    shortDescription:
      "Running shoes Adidas Ultraboost 22 con tecnología Boost y upper Primeknit.",
    description:
      "Las Adidas Ultraboost 22 con tecnología Boost responsiva y upper Primeknit adaptativo. Diseñadas para running de alto rendimiento con comodidad excepcional. Suela Continental para máximo agarre.",
    price: 199.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["core-black", "white", "solar-yellow"],
    images: {
      "core-black": "/images/ultraboost-black.jpg",
      white: "/images/ultraboost-white.jpg",
      "solar-yellow": "/images/ultraboost-yellow.jpg",
    },
    category: "runners",
  },
  {
    id: 12,
    name: "New Balance 990v5",
    shortDescription:
      "Sneakers New Balance 990v5 Made in USA con construcción premium.",
    description:
      "Las New Balance 990v5 Made in USA con construcción premium y tecnología ENCAP. Upper de gamuza y mesh con detalles reflectantes. Un clásico del running con estilo retro.",
    price: 249.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["gray", "navy", "burgundy"],
    images: {
      gray: "/images/nb990-gray.jpg",
      navy: "/images/nb990-navy.jpg",
      burgundy: "/images/nb990-burgundy.jpg",
    },
    category: "runners",
  },
];

const ProductList = ({ category,params }: { category: string, params:"homepage" | "products" }) => {
  // Filtrar productos por categoría si se proporciona una categoría
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  // Obtener el nombre de la categoría para mostrar en el mensaje
  const getCategoryName = (categorySlug: string) => {
    const categoryMap: Record<string, string> = {
      "sneakers": "Sneakers",
      "streetwear": "Streetwear",
      "accesorios-lujo": "Accesorios de Lujo",
      "runners": "Runners"
    };
    return categoryMap[categorySlug] || categorySlug;
  };

  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter/>}
      
      {category && filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            No se encontraron productos en la categoría &quot;{getCategoryName(category)}&quot;
          </h3>
          <p className="text-gray-500">
            Prueba seleccionando otra categoría o ver todos los productos.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        Ver todos los productos
      </Link>
    </div>
  );
};

export default ProductList;
