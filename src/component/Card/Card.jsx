/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import CreditHour from "../Credit Hour/CreditHour";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {
    const[getData, setGetData]=useState([]);
    const[getCreditHour, setCreditHour]=useState([]);
    const[totalCost, setTotalCost] = useState();

  useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data=>setGetData(data))
  },[])


  const handleAddCredit =(data)=>{
    const isExist = getCreditHour.find((item)=>item.id ==data.id)
    let count = data.price;
    if(isExist){
        toast("already booked this name")
    }else{
        getCreditHour.forEach((item)=>{
          count += item.price
        })
        setTotalCost(count)
        setCreditHour([...getCreditHour,data])  
    }
   
  }

    return (
        <div>
             <h1 className="text-4xl text-center font-bold mt-5">Course Registration</h1> 
           <div className="flex justify-evenly mt-5">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-[1000px]">
              {
                getData.map(data=>(
                    <div key={data.id}  className="card bg-base-100 shadow-xl rounded-lg">
                   
                    <img className="w-80 p-2" src={data.image} alt="image" />
                    
                      <div className="card-body p-2">
                       <h2 className="font-bold text-xl">{data.title}</h2>
                      <p className="mt-2 mb-2">{data.description}</p>
                      <div className="flex justify-between mt-1 mb-1">
                        <div>$ Price : {data.price} </div>
                       
                        <div className="flex justify-evenly gap-5" ><img src={data.bookmark} alt="image" />Credit :{data.credit}hr</div>
                        </div>
                         <div className="card-actions justify-center text-center items-center ">
                     <button onClick={()=>handleAddCredit(data)}  className=" bg-blue-500 w-[300px] rounded-lg mt-2 py-2 mb-3 font-semibold">Select</button>
                     <ToastContainer />
                       </div>
                       
                       </div>
                        </div>
                     ))
                    }
               </div>
                    <div className="w-[300px]">
                    <CreditHour 
                    getCreditHour={getCreditHour}
                    totalCost={totalCost}
                    ></CreditHour>
                    </div>
           </div>
        </div>
    );
};

export default Card;