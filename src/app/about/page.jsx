"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll} from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef();

  const {scrollYProgress} = useScroll({container: containerRef});

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef,  {margin:"-150px",once: true});

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef,  {margin:"-150px",once: true});

  return (
    <motion.div 
      className="h-full" 
      initial={{ y: "-200vh" }} 
      animate={{y: "0%"}} 
      transition={{ duration: 1}}
    >
      {/* CONTAINER */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
      {/* TEXT  CONTAINER*/}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
          {/* BIOGRAPHY CONTAINER */}
          <div 
            className='flex flex-col gap-12 justify-center'
          >
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi possimus eligendi saepe dicta! Sunt quas, ratione animi assumenda nobis soluta a ullam. Et laborum error voluptates. Quod doloremque ullam amet!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <svg  width="170" height="60" viewBox="0 0 1168 490" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.28571 80.571C2.28571 73.3951 3.91186 74.7875 8.23809 80.9679C25.5102 105.642 33.4713 134.95 43.1587 163.111C70.8707 243.669 86.1187 321.25 97.9206 405.174C101.501 430.632 82.66 378.435 81.6508 369.857C80.1874 357.418 80.9649 348.267 88 337.714C112.341 301.202 138.745 267.421 160.817 229.182C173.644 206.961 189.934 159.171 214.984 144.857C221.271 141.264 204.775 153.749 198.119 155.968C158.522 169.167 132.896 224.313 117.167 259.142C104.719 286.705 80.1324 373.875 85.2222 344.063C89.8545 316.931 115.379 270.086 150.302 282.952C198.049 300.543 198.566 355.632 212.206 396.047C221.175 422.622 230.151 381.761 234.429 371.444C242.182 352.745 253.045 337.347 262.206 319.857C265.915 312.776 260.683 294.263 263.397 315.293C265.299 330.033 270.032 380.125 286.214 387.317C305.756 396.002 311.868 372.136 306.254 357.952C298.95 339.499 284.71 314.903 268.556 302.595C258.135 294.656 262.59 301.998 268.357 307.158C283.949 321.109 299.59 297.172 309.429 302.793C330.027 314.564 338.18 368.106 344.349 389.698C350.314 410.576 345.899 352.201 345.143 347.238C343.344 335.433 333.922 303.08 342.365 311.523C356 325.158 365.086 346.302 375.698 362.317C377.808 365.5 391.005 390.31 391.571 377C391.701 373.944 390.186 351.011 394.151 354.976C396.794 357.619 412.091 380.29 414.786 377.595C422.048 370.332 421.838 353.224 425.5 343.865C431.352 328.91 453.666 398.921 443.159 341.881C442.152 336.415 432.845 302.749 448.119 319.262C467.05 339.727 477.833 366.732 487.802 392.277C495.866 412.942 512.078 428.248 491.968 442.873C470.363 458.586 467.005 450.412 464.587 424.619C462.46 401.932 461.69 370.715 477.286 352C479.98 348.766 487.341 335.876 491.571 334.936C497.507 333.617 501.18 371.508 502.286 375.809C509.387 403.426 520.507 328.497 523.714 332.952C530.218 341.985 529.639 356.143 534.429 366.285C540.074 378.241 541.049 354.55 543.357 349.42C554.022 325.719 604.431 455.74 576.889 359.341C567.388 326.087 558.81 292.594 549.31 259.341C548.974 258.168 551.346 289.42 552.286 296.047C554.983 315.08 559.68 335.455 567.365 353.19C573.111 366.449 571.798 357.023 574.508 351.603C575.444 349.73 577.667 356.799 580.857 353.984C585.832 349.594 586.799 348.428 593.556 348.428C613.679 348.428 633.314 296.939 639.389 285.531C678.375 212.324 710.478 134.142 729.27 53.1901C731.29 44.4868 734.596 20.0866 728.278 26.4044C706.825 47.8572 695.746 80.548 686.413 108.547C661.974 181.862 655.074 261.396 684.627 334.142C686.88 339.688 702.431 375.067 697.921 370.055C689.929 361.176 621.201 278.006 626.492 275.015C640.584 267.05 674.357 273.137 690.381 273.428C706.54 273.722 713.696 272.494 713 288.508C712.594 297.852 703.189 323.589 709.032 316.285C722.607 299.317 734.063 285.31 751.889 272.238C765.315 262.392 750.419 283.493 747.921 290.095C740.877 308.709 732.634 330.075 735.222 350.412C736.285 358.76 740.792 367.076 749.508 357.952C762.779 344.059 770.182 321.715 777.087 304.579C790.047 272.419 800.513 239.799 805.262 205.373C813.957 142.33 809.429 -49.1399 809.429 14.4996C809.429 119.789 811.569 225.305 809.23 330.571C809.084 337.145 803.589 402.292 802.484 365.293C802.134 353.551 795.5 292.476 815.381 292.476C831.789 292.476 845.31 308.349 862.206 308.349C882.808 308.349 883.902 256.17 884.429 243.269C884.522 240.976 887.059 216.993 888.794 232.952C893.022 271.849 894.599 310.877 903.079 349.222C910.169 381.279 920.215 416.895 940.778 443.269C953.038 458.994 958.974 440.818 965.381 428.587C986.281 388.687 1000.36 348.262 1001.49 302.793C1002.61 257.758 986.093 219.864 970.937 178.587C969.56 174.838 962.99 143.605 955.063 153.587C936.129 177.431 922.77 209.445 910.222 236.722C908.964 239.457 890.224 280.571 892.167 280.571C899.177 280.571 906.188 280.571 913.198 280.571C928.224 280.571 949.697 278.208 957.444 262.714C957.758 262.087 962.091 250.355 962.802 254.976C966.954 281.964 967.938 309.621 972.325 336.722C978.99 377.888 988.353 418.54 994.944 459.738C996.223 467.728 999.734 507.722 994.349 475.412C984.426 415.876 984.234 350.029 990.381 290.095C991.537 278.827 993.028 257.686 1002.29 248.428C1020.24 230.477 1025.06 278.26 1019.35 289.301C1011.36 304.743 996.72 313.856 985.222 326.206C978.742 333.166 1020.81 327.461 1024.11 327C1037.09 325.186 1062.75 322.326 1067.37 306.762C1078.04 270.742 1081.57 233.536 1084.23 196.246C1086.38 166.174 1076.35 256.024 1072.52 285.928C1071.39 294.829 1064.53 326.215 1070.34 334.936C1075.99 343.412 1075.12 315.129 1077.29 305.174C1080.74 289.268 1081.41 273.587 1080.66 257.357C1080.54 254.852 1076.71 221.874 1071.73 220.452C1070.79 220.183 1057.2 260.455 1072.13 238.508C1080.24 226.573 1087.36 299.929 1088 305.968C1088.57 311.275 1101.15 377.613 1104.27 358.746C1109.64 326.243 1097.2 228.261 1106.25 259.936C1111.94 279.843 1127.28 303.365 1139.59 319.658C1142.58 323.617 1166.17 343.614 1166.17 327.793C1166.17 309.964 1155.86 294.581 1155.86 277" stroke="black" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.25, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}
          >
            {/* SKILLS TITLE */}
            <motion.h1 
              initial={{x:"-100px", opacity: 0}} 
              animate={isSkillRefInView? {x:0, opacity: 1}: {}} 
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div 
              initial={{x:"-100px", opacity: 0}} 
              animate={isSkillRefInView? {x:0, opacity: 1}: {}} 
              className='flex gap-4 flex-wrap'
            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                JavaScript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                React.js
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                Next.js
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                Redux
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                SCSS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                Tailwind CSS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                Framer Motion
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                Webpack
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black '>
                Node.js
              </div>
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div 
            ref={experienceRef}
            className='flex flex-col gap-12 justify-center'
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1 
              initial={{x:"-100px", opacity: 0}}
              animate={isExperienceRefInView ? {x:"0", opacity: 1} : {}}
              transition={{delay: 0.2}}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{x:"-100px", opacity: 0}}
              animate={isExperienceRefInView ? {x:"0", opacity: 1} : {}}
              transition={{delay: 0.2}}
              className='pb-10'>
              {/* EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <p className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Trainee JavaScript Developer</p>
                  {/* JOB DESC */}
                  <p className="p-3 text-sm italic">Teamwork on a site for a volunteer organization</p>
                  {/* JOB DATA */}
                  <p className="p-3 text-red-400 text-sm font-semibold">2023(February - April)</p>
                  {/* JOB Company */}
                  <p className="p-1 rounded bg-white text-sm font-semibold w-fit">Sigma Software University</p>
                </div>
                {/* CENTER */}
                <div className='flex justify-center w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3 '></div>
                

                
              </div>
              {/* EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '></div>
                {/* CENTER */}
                <div className='flex justify-center w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <p className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">React Developer</p>
                  {/* JOB DESC */}
                  <p className="p-3 text-sm italic">Teamwork on the site for the company for the repair of appliances</p>
                  {/* JOB DATA */}
                  <p className="p-3 text-red-400 text-sm font-semibold">2023</p>
                  {/* JOB Company */}
                  <p className="p-1 rounded bg-white text-sm font-semibold w-fit">OMG</p>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <p className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Web Developer</p>
                  {/* JOB DESC */}
                  <p className="p-3 text-sm italic">Teamwork on the site for the American company for the repair of household appliances</p>
                  {/* JOB DATA */}
                  <p className="p-3 text-red-400 text-sm font-semibold">2024</p>
                  {/* JOB Company */}
                  <p className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelance</p>
                </div>
                {/* CENTER */}
                <div className='flex justify-center w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3 '></div>
              </div>
            </motion.div>
          </div>
        </div>
      {/* SVF  CONTAINER*/}
        <div className=' w-full opacity-20 -z-1 sticky bottom-0  lg:opacity-100 xl:1/2 lg:block lg:top-0  lg:w-1/3 lg:z-30 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage