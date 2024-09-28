import {  useState } from 'react';
import './productPage.css';
import { useGetProduct } from '../../store/queries';
import { ProductCard } from '../../components/card';
import ClipLoader from 'react-spinners/ClipLoader';
import { Product } from '../../type';

export const ShopPage = () => {
  const [filters, setFilters] = useState({ search: '', type: '', priceRange: '' });
  const { data: products, isLoading } = useGetProduct();

  const filteredProducts = products
    ? products.filter((item: { name: string; type: string; price: number; }) => {
        const matchesSearch = item.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchesType = filters.type ? item.type === filters.type : true;
        const matchesPrice = filters.priceRange ? item.price <= Number(filters.priceRange) : true;
        return matchesSearch && matchesType && matchesPrice;
      })
    : [];

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
        <div className="sidebar-container"></div>

        {isLoading && (
          <div className="spinner-container">
            <ClipLoader color="#000" loading={isLoading} size={80} />
          </div>
        )}

        <div className="pro">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: Product, index: number) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            !isLoading && <p>No products found matching your criteria.</p>
          )}
        </div>
      </section>
    </>
  );
};
