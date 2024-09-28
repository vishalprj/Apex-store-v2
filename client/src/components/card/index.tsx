import { Link } from 'react-router-dom';
import "./card.css"
import { Product } from '../../type';

type ProductCardProps = {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product pro1">
      <Link to={`/shop/${product._id}`}>
        <img className="product_img" src={product?.imageUrl} alt={product.name} />
      </Link>

      <div className="des">
        <span className="span">{product.name}</span>
        <h5 className="h5">{product.description}</h5>
        <div className="star" />
        <h4 className="price">RS.{product.price} /-</h4>

          <button type="submit" className="btn btn-squared m-top-small">
            Add to Cart
          </button>
      </div>
    </div>
  );
};
