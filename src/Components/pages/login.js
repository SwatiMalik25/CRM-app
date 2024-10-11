import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card } from '../ui/card'; // Adjust the path if necessary
import { Button } from '../ui/button'; // Adjust the path if necessary
import { Input } from '../ui/input'; // Adjust the path if necessary

const Login = () => {
    const [name, setName] = useState(''); // Added name state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle login logic, e.g., API call
        console.log('Login data:', { name, email, password });
        
        // After successful login, navigate to SignIn with a welcome message
        navigate('/signin', { state: { message: `Welcome, ${name}!` } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md p-6">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <Button type="submit" className="w-full">Login</Button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default Login;