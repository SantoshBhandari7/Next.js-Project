import React from "react";

interface DashboardIProps {
  title: string;
  value: number;
}

const DashboardCard = ({ title, value }: DashboardIProps) => {
  return (
    <main className="flex justify-between items-center gap-3 pl-3 py-13 shadow-blue-400">
      <div className="flex flex-col gap-1 border rounded-sm w-30 h-25 box-border justify-center items-center  ">
        <p className="text-gray-800 font-bold text-center ">{title}</p>
        <h2 className="text-gray-700 font-bold text-center">{value}</h2>
      </div>
    </main>
  );
};
export default DashboardCard;
