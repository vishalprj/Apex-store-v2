import React from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product, children }) => {
  return (
    <div className="product pro1">
      <Link to={`/products/${product._id}`}>
        <img className="product_img" src={product.imgUrl} alt={product.productTitle} />
      </Link>

      {/* Icons and buttons */}
      <BsFillHeartFill className="icon-svg card-heart added" />
      <button type="submit" className="card-wishlist border-none">
        <BsFillHeartFill className="icon-svg card-heart" />
      </button>

      <Link aria-label="login-icon" to="/login" className="card-wishlist border-none">
        <button className="border-none" type="button">
          <BsFillHeartFill className="icon-svg card-heart" />
        </button>
      </Link>

      {/* Product Details */}
      <div className="des">
        <span className="span">{product.productTitle}</span>
        <h5 className="h5">{product.productDesc}</h5>
        <div className="star" />
        <h4 className="price">RS.{product.price}</h4>

        {/* Add to Cart Button */}
        <Link to="/login" className="">
          <button type="submit" className="btn btn-squared m-top-small">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};
