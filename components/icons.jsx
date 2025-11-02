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
  FaThumbsUp,
  FaChevronDown,
  FaStar,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaDigitalOcean
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
  TbBrandMysql,
  TbBrandCypress
} from 'react-icons/tb';
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
  SiMaterialui,
  SiVite,
  SiAntdesign,
  SiGithubactions,
  SiJenkins,
  SiSqlite,
  SiPytest,
  SiSelenium,
  SiPostman,
  SiMui,
  SiChartdotjs,
  SiFrappe,
  SiWagtail,
  SiNestjs
} from 'react-icons/si';


import {
  IoDocument,
  IoLogoHtml5
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
  ChevronDown: FaChevronDown,
  
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
  Star: FaStar,


  // Technology icons
  HTML5: IoLogoHtml5,
  CSS3: FaCss3Alt,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  NextJs: SiNextdotjs,
  Vite: SiVite,
  AntDesign: SiAntdesign,
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
  Chart: FaChartBar,
  AI: FaRobot,
  GitHubActions: SiGithubactions,
  Jenkins: SiJenkins,
  MySQL: TbBrandMysql,
  SQLite: SiSqlite,
  Cypress: TbBrandCypress,
  Pytest: SiPytest,
  Selenium: SiSelenium,
  Postman: SiPostman,
  MaterialUI: SiMui,
  ChartJS: SiChartdotjs,
  SCSS: FaSass,
  Frappe: SiFrappe,
  Vue: FaVuejs,
  Wagtail: SiWagtail,
  NestJs: SiNestjs,
  DigitalOcean: FaDigitalOcean
};

export default Icons;
