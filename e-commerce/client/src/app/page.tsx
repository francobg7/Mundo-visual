import ProductList from "@/components/ProductList";
import HeroSection from "@/components/HeroSection";
import HorizontalScroll from "@/components/HorizontalScroll";

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
      <div className="mx-auto p-4 sm:px-6 lg:px-8 max-w-screen-2xl mt-16">
        <ProductList category={category} params="homepage"/>
      </div>
    </div>
  );
};

export default Homepage;
