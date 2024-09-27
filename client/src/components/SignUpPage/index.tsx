import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login/login.css';
import toast from 'react-hot-toast';
import { getSignUp } from '../../store/queries';

const SignUp = () => {
  const [role, setRole] = useState<string>("");
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleSignUp = async (e: FormEvent) => {
      e.preventDefault();
      const payload = {
      username: userName,
      password,
      role
    };
      try {
      await getSignUp(payload);
      toast.success('User register successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Failed to register user', error);
      toast.error('Failed to register user!!');
    }
  }
  return (
    <main className="section-outer grid-center auth-section">
      <form className="form form-signup" onSubmit={handleSignUp}>
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
            type="text"
            name="fullName"
            className="form-input"
            placeholder="Username"
            required
            onChange={(e)=> setUserName(e.target.value)}
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
            minLength={4}
            required
            onChange={(e)=> setPassword(e.target.value)}

          />
          <label htmlFor="signup-password" className="form-label">
            Password
          </label>
        </div>

        <div className="form-signup-group">
          <select
            id="user-type"
            name="userType"
            className="form-input"
            value={role}
            onChange={handleUserTypeChange}
            required
          >
            <option value="" disabled hidden>
              User Type
            </option>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
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
          <p>
            <span>
              <i className="fa fa-regular fa-face-smile-beam" />
            </span>
            Already have an account?
            <Link
              style={{ color: '#088178' }}
              to="/login"
              id="form-signup-link"
              className="link form-footer-link m-left-smallest"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
