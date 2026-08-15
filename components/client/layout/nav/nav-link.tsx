import Link from "next/link";

export const NavLink =({item:{label, link}}:{item:{label:string, link:string}})=>{
    return(
        <Link href={link}>
            <span className="text-lg font-semibold text-gray-900 hover:text-sky-500">{label}</span>
        </Link>
    )
}