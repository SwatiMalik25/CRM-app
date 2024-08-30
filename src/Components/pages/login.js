

import React, {useState} from 'react';
import {SupabaseClient} from "@supabase/supabase-js"
import {configDotenv} from "dotenv"


configDotenv({
  path: resolvePath( __dirname,"../../.env")
});


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    // taking the username and email password parameters:
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");

    const supabase = new SupabaseClient(supabaseUrl, supabaseAnonKey);
    try {
      const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            username: username
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
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

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}
  export default Login;