import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

function Liicon({ reference }) {
  const [isRefReady, setIsRefReady] = useState(false);

  // Ensure the reference is hydrated before using it
  useEffect(() => {
    if (reference?.current) {
      setIsRefReady(true);
    }
  }, [reference]);

  const { scrollYProgress } = useScroll(
    isRefReady
      ? {
          target: reference,
          offset: ['center end', 'center center'],
        }
      : {}
  );

  return (
    <figure className="absolute left-0 stroke-[#f5f5f5]">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[#eb6e00] stroke-1 fill-none"
        />
        {isRefReady && (
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-[#f5f5f5] stroke-[5px] fill-none"
            style={{
              pathLength: scrollYProgress,
            }}
          />
        )}
        {/* Add class 'animate-pulse' to the circle below for the pulse effect */}
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-[#eb6e00] stroke-1 fill-[#eb6e00]"
        />
      </svg>
    </figure>
  );
}

export default Liicon;
