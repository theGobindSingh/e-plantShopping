import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <Router>
      <div className="app">
        {!started ? (
          <LandingPage onGetStarted={() => setStarted(true)} />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
