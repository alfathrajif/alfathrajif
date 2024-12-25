import { projectImage1, projectImage2 } from "../assets";
import { FaGithub } from "react-icons/fa";

export const projects = [
  {
    brand: "Jo Design Construction",
    category: "Company Profile",
    description:
      "Jodesign Construction is a national company engaged in the construction services. This website is built using ReactJS on the Client-side and Laravel on the Server-side.",
    domain: "joconstruction.my",
    link: "https://joconstruction.my",
    image: projectImage1,
    technologies: ["ReactJS", "Tailwind CSS", "Laravel"],
  },
  {
    brand: "alfathrajif.com",
    category: "Personal Portfolio",
    description: "This website is built using Next.js and Tailwind CSS.",
    image: projectImage2,
    domain: "alfathrajif.com",
    link: "https://alfathrajif.online",
    technologies: ["Next.js", "Tailwind CSS"],
  },
];

export const links = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
];

export const socials = [
  {
    title: "GitHub",
    link: "https://github.com/alfathrajif",
    icon: FaGithub,
  },
];

export const experience = [
  {
    title: "Internship Web Developer",
    company: "Idolegacy Sdn Bhd",
    company_location: "Federal Territory of Kuala Lumpur, Malaysia",
    period: "Feb - Aug 2023",
    description:
      "Developing a charity platform that allows users to create and manage fundraising campaigns, receive donations, and track progress. Using MongoDB, Express, React.js, Node.js, Billplz for payments.",
    tags: ["MongoDB", "Express", "React.js", "Node.js", "Billplz"],
  },
  {
    title: "Vocational High School Diploma in Computer and Network Engineering",
    company: "SMK Negeri 1 Banda Aceh",
    company_location: "Banda Aceh, Indonesia",
    period: "2015 - 2018",
    description:
      "Participants in provincial level web design competitions using HTML, CSS, JavaScript, PHP and Laravel.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
  },
  {
    title: "Diploma in Technology Information",
    company: "Politeknik Aceh",
    company_location: "Banda Aceh, Indonesia",
    period: "2021 - 2024",
    description:
      "In my final project, I developed a Learning Management System (LMS) platform. It's includes authentication and user role for teachers, students, and admins. The LMS supports class creation, material sharing, user management, and commenting.",
    tags: ["React.js", "Next.js", "NestJS", "Firebase", "TypeScript"],
  },
];
