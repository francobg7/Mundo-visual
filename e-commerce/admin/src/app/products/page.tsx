import { Product, columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { database } from "@/lib/database";

const getData = async (): Promise<Product[]> => {
  return await database.getAllProducts();
};

const ProductsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md flex justify-between items-center">
        <h1 className="font-semibold">Todos los productos</h1>
        <Link href="/products/add">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Agregar Producto
          </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ProductsPage;
