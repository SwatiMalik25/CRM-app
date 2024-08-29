

import React, {useState} from 'react';



const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // taking the username and email password parameters:
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");

    // TODO: create the api method in order to setup the account authentication on the supabase.


    console.log(data);
  };
const Login = () => {
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" name="username" />
            </label>
            <input type="text" name="password" />
      </form>
      </>
    );
};

export default Login;
                                                                 
