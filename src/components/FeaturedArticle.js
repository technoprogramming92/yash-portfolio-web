import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
const FeaturedArticle=({img,title,time,summary,link})=> {
  const FramerImage= motion(Image)
  return (
    <li className='relative col-span-1 w-full p-4 bg-dark border border-solid border-[#f5f5f5] rounded-2xl'>
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#f5f5f5]"/>
         <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded'>
      <FramerImage src={img} alt={title} className="w-full h-auto"
      whileHover={{scale:1.05}}
      transition={{duration:0.2}}/>
      </Link>
      <Link href={link} target="_blank">
      <h2 className='text-[#f5f5f5] capitalize text-2xl font-bold my-2 hover:underline underline-offset-4 mt-4'>{title}
      </h2>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-[#eb6e00] font-semibold'>{time}</span>
      </Link>
    </li>
  )
}

export default FeaturedArticle
