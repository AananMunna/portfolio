import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon: Icon }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className="relative flex items-center gap-4 pl-6 py-4 border-l-4 border-gradient-to-b from-green-400 to-pink-500"
    >
      {/* Gradient pulse dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-pink-500 rounded-full animate-ping" />

      {/* Static dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border border-pink-500" />

      {/* Icon and title */}
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-white bg-gradient-to-r from-pink-500 to-green-400 p-1 rounded-full shadow-md" />
        <h3 className="text-white text-[18px] font-semibold tracking-wide">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I’m a frontend-focused MERN stack developer who started coding out of pure curiosity. I love building clean, responsive, and user-friendly web apps with React and Node.js. Problem-solving and turning ideas into real products is what excites me most. Outside of code, I’m into music (Coldplay fan), design, and staying curious about the latest tech. Let’s build something awesome together.
      </motion.p>

      <div className='mt-20  flex-wrap gap-10 hidden md:flex'>
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
