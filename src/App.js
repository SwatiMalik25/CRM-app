

import React from "react";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import CRM from "../src/Components/pages/CRM demo";
import Products from "../src/Components/pages/products";
import Pricing from "../src/Components/pages/pricing";
import Resources from "../src/Components/pages/resources";
import Login from "../src/Components/pages/login";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/CRM demo" element={<CRM demo />} />
                <Route
                    path="/products"
                    element={<Products />}
                />
                <Route
                    path="/pricing"
                    element={<Pricing />}
                />
                <Route path="/resources" element={<Resources />} />
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </Router>
    );
}

export default App;
