import Head from "next/head";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from '../../public/images/profile/yash-profile-pic.png';
import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

function about() {
  return (
    <>
      <Head>
        <title>Yash Shah | About Page</title>
        <meta name="description" content="My Description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 !text-[#f5f5f5]"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-[#f5f5f5]">
                Biography
              </h2>

              <p className='font-medium'>
                As an Enrolled Agent, I specialize in simplifying U.S. tax laws
                for individuals and businesses. My goal is to provide accurate
                solutions tailored to your financial needs while ensuring
                compliance and peace of mind.
              </p>
              <p className='my-4 font-medium'>
                With years of experience and ongoing education, I stay updated
                on the latest tax regulations. From resolving disputes to
                planning for the future, I prioritize trust, transparency, and
                delivering results that matter.
              </p>
              <p className='font-medium'>
                Beyond work, I am passionate about problem-solving and building
                strong client relationships. I aim to be your trusted partner in
                navigating the complexities of taxation.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-[#f5f5f5] bg-light p-8">

                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#f5f5f5]"/>
                <Image src={profilePic} alt="Yash Shah" className='w-full h-auto rounded-2xl'/>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={50}/>+</span>
                    <h2 className='text-xl font-medium capitalize text-[#f5f5f5]'>satisfied clients</h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={40}/>+</span>
                    <h2 className='text-xl font-medium capitalize text-[#f5f5f5]'>projects completed</h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={4}/>+</span>
                    <h2 className='text-xl font-medium capitalize text-[#f5f5f5]'>years of experience</h2>
                </div>

            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
}

export default about;
