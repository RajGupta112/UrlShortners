import React, { useState } from 'react'
import Graph from './Graph'
import { dummydata } from '../Dummydata/data'
import {useStoreContext} from '../context/ContextApi'
import { useFetchTotalClicks } from '../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'

const DashboardLayout = () => {
  const {token}=useStoreContext();
  const refetch=false;
  const [shortenPopup,setShortenPopUp]= useState(false);
  const {isLoading:loader,data:totalClciks}=useFetchTotalClicks(token,Error);
  function onError(){
    console.log("ERROR");
  }
  return (
    <div className='lg:px-14 sm:px-8  px-4 min-h[calc(100vh-64px)]'>
      {loader ?(<p>Loading...</p>):(
      <div className='lg:w-[90] w-full mx-auto py-16'>
     <div className='h-96 relative'>
     {totalClciks.length === 0 && (
                     <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                     <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                       No Data For This Time Period
                     </h1>
                     <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
                       Share your short link to view where your engagements are
                       coming from
                     </h3>
                   </div>
                )}
     <Graph graphData={totalClciks}></Graph>
     </div>
     <div className='py-5 sm:text-end text-center'>
     <button className='bg-blue-500 px-4 py-2 rounded-md text-white' onClick={()=>setShortenPopUp(true)}>
      Create a New Short URL
     </button>
     </div>
      </div>
      )}
      <ShortenPopUp refetch={refetch}
      open={shortenPopup}
      setOpen={setShortenPopUp}>

      </ShortenPopUp>
    </div>
  )
}

export default DashboardLayout
