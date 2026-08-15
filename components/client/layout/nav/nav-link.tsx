import Link from "next/link";

export const NavLink =({item:{label, link}}:{item:{label:string, link:string}})=>{
    return(
        <Link href={link}>
            <span>{label}</span>
        </Link>
    )
}