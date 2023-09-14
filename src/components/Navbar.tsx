import Link from "next/link";

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
      <nav className="flex items-center justify-around">
         <h1 className="text-3xl font-bold text-gray-700">Hello Next</h1>
         <ul className="flex gap-2 text-lg">
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
