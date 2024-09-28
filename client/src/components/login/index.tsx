import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { getLogin } from '../../store/queries';
import toast from 'react-hot-toast';

type LoginPageProps = {
    setUser: (userRole: string) => void;
}
const LoginPage = ({ setUser }: LoginPageProps) => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        const payload = { username: userName, password };

        try {
            const res = await getLogin(payload);
            const userRole = res?.user?.role;

            if (userRole) {
                localStorage.setItem("user", userRole);
                setUser(userRole);
                toast.success('User logged in successfully!');
                navigate(userRole === "admin" ? '/dashboard' : '/shop');
            }
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Failed to login!');
        }
    };

    return (
        <main className="section-outer grid-center auth-section">
            <form className="form form-signin" onSubmit={handleLogin}>
                <h3 className="m-bottom-small flex-jc-center">Login</h3>

                <div className="form-group">
                    <input
                        id="username"
                        name="username"
                        className="form-input"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <label htmlFor="username" className="form-label">Username</label>
                </div>

                <div className="form-group">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="form-label">Password</label>
                </div>

                <div className="form-group">
                    <div className="form-radio-group flex-nav-wrap">
                        <input
                            id="rememberMe"
                            type="checkbox"
                            className="form-radio-input"
                            name="remember"
                        />
                        <label htmlFor="rememberMe" className="form-radio-label">
                            <span className="form-radio-button" style={{ marginTop: '-0.1rem' }} />
                            Remember Me
                        </label>
                        <Link to="#" className="form-button">Forgot Password?</Link>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn">LOGIN</button>
                </div>

                <div className="form-footer form-group flex">
                    <p>
                        Don't have an account? {" "}
                        <Link to="/signup" id="form-signin-link" style={{ color: '#088178' }}
                        >Create one</Link>
                    </p>
                </div>
            </form>
        </main>
    );
};

export default LoginPage;
