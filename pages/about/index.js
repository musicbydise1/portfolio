import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma, FaVuejs, FaLaravel, FaNodeJs,

} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop, SiTypescript, SiPhp, SiPostgresql, SiMysql, SiMongodb, SiExpress, SiNestjs, SiReact, SiFlutter,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front End Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaVuejs key="vuejs" />,
          <SiTypescript key="typescript" />

        ],
      },
      {
        title: 'Back End Development',
        icons: [
            <SiPhp key="php" />,
            <FaLaravel key="laravel" />,
            <FaNodeJs key="nodejs" />,
            <SiExpress key="express" />,
            <SiNestjs key="nestjs" /> ,
            <SiPostgresql key="postgresql" />,
            <SiMysql key="mysql" />,
            <SiMongodb key="mongodb" />
        ]
      },
      {
        title: 'Mobile Development',
        icons: [
            <SiReact key="reactnative" />,
            <SiFlutter key="flutter" />
        ]
      },
      {
        title: 'UI/UX Design',
        icons: [
            <FaFigma key="figma" />,
            <SiAdobexd key="adobexd" />,
            <SiAdobephotoshop key="adobephotoshop"/>
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '2nd place on Republican Olympiad in Programming',
        stage: '2017 - 2018',
      },
      {
        title: '3rd place on City Olympiad in programming ',
        stage: '2016 - 2017',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full-Stack Developer - Freelance.ru',
        stage: '2020 - 2023',
      },
      {
        title: 'Full-Stack Developer - Upwork',
        stage: '2019 - 2020',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Information systems - IITU, Almaty, Kazakhstan',
        stage: '2019 - 2023',
      },
    ],
  },
];


import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0)
  return (
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <Circles />
        <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                exit='hidden'
                className="h2"
            >
              Enchanting <span className="text-accent">tales</span> give rise to stunning creations.
            </motion.h2>
            <motion.p
                variants={fadeIn('right', 0.4)}
                initial="hidden"
                animate="show"
                exit='hidden'
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              4 years ago, I began freelancing as a developer. Since then, I&apos;ve done remote work for agencies, counsulted for startups, and colloborated on digital products for business and costumer use.
            </motion.p>
            <motion.div
                variants={fadeIn('right', 0.6)}
                initial="hidden"
                animate="show"
                exit='hidden'
                className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={4} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={40} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={55} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects
                  </div>
                </div>
                <div className="relative flex-1 ">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Winnig awards
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              animate="show"
              exit='hidden'
              className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:max-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                    <div
                      key={itemIndex}
                      className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                    >
                      {item.title}
                    </div>
                )
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                    <div
                        className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                        key={itemIndex}>
                      <div className="font-light mb-2 md:mb-0">{item.title}</div>
                      <div className="hidden md:flex">-</div>
                      <div>{item.stage}</div>
                      <div className="flex gap-x-4">
                        {item.icons && item.icons.map((icon, itemIndex) => (
                            <div key={itemIndex} className="text-2xl text-white">
                              {icon}
                            </div>
                        ))}
                      </div>
                    </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default About;
