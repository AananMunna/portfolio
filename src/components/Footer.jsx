import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" text-gray-400 px-6 py-8 mt-12 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Let’s connect</h2>
          <p className="text-sm mt-1">aananmunna420@gmail.com</p>
          <p className="text-sm mt-1">+8801310468353</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://wa.me/8801310468353"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/AananMunna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aanan-munna/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="mailto:aananmunna420@gmail.com"
            className="hover:text-red-400 transition-colors"
          >
            <MdEmail />
          </a> */}
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-6">
        © {new Date().getFullYear()} Aanan_Munna | All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
