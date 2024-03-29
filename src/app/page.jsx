"use client"

import Image from "next/image";
import {motion} from "framer-motion";

const Homepage = () => {

  return (
  <motion.div 
    className="h-full" 
    initial={{ y: "-200vh" }} 
    animate={{y: "0%"}} 
    transition={{ duration: 1}}
    >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
        <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
      {/* TEXT CONTAINER */}
      <div className='h-1/2 flex flex-col gap-2 lg:h-full lg:w-1/2 sm:gap-8 items-center justify-center'>
        {/* TITLE */}
        <h1 className="text-2xl lg:text-6xl md:text-4xl sm:text-2xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
        {/* DESC */}
        <p className="text-sm md:text-xl">Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
        {/* BUTTONS */}
        <div className=' w-full flex gap-4 pb-4'>
          <button className="px-2 py-1 sm:p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="px-2 py-1 sm:p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  </motion.div>
)};

export default Homepage;
