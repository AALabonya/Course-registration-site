/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CreditHour = ({getCreditHour,totalCost}) => {
   const {title} = getCreditHour;
    return (

        <div>
            
            <div className="card w-92  bg-base-100 shadow-xl rounded-lg">
                      <div className="card-body">
                       <h2 className="font-semibold ml-3 text-xl mt-5 mb-2">Credit Hour Remaining: </h2>
                       <hr/>
                       <div>
                      <h1 className="font-semibold ml-3 text-xl mt-5 mb-2"> Course Name:</h1>
                     
                           {
                            getCreditHour.map((data,idx)=>(
                                
                                <li className="list-decimal font-semibold ml-3 " key={idx}>{data.title} </li>
                            )
                                
                            )
                           }
                       </div>

                       <hr/>
                         <div className="card-actions justify-center ">
                         <h2 className="font-semibold ml-3 text-lg mt-5 mb-2">Total Credit Hour : </h2>
                       </div>
                       <hr/>

                       <h2 className="font-semibold ml-3 text-lg mt-5 mb-4">Total Price : </h2>
                       </div>
                        </div>
        </div>
    );
};

export default CreditHour;