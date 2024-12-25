import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

function HireMe() {
  return (
<div className='fixed left-4 bottom-4 flex items-center justify-center md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
  <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
    <CircularText className={"fill-dark animate-spin-slow"} />

    <Link 
      href="mailto:yashshahtaxfreelancer@gmail.com" 
      className="flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5f5f5] text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold p-8 text-center leading-tight md:!w-7 md:!h-7 md:text-[10px]"
    >
      Let&apos;s<br />Collab
    </Link>
  </div>
</div>
  )
}

export default HireMe
