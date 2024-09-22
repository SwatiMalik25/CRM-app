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
import HeroSection from "../src/Components/HeroSection";


function App() {
    return (
        <Router>
            <div className="bg-black text-white min-h-screen">
                <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
                    <a className="flex items-center justify-center" href="#">
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </a>
                    <Navbar />
                </header>
                <main className="flex-1">
                    <Routes>
                        <Route path="/CRM demo" element={<CRM />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <a className="text-xs hover:underline underline-offset-4" href="#">
                            Terms of Service
                        </a>
                        <a className="text-xs hover:underline underline-offset-4" href="#">
                            Privacy
                        </a>
                    </nav>
                </footer>
            </div>
        </Router>
    );
}

function HomePage() {
    return (
        <>
            <HeroSection />
            {/* Other sections can be added here */}
        </>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

export default App;
