'use client';

// Import icons you want to use throughout your project
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaPhone,
  FaTwitter,
  FaAws,
  FaCheck,
  FaChartBar,
  FaRobot,
  FaPlug,
  FaLightbulb,
  FaBug,
  FaComment,
  FaThumbsUp
} from 'react-icons/fa';

import {
    FaUpwork
} from 'react-icons/fa6';


import { 
  BsTwitterX 
} from 'react-icons/bs';

import { 
  HiOutlineSun, 
  HiOutlineMoon 
} from 'react-icons/hi';


import { 
    LuAward,
    LuLaptop
} from 'react-icons/lu';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMaterialui
} from 'react-icons/si';


import {
  IoDocument
} from 'react-icons/io5';

// Define your icon mapping
const Icons = {
  // Social media and contact
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
  Mail: FaEnvelope,
  Download: FaDownload,
  Twitter: FaTwitter,
  TwitterX: BsTwitterX,
  Upwork: FaUpwork,
  ExternalLink: FaExternalLinkAlt,
  Document: IoDocument,
  Check: FaCheck,
  LightBulb: FaLightbulb,
  Bug: FaBug,
  Comment: FaComment,
  ThumbsUp: FaThumbsUp,

  // dark and light mode icon   
  Moon: HiOutlineMoon,
  Sun: HiOutlineSun,
  
  // Navigation
  Menu: FaBars,
  Close: FaTimes,
  
  // Section icons
  Code: FaCode,
  Frontend: FaLaptopCode,
  Backend: FaServer,
  Database: FaDatabase,
  Project: LuLaptop,         // Changed to Laptop icon from Lucide
  Education: FaGraduationCap,
  Experience: FaBriefcase,
  Skills: LuAward,  // Changed to Award icon from Lucide
  About: FaUser,
  Contact: FaPhone,
  Phone: FaPhone,
  OpenSource: FaCode,


  // Technology icons
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  NextJs: SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  Python: SiPython,
  Django: SiDjango,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  NodeJs: SiNodedotjs,
  Express: SiExpress,
  MaterialUI: SiMaterialui,
  Chart: FaChartBar,
  AI: FaRobot,
  API: FaPlug
};

export default Icons;
