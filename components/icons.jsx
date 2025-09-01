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
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaUser,
  FaPhone
} from 'react-icons/fa';

import { BsMoonStars, BsSun, BsMoonFill, BsBrightnessHighFill, BsCodeSlash, BsGear, BsLaptop } from 'react-icons/bs';
import { HiOutlineSun, HiOutlineMoon, HiOutlineCode } from 'react-icons/hi';
import { IoSunnyOutline, IoMoonOutline, IoCodeSlashOutline, IoHammerOutline, IoLaptopOutline } from 'react-icons/io5';
import { RiSunLine, RiMoonClearLine, RiCodeSSlashLine, RiCodeBoxLine, RiToolsFill, RiMacbookLine } from 'react-icons/ri';
import { VscProject, VscTools } from 'react-icons/vsc';
import { AiOutlineProject, AiOutlineTool, AiOutlineLaptop } from 'react-icons/ai';
import { MdOutlineWorkOutline, MdWorkOutline, MdLaptopMac } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import { Award, Laptop } from 'lucide-react';

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
  SiGit
} from 'react-icons/si';

// Define your icon mapping
const Icons = {
  // Social media and contact
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
  Download: FaDownload,
  ExternalLink: FaExternalLinkAlt,
  
  // Theme
  // Default theme icons (Bootstrap style)
  Moon: BsMoonStars,
  Sun: BsSun,
  
  // Alternative theme icons
  // Uncomment one pair and comment out the default pair above to use a different style
  
  // Option 1: Simple filled (Bootstrap)
  // Moon: BsMoonFill,
  // Sun: BsBrightnessHighFill,
  
  // Option 2: Outline style (Heroicons)
  // Moon: HiOutlineMoon,
  // Sun: HiOutlineSun,
  
  // Option 3: Outline style (Ionicons)
  // Moon: IoMoonOutline, 
  // Sun: IoSunnyOutline,
  
  // Option 4: Line style (Remix)
  // Moon: RiMoonClearLine,
  // Sun: RiSunLine,
  
  // Navigation
  Menu: FaBars,
  Close: FaTimes,
  
  // Section icons
  Code: FaCode,
  Frontend: FaLaptopCode,
  Backend: FaServer,
  Database: FaDatabase,
  Project: Laptop,         // Changed to Laptop icon from Lucide
  Education: FaGraduationCap,
  Experience: FaBriefcase,
  Skills: Award,  // Changed to Award icon from Lucide
  About: FaUser,
  Contact: FaPhone,
  
  // Alternative section icons (uncomment to use)
  // Project options
  // Project: Laptop,             // Current icon (Lucide Laptop icon)
  // Project: GoProject,          // GitHub Octicons project icon
  // Project: FaProjectDiagram,   // Font Awesome project diagram icon
  // Project: MdLaptopMac,        // Material Design laptop icon
  // Project: AiOutlineLaptop,    // Ant Design laptop icon
  // Project: IoLaptopOutline,    // Ionicons laptop icon
  // Project: BsLaptop,           // Bootstrap laptop icon
  // Project: RiMacbookLine,      // Remix macbook icon
  
  // Skills options
  // Skills: Award,               // Current icon (Lucide Award icon)
  // Skills: FaTools,             // Font Awesome tools icon
  // Skills: MdOutlineEngineering,// Material Design engineering icon
  // Skills: VscTools,            // VS Code style tools icon
  // Skills: AiOutlineTool,       // Ant Design style tool icon
  // Skills: IoHammerOutline,     // Ionicons style tools icon
  // Skills: BsGear,              // Bootstrap style gear icon
  // Skills: RiToolsFill,         // Remix style tools icon
  
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
  AWS: SiAmazonaws,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit
};

export default Icons;
