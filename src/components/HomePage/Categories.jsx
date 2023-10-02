import getAllCategories from "../../utils/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
   const categories = await getAllCategories();
   return (
      <div>
         <h2>Categories</h2>
         <div>
            {categories.map((category) => (
               <SingleCategory key={category.id} category={category} />
            ))}
         </div>
      </div>
   );
};

export default Categories;
