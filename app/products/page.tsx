
import ProductCard from "@/components/firstComponent";
import { Product } from "@/types/product.t";
import Link from "next/link";

export default async function Page() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/blog/list");
  const json = await response.json();
  const { sampleProducts } = json;


  return (
    <div className="max-w-[80%] mx-auto mt-10 ">
      <div className="flex flex-wrap gap-6">
        {sampleProducts.map((product: Product) => (
          <Link href={`/products/${product?.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
