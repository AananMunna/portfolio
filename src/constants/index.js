// assets imports
import {
  web,
  backend,
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
} from "../assets";

// Fixed lucide-react imports with valid icon names
import { Monitor, Server, Palette, Atom } from "lucide-react";

// Nav links for navbar
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Services with correct icons (no JSX here)
export const services = [
  { title: "Frontend Developer", icon: Monitor },
  { title: "MERN Stack Developer", icon: Server },
  { title: "UI/UX Designer", icon: Palette },
  { title: "React.js Developer", icon: Atom },
];

// Technologies with image assets
export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
];

// Experience data
export const experiences = [
  {
    title: "Frontend Developer (Intern)",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024 - June 2024",
    points: [
      "Built responsive UI components with React and Tailwind CSS.",
      "Collaborated with backend developers to integrate APIs.",
      "Improved user experience with clean, accessible frontend designs.",
      "Maintained Git version control and handled minor bug fixes.",
    ],
  },
];

// Testimonials
export const testimonials = [
  {
    testimonial:
      "Munna is a focused and skilled developer who consistently delivers clean and responsive code.",
    name: "Rahim Uddin",
    designation: "Team Lead",
    company: "CodeLab BD",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "He took our messy frontend and turned it into a smooth, professional interface. Super reliable and detail-oriented.",
    name: "Sarah Jahan",
    designation: "Project Manager",
    company: "TechNest",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

// Project images imports
import valodeal from "../assets/valodeal.png";
import othoba from "../assets/othoba.png";
import gardening from "../assets/gardening.png";
import studySync from "../assets/studySync.png";

// Projects with details
export const projects = [
  {
    name: "StudySync",
    description:
      "A full-stack group study platform where users can create, submit, and grade assignments. Includes user authentication, protected routes, modals, leaderboards, and a highly interactive UI built with Framer Motion.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: studySync,
    source_code_link: "https://github.com/AananMunna/studySync",
    live_link: "https://studysync-d270a.web.app/",
  },
  {
    name: "Gardening Hub",
    description:
      "A modern gardening-themed website featuring Swiper sliders, Lottie animations, and a custom 'Featured Gardeners' section styled like social media profiles. Built with React and Tailwind for clean, responsive design.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: gardening,
    source_code_link: "https://github.com/AananMunna/gardening-hub",
    live_link: "https://gardening-hub-a68ec.web.app/",
  },
  {
    name: "Othoba.com ",
    description:
      "A fully responsive eCommerce website, built with React and Tailwind CSS. Features clean UI, dynamic routing, and fast-loading product pages for a smooth shopping experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "vite", color: "pink-text-gradient" },
    ],
    image: othoba, // ⛔ Add your Othoba project screenshot here
    source_code_link: "https://github.com/AananMunna/othoba.com",
    live_link: "https://clone-othoba.vercel.app/",
  },
  {
    name: "ValoDeal",
    description:
      "An eCommerce deal platform offering exclusive products at discounted prices. Built using the MERN stack with features like product filtering, detail modals, and smooth animations using Framer Motion.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
    ],
    image: valodeal, // ⛔ Add your ValoDeal project screenshot here
    source_code_link: "https://github.com/AananMunna/ValoDeal",
    live_link: "https://valo-deal.vercel.app/",
  },
];

