"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";

type TSideBarItems = {
  id: string;
  label: string;
  link: string;
  icon: React.ReactNode;
};

const items: TSideBarItems[] = [
  {
    label: "Dashboard",
    id: "dashboard",
    link: "/admin",
    icon: <TbLayoutDashboard size={26} />,
  },
  {
    label: "Categories",
    id: "category",
    link: "/admin/categories",
    icon: <TbLayoutDashboard size={26} />,
  },
  {
    label: "Brands",
    id: "brands",
    link: "/admin/brands",
    icon: <TbLayoutDashboard size={26} />,
  },
  {
    label: "Products",
    id: "product",
    link: "/admin/products",
    icon: <TbLayoutDashboard size={26} />,
  },
  {
    label: "User",
    id: "user",
    link: "/admin/users",
    icon: <TbLayoutDashboard size={26} />,
  },
];

const SideBarContent = () => {
  return (
    <section className="flex flex-col gap-1 px-1 py-1">
      {items.map((item) => (
        <SideBarItems key={item.id} item={item} />
      ))}
    </section>
  );
};

const SideBarItems = ({
  item: { label, link, icon },
}: {
  item: TSideBarItems;
}) => {
  const pathName = usePathname();
  return (
    <Link href={link}>
      <div
        className={`flex gap-3 items-center py-5 border border-gray-400 px-1 rounded text-gray-600 
      hover:text-white hover:bg-blue-500 transition-all duration-300 ${pathName === link ? "bg-blue-600 text-white" : ""}
      `}
      >
        {icon}

        <span className="font-semibold">{label}</span>
      </div>
    </Link>
  );
};

export default SideBarContent;
