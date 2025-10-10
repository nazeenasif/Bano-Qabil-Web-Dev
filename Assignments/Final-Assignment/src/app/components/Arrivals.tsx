"use client";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
}

interface FakeStoreProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

interface DummyJSONProduct {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000); // Default slider max

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://dummyjson.com/products"),
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();

        const data1Products: Product[] = (data1 as FakeStoreProduct[]).map(
          (item) => ({
            id: `fake-${item.id}`,
            title: item.title,
            image: item.image,
            price: item.price,
            category: item.category,
          })
        );

        const data2Products: Product[] = (data2.products as DummyJSONProduct[]).map(
          (item) => ({
            id: `dummy-${item.id}`,
            title: item.title,
            image: item.thumbnail,
            price: item.price,
            category: item.category || "other",
          })
        );

        const allProducts = [...data1Products, ...data2Products];
        setProducts(allProducts);

        // Find the highest price dynamically for slider max
        const highestPrice = Math.max(...allProducts.map((p) => p.price));
        setMaxPrice(highestPrice);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  // 🔍 Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-full px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/5 border border-gray-300 rounded-full px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <div className="flex flex-col items-center w-full md:w-1/3">
          <label className="text-gray-700 font-medium mb-1">
            Price up to: ${maxPrice.toFixed(0)}
          </label>
          <input
            type="range"
            min="0"
            max={Math.max(...products.map((p) => p.price), 1000)}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F0EEED] rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-contain"
              />
              <h3 className="text-center mt-3 text-gray-800 font-medium line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-600 font-semibold mt-1">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products found matching your filters.
        </p>
      )}
    </div>
  );
}
