import Logo from "@/components/common/ui/logo";
import React from "react";
import SideBarContent from "./sidebar-content";

const SideBar = () => {
  return (
    <aside className=" w-75  pb-5 h-screen border-r border-gray-400 rounded-md">
      <header className="px-3 max-auto h-15 w-full pl-4 pb-3 border-b  bg-gray-700  border-gray-500 ">
        {/* <Logo /> */}
        {/* <p className="text-2xl font-bold text-sky-700 italic tracking-widest ml-0.5 mt-2.5 ">
          Nepali Store
        </p> */}
        <Logo />
      </header>
      <SideBarContent />
    </aside>
  );
};

export default SideBar;
