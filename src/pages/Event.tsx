import { X } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Hearder } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";



export function Event() {
    const { slug } = useParams<{slug: string}> ()

    const [nav, setNav] = useState(false);
    
            
    

    function handleMenuOpen() {
        setNav(!nav)
    }

    return(
        <div className="flex flex-col min-h-screen">
            
            <Hearder /> 
           
            <main className=" mt-[4.6857rem] lg:mt-0 z-15 lg:flex lg:flex-1 ">
                
                { slug ? <Video lessonSlug={slug} /> : <div className="flex-1" /> }
                <div className=" lg:flex hidden">
                    <Sidebar />
                </div>
            </main>
            
        </div>
        
    )
}