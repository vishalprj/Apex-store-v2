import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import "../login/login.css"
export const SignUp = () =>

<>
  <main className="section-outer grid-center auth-section">
    <form action="#" className="form form-signup">
      <div className="m-bottom-small flex-jc-center">
        <h3 className="m-bottom-small">Sign Up</h3>
      </div>
      <div className="form-group flex">
        <a href="#">
          <i className="font-icon fa fa-brands fs-medium m-right-small fa-google" />
        </a>
        <a href="#">
          <i className="font-icon fa fa-brands fs-medium m-right-small fa-twitter" />
        </a>
        <a href="#">
          <i className="font-icon fa fa-brands fs-medium fa-github" />
        </a>
      </div>
      <div className="form-signup-group">
        <input
          id="name"
          type="name"
          name="fullName"
          className="form-input"
          placeholder="Username"
          required
        />
        <label htmlFor="name" className="form-label">
          Username
        </label>
      </div>
      <div className="form-signup-group">
        <input
          id="signup-password"
          type="password"
          name="password"
          className="form-input"
          placeholder="Password"
        //   minLength="4"
          required
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
        >
          Sign Up
        </button>
      </div>
      <div className="form-footer form-group flex">
        <p className="">
          <span>
            <i className="fa fa-regular fa-face-smile-beam" />
          </span>
          Already have an account
          <Link
            style={{ color: '#088178' }}
            to="/login"
            id="form-signup-link"
            // href="#"
            className="link form-footer-link m-left-smallest"
          >
            Log in
          </Link>
        </p>
      </div>
    </form>
  </main>
</>;
