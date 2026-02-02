import { useRef, useState, useEffect } from "react";
import { motion} from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const Works = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const itemHeight = container.clientHeight;
      const index = Math.round(scrollTop / itemHeight);
      setCurrentIndex(Math.min(Math.max(0, index), projects.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Header - Outside scroll container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className={`${styles.sectionSubText} text-white/50`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Projects.</h2>

        <p className="mt-4 text-white/60 text-lg max-w-3xl leading-relaxed font-light">
          A curated selection of projects showcasing my expertise in full-stack
          development, UI/UX design, and problem-solving. Scroll to explore each
          project.
        </p>
      </motion.div>

      {/* Scrollable container with snap */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {projects.map((project, index) => (
          <ProjectPage
            key={project.name}
            project={project}
            index={index}
            isActive={currentIndex === index}
          />
        ))}
      </div>


      {/* Background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

const ProjectPage = ({ project, index, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen w-full snap-start snap-always flex items-center justify-center px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isActive ? 1 : 0.3,
          scale: isActive ? 1 : 0.9,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative order-2 md:order-1"
            animate={{
              x: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Floating background glow */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-br from-purple-600/10 to-violet-600/10 rounded-3xl blur-3xl pointer-events-none"
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.6 : 0.3,
              }}
              transition={{ duration: 0.8 }}
            />

            {/* Main image container */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-video relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Hover overlay with buttons */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <button
                  onClick={() =>
                    window.open(project.source_code_link, "_blank")
                  }
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <img src={github} alt="GitHub" className="w-5 h-5 invert" />
                  <span className="text-white font-medium">Code</span>
                </button>

                {project.live_link && (
                  <button
                    onClick={() => window.open(project.live_link, "_blank")}
                    className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-500/50 hover:scale-105 active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    <span className="text-white font-medium">Live</span>
                  </button>
                )}
              </div>
            </div>

            {/* Tech tags */}
            <motion.div
              className="mt-6 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag.name}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 ${tag.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  {tag.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="space-y-6 order-1 md:order-2"
            animate={{
              x: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                Featured Project
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            >
              {project.name}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg text-white/60 leading-relaxed font-light"
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "");
