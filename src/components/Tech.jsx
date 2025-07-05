import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div>
    <div className="text-center mb-10 mt-5">
      <p className={styles.sectionSubText}>Skills</p>
      <h2 className={styles.sectionHeadText}>My Tech Stack </h2>
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
