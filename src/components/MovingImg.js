import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMotionValue, motion } from "framer-motion";

function MovingImg({ title, img, link }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  const FramerImage = motion(Image);
  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <>
      <Link
        href={link}
        target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline underline-offset-3">
          {title}
        </h2>
        <FramerImage
          ref={imgRef}
          src={img}
          alt={title}
          className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
          style={{ x: x, y: y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        />
      </Link>
    </>
  );
}

export default MovingImg;
