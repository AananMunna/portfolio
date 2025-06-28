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

import studySync from '../assets/studySync.png'
import gardening from '../assets/gardening.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Responsive UI Designer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: web,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
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

const testimonials = [
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
  }
];


const projects = [
  {
    name: "StudySync",
    description:
      "A full-stack group study platform where users can create, submit, and grade assignments. Includes user authentication, protected routes, modals, leaderboards, and a highly interactive UI built with Framer Motion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: studySync, // 🔁 Replace with your actual image import from ../assets
    source_code_link: "https://github.com/AananMunna/studySync",
    live_link: "https://studysync-d270a.web.app/",
  },
  {
    name: "Gardening Hub",
    description:
      "A modern gardening-themed website featuring Swiper sliders, Lottie animations, and a custom 'Featured Gardeners' section styled like social media profiles. Built with React and Tailwind for clean, responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: gardening, // 🔁 Replace with your actual image import from ../assets
    source_code_link: "https://github.com/AananMunna/gardening-hub",
    live_link: "https://gardening-hub-a68ec.web.app/",
  }
];


export { services, technologies, experiences, testimonials, projects };
