import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

// Producto de ejemplo actualizado
const product: ProductType = {
  id: 1,
  name: "Nike Air Jordan 1 Retro High Chicago",
  shortDescription:
    "Icónicas sneakers Jordan 1 en colorway Chicago, perfectas para streetwear.",
  description:
    "Las legendarias Air Jordan 1 Retro High en el clásico colorway Chicago. Fabricadas con cuero premium y suela de goma duradera. Un ícono del streetwear que combina estilo y comodidad. Perfectas para cualquier outfit urbano. Estas sneakers han definido la cultura del basketball y el streetwear por décadas.",
  price: 189.99,
  sizes: ["7", "8", "9", "10", "11", "12"],
  colors: ["chicago", "bred", "royal"],
  images: {
    chicago: "/images/jordan1-chicago.jpg",
    bred: "/images/jordan1-bred.jpg", 
    royal: "/images/jordan1-royal.jpg",
  },
  category: "sneakers",
};

export const generateMetadata = async () => {
  // TODO:get the product from db
  // TEMPORARY
  return {
    title: product.name,
    describe: product.description,
  };
};

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ size: string }>;
}) => {
  const { size } = await searchParams;

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = "estándar"; // Color por defecto
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[4/3]">
        <Image
          src={Object.values(product.images)[0]}
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
