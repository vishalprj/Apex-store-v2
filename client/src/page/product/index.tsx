import { useEffect, useState } from 'react';
import './productPage.css';
import { getProduct } from '../../store/queries';
import { ProductCard } from '../../components/card';

export const ShopPage = () => {
  const [product, setProduct] = useState([]); // Initialize product as an empty array
  console.log("🚀 ~ ShopPage ~ product:", product)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct();
      setProduct(res);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <section className="hero1">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>
      <div className="productHeading">
        <h2>Products</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <section className="product pad product1">
        <div className="sidebar-container">
          <div className="">
            {/* <FiltersDesktop productState={productCurrentState} /> */}
          </div>
        </div>
        <div className="pro">
          {product.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <div className="FilterPhone">
        {/* <FilterPhone /> */}
      </div>
    </>
  );
};
