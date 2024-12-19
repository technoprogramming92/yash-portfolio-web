import React, {useRef} from "react";
import {motion, useScroll} from "framer-motion"
import Liicon from "./Liicon";

const Details = ({ type,time,place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between" >
      <Liicon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-[#b6b1b1]">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};
function Education() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div className="absolute left-9 top-0 w-[4px] h-full bg-[#f5f5f5] origin-top" 
        style={{scaleY:scrollYProgress}}/>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />

<Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />

<Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
