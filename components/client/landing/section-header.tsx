import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

interface IProps {
  title: string;
  subtitle: string;
  link?: string;
}

const SectionHeader = ({ title, subtitle, link }: IProps) => {
  return (
    <header className="flex justify-between mb-6 items-center">
      <div>
        <h3 className="text-xl font-bold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      {!!link && (
        <Link href={link}>
          <div className=" flex items-center gap-1 text-gray-600 text-sm">
            <span className="font-semibold">View All</span>
            <FaChevronDown />
          </div>
        </Link>
      )}
    </header>
  );
};

export default SectionHeader;
