"use client"

import Script from "next/script";


const page = () => {
    return (
        <div>
            <Script src="/location.js" strategy="afterInteractive" onLoad={()=>{
                console.log("Loading")
            }}/>
            <h1>Get user getLocation</h1>
        </div>
    );
};

export default page;