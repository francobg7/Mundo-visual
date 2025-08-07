import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

// Producto de ejemplo actualizado
const product: ProductType = {
  id: 1,
  name: "Llavero Personalizado Empresarial",
  shortDescription:
    "Llavero promocional de alta calidad con logo personalizable para empresas.",
  description:
    "Llavero promocional fabricado en acero inoxidable con grabado láser de alta precisión. Incluye clip de seguridad y opción de personalización con logo de empresa. Ideal para eventos corporativos, ferias comerciales y regalos promocionales. Disponible en múltiples colores y acabados. El producto incluye garantía de calidad y servicio de personalización incluido.",
  price: 12.99,
  sizes: ["estándar"],
  colors: ["negro", "plateado", "dorado"],
  images: {
    negro: "/products/promo-llavero-negro.png",
    plateado: "/products/promo-llavero-plateado.png",
    dorado: "/products/promo-llavero-dorado.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  // TODO:get the product from db
  // TEMPORARY
  return {
    title: product.name,
    describe: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          Al hacer clic en Pagar Ahora, aceptas nuestros{" "}
          <span className="underline hover:text-black">Términos y Condiciones</span>{" "}
          y <span className="underline hover:text-black">Política de Privacidad</span>
          . Nos autorizas a cobrar tu método de pago seleccionado por el
          monto total mostrado. Todas las ventas están sujetas a nuestras políticas de devolución y{" "}
          <span className="underline hover:text-black">Reembolso</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
