import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
    const location = useLocation();
    const { name } = location.state || { name: 'User' }; // Default to 'User' if no name is provided

    return (
        <div>
            <h1>Welcome {name}, you are signed in!</h1>
        </div>
    );
};

export default Welcome;

