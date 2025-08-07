import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
    id: 1,
    name: "Llavero Personalizado Empresarial",
    shortDescription:
      "Llavero promocional de alta calidad con logo personalizable para empresas.",
    description:
      "Llavero promocional fabricado en acero inoxidable con grabado láser de alta precisión. Incluye clip de seguridad y opción de personalización con logo de empresa.",
    price: 12.99,
    sizes: ["estándar"],
    colors: ["negro", "plateado", "dorado"],
    images: {
      negro: "/products/promo-llavero-negro.png",
      plateado: "/products/promo-llavero-plateado.png",
      dorado: "/products/promo-llavero-dorado.png",
    },
  },
  {
    id: 2,
    name: "Bolso Ejecutivo Premium",
    shortDescription:
      "Bolso ejecutivo de cuero genuino con múltiples compartimentos organizadores.",
    description:
      "Bolso ejecutivo fabricado en cuero genuino de primera calidad con múltiples compartimentos internos organizadores.",
    price: 89.99,
    sizes: ["m", "l"],
    colors: ["negro", "marrón", "gris"],
    images: {
      negro: "/products/bolso-ejecutivo-negro.png",
      marrón: "/products/bolso-ejecutivo-marron.png",
      gris: "/products/bolso-ejecutivo-gris.png",
    },
  },
  {
    id: 3,
    name: "Kit Completo de Asado Premium",
    shortDescription:
      "Kit completo de asado con todos los utensilios necesarios para una parrilla perfecta.",
    description:
      "Kit completo de asado que incluye pinzas de acero inoxidable, espátula, cepillo para limpieza, termómetro digital y guantes resistentes al calor.",
    price: 149.99,
    sizes: ["completo"],
    colors: ["negro", "plateado"],
    images: {
      negro: "/products/kit-asado-negro.png",
      plateado: "/products/kit-asado-plateado.png",
    },
  },
  {
    id: 4,
    name: "Termo Stanley Clásico",
    shortDescription:
      "Termo Stanley de acero inoxidable con capacidad de 1.2L, mantiene temperatura por 24 horas.",
    description:
      "Termo Stanley clásico fabricado en acero inoxidable de doble pared con capacidad de 1.2L. Mantiene bebidas calientes por 24 horas y frías por 48 horas.",
    price: 45.99,
    sizes: ["1.2L"],
    colors: ["negro", "verde", "rojo"],
    images: {
      negro: "/products/termo-stanley-negro.png",
      verde: "/products/termo-stanley-verde.png",
      rojo: "/products/termo-stanley-rojo.png",
    },
  },
  {
    id: 5,
    name: "Árbol de Navidad Artificial 2m",
    shortDescription:
      "Árbol de Navidad artificial de 2 metros con luces LED integradas y decoraciones incluidas.",
    description:
      "Árbol de Navidad artificial de 2 metros de altura con ramas de PVC de alta calidad. Incluye 200 luces LED multicolor integradas y esferas decorativas.",
    price: 299.99,
    sizes: ["2m"],
    colors: ["verde"],
    images: {
      verde: "/products/arbol-navidad-verde.png",
    },
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Order Payment",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Order Payment",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Order Payment",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Order Payment",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Order Payment",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {title === "Popular Products"
          ? popularProducts.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.name}
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-0">${item.price}K</CardFooter>
              </Card>
            ))
          : latestTransactions.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary">{item.badge}</Badge>
                </CardContent>
                <CardFooter className="p-0">${item.count /1000}K</CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default CardList;
