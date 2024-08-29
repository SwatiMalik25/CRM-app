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
                    
                    
                    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">
                        Login
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
