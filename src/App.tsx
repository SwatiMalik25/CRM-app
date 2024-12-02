import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar"; // Ensure the path is correct
import Login from "./Components/pages/Login"; // Ensure the path is correct
import UserInfoForm from './Components/pages/UserInfoForm'; // Ensure the path is correct
import HeroSection from "./Components/HeroSection"; // Ensure the path is correct
import Welcome from './Components/pages/Welcome'; // Import the Welcome component
import SignUpSuccessPage from "./Components/pages/sign-up-success-page";
import Logout from "./Components/pages/Logout"; // Import the Logout component

export const App = () => {
    return (
        <Router>
            <Main /> {/* Render the Main component inside Router */}
        </Router>
    );
};

const Main = () => {
    return (
        <>
            <Navbar /> {/* Ensure the Navbar is included here */}
            <Routes>
                <Route path="/" element={<HeroSection />} /> {/* Render HeroSection on the root path */}
                <Route path="/login" element={<Login />} /> {/* This should render Login */}
                <Route path="/user-info" element={<UserInfoForm />} /> {/* This should render UserInfoForm */}
                <Route path="/welcome" element={<Welcome />} /> {/* Add this route for the Welcome page */}
                <Route path="/sign-up-success" element={<SignUpSuccessPage />} />
                <Route path="/logout" element={<Logout />} /> {/* Add this route for the Logout page */}
                {/* Add other routes as needed */}
            </Routes>
        </>
    );
};

export default App;
