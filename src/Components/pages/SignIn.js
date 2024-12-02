import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '../ui/card'; // Adjust the path if necessary
import { Button } from '../ui/button'; // Adjust the path if necessary
import { Input } from '../ui/input'; // Adjust the path if necessary

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const welcomeMessage = location.state?.message; // Retrieve the welcome message

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle sign-in logic, e.g., API call
        console.log('Sign-in data:', { email, password });
        // Redirect to the home page or dashboard after successful sign-in
        navigate('/'); // Change this to your desired route after sign-in
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md p-6">
                <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                {welcomeMessage && <p className="text-green-500 mb-4">{welcomeMessage}</p>} {/* Display welcome message */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">Sign In</Button>
                </form>
            </Card>
        </div>
    );
};

export default SignIn;
