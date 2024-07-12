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
    <div className="bg-white shadow-md rounded-lg p-4 transform transition-transform hover:scale-105">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-gray-600">Rating: {product.rating}</p>
      <p className="text-gray-600">{product.category}</p>
    </div>
  );
};

export default ProductCard;
