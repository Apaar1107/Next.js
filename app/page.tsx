import Link from "next/link";


export default async function Home() {

  return (
    <div className="max-w-[80%] mx-auto mt-10 ">
      <Link href={'/products'} className="flex items-center justify-center">
        show products
      </Link>
    </div>
  );
}
