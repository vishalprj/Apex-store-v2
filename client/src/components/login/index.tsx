import  { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { getLogin } from '../../store/queries';
import toast from 'react-hot-toast';


const LoginPage = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      username: userName,
      password,
    };

    try {
      await getLogin(payload);
      toast.success('User login successfully!');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Failed to login!!');
    }
  };

  return (
    <main className="section-outer grid-center auth-section">
      <form className="form form-signin" onSubmit={handleLogin}>
        <div className="m-bottom-small flex-jc-center">
          <h3 className="m-bottom-small">Login</h3>
        </div>
        <div className="form-group">
          <input
            id="Username"
            name="Username"
            className="form-input"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label htmlFor="Username" className="form-label">
            Username
          </label>
        </div>
        <div className="form-group">
          <input
            name="password"
            id="password"
            type="password"
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              name="remember"
            />
            <label htmlFor="large" className="form-radio-label">
              <span className="form-radio-button" style={{ marginTop: '-0.1rem' }} />
              Remember Me
            </label>
            <a href="#" className="form-button">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn">
            LOGIN
          </button>
        </div>
        <div className="form-footer form-group flex">
          <p>
            Don't have an account?
            <Link to="/signup" id="form-signin-link" className="link form-footer-link">
              Create one
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
