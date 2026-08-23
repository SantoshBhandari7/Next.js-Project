// import { Interface } from "node:readline";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa6";
interface IProps {
  label: string;
  id: string;
  placeholder?: string;
  logo?: File | null;
  cover_image?: File | null;
  images?: File[] | null;
  name: string;
  price?: number;
  stock?: number;
  new_arrival?: string;
  description?: boolean;
  type?:
    | "text"
    | "email"
    | "password"
    | "phone"
    | "number"
    | "file"
    | "boolean";
  required?: boolean;
  register: UseFormRegister<any>;
  error?: string;
}

const Input = ({
  id,
  type,
  placeholder,
  name,
  label,
  description,
  register,
  logo,
  required,
  error,
}: IProps) => {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex flex-row gap 0.5">
        <label className="font-bold text-md flex flex-row">{label}</label>
        {required && <FaStarOfLife className="  text-red-600 text-[8px]" />}
      </div>

      <input
        {...register(name)}
        id={id}
        // name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full border rounded-md px-2 py-1 hover:outline-1
          ${error ? " border-red-500  focus:border-red-600 border-2" : " border-b-green-300 focus:border-cyan-600 "}`}
      />
      <small className="text-red-600  p-0 m-0 h-2 ">{error}</small>
    </div>
  );
};
export default Input;
