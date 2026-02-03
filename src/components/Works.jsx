import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const Works = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 tracking-tight">
            Projects.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
            Beautiful solutions to complex problems.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative"
    >
      <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${!isEven ? "md:grid-flow-dense" : ""}`}>
        {/* Image */}
        <motion.div
          className={`relative ${!isEven ? "md:col-start-2" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div style={{ y }} className="relative">
            {/* Image Container */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/5">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>

                {project.live_link && (
                  <motion.a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Site
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className={`space-y-6 ${!isEven ? "md:col-start-1 md:row-start-1" : ""}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
              {project.name}
            </h3>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-sm text-white/50 font-light"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");