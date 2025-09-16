import ProductList from "@/components/ProductList";
import ProductList3D from "@/components/ProductList3D";
import HeroSection from "@/components/HeroSection";
import HorizontalScroll from "@/components/HorizontalScroll";

// Productos de ejemplo para el componente 3D
const sampleProducts = [
  {
    id: 1,
    name: "Nike Air Jordan 1",
    price: 189.99,
    image: "/images/jordan1-chicago.jpg",
    shortDescription: "Icónicas sneakers Jordan 1 en colorway Chicago"
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost 350",
    price: 299.99,
    image: "/images/yeezy-zebra.jpg",
    shortDescription: "Sneakers Yeezy con tecnología Boost"
  },
  {
    id: 3,
    name: "Supreme Box Logo Hoodie",
    price: 450.00,
    image: "/images/supreme-hoodie.jpg",
    shortDescription: "Hoodie Supreme con logo icónico"
  }
];

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <HeroSection />
      <HorizontalScroll />
      
      {/* Sección con ProductList3D */}
      <div className="mx-auto max-w-screen-2xl mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <ProductList3D products={sampleProducts} />
      </div>
      
      {/* ProductList original */}
      <div className="mx-auto p-4 sm:px-6 lg:px-8 max-w-screen-2xl mt-16">
        <ProductList category={category} params="homepage"/>
      </div>
    </div>
  );
};

export default Homepage;
