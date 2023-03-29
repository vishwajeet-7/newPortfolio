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
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
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
      name: "typescript",
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
      title: "Freelancer",
      company_name: "SEFE Martketing Melbourne",
      icon: "https://sefemarketing.com.au/wp-content/uploads/2020/06/1.png",
      iconBg: "#383E56",
      date: "May 2022 - January 2023",
      points: [
        "Planning Campaigns",
        "SEO Management",
        "Lead Generation",
        "Prospect Gathering",
        "Planning Google ads based on keywords",
        "Website Ranking",
      ],
    },
    {
      title: "Team Leader",
      company_name: "RFS Technology & Services",
      icon: "https://static.wixstatic.com/media/fbb9a1_fdaa94644033499a8e27166dff9abec3~mv2.jpg/v1/fill/w_170,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RFS_logo-01_edited.jpg",
      iconBg: "#E6DEDD",
      date: "September 2019 - March 2022",
      points: [
        "Analysing the performance of representatives.",
        "Coaching, Supervising and assisting.",
        "Making reports and communicating, it to the stakeholders",
        "Making salaries of team members",
        "Conducting upskilling programmes",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Infodeity",
      icon: "https://www.freeiconspng.com/thumbs/work-icon/work-icon-0.png",
      iconBg: "#383E56",
      date: "August 2014 - September 2019",
      points: [
        "Analyzing data over internet",
        "Organising data in a structured format and sending it to client",
        "Customer care representative, chat support",
        "Working on different projects as assigned",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Problem Solving (Basic) HackerRank",
      name: "HackerRank",
      designation: "CFO",
      company: "Acme Co",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
    },
    {
      testimonial:
        "3 Stars Problem solving badge",
      name: "HackerRank",
      designation: "COO",
      company: "DEF Corp",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
    },
    {
      testimonial:
        "Winner of Construct week Unit 5",
      name: "Masai",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://www.passionateinmarketing.com/wp-content/uploads/2021/10/Masai.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Royal Brothers-Clone",
      description:
        "Web-based platform that allows users to search, book, and manage bike rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "chakra",
          color: "pink-text-gradient",
        },
        {
          name: "api",
          color: "orange-text-gradient",
        },
      ],
      image: "https://i.postimg.cc/y69d8rV7/royal-Bros.jpg",
      source_code_link: "https://github.com/saintlypioneer/RoyalBrothersReact",
      deployed:"https://symphonious-cupcake-6a58b9.netlify.app/"
    },
    {
      name: "Spotify-Clone",
      description:
        "Web application that enables users to search any songs and listen as per their moods. Users can create their own playlists, listen to thousands of songs of different genres.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "api",
          color: "orange-text-gradient",
        },
      ],
      image: "https://snipboard.io/aokAc2.jpg",
      source_code_link: "https://github.com/ritikraj07/Project_Spotify.com",
      deployed:"https://starlit-salmiakki-6e2eb0.netlify.app/html/"
    },
    {
      name: "Bewakoof.com-Clone",
      description:
        "A comprehensive platform where user can buy fashion clothing accessories. It has thousands of brands with a wide range of variety.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.postimg.cc/DyvPQGp4/bewakoof.jpg",
      source_code_link: "https://github.com/",
      deployed:"https://cheery-klepon-becbe0.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };