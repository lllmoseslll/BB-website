import { Product } from "../components/ReuseableComponents/Product";



const Projects = () => {
    return (
      <>
      <div className=" min-h-screen flex w-full flex-col justify-center items-center pt-[75px] ">
  
         <div className="flex justify-center my-6 text-[#ff8828] font-bold text-3xl">
          <h1 className="">Projects</h1>
         </div>
         <div className=" w-[90%] grid grid-cols-3 grid-flow-row gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 mb-10 mx-auto p-10 ">
      
          <Product
          imageUrl="/assets/DesertHotel.jpg"
          title="Desert hotel"
          />

          <Product
          imageUrl="/assets/hutHouse.jpg"
          title="The Hut Mansion"
          />

         <Product
          imageUrl="/assets/woodsHouse.jpg"
          title="The Woods Mansion"
          />

         <Product
          imageUrl="/assets/grayHouse.jpg"
          title="The Grey House"
          />

         <Product
          imageUrl="/assets/blueTower.jpg"
          title="The Blue Tower"
          />

      

         </div>
       

      </div>
        
      </>
    )
  }
  
  export default Projects;
//   <div className="h-[250px] w-[250px] flex flex-col justify-between">
//   <div className="h-[200px] bg-[url('/assets/hutHouse.jpg')] bg-cover"></div>
//   <div>
//   <p className="text-white text-2xl">The Hut Mansion</p>
//   </div>
// </div>
// <div className="h-[250px] w-[250px] flex flex-col justify-between">
//   <div className="h-[200px] bg-[url('/assets/woodsHouse.jpg')] bg-cover bg-center"></div>
//   <div>
//   <p className="text-white text-2xl">The Woods Mansion</p>
//   </div>
// </div>
// <div className="h-[250px] w-[250px] flex flex-col justify-between">
//   <div className="h-[200px] bg-[url('/assets/grayHouse.jpg')] bg-cover bg-center"></div>
//   <div>
//   <p className="text-white text-2xl">The Grey House</p>
//   </div>
// </div>
// <div className="h-[250px] w-[250px] flex flex-col justify-between">
//   <div className="h-[200px] bg-[url('/assets/blueTower.jpg')] bg-cover bg-center"></div>
//   <div>
//   <p className="text-white text-2xl">The Blue Tower</p>
//   </div>
// </div>
