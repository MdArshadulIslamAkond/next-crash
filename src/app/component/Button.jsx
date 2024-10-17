"use client"


const Button = () => {
    return (
        <div className="mt-5">
            <button className="bg-green-500 rounded-sm px-4 py-1 text-white" onClick={()=>console.log("I have clicked here")}>Click here</button>
        </div>
    );
};

export default Button;