interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transform transition-transform hover:scale-105 hover:shadow-xl">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-600">⭐ {product.rating}</p>
      </div>
      <p className="text-gray-600 mt-1 text-sm">{product.category}</p>
    </div>
  );
};

export default ProductCard;

export type {Product};
