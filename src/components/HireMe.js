import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

function HireMe() {
  return (
<div className='fixed left-4 bottom-4 flex items-center justify-center'>
  <div className='w-48 h-auto flex items-center justify-center relative'>
    <CircularText className={"fill-dark animate-spin-slow"} />

    <Link 
      href="mailto:yashshahtaxfreelancer@gmail.com" 
      className="flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark p-8 text-center leading-tight"
    >
      Let&apos;s<br />Collaborate
    </Link>
  </div>
</div>
  )
}

export default HireMe
