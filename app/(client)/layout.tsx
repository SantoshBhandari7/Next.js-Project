import NavBar from "@/components/client/layout/nav";
import React from "react";


const ClientLayout =({children}:{children:React.ReactNode})=>{
    return(
        <main>
            <NavBar/>
            <section className="min-h-[82vh]">
                {children}
            </section>
        </main>
    )
}
export default ClientLayout;