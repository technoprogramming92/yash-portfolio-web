import React from 'react'
import {motion, useScroll} from 'framer-motion'
function Liicon({reference}) {
    const {scrollYProgress} = useScroll(
        {
          target: reference,
          offset:["center end", "center center"]
        }
      )

  return (
    <figure className='absolute left-0 stroke-[#f5f5f5]'>
        <svg className="-rotate-90" width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-[#eb6e00]  stroke-1 fill-none'/>
            <motion.circle cx="75" cy="50" r="20" className='stroke-[#f5f5f5]  stroke-[5px] fill-none' style={{
                pathLength : scrollYProgress
            }}/>

            {/* add class 'animate-pulse' to below circle for pulse effect */}
            <circle cx="75" cy="50" r="10" className='stroke-[#eb6e00]  stroke-1 fill-[#eb6e00]'/> 

        </svg>
    </figure>
  )
}

export default Liicon
