import Sidebar from "./Sidebar";

const DashboardLayoutPage = ({ children }) => {
   return (
      <div className="flex container mx-auto mt-10 gap-10">
         <Sidebar />
         {children}
      </div>
   );
};

export default DashboardLayoutPage;
