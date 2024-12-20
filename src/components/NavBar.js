import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { LinkedinIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from './Icons'
import {motion} from "framer-motion"
const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-[#eb6e00] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full':'w-0'}`}>&nbsp;</span>
        </Link>
    )
}
function NavBar() {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
        <CustomLink href="/" title="Home" className='mr-4 text-[#f5f5f5]'/>
        <CustomLink href="/about" title="About" className='mx-4 text-[#f5f5f5]'/>
        <CustomLink href="/updates" title="Tax Updates" className='mx-4 text-[#f5f5f5]'/>
        <CustomLink href="/articles" title="Articles" className='ml-4 text-[#f5f5f5]'/>
        </nav>

       
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="www.example.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><InstagramIcon/></motion.a>
            <motion.a href="www.example.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedinIcon/></motion.a>
            <motion.a href="www.example.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><YouTubeIcon/></motion.a>
            <motion.a href="www.example.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><FacebookIcon/></motion.a>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
    </header>
  )
}

export default NavBar