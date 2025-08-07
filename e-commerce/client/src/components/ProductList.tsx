import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

// Productos actualizados para las nuevas categorías
const products: ProductsType = [
  // Artículos promocionales
  {
    id: 1,
    name: "Llavero Personalizado Empresarial",
    shortDescription:
      "Llavero promocional de alta calidad con logo personalizable para empresas.",
    description:
      "Llavero promocional fabricado en acero inoxidable con grabado láser de alta precisión. Incluye clip de seguridad y opción de personalización con logo de empresa. Ideal para eventos corporativos, ferias comerciales y regalos promocionales.",
    price: 12.99,
    sizes: ["estándar"],
    colors: ["estándar"],
    images: {
      estándar: "/images/llavero2.jpg",
    },
    category: "articulos-promocionales",
  },
  {
    id: 2,
    name: "Taza Térmica Promocional",
    shortDescription:
      "Taza térmica personalizable con logo de empresa, perfecta para regalos corporativos.",
    description:
      "Taza térmica de acero inoxidable con capacidad de 350ml, mantiene la temperatura por hasta 6 horas. Incluye tapa hermética y opción de personalización con logo de empresa. Ideal para regalos promocionales, eventos corporativos y ferias comerciales.",
    price: 18.50,
    sizes: ["350ml"],
    colors: ["estándar"],
    images: {
      estándar: "/images/taza.jpg",
    },
    category: "articulos-promocionales",
  },
  // Bolsos
  {
    id: 3,
    name: "Bolso Ejecutivo Premium",
    shortDescription:
      "Bolso ejecutivo de cuero genuino con múltiples compartimentos organizadores.",
    description:
      "Bolso ejecutivo fabricado en cuero genuino de primera calidad con múltiples compartimentos internos organizadores. Incluye compartimento para laptop de hasta 15 pulgadas, bolsillos para documentos, teléfono y accesorios. Correa ajustable y asas reforzadas para máxima durabilidad.",
    price: 89.99,
    sizes: ["m", "l"],
    colors: ["estándar"],
    images: {
      estándar: "/images/bolso.jpg",
    },
    category: "bolsos",
  },
  {
    id: 4,
    name: "Mochila Deportiva Multifunción",
    shortDescription:
      "Mochila deportiva resistente con compartimentos especializados para actividades al aire libre.",
    description:
      "Mochila deportiva fabricada en material resistente al agua con múltiples compartimentos especializados. Incluye bolsillo hidratación, compartimento para laptop, bolsillos laterales para botellas y organizador frontal. Ideal para deportes, viajes y actividades al aire libre.",
    price: 65.00,
    sizes: ["25L", "35L"],
    colors: ["estándar"],
    images: {
      estándar: "/images/mochila.jpg",
    },
    category: "bolsos",
  },
  // Kit de asado
  {
    id: 5,
    name: "Kit Completo de Asado Premium",
    shortDescription:
      "Kit completo de asado con todos los utensilios necesarios para una parrilla perfecta.",
    description:
      "Kit completo de asado que incluye pinzas de acero inoxidable, espátula, cepillo para limpieza, termómetro digital, guantes resistentes al calor y estuche organizador. Todos los utensilios están fabricados en acero inoxidable de alta calidad para máxima durabilidad y seguridad.",
    price: 149.99,
    sizes: ["completo"],
    colors: ["estándar"],
    images: {
      estándar: "/images/kit-asado.jpg",
    },
    category: "kit-de-asado",
  },
  {
    id: 6,
    name: "Parrilla Portátil de Carbón",
    shortDescription:
      "Parrilla portátil compacta perfecta para camping y picnics al aire libre.",
    description:
      "Parrilla portátil de carbón con diseño compacto y plegable. Incluye rejilla de cocción, tapa con ventilación ajustable y patas desplegables. Fabricada en acero galvanizado resistente a la corrosión. Ideal para camping, picnics y viajes al aire libre.",
    price: 79.99,
    sizes: ["portátil"],
    colors: ["estándar"],
    images: {
      estándar: "/images/parrilla.jpg",
    },
    category: "kit-de-asado",
  },
  // Camping
  {
    id: 7,
    name: "Carpa Familiar 4 Personas",
    shortDescription:
      "Carpa familiar resistente al agua para 4 personas, perfecta para camping y aventuras al aire libre.",
    description:
      "Carpa familiar de 4 personas fabricada en material resistente al agua con sistema de ventilación mejorado. Incluye mosquitero, bolsa de transporte y kit de reparación. Montaje fácil con varillas de fibra de vidrio y base impermeable.",
    price: 199.99,
    sizes: ["4 personas"],
    colors: ["estándar"],
    images: {
      estándar: "/images/carpa.jpg",
    },
    category: "camping",
  },
  {
    id: 8,
    name: "Saco de Dormir Térmico",
    shortDescription:
      "Saco de dormir térmico de alta calidad para temperaturas de hasta -10°C.",
    description:
      "Saco de dormir térmico con relleno sintético de alta calidad, diseñado para temperaturas de hasta -10°C. Incluye capucha ajustable, cremallera de doble sentido y bolsa de compresión. Ideal para camping en climas fríos.",
    price: 89.99,
    sizes: ["estándar"],
    colors: ["estándar"],
    images: {
      estándar: "/images/bolsa-de-dormir.jpg",
    },
    category: "camping",
  },
  // Termos
  {
    id: 9,
    name: "Termo de Acero Inoxidable 1L",
    shortDescription:
      "Termo de acero inoxidable de 1 litro que mantiene la temperatura por hasta 24 horas.",
    description:
      "Termo de acero inoxidable de 1 litro con doble pared de vacío que mantiene bebidas calientes por hasta 24 horas y frías por hasta 48 horas. Incluye tapa hermética, asa plegable y diseño ergonómico. Ideal para viajes, trabajo y actividades al aire libre.",
    price: 45.99,
    sizes: ["1L"],
    colors: ["estándar"],
    images: {
      estándar: "/images/termo-acero.jpg",
    },
    category: "termos",
  },
  {
    id: 10,
    name: "Termo Deportivo 500ml",
    shortDescription:
      "Termo deportivo compacto de 500ml perfecto para actividades físicas y viajes.",
    description:
      "Termo deportivo compacto de 500ml con diseño ergonómico y tapa de fácil apertura. Mantiene la temperatura por hasta 12 horas. Incluye clip de seguridad y asa de transporte. Ideal para deportes, gimnasio y viajes cortos.",
    price: 32.50,
    sizes: ["500ml"],
    colors: ["estándar"],
    images: {
      estándar: "/images/termo-deportivo.jpg",
    },
    category: "termos",
  },
  // Llaveros ejecutivos
  {
    id: 11,
    name: "Llavero Ejecutivo de Cuero",
    shortDescription:
      "Llavero ejecutivo de cuero genuino con diseño profesional y múltiples funciones.",
    description:
      "Llavero ejecutivo fabricado en cuero genuino con diseño profesional. Incluye clip de seguridad, abrebotellas integrado y espacio para tarjetas de identificación. Ideal para uso empresarial y regalos corporativos.",
    price: 25.99,
    sizes: ["estándar"],
    colors: ["estándar"],
    images: {
      estándar: "/images/llavero1.jpg",
    },
    category: "llaveros-ejecutivos",
  },
  {
    id: 12,
    name: "Llavero Multifunción LED",
    shortDescription:
      "Llavero multifunción con linterna LED integrada y abrebotellas, perfecto para regalos.",
    description:
      "Llavero multifunción con linterna LED integrada de alta luminosidad, abrebotellas y clip de seguridad. Fabricado en aluminio anodizado resistente a golpes y agua. Incluye batería recargable y múltiples modos de iluminación.",
    price: 18.50,
    sizes: ["estándar"],
    colors: ["estándar"],
    images: {
      estándar: "/images/llavero-led.jpg",
    },
    category: "llaveros-ejecutivos",
  },
  // Artículos navideños
  {
    id: 13,
    name: "Árbol de Navidad Artificial 2m",
    shortDescription:
      "Árbol de Navidad artificial de 2 metros con luces LED integradas y decoraciones incluidas.",
    description:
      "Árbol de Navidad artificial de 2 metros de altura con ramas de PVC de alta calidad. Incluye 200 luces LED multicolor integradas, esferas decorativas y estrella tope. Montaje fácil con base estable y almacenamiento compacto.",
    price: 299.99,
    sizes: ["2m"],
    colors: ["estándar"],
    images: {
      estándar: "/images/arbol.jpg",
    },
    category: "articulos-navidenos",
  },
  {
    id: 14,
    name: "Set de Decoración Navideña",
    shortDescription:
      "Set completo de decoración navideña con guirnaldas, esferas y figuras para el hogar.",
    description:
      "Set completo de decoración navideña que incluye guirnaldas de luces LED, esferas de cristal, figuras de porcelana y coronas de puerta. Todos los elementos están coordinados en tema y colores. Ideal para decorar el hogar durante las fiestas.",
    price: 89.99,
    sizes: ["completo"],
    colors: ["estándar"],
    images: {
      estándar: "/images/decoracion-navidenha.jpg",
    },
    category: "articulos-navidenos",
  },
  // Block de notas
  {
    id: 15,
    name: "Agenda Ejecutiva 2024",
    shortDescription:
      "Agenda ejecutiva 2024 con diseño profesional y múltiples secciones organizadoras.",
    description:
      "Agenda ejecutiva 2024 con cubierta de cuero genuino y páginas de alta calidad. Incluye calendario anual, planificador semanal, sección de contactos y notas. Diseño profesional ideal para uso empresarial y personal.",
    price: 45.99,
    sizes: ["A5"],
    colors: ["estándar"],
    images: {
      estándar: "/images/agenda.jpg",
    },
    category: "block-de-notas",
  },
  {
    id: 16,
    name: "Block de Notas Profesional",
    shortDescription:
      "Block de notas profesional con hojas removibles y cubierta dura resistente.",
    description:
      "Block de notas profesional con hojas removibles de alta calidad y cubierta dura resistente. Incluye separadores organizadores, bolsillo para documentos y clip de seguridad. Ideal para reuniones, conferencias y uso diario en oficina.",
    price: 28.50,
    sizes: ["A4", "A5"],
    colors: ["estándar"],
    images: {
      estándar: "/images/blog-notas.jpg",
    },
    category: "block-de-notas",
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
      "articulos-promocionales": "Artículos promocionales",
      "bolsos": "Bolsos",
      "kit-de-asado": "Kit de asado",
      "camping": "Camping",
      "termos": "Termos",
      "llaveros-ejecutivos": "Llaveros ejecutivos",
      "articulos-navidenos": "Artículos navideños",
      "block-de-notas": "Block de notas"
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
            No se encontraron productos en la categoría "{getCategoryName(category)}"
          </h3>
          <p className="text-gray-500">
            Prueba seleccionando otra categoría o ver todos los productos.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
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
