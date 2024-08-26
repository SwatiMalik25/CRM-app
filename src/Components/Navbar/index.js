import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/CRM demo" >
                        CRM demo
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        Products
                    </NavLink>
                    <NavLink to="/pricing" activeStyle>
                        Pricing
                    </NavLink>
                    <NavLink to="/resources" activeStyle>
                        Resources
                    </NavLink>
                    
                    <NavLink to="/sign-up" activeStyle>
                        login
                    </NavLink>
                    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Login
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
