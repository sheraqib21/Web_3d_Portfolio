import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
  {
    id: "team",
    title: "Our Team",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Deveopment",
    icon: creator,
  },
  {
    title: "React Native Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack development",
    company_name: "ELEVEN",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - July 2023",
    points: [
      "Developed a mindfulness app with daily wellness tasks for mental and physical health.",

      "Added features for users to customize gym routines and exercise routes.",

      "Designed a user-friendly interface to encourage regular mindfulness and exercise.",


      "Integrated tracking for monitoring progress and providing motivational feedback."
    
    ],
    
  },
  {
    title: "React Native Developer",
    company_name: "CurioKids",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - Feb 2023",
    points: [
      "Developed and maintained a mobile app for CurioKids, focusing on personalized learning experiences for children.",
      "Integrated AI-driven features, including interactive teaching and quizzes, to enhance educational engagement.",
      "Collaborated with designers and educators to create a user-friendly interface that supports diverse learning styles.",
      "Optimized app performance and user experience across multiple devices and platforms using React Native.",

    ],
  },
  {
    title: "Web Developer",
    company_name: "FunPulse",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2023 -  Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Our web platform needed a major overhaul, and Flynn delivered exactly what we needed. The site is now faster, more intuitive, and more user friendly.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Flynn helped us launch our mindfulness app on time and within budget. Their team was always available for feedback and made sure everything was perfect before launch.",
    name: "Chris Brown",
    designation: "CTO",
    company: "ELEVEN",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Flynn’s developers were skilled and great to work with. They helped us turn our ideas into a functional, attractive app that users find valuable, informative, and easy to use.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },

];

const projects = [
  {
    name: "Budget and Finance App",
    description:
      "Mobile app that allows users to track, manage, and optimize their finances, providing a simple and effective solution for budgeting and financial planning.",
    tags: [
      {
        name: "Mern stack",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node .js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sheraqib21/Budgeting-and-finance-Complete-",
  },
  {
    name: "Ecommerce Webapp ",
    description:
      "Web application that allows users to browse products, add items to their cart, and securely complete purchases, providing a seamless online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/aye-shadow",
  },
  {
    name: "CurioKids",
    description:
      "A personalized learning platform for kids that uses AI to provide interactive teaching, quizzes, and a rich library of educational content, tailored to each student's needs.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL ",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/aye-shadow/curiokids",
  },
];

export { services, technologies, experiences, testimonials, projects };
