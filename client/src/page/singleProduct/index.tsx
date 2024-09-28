import './SingleProduct.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../store/queries';
import ClipLoader from 'react-spinners/ClipLoader';
import { Product } from '../../type';

export const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const product = await getSingleProduct(id);
        setSingleProduct(product);
      } catch (error) {
        console.error('Error fetching product', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#000" loading={loading} size={80} />
      </div>
    );
  }

  if (!singleProduct) return null;

  return (
    <>
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
          <p className="single-product-company text-slanted">{`by ${singleProduct.name}`}</p>
          <h4 className="single-product-price">₹{singleProduct?.price}</h4>
          <h4 className="">Product Details:</h4>
          <p>Care Instructions: Hand Wash Only Fit Type: Regular Fit Relaxed fit beach shirt made of lightweight and soft fabric, give you comfortable and nature skin feel, button down shirt with one left pocket.</p>
          <div className="single-product-btns flex-al-centerr">
            <button className="btn_cart">Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
};
