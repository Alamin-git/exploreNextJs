import Link from "next/link";
import React from "react";

const navLinks = [
   {
      path: "/",
      title: "Home",
   },
   {
      path: "/about",
      title: "About",
   },
   {
      path: "/blogs",
      title: "Blogs",
   },
   {
      path: "/feed",
      title: "Feed",
   },
   {
      path: "/dashboard",
      title: "dashboard",
   },
];

const Navbar = () => {
   return (
      <nav className="flex items-center justify-between">
         <h1 className="text-3xl font-bold text-yellow-400">Hello Next</h1>
         <ul>
            {navLinks.map(({ path, title }) => (
               <li key={path}>
                  <Link href={path}>{title}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
