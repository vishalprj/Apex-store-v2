import { Navbar } from "./components/header";
import { LoginPage } from "./components/login";
import { SignUp } from "./components/sign";
import HomePage from "./page/home";
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
