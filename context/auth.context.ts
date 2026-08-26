"use client"
import { TLogin } from "@/types/auth.types";
import { Role } from "@/types/enum.types";
import { Image } from "@/types/gloabl.types";
import { createContext } from "react";


export type Tuser = {
    full_name: string;
    email: string;
    _id: string;
    profile_image: Image;
    role: Role
};

type TAuthContext = {
    user: Tuser | null;
    logout: () => void;
    login: (data: TLogin) => void;
    register: (data: TLogin) => void;
    isLoading: boolean;
};

const initialValues: TAuthContext = {
    user: null,
    isLoading: false,
    login: () => { },
    logout: () => { },
    register: () => { },
};

const AuthContext = createContext<TAuthContext>(initialValues);
export default AuthContext;


