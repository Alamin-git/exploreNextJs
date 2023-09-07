const SingleBlog = ({ params }) => {
   console.log(params);

   return <div>Single Blog - {params.id}</div>;
};

export default SingleBlog;
