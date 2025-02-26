const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const menuDetails = [
  {
    name: "Service Detail",
    path: "/serviceDetail",
  },
  {
    name: "Blog Detail",
    path: "/blogDetail",
  }
];

const dataHome = [
  {
    name: "Courses",
    count: 200,
    last: "+",
  },
  {
    name: "Experience",
    count: 10,
    last: "+",
  },
  {
    name: "Followers",
    count: 2,
    last: "m",
  },
];

const whatWeOffer = [
  {
    title: "Professional & Modern",
    description:
      "Clean, corporate-ready templates for a strong online presence.",
  },
  {
    title: "Fully Responsive",
    description: "Optimized for seamless performance across all devices.",
  },
  {
    title: "SEO & High Performance",
    description: "Fast-loading and search engine-friendly structure.",
  },
  {
    title: "Easy Customization",
    description: "Flexible and scalable to fit your business needs.",
  },
];

import {
  BiCodeAlt,
  BiSearchAlt,
  BiPalette,
  BiCart,
  BiSupport,
  BiTrendingUp,
} from "react-icons/bi";

const services = [
  {
    title: "Website Development",
    description:
      "Build a fast, modern website that enhances your brand and user experience.",
    icon: BiCodeAlt,
  },
  {
    title: "SEO Strategy",
    description:
      "Boost search rankings with optimized content and technical improvements.",
    icon: BiSearchAlt,
  },
  {
    title: "Branding & Design",
    description:
      "Create a unique visual identity with stunning design and strong branding.",
    icon: BiPalette,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Simplify online selling with secure payments and seamless navigation.",
    icon: BiCart,
  },
  {
    title: "Business Consulting",
    description:
      "Get expert insights and strategies to scale your business effectively.",
    icon: BiTrendingUp,
  },
  {
    title: "24/7 Support",
    description:
      "Reliable customer support to keep your business running smoothly.",
    icon: BiSupport,
  },
];

import portfolio1 from "../image/portfolio1.jpg";
import portfolio2 from "../image/portfolio2.jpg";

const portfolio = [
  {
    id: 1,
    title: "About Us Website Design",
    portImg: portfolio1,
    category: ["Template", "SaaS", "About"],
  },
  {
    id: 2,
    title: "Service Us Website Design",
    portImg: portfolio2,
    category: ["Template", "SaaS", "Services"],
  },
];
import testimonialImg from "../image/testimonial.jpg";

const testimonialItem = [
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
  {
    name: "William Julius",
    img: testimonialImg,
    position: "Project Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, quis suscipit. Incidunt quos assumenda est voluptatem delectus commodi ad deleniti!",
  },
];

const pricingPlans = [
  {
    name: "Basic Plan",
    description: "Basic plan for startups and small businesses.",
    features: [
      "1 Website",
      "Free Hosting (1 Year)",
      "5GB Storage",
      "1 Professional Email",
      "Basic SEO Optimization",
      "Email Support",
    ],
    price: "$9.99",
    buttonText: "Get Started",
  },
  {
    name: "Pro Plan",
    description: "Advanced features for growing businesses.",
    features: [
      "All features from Basic Plan",
      "5 Websites",
      "Free Hosting (2 Years)",
      "50GB Storage",
      "5 Professional Emails",
      "Advanced SEO & Analytics",
      // "Chat Support",
      // "API Integration"
    ],
    price: "$29.99",
    buttonText: "Get Started",
  },
  {
    name: "Enterprise Plan",
    description: "Fully customized solutions for large enterprises.",
    features: [
      "All features from Pro Plan",
      "Unlimited Websites",
      "Dedicated Hosting",
      "Unlimited Storage",
      "Unlimited Professional Emails",
      "Full Customization & Branding",
      // "Priority 24/7 Support",
      // "Integration with Internal Systems"
    ],
    price: "Custom Pricing",
    buttonText: "Contact Us",
  },
];

import blog1 from "../image/ai.jpg";
import blog2 from "../image/bc.jpg";
import blog3 from "../image/qc.jpg";
import blog4 from "../image/network.jpg";
import blog5 from "../image/ar.jpg";

