import { useEffect } from "react";
import { useState } from "react";
import CreditHour from "../Credit Hour/CreditHour";

const Card = () => {
    const[getData, setGetData]=useState([])


  useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data=>setGetData(data))
  },[])


    return (
        <div>
           <h1 className="text-4xl text-center font-bold mt-5">Course Registration</h1> 
           <div className="flex justify-evenly mt-5">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-[1000px]">
              {
                getData.map(data=>(
                    <div key={data.id}  className="card bg-base-100 shadow-xl rounded-lg">
                   
                    <img className="w-80 p-2 " src={data.image} alt="Shoes" />
                    
                      <div className="card-body p-2">
                       <h2 className="font-bold text-xl">{data.title}</h2>
                      <p className="mt-2">{data.description}</p>
                         <div className="card-actions justify-center text-center items-center  ">
                     <button className="btn btn-primary bg-blue-500 w-[300px] rounded-lg mt-2 py-2">Select</button>
                       </div>
                       </div>
                        </div>
                ))
              }
               </div>

               
                    <div className="w-[300px]">
                    <CreditHour></CreditHour>
                    </div>


           </div>
        </div>
    );
};

export default Card;