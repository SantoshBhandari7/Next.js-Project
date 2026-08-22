import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

interface Option {
  // brand: string;
  // category: string;
  id: string;
  name: string;
}

interface IProps {
  label: string;
  value: string | string[];
  options: Option[];
  disabled?: string;
  required?: boolean;
  error?: string;
  // onChange: (value: string | string[]) => void;
}

export const Select = ({
  label,
  value,
  options = [],
  error,
  required = false,
}: IProps) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[80px]" />}
      </div>

      <select
        value={value}
        className="rounded-lg border-gray-400 focus:border-blue-500"
        onChange={() => {}}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
