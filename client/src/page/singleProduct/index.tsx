import './SingleProduct.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../store/queries';

export const SingleProduct = () => {
  const { id } = useParams();
  console.log("🚀 ~ SingleProduct ~ id:", id)
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const product = await getSingleProduct(id);
        setSingleProduct(product);
      } catch  {
        console.error('Error fetching product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  if (!singleProduct) return null;

  return (
    <>
      {/* Page Hero Section */}
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            Home
            <span className="title-slash"> /</span> {singleProduct.description}
          </h3>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="detail">
        <div className="left">
          <img
            className="single-product-img"
            src={singleProduct?.imageUrl}
            alt={singleProduct.description}
          />
        </div>
        <div className="right">
          <h2 className="single-product-title">{singleProduct.description}</h2>
          <p className="single-product-company text-slanted">{`by ${singleProduct.title}`}</p>
          <h4 className="single-product-price">₹{singleProduct?.price}</h4>
          <h4 className="">Product Details:</h4>
          <p>{singleProduct.description}</p>
          <div className="single-product-btns flex-al-centerr">
            <button className="btn_cart">Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
};
