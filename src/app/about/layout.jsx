import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About us",
  description: "This is about blog page",
};
const Aboutlayout = ({ children }) => {
  return (
    <div>
      <nav className="text-2xl my-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vission">Vission</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Aboutlayout;
