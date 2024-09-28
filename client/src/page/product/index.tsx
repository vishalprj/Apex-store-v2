import { useEffect, useState } from 'react';
import './productPage.css';
import { getProduct } from '../../store/queries';
import { ProductCard } from '../../components/card';

export const ShopPage = () => {
  const [product, setProduct] = useState([]);
  const [filters, setFilters] = useState({ search: '', type: '', priceRange: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct();
      setProduct(res);
    };
    fetchProduct();
  }, []);

  // Filtered products based on user input
  const filteredProducts = product.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesType = filters.type ? item.type === filters.type : true;
    const matchesPrice = filters.priceRange ? item.price <= filters.priceRange : true;
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <>
      <section className="hero1">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>
      <div className="productHeading">
        <h2>Products</h2>
        <p>Summer Collection New Modern Design</p>
      </div>

      {/* Filters */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by name"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">All Types</option>
          <option value="Shirt">Shirt</option>
          <option value="Pants">Pants</option>
          <option value="Shoes">Shoes</option>
        </select>
        <select
          value={filters.priceRange}
          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
        >
          <option value="">All Prices</option>
          <option value="50">Below $50</option>
          <option value="100">Below $100</option>
          <option value="200">Below $200</option>
        </select>
      </div>

      <section className="product pad product1">
        <div className="sidebar-container">
        </div>
        <div className="pro">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <p>No products found matching your criteria.</p>
          )}
        </div>
      </section>
    </>
  );
};
