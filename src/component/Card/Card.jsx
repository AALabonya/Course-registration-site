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
    const[totalCredit, setTotalCredit] = useState(0);
    const [totalRemainingHour, setTotalRemainingHour] = useState(20);

  useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data=>setGetData(data))
  },[])


  const handleAddCredit =(data)=>{
    const isExist = getCreditHour.find((item)=>item.id ==data.id)
    let cost = data.price;
    let hour = data.credit;
    if(isExist){
        toast("You have already select this course")
    }else{
        getCreditHour.forEach((item) =>{
        ((hour += item.credit), (cost += item.price))
        })
       
        const totalHour = 20 - hour;
        if (hour > 20) {
            toast("Credit limit is 20 hour")
        }else{
            setTotalRemainingHour(totalHour)
            setTotalCredit(hour) 
            setTotalCost(cost)

            setCreditHour([...getCreditHour,data])
            
        }
        
    }
   
  }

    return (
        <div>
             <h1 className="text-2xl  lg:text-4xl text-center font-bold mt-5">Course Registration</h1> 
           <div className="flex flex-col md:flex-cols-2 lg:flex-row gap-10 justify-evenly mt-5 mb-10">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:w-[1100px]">
              {
                getData.map(data=>(
                    <div key={data.id}  className="card bg-base-100 shadow-xl rounded-lg h-[460px] ">
                   
                    <img className="w-80 md:px-5 md:pt-5 lg:w-80 lg:p-2" src={data.image} alt="image" />
                    
                      <div className="card-body p-2">
                       <h2 className="font-bold text-lg ml-2">{data.title}</h2>
                      <p className="mt-2 mb-2 ml-2">{data.description}</p>
                      <div className="flex justify-between mt-1 mb-1 ml-2">
                        <div>$ Price : {data.price} </div>
                       
                        <div className="flex justify-evenly gap-5" ><img src={data.bookmark} alt="image" />Credit :{data.credit} hr</div>
                        </div>
                         <div className="card-actions justify-center text-center items-center ">
                     <button onClick={()=>handleAddCredit(data)}  className=" bg-blue-500  w-[200px] lg:w-[280px] rounded-lg mt-4 py-2 font-semibold btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Select</button>
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
                    totalCredit={totalCredit}
                    totalRemainingHour={totalRemainingHour}
                    ></CreditHour>
                    </div>
           </div>
        </div>
    );
};

export default Card;
