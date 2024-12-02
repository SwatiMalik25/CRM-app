import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this import is correct
import { Button } from '../ui/button'; // Adjust the path if necessary

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the login cookie
        clearLoginCookie();
        // Redirect to the homepage
        navigate('/');
    };

    const clearLoginCookie = () => {
        document.cookie = "loggedIn=; path=/; max-age=0"; // Expire the cookie immediately
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Are you sure you want to logout?</h2>
            <Button type="button" className="w-full" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Logout;
