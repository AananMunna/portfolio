import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdArrowUpward } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 border-t border-white/5 mt-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-20"
      >
        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand & CTA */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Let's Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                  Something Great
                </span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mt-4">
                Open to exciting opportunities and collaborations. Let's create
                something amazing together.
              </p>
            </div>

            {/* Availability badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </div> */}
          </motion.div>

          {/* Quick Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
              Quick Contact
            </h4>

            <div className="space-y-3">
              <a
                href="mailto:aananmunna420@gmail.com"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                  <MdEmail className="text-lg" />
                </div>
                <span className="text-sm">aananmunna420@gmail.com</span>
              </a>

              <a
                href="https://wa.me/8801310468353"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-green-500/10 transition-all duration-300">
                  <FaWhatsapp className="text-lg" />
                </div>
                <span className="text-sm">+880 1310 468353</span>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
              Connect With Me
            </h4>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://github.com/AananMunna"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-2xl text-white/60 group-hover:text-purple-400 transition-colors" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aanan-munna/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-2xl text-white/60 group-hover:text-purple-400 transition-colors" />
              </motion.a>

              <motion.a
                href="https://wa.me/8801310468353"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-2xl text-white/60 group-hover:text-purple-400 transition-colors" />
              </motion.a>

              <motion.a
                href="mailto:aananmunna420@gmail.com"
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdEmail className="text-2xl text-white/60 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            </div>

            {/* Download Resume CTA */}
            {/* <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-sm font-medium shadow-lg shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </motion.a> */}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
        />

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-8">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-white/60 font-medium">Aanan Munna</span>
            </p>
            <div className="flex items-center gap-4 text-xs text-white/30">
              <span>Crafted with 💜</span>
              <span>•</span>
              <span>React & Framer Motion</span>
            </div>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 text-white/60 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium">Back to top</span>
            <MdArrowUpward className="text-lg group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600" />
    </footer>
  );
};

export default Footer;
