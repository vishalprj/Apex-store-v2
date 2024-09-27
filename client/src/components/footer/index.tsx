import React from 'react';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import "./footer.css"
export const Footer = () => (
  <>
    <footer className="footer footer-padding">
      <div className="col">
        <h3>Apex</h3>
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 562 Wellington Road Street 32, Mumbai
        </p>
        <p>
          <strong>Phone:</strong> +01 2222 365/(+91) 2345 6789
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <a href="" style={{ marginRight: '0.2rem' }}>
              <FaFacebookF />
            </a>
            <a href="" style={{ marginRight: '0.2rem' }}>
              <AiOutlineTwitter />
            </a>
            <a href="" style={{ marginRight: '0.2rem' }}>
              <BsInstagram />
            </a>
            <a href="" style={{ marginRight: '0.2rem' }}>
              <FaPinterestP />
            </a>
            <a href="" style={{ marginRight: '0.2rem' }}>
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Primary Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Play Store</p>
        <div className="row">
          <img
            className="footer-img"
            style={{ marginRight: '0.5rem' }}
            src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671171291/app_ypnown.jpg"
            alt=""
          />
          <img
            className="footer-img "
            src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671171291/play_uhhg6v.jpg"
            alt=""
          />
        </div>
        <p>Secured Payment Gateways</p>
        <img
          className="footer-img "
          src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671171291/pay_abqdex.png"
          alt=""
        />
      </div>
    </footer>
  </>
);
