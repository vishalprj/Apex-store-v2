import { Link } from 'react-router-dom';
import "./home.css";
import { Features } from '../../components/features';

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <Link to="/shop">
          <button type="button">Shop Now</button>
        </Link>
      </section>
      <Features />
      <section className="banner-1 pad">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale</span>
          <Link to="/shop">
            <button className="button">Learn More</button>
          </Link>
        </div>
        <div className="banner-box banner2">
          <h4>spring/summer</h4>
          <h2>upcoming season</h2>
          <span>The best classic dress is on sale</span>
          <Link to="/shop">
            <button className="btn" style={{ color: 'white', borderColor: 'white' }}>
              Collection
            </button>
          </Link>
        </div>
      </section>

      <section className="banner">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off</span> - All t-Shirts & Accessories
        </h2>
        <Link to="/shop">
          <button>Explore More</button>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
