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
      estándar: "/products/promo-llavero-negro.png",
    },
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
      estándar: "/products/promo-taza-negro.png",
    },
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
      estándar: "/products/bolso-ejecutivo-negro.png",
    },
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
      estándar: "/products/mochila-deportiva-negro.png",
    },
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
      estándar: "/products/kit-asado-negro.png",
    },
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
      estándar: "/products/parrilla-portatil-negro.png",
    },
  },
  // Camping
  {
    id: 7,
    name: "Carpa Familiar 4 Personas",
    shortDescription:
      "Carpa familiar resistente al agua con capacidad para 4 personas y fácil montaje.",
    description:
      "Carpa familiar de 4 personas con estructura de fibra de vidrio y tela resistente al agua. Incluye mosquitero, ventanas con ventilación y suelo impermeable. Montaje rápido en menos de 10 minutos. Ideal para camping familiar y actividades al aire libre.",
    price: 199.99,
    sizes: ["4 personas"],
    colors: ["estándar"],
    images: {
      estándar: "/products/carpa-familiar-verde.png",
    },
  },
  {
    id: 8,
    name: "Saco de Dormir Térmico",
    shortDescription:
      "Saco de dormir térmico para temperaturas de hasta -5°C, perfecto para camping invernal.",
    description:
      "Saco de dormir térmico con relleno sintético de alta calidad, diseñado para temperaturas de hasta -5°C. Incluye capucha ajustable, cremallera de doble dirección y material exterior resistente al agua. Compacto y ligero para fácil transporte.",
    price: 85.50,
    sizes: ["universal"],
    colors: ["estándar"],
    images: {
      estándar: "/products/saco-dormir-azul.png",
    },
  },
  // Termos
  {
    id: 9,
    name: "Termo Stanley Clásico",
    shortDescription:
      "Termo Stanley de acero inoxidable con capacidad de 1.2L, mantiene temperatura por 24 horas.",
    description:
      "Termo Stanley clásico fabricado en acero inoxidable de doble pared con capacidad de 1.2L. Mantiene bebidas calientes por 24 horas y frías por 48 horas. Incluye tapa con taza integrada y asa de transporte. Ideal para trabajo, camping y actividades al aire libre.",
    price: 45.99,
    sizes: ["1.2L"],
    colors: ["estándar"],
    images: {
      estándar: "/products/termo-stanley-negro.png",
    },
  },
  {
    id: 10,
    name: "Termo Deportivo 750ml",
    shortDescription:
      "Termo deportivo ligero con pico de flujo rápido, perfecto para actividades deportivas.",
    description:
      "Termo deportivo de 750ml con diseño ergonómico y pico de flujo rápido. Fabricado en acero inoxidable con aislamiento térmico. Incluye clip de seguridad y tapa con válvula de presión. Ideal para running, ciclismo y actividades deportivas.",
    price: 32.99,
    sizes: ["750ml"],
    colors: ["estándar"],
    images: {
      estándar: "/products/termo-deportivo-negro.png",
    },
  },
  // Llaveros ejecutivos
  {
    id: 11,
    name: "Llavero Ejecutivo de Cuero",
    shortDescription:
      "Llavero ejecutivo de cuero genuino con clip de acero inoxidable y diseño elegante.",
    description:
      "Llavero ejecutivo fabricado en cuero genuino de primera calidad con clip de acero inoxidable. Incluye anillo giratorio para fácil acceso a las llaves y diseño elegante ideal para uso profesional. Disponible en múltiples colores y acabados.",
    price: 24.99,
    sizes: ["estándar"],
    colors: ["estándar"],
    images: {
      estándar: "/products/llavero-ejecutivo-negro.png",
    },
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
      estándar: "/products/llavero-multifuncion-negro.png",
    },
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
      estándar: "/products/arbol-navidad-verde.png",
    },
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
      estándar: "/products/decoracion-navidad-rojo.png",
    },
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
      estándar: "/products/agenda-ejecutiva-negro.png",
    },
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
      estándar: "/products/block-notas-negro.png",
    },
  },
];

const ProductList = ({ category,params }: { category: string, params:"homepage" | "products" }) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter/>}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
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
