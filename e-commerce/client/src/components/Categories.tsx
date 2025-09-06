"use client";
import {
  Footprints,
  Shirt,
  Crown,
  Zap,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "Sneakers",
    icon: <Footprints className="w-4 h-4" />,
    slug: "sneakers",
  },
  {
    name: "Streetwear",
    icon: <Shirt className="w-4 h-4" />,
    slug: "streetwear",
  },
  {
    name: "Accesorios de Lujo",
    icon: <Crown className="w-4 h-4" />,
    slug: "accesorios-lujo",
  },
  {
    name: "Runners",
    icon: <Zap className="w-4 h-4" />,
    slug: "runners",
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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-black p-4 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-300 ${
            category.slug === selectedCategory ? "bg-white text-black" : "text-white hover:bg-gray-800"
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
