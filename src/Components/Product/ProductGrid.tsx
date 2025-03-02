import { Link } from "react-router-dom";

interface Product {
  _id: number;
  name: string;
  images: { url: string }[]; // Assuming images is an array of objects
  price: number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product,index) => (
        <Link to={`/product/${product._id}`} key={index} className="block">
          <div className="bg-white rounded-lg p-4">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images?.[0].url || "/placeholder.jpg"}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-500 text-sm font-medium tracking-tighter  ">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
