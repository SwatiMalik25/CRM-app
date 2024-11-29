import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this import is correct
import { Card } from '../ui/card'; // Adjust the path if necessary
import { Button } from '../ui/button'; // Adjust the path if necessary

const Login = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Set the login cookie
        setLoginCookie();
        // Redirect to the UserInfoForm component
        navigate('/user-info');
    };

    const setLoginCookie = () => {
        document.cookie = "loggedIn=true; path=/; max-age=86400"; // Cookie expires in 1 day
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md p-6">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <Button type="button" className="w-full" onClick={handleLoginClick}>
                    Login
                </Button>
            </Card>
        </div>
    );
};

export default Login;
