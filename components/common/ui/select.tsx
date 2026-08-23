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
    <div className="flex gap-3">
      <div className="text-lg font-bold tracking-wide">
        <label>{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[80px]" />}
      </div>

      <select
        value={value}
        className="rounded-lg border border-blue-600-400 focus:border-blue-500"
        onChange={() => {}}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={`${option.id}-${index}`} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
