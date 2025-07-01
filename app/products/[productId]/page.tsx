import { Product } from "@/types/product.t";


const ProductPage = async({ params }:{params: {productId:string}}) => {

    const {productId} = await params

    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product:Product = await res.json() 

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Product Image */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-96 w-full"
          />
        </div>

        {/* Product Details */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase mb-2">{product.category}</p>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-6">{product.description}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-xl font-semibold text-green-600">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">
                {product.rating.rate} ⭐ ({product.rating.count} reviews)
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;