import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const UserInfoForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input
        if (!email || !password) {
            alert('Email and password are required');
            return; // Prevent submission if validation fails
        }

        // Sign up the user
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name } // Store the name as metadata
            }
        });

        if (error) {
            console.error('Error signing up:', error); // Log the full error object
            if (error.message.includes('User already registered')) {
                alert('This email is already registered. Please log in instead.'); // Inform the user
            } else {
                alert(`Sign up failed: ${error.message}`); // Show the error message
            }
            return; // Prevent further actions
        }

        // Redirect to the sign-up success page
        navigate('/sign-up-success'); // Ensure this path matches your routing setup
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserInfoForm;
