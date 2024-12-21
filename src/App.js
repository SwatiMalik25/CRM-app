import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import CRM from "../src/Components/pages/CRM demo";
import Products from "../src/Components/pages/products";
import Pricing from "../src/Components/pages/pricing";
import Resources from "../src/Components/pages/resources";
import Login from "./Components/pages/login"; // Ensure this import is correct
import HeroSection from "../src/Components/HeroSection";
import { Card } from "../src/Components/ui/card";
import { Button } from "../src/Components/ui/button";
import { Input } from "../src/Components/ui/input";
import SignIn from "../src/Components/pages/SignIn"; // Ensure this import is correct
import Register from "../src/Components/pages/Register"; // Ensure this import is correct
function Registered() {
    const location = useLocation();
    const username = location.state?.username || 'User';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">User Registered</h2>
                <p className="mb-4">Welcome, {username}! You have successfully registered.</p>
                <Link to="/" className="text-blue-500 hover:underline">
                    Go to Home Page
                </Link>
            </Card>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <div className="bg-black text-white min-h-screen">
                <HeroSection />
                <main className="flex-1">
                    <Routes>
                        <Route path="/CRM demo" element={<CRM />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/login" element={<Login />} /> {/* Ensure this route is correct */}
                        <Route path="/register" element={<Register />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/registered" element={<Registered />} />
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Powerful features to streamline your business
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our SaaS platform offers a comprehensive set of tools to help you automate workflows, improve
                        productivity, and drive business growth.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                {/* Feature Cards */}
            </div>
        </>
    );
}

export default App;