const techBlogs = [
  {
    title:
      "The Future of AI: How Artificial Intelligence is Changing the World",
    img: testimonialImg,
    imgTop: blog1,
    category: "Artificial Intelligence",
    desc: "AI is evolving and playing a role in various aspects of life, from automation to decision-making. What comes next?",
    love: 120,
    comment: 45,
    date: "2025-02-24",
  },
  {
    title: "Blockchain Technology: More Than Just Crypto",
    img: testimonialImg,
    imgTop: blog2,
    category: "Blockchain",
    desc: "Blockchain is not just about Bitcoin. This technology has numerous potential applications in industries like healthcare, logistics, and finance.",
    love: 98,
    comment: 30,
    date: "2025-02-23",
  },
  {
    title: "Quantum Computing: A New Era of Superfast Computation",
    img: testimonialImg,
    imgTop: blog3,
    category: "Quantum Computing",
    desc: "Quantum computing promises extraordinary speed in data processing and solving complex problems in seconds.",
    love: 150,
    comment: 60,
    date: "2025-02-22",
  },
  {
    title: "5G and the Future of Ultra-Fast Internet",
    img: testimonialImg,
    imgTop: blog4,
    category: "Networking",
    desc: "5G networks bring a revolution in internet speed and connectivity, opening new opportunities for IoT and smart cities.",
    love: 85,
    comment: 25,
    date: "2025-02-21",
  },
  {
    title: "Augmented Reality: Transforming How We Interact with the World",
    img: testimonialImg,
    imgTop: blog5,
    category: "Augmented Reality",
    desc: "AR is increasingly used in gaming, education, and business. How will this technology evolve in the future?",
    love: 110,
    comment: 40,
    date: "2025-02-20",
  },
];

const blogDetails = [
  {
    title:
      "The Future of AI: How Artificial Intelligence is Changing the World",
    img: blog1,
    category: "Artificial Intelligence",
    desc: [
      {
        icon: "🚀",
        bold: "The Rise of AI in Everyday Life",
        text: " AI is already embedded in many aspects of modern life. In healthcare, AI-powered diagnostic systems can detect diseases like cancer with greater accuracy and speed than human doctors. AI-driven robots assist in surgeries, reducing errors and improving patient outcomes. In the business world, AI optimizes logistics, streamlines customer service, and enhances cybersecurity by identifying threats before they cause damage.",
      },
      {
        icon: "🌍",
        bold: "AI's Role in Industry and Automation",
        text: " The impact of AI on industries is profound. Factories are adopting AI-powered automation, leading to increased production efficiency and cost reduction. Smart cities utilize AI to optimize traffic flow, reduce energy consumption, and enhance public safety. The financial sector relies on AI for fraud detection, risk assessment, and algorithmic trading that operates at speeds beyond human capability.",
      },
      {
        icon: "🧠",
        bold: "The Ethical Dilemmas of AI",
        text: " With AI's rapid development, ethical concerns have become a major topic of discussion. AI algorithms can inherit biases from the data they are trained on, leading to unfair treatment in hiring processes, law enforcement, and even medical diagnoses. The infamous problem—where AI makes decisions without clear explanations—raises questions about transparency and accountability.",
      },
      {
        icon: "🔮",
        bold: "What’s Next for AI?",
        text: " As AI technology advances, its potential seems limitless. Researchers are working on Artificial General Intelligence (AGI), a form of AI that can perform any intellectual task that a human can do. If AGI becomes a reality, it could revolutionize science, medicine, and even space exploration.",
      },
    ],
    love: 120,
    comment: 45,
    date: "2025-02-24",
  },
];

import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiVercel, SiNetlify, SiDigitalocean } from "react-icons/si";

const technologies = [
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaLaravel, name: "Laravel" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiNetlify, name: "Netlify" },
  { icon: SiDigitalocean, name: "DigitalOcean" }
];

export {
  menu,
  menuDetails,
  dataHome,
  whatWeOffer,
  services,
  portfolio,
  testimonialItem,
  pricingPlans,
  techBlogs,
  blogDetails,
  technologies
};
