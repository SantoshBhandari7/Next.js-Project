import React from "react";

interface IProps {
  label: string;
  type?: "submit" | "reset" | "button";
  disabled?:boolean;
}

const Button =({label, type , disabled=false}:IProps)=>{
    return(
        <button disabled={disabled} type={type} className= "cursor-pointer w-full border-bs-indigo-500 py-3 rounded-md bg-blue-500 font-bold text-md disabled:cursor-not-allowed disabled:bg-gray-500 ">{label}</button>
    )
}
 
export default Button;