import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Yash Shah | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2 flex flex-col items-center self-center'>
              <Image src={profilePic} alt="Yash Shah" className='w-full h-auto'></Image>
            </div>
            <div className='w-1/2'>
              
              <AnimatedText text="Tax inside out with EA Yash Shah" className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>I am Yash Shah, an Enrolled Agent with a deep understanding of tax laws and financial planning. My passion lies in simplifying the complexities of taxes and providing personalized solutions to help individuals and businesses achieve their financial goals. Whether it’s tax preparation, resolving IRS issues, or creating strategies to maximize savings, I am committed to guiding you every step of the way. With my expertise and dedication, you can trust me to handle your taxes inside out, so you can focus on what truly matters.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Profile.pdf" target='_blank' className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark' download={true}>Resume
                <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:yashshahtaxfreelancer@gmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>

        <div className='absolute right-8 -bottom-32 inline-block w-24'>
          <Image src={lightBulb} alt="Yash Shah" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}