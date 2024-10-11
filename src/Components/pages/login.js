import React, {useState} from 'react';
import {supabase} from "../../../src/utils/supabaseClient"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  setLoading(true);

const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
    await supabase.auth.signInWithOAuth({
        email:email,
        options: {
          redirectTo: "http://localhost:3000/welcome" //TODO: convert this to the process.env.WEBSITE_URL based on the prod or dev enviornment
        },
}).then((response) => {
        alert("User created successfully" + response.data.user.email)
      }).catch((error) => {
        alert("Error creating user" + error)
      })
      ;
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
            Username:  </label>
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
          <label>Email</label>
          <input type="text" name="email" onSubmit={(e) => setEmail(e.target.value)} />
          <button type="submit">
            
           { loading ? "Submit" : "LoggedIn" }
            
            </button>
      </form>
      </>
    );
      
  };
  export default Login;