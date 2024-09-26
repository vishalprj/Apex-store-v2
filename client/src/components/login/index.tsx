import React, { useEffect } from 'react';
import './login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  FetchCartAndWishlist,
  useAuthContext,
  useFetchCart,
  useGuestLogin,
  useUserLogIn,
} from '../../store/Context/AuthContext';
import { useCartContext } from '../../store/Context/CartContext';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { useInput } from '../../CustomHooks/CustomHooks';
import { FetchCart } from '../../serverCalls/cartCalls/FetchCart';
import "./login.css"
export const LoginPage = () => {
  return (
    <main className="section-outer grid-center auth-section">
      <form action="#" className="form form-signin">
        <div className="m-bottom-small flex-jc-center">
          <h3 className="m-bottom-small">Login</h3>
        </div>
        <div className="form-group">
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="Email Address"
            // onChange={inputUpdate}
            required
          />
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
        </div>
        <div className="form-group">
          <input
            name="password"
            id="password"
            type="password"
            className="form-input"
            placeholder="Password"
            // minLength="4"
            required
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <div className="form-group">
          <div className="form-radio-group flex-nav-wrap">
            <input
              id="large"
              type="checkbox"
              className="form-radio-input"
              name="size"
            />
            <label htmlFor="large" className="form-radio-label">
              <span
                className="form-radio-button"
                style={{ marginTop: '-0.1rem' }}
              />
              Remember Me
            </label>
            <a href="" className="form-button">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="form-group">
          <button
            // onClick={(e) => {
            //   loginInUser(e);
            // }}
            type="submit"
            className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
          >
            LOGIN
          </button>
        </div>
        <div className="form-footer form-group flex">
          <p>
            Don't have an account ?
            <Link
              to="/signup"
              id="form-signin-link"
            //   href="#"
              className="link form-footer-link a"
            >
              Create one
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
