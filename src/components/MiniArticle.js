import React from 'react'
import MovingImg from './MovingImg'
import {motion} from 'framer-motion'
function MiniArticle({img,title,date,link}) {
  return (
    <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-[#000000] first:mt-0 border border-solid border-white hover:!border-[#eb6e00] hover:bg-[#f5f5f5] hover:!text-[#000000] !text-[#f5f5f5] border-r-4 border-b-4 sm:flex-col'
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    >
        <MovingImg title={title} link={link} img={img}/>
        <span className='text-[#eb6e00] font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

export default MiniArticle
