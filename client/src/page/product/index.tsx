import './productPage.css'

export const ShopPage = () => {

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
          {/* {results.map((product) => (
            <ProductCard product={product} />
          ))} */}
        </div>
      </section>
      <div className="FilterPhone">
        {/* <FilterPhone /> */}
      </div>
    </>
  );
};
