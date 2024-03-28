import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='max-w-[86%] mx-auto bg-green-800 my-2'>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="" />
    </div>

    <div className='max-w-[86%] mx-auto  my-2 grid gap-5 grid-cols-4 cursor-pointer'>
        <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-06/morning-banner.jpg" alt="" />
        </div>
        <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
        </div>
        <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
        </div>
        <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
        </div>
        
    </div>
    </> 
  )
}

export default Banner
