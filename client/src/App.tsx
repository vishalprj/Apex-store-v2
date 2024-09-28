import { Navbar } from "./components/header";
import HomePage from "./page/home";
import { Routes, Route } from 'react-router-dom';
import "./index.css"
import { Footer } from "./components/footer";
import LoginPage from "./components/login";
import { AboutPage } from "./page/about";
import { ShopPage } from "./page/product";
import { Toaster } from "react-hot-toast";
import SignUp from "./components/SignUpPage";
import { SingleProduct } from "./page/singleProduct";
function App() {
    return (
        <>
            <Navbar />
            <Toaster position="top-right"/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:id" element={<SingleProduct />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
