import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from "./SingleProduct";

function App() {
const [products, setproducts] = useState ([]);
const [cart, setCart] = useState ([]);

  useEffect(() => {
    fetch('./blogs.json')
    .then(res => res.json())
    .then(data => {
      setproducts(data);
    })
  },[])

const handleCatrt = (p) => {
  const isExist = cart.find(pd => pd.id == p.id);
  if(!isExist){
    setCart([...cart,p])
  }else{
    alert("already exist");
  }
  console.log(cart);
}




// console.log(products);
  return (

    <>
      
<header>
  <div className=" lg:flex justify-around py-1 ">
      <div className=""><h1 className="text-xl font-extrabold">Recipe Calories</h1></div>
      <div className=" flex gap-x-4">
            <div className=""><button className="text-base font-medium text-[#150b2b9f]">Home</button></div>
            <div className=""><button className="text-base font-medium text-[#150b2b9f]">Recipes</button></div>
            <div className=""><button className="text-base font-medium text-[#150b2b9f]">About</button></div>
            <div className=""><button className="text-base font-medium text-[#150b2b9f]">Search</button></div>
            
      </div>
      <div className=" flex gap-x-4">
              <label className="flex">
                
                <input  className="  bg-[#0904131e] rounded-full py-2 px-9 border-none" type="search" name="" id="" placeholder="Search"  /> 
                
              </label>
              
              <div className="">
                <img className="bg-[#0BE58A] p-3 rounded-full" src="https://i.ibb.co.com/2WTCz3X/profile-icon.png" alt="" srcset="" />
              </div>
      </div>
  </div>

  <div className="my-8 bg-[url(https://i.ibb.co.com/7N3pWzH/bg-img.png)]   h-screen bg-no-repeat bg-center place-content-center bg-cover rounded-3xl">
          
      <h1 className="py-4 text-white text-3xl font-black mb-6 leading-10">"Experience a unique cooking class<br/>designed just for you!"</h1>
      <p className="text-white font-medium mb-6 leading-6">"Indulge in our carefully crafted menu, featuring authentic flavors, fresh ingredients, and a variety of<br />dishes to satisfy every craving and occasion."</p>
      <div className="flex gap-x-6 justify-center my-4 mt-16">
        <div className=""><button className="font-bold bg-[#0BE58A] px-4 py-1 rounded-full">Explore Now</button></div>
        <div className=""><button className="font-bold text-white border border-solid px-4 py-1 rounded-full">Our Feedback</button></div>
      </div>
          
  </div>
  
</header>

 <div className="main-container flex justify-around ">  {/* Main Container*/}
  
    <div className="cards-container grid lg:grid-cols-2 gap-7 md:grid-cols-1 lg:w-2/3 md:w-full">
      {
                    products.map(pd => <SingleProduct product={pd} handleCatrt={handleCatrt}></SingleProduct>)
      }

        

    </div>



      <div className="Cart-Container w-1/3 mx-6 border-solid border-2 border-[#2828283a] rounded-xl">
        <div className="innerdiv p-5 pr-20 ">
             <div className="CART font-semibold">
              <h1>Want to cook: <span>01</span></h1>
              <hr  className="my-2" />


              <div   className="flex">

                    {/* <div  className="w-1/12">
                      <br /><h1 className="pl-0 pr-0">1</h1>
                    </div> */}


                    <div   className="w-10/12">
                      <div className="flex justify-around text-start"> {/* Statistic*/}
                        <p></p>
                        <p> Name</p>
                        <p> Time</p>
                        <p> Calories</p>
                        <p></p>
                      </div>

                          <div className=""> {/*Length dev*/} {/*Length dev*/} 
                              {
                              cart.map(item => (

                                <div className="my-3 flex justify-around bg-[#44444427] border-solid border-y-2  border-[#0000001a]"> {/* Dinamic*/}
                                    <p className="flex items-center">1</p>
                                    <p  className=" w-8 text-orange-600">{item.title}</p>
                                    <p  className="w-8">{item.cooking_time} min</p>
                                    <p  className="w-8">{item.calories} Calories</p>

                                    <div className="text-start my-4 pl-5 w-1/12"><button className="bg-[#0BE58A] py-1 px-2 rounded-3xl ">Preparing</button>
                                    </div>
                              </div>
                            
                              ))}
                          </div>

                        
                    </div>

                    

              </div>
                    
                    
              </div>

             <div className="CART font-semibold">
              <h1>Currently cooking: <span>02</span></h1>
              <hr  className="my-2" />


              <div   className="flex">

                    <div   className="w-10/12">
                      <div className="flex justify-around text-start"> {/* Statistic*/}
                          <p></p>
                          <p> Name</p>
                          <p> Time</p>
                          <p> Calories</p>
                          <p></p>
                      </div>

                      <div className="flex justify-around text-start"> {/* dynamic*/}
                          <p className="flex items-center">1</p>
                          <p>Name</p>
                          <p>Time</p>
                          <p>Calories</p>
                          <p></p>
                      </div>


                    </div>

                  

              </div>
                    
              <div   className="mt-5 ">
                    <div className="flex justify-end gap-5">
                        <h1>Total Time</h1>
                        <h1>Total Calories</h1>
                    </div>
                    <div className="flex justify-end gap-5">
                        <h1>Total Time</h1>
                        <h1>Total Calories</h1>
                    </div>
              </div>

              </div>
        </div>
           
      </div>
      
    </div>


      
    </>
  )
}

export default App



