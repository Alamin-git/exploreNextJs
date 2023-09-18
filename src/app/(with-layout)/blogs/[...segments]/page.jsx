const SingleBlog2 = ({ params }) => {
   // console.log(params);
   // console.log(params.segments);
   const [year, id] = params.segments;

   return (
      <div>
         Single Blog2 - {year} for {id}
         <p></p>
      </div>
   );
};

export default SingleBlog2;
