import React from "react";

interface IProps {
  label: string;
  type?: "submit" | "reset" | "button";
}

const Button =({label, type}:IProps)=>{
    return(
        <button type={type} className= "cursor-pointer w-full border-bs-indigo-500 py-3 rounded-md bg-blue-500 font-bold text-md ">{label}</button>
    )
}

export default Button;