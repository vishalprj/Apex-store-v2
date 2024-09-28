import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./page/home";
import LoginPage from "./components/login";
import { AboutPage } from "./page/about";
import { ShopPage } from "./page/product";
import { Toaster } from "react-hot-toast";
import SignUp from "./components/SignUpPage";
import { SingleProduct } from "./page/singleProduct";
import AdminDashboard from "./page/dashboard";
import PrivateRoute from "./privateRoute";
import "./index.css";
import Footer from './components/footer';
import Navbar from './components/header';

function App() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard user={user} />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
