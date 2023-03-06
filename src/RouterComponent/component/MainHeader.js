import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../RouterComponent/Header/Header";

const MainHeader =()=>{

    return(
        <div><Header />
        <Outlet />
            </div>
    )
}
export default MainHeader;