import Image from "next/image";
import React from "react";


const AuthSection =()=>{
    return(
        <div className="mt-4">
            <div title="profile" className="h-16 w-16 rounded-full border-sky-600 p-0.5 overflow-clip">
                <Image src={"/profile_image.png"} alt={"profile image"} width={600} height={400}  className="h-full w-full rounded-full " />
            </div>
            <div className="mt-0.5">
                <p className="font-semibold text-lg text-gray-600 ">Hari Sha</p>
                <p title="logout" className="cursor-pointer text-md font-semibold text-red-600" >logout</p>
            </div>
        </div>
    )
}
export default AuthSection;