
import { List, X } from "phosphor-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";


export function Hearder() {
    const [open, setOpen] = useState(false);
    
    function handleMenuOpen() {
        setOpen(!open)
    }

    return(
        <div className="w-full">
            <header className="fixed lg:relative z-50 w-full py-5 lg:px-0 px-5 justify-between flex items-center lg:justify-center bg-gray-700 border-b border-gray-600">
                <Logo />
                <button  onClick={handleMenuOpen} className="lg:hidden">
                    {!open ? <List size={32} /> : <X size={32} /> }          
                </button>    
            </header>
            {!open ? <div className="  z-10 absolute w-full h-0 lg:hidden transition-all duration-500 opacity-0">
                    <Sidebar />
                </div> : 
                <div className=" mt-[4.6857rem] z-30 fixed w-full h-full lg:hidden transition-all duration-500 opacity-95">
                    <Sidebar />    
                </div>}
        </div>

    )
}
