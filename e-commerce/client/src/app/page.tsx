import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      {/* BANNER MAYORISTA */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 mb-6 rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">🚀 CATÁLOGO MAYORISTA</h2>
          <p className="text-sm">
            Productos promocionales y de regalo para mayoristas. Cantidades mínimas desde 10 unidades.
          </p>
        </div>
      </div>
      
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/mundo-visual.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params="homepage"/>
    </div>
  );
};

export default Homepage;
