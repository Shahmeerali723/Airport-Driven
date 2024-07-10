import Image from 'next/image'
import React from 'react'



const companylogo = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
    "/client5.png",
]

const ClientSection = () => {
  return (
    <div className='w-full bg-primary'>
        

<div className='container flex flex-col items-center gap-10 py-5'>

    <h2 className='uppercase text-6xl font-rockstar font-extrabold text-white'>
        our clients
    </h2>

    <div className='grid grid-cols-5 gap-5'>
        {
            companylogo.map((item:any, index:any)=>{
                return(
                    <div key={index} className='bg-white flex items-center justify-center w-fit px-6 py-1 rounded-lg'>
                        <Image alt='' src={item} width={150} height={150}/>
                    </div>
                )
            })
        }
    </div>

</div>

    </div>
  )
}

export default ClientSection