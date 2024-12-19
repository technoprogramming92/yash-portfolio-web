import React, {useRef} from "react";
import {motion, useScroll} from "framer-motion"
import Liicon from "./Liicon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-[#eb6e00] capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-[#b6b1b1]">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
function Experience() {
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
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div className="absolute left-9 top-0 w-[4px] h-full bg-[#f5f5f5] origin-top" 
        style={{scaleY:scrollYProgress}}/>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />

          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
