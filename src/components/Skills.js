import React from 'react'
import { motion } from 'framer-motion'

const Skill =({name,x,y})=>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#faf9f6] text-dark py-3 px-6 shadow-lg shadow-[#fff5ee]cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:font-bold xs:text-[#f5f5f5]'  
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div> 
    )
}
function Skills() {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:!bg-circularLightLg md:!bg-circularDarkMg sm:!bg-circularDarkSm'>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#faf9f6] text-dark p-8 shadow-lg shadow-[#fff5ee]cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'  
    whileHover={{scale:1.05}}>
        Web
    </motion.div>

    <Skill name="CSS" x="-5vw" y="-10vw"/>
    <Skill name="HTML" x="-25vw" y="2vw"/>
    <Skill name="JS" x="20vw" y="6vw"/>
    <Skill name="ReactJS" x="0vw" y="12vw"/>
    <Skill name="CSS" x="-20vw" y="-15vw"/>
    <Skill name="CSS" x="15vw" y="-12vw"/>
    <Skill name="CSS" x="32vw" y="-5vw"/>
    <Skill name="CSS" x="0vw" y="-20vw"/>
    <Skill name="CSS" x="-25vw" y="18vw"/>
    <Skill name="CSS" x="18vw" y="18vw"/>
</div>

    </>
  )
}

export default Skills
