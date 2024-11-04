import React  from "react";

const SingleProduct = ({product, handleCatrt}) => {
    // console.log(handleCatrt)
return (


<div > 
        <div className=" p-6 cards font-semibold border-solid border-2 border-[#2828283a] rounded-xl "> {/* Left div card */} 
            <div><img className="rounded-xl mb-6 " src={product.image} alt="" srcset="" /></div>
            <h1 className="font-bold text-start">{product.title}</h1>
            <p className='text-[#878787] font-normal'>{product.description}</p>
            <hr className="my-5" />
            <ul className='font-bold list-disc text-start'>Ingredients: {product.ingredients_Count}
              <li className='font-medium text-[#878787] text-start'>{product.ingredients[0]}</li>
              <li className='font-medium text-[#878787] text-start'>{product.ingredients[1]}</li>
              <li className='font-medium text-[#878787] text-start'>{product.ingredients[2]}</li>
              <li className='font-medium text-[#878787] text-start'>{product.ingredients[3]}</li>
              <li className='font-medium text-[#878787] text-start'>{product.ingredients[4]}</li>
              <li className='font-medium text-[#878787] text-start'>{product.ingredients[5]}</li>
            </ul>
            <hr className="my-5" />
            <div className='flex justify-around my-7'>
                <div className='flex'>
                    <div><img className="px-2" src="https://i.ibb.co.com/RQBrYCy/clock.png" alt="" /></div>
                    <div><h2>  {product.cooking_time} minutes</h2></div>
                </div>
                <div className='flex'>
                    <div> <img className="px-2" src="https://i.ibb.co.com/BsGP9b2/fire.png" alt="" srcset="" /></div>
                    <div> <h2>  {product.calories} calories</h2> </div>
                </div>
            </div>

            <div className="text-start my-7"><button onClick={(e) =>handleCatrt(product)} className="bg-[#0BE58A] py-2 px-3 rounded-3xl">Want to Cook</button></div>
        </div>
</div>
)

}; 

export default SingleProduct;