import ProductList from "@/components/ProductList";
import HeroSection from "@/components/HeroSection";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <HeroSection />
      <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mt-16">
        <ProductList category={category} params="homepage"/>
      </div>
    </div>
  );
};

export default Homepage;
