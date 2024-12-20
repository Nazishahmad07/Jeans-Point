
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products , search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products); // Initialize with all products
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOrder, setSortOrder] = useState('relavent'); // Sort order state

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  // Apply filters based on category, subCategory, and sort order
  const applyFilter = () => {
    let filteredProducts = products.slice();
    if(showSearch && search){
      filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((item) => subCategory.includes(item.subCategory));
    }

    // Sorting logic
    if (sortOrder === 'low-high') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filteredProducts);
  };

  // Re-apply filter when category, subCategory, or sortOrder change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortOrder, products,search,showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Men', 'Women', 'Kids'].map((item) => (
              <p className="flex gap-2" key={item}>
                <input className="w-3" type="checkbox" value={item} onChange={toggleCategory} /> {item}
              </p>
            ))}
          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
              <p className="flex gap-2" key={item}>
                <input className="w-3" type="checkbox" value={item} onChange={toggleSubCategory} /> {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/* Products sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
