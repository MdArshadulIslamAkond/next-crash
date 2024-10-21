"use client"

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
// import "./globals.css";

const ActiveComponent = () => {
    // const pathname = usePathname();
    let pathname = useSelectedLayoutSegment();
    console.log(pathname)
    const isActive = (path) =>{
        // if(path === "/"){
        //     return pathname === path;
        // }
        // console.log(pathname.startsWith(path))
        // return pathname.startsWith(path)
        if(pathname === null && path === "/"){
          return true;
        }
        return pathname === path;
    };
    // console.log(isActive());
   return(
    <nav className="text-4xl bg-slate-300">
          <ul className="flex gap-6">

            <li><Link href='/' className={isActive("/") ? "text-blue-700" : "text-black"}>Home</Link></li>
            <li><Link href='/about' className={isActive("about") ? "text-blue-700" : "text-black"}>About</Link></li>
            <li><Link href='/blogs' className={isActive("blogs") ? "text-blue-700" : "text-black"}>Blogs</Link></li>
            <li><Link href='/posts' className={isActive("posts") ? "text-blue-700" : "text-black"}>Posts</Link></li>
            <li><Link href='/userdetails' className={isActive("/userdetails") ? "text-blue-700" : "text-black"}>UserDetails</Link></li>
          </ul>
        </nav>
   )
};

export default ActiveComponent;