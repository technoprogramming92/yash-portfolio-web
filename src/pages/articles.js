import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import FeaturedArticle from '@/components/FeaturedArticle'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import Layout from '@/components/Layout'
import MiniArticle from '@/components/MiniArticle'


function articles() {
  return (
    <>
    <Head>
        <title>Yash Shah | Article Page</title>
        <meta name="description" content="My Description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout>
        <AnimatedText text="EYS Articles" className="!text-[#f5f5f5] mb-16 pt-16"/>
        <ul className="!text-[#f5f5f5] grid grid-cols-2 gap-16">
          <FeaturedArticle 
          title="Build A Custom Pagination Component In Reactjs From Scratch" 
          summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
time="9 min read"
link="www.google.com"
img={article1}
          />

<FeaturedArticle 
          title="Build A Custom Pagination Component In Reactjs From Scratch" 
          summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
time="9 min read"
link="www.google.com"
img={article2}
          />
        </ul>
        <h2 className='font-bold !text-[#f5f5f5] text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
        <ul>
        <MiniArticle title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
        img={article3}
        date="Dec 23, 2024"
        link="www.example.com"/>

<MiniArticle title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
        img={article2}
        date="Dec 23, 2024"
        link="www.example.com"/>

<MiniArticle title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
        img={article1}
        date="Dec 23, 2024"
        link="www.example.com"/>

<MiniArticle title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
        img={article3}
        date="Dec 23, 2024"
        link="www.example.com"/>

<MiniArticle title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
        img={article3}
        date="Dec 23, 2024"
        link="www.example.com"/>

<MiniArticle title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
        img={article3}
        date="Dec 23, 2024"
        link="www.example.com"/>
        </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
