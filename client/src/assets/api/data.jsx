export const certifications = [
  { 
    id:1,
    title: "Hackathon Certification – IIT Roorkee",
    description:
      "Participated in a competitive hackathon at IIT Roorkee, collaborating in a team environment to ideate, design, and present a technology-driven solution within strict timelines. Gained exposure to problem-solving under pressure, rapid prototyping, and real-world application of development concepts.",
    image: "/certifications/hackathon1.jpg",
    issuer: "IIT Roorkee",
  },
  { 
    id:2,
    title: "Flipkart Grid Hackathon",
    description:
      "Participated in the Flipkart Grid Hackathon, working on problem statements aligned with real-world e-commerce and technology challenges. Collaborated within a team to analyze requirements, design solutions, and apply structured problem-solving under competitive constraints.",
    image: "/certifications/flipkart.png",
    issuer: "Flipkart",
  },
  { 
    id:3,
    title: "Introduction to Linux",
    description:
      "Completed an industry-recognized course by the Linux Foundation, gaining foundational knowledge of Linux operating systems, command-line usage, file systems, process management, and basic system administration concepts essential for modern software development and deployment.",
    image: "/certifications/linux.png",
    issuer: "Linux Foundation",
  },
  { 
    id:4,
    title: "Fundamentals of Agents",
    description:
      "Completed the Fundamentals of Agents course by Hugging Face, developing an understanding of intelligent agents, agent workflows, decision-making processes, and the role of AI agents in modern applications.",
    image: "/certifications/huggingFace.jpg",
    issuer: "Hugging Face",
  },
  { 
    id:5,
    title: "Linux Certification",
    description:
      "Successfully completed a Linux certification from Great Learning, covering Linux commands, shell basics, file handling, permissions, and system utilities.",
    image: "/certifications/linuxGS.jpg",
    issuer: "Great Learning",
  },
  { 
    id:6,
    title: "Art Certification",
    description:
      "Earned an Art Certification from Learn With Us, demonstrating creativity, attention to detail, and visual expression skills that support UI/UX sensibility and creative problem-solving.",
    image: "/certifications/art.jpg",
    issuer: "Learn With Us",
  },
  { 
    id:7,
    title: "Academic Excellence Certificate",
    description:
      "Awarded an Academic Excellence Certificate in recognition of consistent academic performance, discipline, and dedication to learning.",
    image: "/certifications/pythonvois.png",
    issuer: "Academic Institution",
  },
];

export const educationData = [
  {
    id: 1,
    img: "/gec.webp",
    institution: "Government Engineering College, Bharatpur",
    course: "B.Tech in Computer Science & Engineering",
    year: "2022 – 2026",
    points: [
      "Maintaining a 9.13 CGPA with consistent academic excellence",
      "Recipient of Academic Excellence Certification",
      "Studied core subjects including DSA, DBMS, OS, and CN",
      "Actively learning DSA and MERN stack development",
    ],
  },
  {
    id: 2,
    img: "/cbse.png",
    institution: "Senior Secondary Education",
    course: "Class XII",
    year: "2021 – 2022",
    points: [
      "Scored 96.20% in board examinations",
      "Strong foundation in Mathematics and analytical thinking",
    ],
  },
  {
    id: 3,
    img: "/cbse.png",
    institution: "Secondary Education",
    course: "Class X",
    year: "2019 – 2020",
    points: [
      "Scored 90.40% with consistent academic performance",
      "Appeared for NTSE, scoring 85/100 in Reasoning",
      "Built strong fundamentals in science and mathematics",
    ],
  },
];

