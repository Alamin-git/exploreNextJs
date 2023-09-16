import NavLink from "@/components/NavLink";

const sidebarLinks = [
   {
      path: "/dashboard",
      title: "Dashboard",
   },
   {
      path: "/dashboard/add-product",
      title: "Add product",
   },
   {
      path: "/dashboard/manage-product",
      title: "Manage product",
   },
   {
      path: "/",
      title: "Home",
   },
];

const Sidebar = () => {
   return (
      <aside className="">
         <h1 className="text-2xl font-semibold text-slate-700">Dashboard</h1>
         <ul className="ml-5 mt-5">
            {sidebarLinks.map(({ path, title }) => (
               <li className="text-lg mb-3" key={path}>
                  <NavLink exact activeClassName="text-green-700" href={path}>
                     {title}
                  </NavLink>
               </li>
            ))}
         </ul>
      </aside>
   );
};

export default Sidebar;
