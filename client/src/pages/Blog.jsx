import { BlogCard } from "../components/ReuseableComponents/BlogCard";



const Blog = () => {
  return (
    <div className="pt-[75px] h-auto flex flex-col">
   
        <div className="flex justify-center">
          <h1 className="text-[#ff8828] text-3xl font-bold mt-6">Blogs</h1>
        </div>
       
          <div className=" w-[90%] grid grid-cols-3 grid-flow-row gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 mb-10 mx-auto p-10 ">
           <BlogCard 
           imageUrl="/assets/goldenHouse.jpg"
           title="The top 10 wonders of architecture"
           body="ldjakljdklj flksdj kldj kldj fkljsd kjdfsklj "
           />
             <BlogCard 
           imageUrl="/assets/goldenHouse.jpg"
           title="The top 10 wonders of architecture"
           body="ldjakljdklj flksdj kldj kldj fkljsd kjdfsklj "
           />
           
           <BlogCard 
           imageUrl="/assets/goldenHouse.jpg"
           title="The top 10 wonders of architecture"
           body="ldjakljdklj flksdj kldj kldj fkljsd kjdfsklj "
           />
           
           

          

          </div>



    </div>
  )
}

export default Blog;
{/* <div className="p-10 lg:flex lg:justify-center max-md:w-[100%] w-[50%] h-[350px] max-lg:w-[100%] ">
<div className="mr-2 w-[100%] lg:h-[100%] lg:w-[80%] h-[70%] bg-[url('/assets/greenHouse.jpg')] bg-cover bg-center "></div>
<div className=" flex justify-center flex-col text-white text-xl font-semibold">
  <h1 className="my-4 flex justify-center">Architecture and nature </h1>
  <button className="border-4 border-[#ff8828] hover:bg-[#ff8828] rounded-xl p-2">Learn more &rArr; </button>
  </div>
</div> */}