import React from 'react'
import Image from "next/image"
function MediumCard({img,title}) {
    return (
        <div>
      <div className="relative  h-80 w-80 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          <Image src={img} layout="fill" className='rounded-xl' alt='some value'/>
            </div>
            <div>
                <h3 className='text-2xl m-3 '>
                    {title}
                </h3>
            </div>
        </div>
      
  )
}

export default MediumCard