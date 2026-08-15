import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

interface Option{
    id:string;
    name:string;
}

interface IProps {
  label: string;
  name: string;
  options:Option[];
  required?:boolean;
}

export const Select = ({ label, name, options, required=false}: IProps) => {
  return (
    <div>
        <div>
      <label>{label}</label>
      {required && <FaStarOfLife className="text-red-500 text-[80px]"/>}
      </div>

      <select name={name}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
