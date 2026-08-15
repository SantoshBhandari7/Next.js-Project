
import Logo from "@/components/common/ui/logo";
import React from "react";
import NavLinks from "./nav-content";
import AuthSection from "@/components/common/ui/auth-section";

const NavBar =()=>{
    return(
        <nav className="h-16 w-full  flex items-center justify-between px-18 border-b border-b-gray-400 bg-gray-400 shadow">
            <div className="h-16 w-fit flex items-center">
                <Logo/>
            </div>
            <NavLinks/>
            <div>
                <AuthSection/>
            </div>
        </nav>
    )
}
export default NavBar;