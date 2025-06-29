import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import selfie from '../assets/selfie.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[40%] md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-center gap-10`}
      >
        {/* Dot + Line Decoration */}
        <div className="hidden md:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* 📝 Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I’m <br />
            <span className="text-[#915EFF]">Aanan Munna</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build bold, beautiful, and blazing-fast web<br />  apps 
using React and the MERN stack.
          </p>
        </div>

        {/* 🧍 Selfie Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-xl"
        >
          <img
            src={selfie}
            alt="Aanan Munna Selfie"
            className="w-full h-full object-cover"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
