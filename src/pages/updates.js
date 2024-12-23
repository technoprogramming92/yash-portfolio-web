import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import {motion} from 'framer-motion'
const FeaturedUpdate=({type, title, summary, img, link, githubLink})=>{
  const FramerImage= motion(Image)
  return(
    <article className='flex w-full items-center justify-between rounded-3xl border border-solid border-[#f5f5f5] bg-[#000000] shadow-[#D6D6D4] shadow-xl p-12 relative'>
    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#f5f5f5]"/>
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded'>
      <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}}
      transition={{duration:0.2}}/>
      </Link>

     
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-[#eb6e00] font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'><h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2></Link>
        <p className='my-2 font-medium text-[#f5f5f5]'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={githubLink} target='_blank' className='w-10 '><GithubIcon/></Link>
        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-[#f5f5f5] text-[#000000] p-2 px-6 text-lg font-semibold'>Visit Project</Link>
        </div>
        </div>
      
    </article>
  )
}

const Project=({title,type,img,link,githubLink})=>{
  const FramerImage= motion(Image)
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-[#f5f5f5] bg-[#000000] p-6 relative'>
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#f5f5f5]"/>
<Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded'>
      <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}}
      transition={{duration:0.2}}/>
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-[#eb6e00] font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'><h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2></Link>
        
        <div className='mt-2 flex items-center justify-between w-full'>
        <Link href={link} target='_blank' className='rounded-lg text-lg font-semibold underline'>Visit</Link>
        <Link href={githubLink} target='_blank' className='w-8 '><GithubIcon/></Link>
        
        </div>
      </div>
    </article>
  )
}
function updates() {
  return (
    <>
    <Head>
        <title>Yash Shah | Updates</title>
        <meta name="description" content="My Description" />
      </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className='pt-16'> 
              <AnimatedText text='Imagination Trumps Knowledge!' className='!text-[#f5f5f5] mb-16'/>

              <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                  <FeaturedUpdate 
                  title='Crypto Screener Application'
                  summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.'
link='/'
type="Featured Project"
img={project1}
githubLink='/'
                  />
                </div>
                <div className='col-span-6'>
                  <Project title='Crypto Screener Application'
link='/'
type="Featured Project"
img={project1}
githubLink='/'/>
                </div>

                <div className='col-span-6'>
                <Project title='Crypto Screener Application'
link='/'
type="Featured Project"
img={project1}
githubLink='/'/>
                </div>

                <div className='col-span-12'>
                <FeaturedUpdate 
                  title='Crypto Screener Application'
                  summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.'
link='/'
type="Featured Project"
img={project1}
githubLink='/'
                  />
                </div>
                <div className='col-span-6'>
                <Project title='Crypto Screener Application'
link='/'
type="Featured Project"
img={project1}
githubLink='/'/>
                </div>

                <div className='col-span-6'>
                <Project title='Crypto Screener Application'
link='/'
type="Featured Project"
img={project1}
githubLink='/'/>
                </div>
              </div>
            </Layout>
        </main>
    </>
  )
}

export default updates
