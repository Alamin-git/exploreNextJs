import Link from 'next/link';

const SingleCategory = ({ category }) => {
   const { id, name, imageUrl } = category;

   return (
      <Link  className="pl-5" href={`/products?categoryId=${id}`}>
         <h1>{name}</h1>
      </Link>
   );
};

export default SingleCategory;
