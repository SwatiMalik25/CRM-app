import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink
                        to="/CRM demo"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'blue' : 'black',
                        })}
                    >
                        CRM demo
                    </NavLink>
                    <NavLink 
                        to="/products" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'blue' : 'black',
                        })}
                    >
                        Products
                    </NavLink>
                    <NavLink 
                        to="/pricing" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'blue' : 'black',
                        })}
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to="/resources" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'blue' : 'black',
                        })}
                    >
                        Resources
                    </NavLink>
                    <NavLink 
                        to="/register" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'blue' : 'black',
                        })}
                    >
                        Register
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLink 
                        to="/user-info" // Updated to link to UserInfoForm page
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'blue' : 'black',
                        })}
                    >
                        Login
                    </NavLink>
                    <NavLink 
                        to="/logout" // Add a link to the Logout page
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            color: isActive ? 'blue' : 'black',
                        })}
                    >
                        Logout
                    </NavLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
