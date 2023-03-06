import React from "react";
import { NavLink } from "react-router-dom";

const Header =()=>{

    return(
        <><header>
            <a href="#">Logo</a>
            <nav>
                <ul>
                    <li><NavLink to="/"> Home</NavLink></li>
                    <li><NavLink to="/about"> SignUp</NavLink></li>
                    <li><NavLink to="/contact"> Contact</NavLink></li>
                    <li><NavLink to="/login"> Login</NavLink></li>
                </ul>
            </nav>
        </header></>
    )
}
export default Header;