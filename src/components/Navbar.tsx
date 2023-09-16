import NavLink from "./NavLink";

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
      <nav className="flex items-center container mx-auto justify-between">
         <h1 className="text-3xl font-bold text-gray-700">Hello Next</h1>
         <ul className="flex gap-5 text-lg">
            {navLinks.map(({ path, title }) => (
               <li key={path}>
                  <NavLink
                     exact={path === "/"}
                     activeClassName="text-blue-700"
                     href={path}
                  >
                     {title}
                  </NavLink>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
