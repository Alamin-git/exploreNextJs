import React from "react";

const WithLayout = ({ children }) => {
   return (
      <div>
         <nav>Navbar</nav>
         {children}
         <footer>Footer</footer>
      </div>
   );
};

export default WithLayout;