// src/data/skills.js
export const skills = [
  {
    id: 1,
    name: "C++",
    img: "/skillsImages/c++.svg",
  },
 
  {
    id: 2,
    name: "HTML",
    img: "/skillsImages/html.svg",
  },
  {
    id: 3,
    name: "CSS",
    img: "/skillsImages/css.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    img: "/skillsImages/javascript.svg",
  },
   {
    id: 5,
    name: "React",
    img: "/skillsImages/react.svg",
  },
  {
    id: 6,
    name: "Redux",
    img: "/skillsImages/redux.svg",
  },
  {
    id: 7,
    name: "Tailwind",
    img: "/skillsImages/tailwind.svg",
  },
  {
    id: 8,
    name: "Node.js",
    img: "/skillsImages/node.svg",
  },
  {
    id: 9,
    name: "Express.js",
    img: "/skillsImages/express.svg",
  },
  {
    id: 10,
    name: "MongoDB",
    img: "/skillsImages/mongodb.svg",
  },
   {
    id: 11,
    name: "Mongoose",
    img: "/skillsImages/mongoose.svg",
  },
  {
    id: 12,
    name: "VS Code",
    img: "/skillsImages/vscode.svg",
  },
  {
    id: 13,
    name: "Postman",
    img: "/skillsImages/postman.svg",
  },
  {
    id: 14,
    name: "GitHub",
    img: "/skillsImages/github.svg",
  },
   {
    id: 15,
    name: "Linux",
    img: "/skillsImages/linux.svg",
  },
   {
    id: 16,
    name: "npm",
    img: "/skillsImages/npm.svg",
  },
   {
    id: 17,
    name: "react query",
    img: "/skillsImages/rquery.svg",
  },
];


// extra
export const sketches = [
  {
    title: "Sketch-1",
    image: "/extra/img1.jpeg",
  },
  {
    title: "Sketch-2",
    image: "/extra/img2.jpeg",
  },
  {
    title: "sketch-3",
    image: "/extra/img3.jpeg",
  },
  {
    title: "Sketch-4",
     image: "/extra/img4.jpeg",
  },
  {
    title: "Sketch-5",
    image: "/extra/img5.jpeg",
  },
];

// 
export const para = "TThese sketches demonstrate my creativity, design sense, and attention to detail, complementing my technical skills with visual storytelling. Displaying them interactively allows visitors to engage with my work dynamically, highlighting both artistic and front-end development abilities."


// project data 
export const projectsData = [
  {
    id: 1,
    index: "01",
    title: "Expense Tracker",
    description:
      "Built a client-side expense tracking application using HTML, CSS, and JavaScript. Implemented expense categorization, real-time balance updates, and persistent data storage using browser localStorage.",
    image: "/project/expenseTracker.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://expensetrackmj.netlify.app",
    githubUrl: "https://github.com/manjeetsi52/Expense-Tracker",
  },
  {
    id: 2,
    index: "02",
    title: "CoffeeHub",
    description:
      "Designed and developed a responsive coffee brand landing page with a strong emphasis on CSS layouts, animations, and visual hierarchy. Focused on clean typography, modern UI patterns, and smooth user interactions.",
    image: "/project/coffehub.png",
    tech: ["HTML", "CSS","Javascript"],
    liveUrl: "https://coffeehubmj.netlify.app",
    githubUrl: "https://github.com/manjeetsi52/Coffee-Website",
  },
  {
    id: 3,
    index: "03",
    title: "Authify",
    description:
      "Developed a full-stack authentication and authorization system with secure login, protected routes, and role-based access control. Integrated Google OAuth for seamless social authentication and implemented robust session handling.",
    image: "/project/authify.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Google OAuth"],
    liveUrl: "https://authify-fawn.vercel.app",
    githubUrl: "https://github.com/manjeetsi52/Authify",
  },
  {
    id: 4,
    index: "04",
    title: "Developer Portfolio",
    description:
      "Created a personal developer portfolio using React and Tailwind CSS, enhanced with GSAP animations for smooth scroll-based transitions. Designed a dark-themed, performance-focused UI to showcase projects and technical skills.",
    image: "/project/portfolio.png",
    tech: ["React", "Tailwind CSS", "GSAP"],
    liveUrl: "https://your-portfolio-link.com",
    githubUrl: "https://github.com/manjeetsi52/Portfolio",
  },
];
