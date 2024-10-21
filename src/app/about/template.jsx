"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Template = ({children}) => {
const [pageBgColor, setPageBgColor] = useState("");
const pathname = usePathname();
const randomColor = [
    "bg-green-300",
    "bg-red-300",
    "bg-blue-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-gray-300",
    "bg-indigo-300",
    "bg-teal-300",
    "bg-orange-300",
    "bg-pink-500",
    "bg-gray-500",
]
useEffect( ()=>{
    const index = Math.floor(Math.random()*12);
    const pickedColor = randomColor[index];
    setPageBgColor(pickedColor);
}, [pathname])
    return (
        <div className={`h-screen ${pageBgColor}`}>
            {children}
        </div>
    );
};

export default Template;