"use client";
import { logoutUser } from "@/api/auth.api";
import AuthContext from "@/context/auth.context";
import Image from "next/image";
import React, { useContext } from "react";

const AuthSection = () => {
  const { isLoading, logout, user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className=" flex justify-center gap-2">
      <div
        title="profile"
        className="h-16 w-16 rounded-full border-sky-600 p-0.5 overflow-clip "
      >
        <Image
          src={user?.profile_image?.path ?? "/profile_image.png"}
          alt={"profile image"}
          width={600}
          height={400}
          className="h-full w-full rounded-full "
        />
      </div>
      <div className="mt-1 ">
        <p className="font-semibold text-lg text-gray-700 ">
          {user?.full_name}
        </p>
        <p
          onClick={logout}
          title="logout"
          className="cursor-pointer text-md font-semibold text-red-600"
        >
          logout
        </p>
      </div>
    </div>
  );
};
export default AuthSection;
