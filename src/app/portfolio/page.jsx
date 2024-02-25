"use client";

import { motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-pink-300 to-green-300",
    title: "Nutritionist",
    descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit possimus numquam temporibus! Numquam obcaecati eligendi provident ullam odit eius minus iusto reiciendis quisquam rerum veniam, omnis ducimus repellat, soluta aliquid?",
    img:"/hwBoq5K.png",
    link: "https://kateryna-kaplunivska.com.ua/"
  },
  {
    id: 2,
    color: "from-green-300 to-violet-300",
    title: "Nutritionist",
    descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit possimus numquam temporibus! Numquam obcaecati eligendi provident ullam odit eius minus iusto reiciendis quisquam rerum veniam, omnis ducimus repellat, soluta aliquid?",
    img:"/omg-sfsf.png",
    link: "https://omg-repair.com/"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Nutritionist",
    descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit possimus numquam temporibus! Numquam obcaecati eligendi provident ullam odit eius minus iusto reiciendis quisquam rerum veniam, omnis ducimus repellat, soluta aliquid?",
    img:"/hwBoq5K.png",
    link: "https://kateryna-kaplunivska.com.ua/"
  },
]

const PortfolioPage = () => {

  const ref = useRef();
  const containerRef = useRef();

  const {scrollYProgress} = useScroll({container:containerRef, target:ref});
  const x = useTransform( scrollYProgress, [ 0, 1 ], ["0%", "-75%"] );
  
  
  return (
    <motion.div 
    className="h-full overflow-scroll" 
    initial={{ y: "-200vh" }} 
    animate={{y: "0%"}} 
    transition={{ duration: 1}}
    ref={containerRef}
    >
      <div className='h-[500vh] relative ' ref={ref}>
        <div className='w-screen  h-[calc(100dvh-5rem)] sm:h-[calc(100dvh-6rem)] flex items-center justify-center text-8xl text-center'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x:x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-300'></div>
            {items.map(item=>(
              <div className={`h-full w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
              key={item.id}
              >
                <div className='flex flex-col gap-.5 justify-start lg:gap-6 text-white'>
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                    <Image src={item.img} style={{objectFit: "contain"}} fill alt="screenshot web site" />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.descr}</p>
                  <Link href={item.link} className="flex self-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
        <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
          <h1 className="text-8xl">Do you have a project?</h1>
          <div className='relative'>
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Front-end Developer {/* and UI Designer */}
                </textPath>
              </text>
            </motion.svg>
            <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire me</Link>
          </div>
        </div>
    </motion.div>
  )
}

export default PortfolioPage