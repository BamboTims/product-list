import  { useEffect,useState } from 'react';
import { fetchProducts } from '../api/product';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [minPrice, setMinPrice] = useState<number | string>('');
  const [maxPrice, setMaxPrice] = useState<number | string>('');
  const [minRating, setMinRating] = useState<number | string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = product.category.includes(filter);
    const matchesPrice = (minPrice === '' || product.price >= Number(minPrice)) &&
                         (maxPrice === '' || product.price <= Number(maxPrice));
    const matchesRating = minRating === '' || product.rating >= Number(minRating);
    return matchesCategory && matchesPrice && matchesRating;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price') {
      return a.price - b.price;
    } else if (sort === 'rating') {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(sortedProducts.length / productsPerPage)));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
      <div>
        <label htmlFor="category" className="mr-2">Category:</label>
        <select id="category" value={filter} onChange={handleFilterChange} className="border rounded p-2">
          <option value="">All</option>
          <option value="beauty">Beauty</option>
          <option value="groceries">Groceries</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <input
          type="number"
          placeholder="Min rating"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Sort by</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="p-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(sortedProducts.length / productsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`p-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(sortedProducts.length / productsPerPage)}
          className="p-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
