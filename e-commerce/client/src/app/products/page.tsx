import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="mx-auto p-4 sm:px-6 lg:px-8 max-w-screen-2xl">
      <ProductList category={category} params="products"/>
    </div>
  );
};

export default ProductsPage;
