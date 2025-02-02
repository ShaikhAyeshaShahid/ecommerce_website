import { useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts, fourProducts } from "@/sanity/lib/queries";

// Define Product type if not defined
type Product = {
    _id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    discount?: string;
    rating?: number;
    reviews?: number;
    total?: string;
    previous?: string;
    category?: string;
  };
  

interface SearchFilterProps {
  products: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

export default function SearchFilter({ products, setFilteredProducts }: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = Array.from(new Set(products.map((p) => p.category || "All")));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterProducts(value, selectedCategory);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    filterProducts(searchTerm, value);
  };

  const filterProducts = (search: string, category: string) => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search)
      );
    }

    if (category && category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 my-4 mx-20">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/3 text-black"
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/3 text-black"
      >
        <option value="All">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
