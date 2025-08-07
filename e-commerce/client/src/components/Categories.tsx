"use client";
import {
  Gift,
  Briefcase,
  Tent,
  Coffee,
  Key,
  TreePine,
  BookOpen,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "Artículos promocionales",
    icon: <Gift className="w-4 h-4" />,
    slug: "articulos-promocionales",
  },
  {
    name: "Bolsos",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bolsos",
  },
  {
    name: "Kit de asado",
    icon: <Tent className="w-4 h-4" />,
    slug: "kit-de-asado",
  },
  {
    name: "Camping",
    icon: <Tent className="w-4 h-4" />,
    slug: "camping",
  },
  {
    name: "Termos",
    icon: <Coffee className="w-4 h-4" />,
    slug: "termos",
  },
  {
    name: "Llaveros ejecutivos",
    icon: <Key className="w-4 h-4" />,
    slug: "llaveros-ejecutivos",
  },
  {
    name: "Artículos navideños",
    icon: <TreePine className="w-4 h-4" />,
    slug: "articulos-navidenos",
  },
  {
    name: "Block de notas",
    icon: <BookOpen className="w-4 h-4" />,
    slug: "block-de-notas",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug === selectedCategory ? null : category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
