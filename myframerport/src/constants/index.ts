import projects1 from "../assets/heroimg.webp";
import projects2 from "../assets/marketing.webp";
import projects3 from "../assets/mobileapp.webp";
import projects4 from "../assets/herobest.webp";
import projects5 from "../assets/breadhome.jpg";
import projects6 from "../assets/breadprogram.jpg";

import person1 from "../assets/jude.jpg";
import person2 from "../assets/jude.jpg";
import person3 from "../assets/jude.jpg";
import person4 from "../assets/jude.jpg";
import person5 from "../assets/jude.jpg";
import person6 from "../assets/jude.jpg";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Jason Root, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "SparkleSky Cleaning website ",
    description: "A fullstack website for taking quota and managing cleaning services",
    image: projects1,
    link: "https://github.com/judeokpe/cleanerweb",
  },
  {
    name: "Digital Agency Website",
    description: "A platform that provide services for engaging potential client and bootcamp",
    image: projects2,
    link: "https://github.com/judeokpe/portfolio",
  },
  {
    name: "Saletick",
    description: "A backend services for managing Inventory",
    image: projects3,
    link: "https://github.com/judeokpe/saletcik",
  },
  {
    name: "LandTePay",
    description:
      "A backend services that manage landlord-tenant operations",
    image: projects4,
    link: "https://github.com/judeokpe/landord-tenant-management",
  },
  {
    name: "FitConnect",
    description: "Fitness social network to connect athletes and trainers",
    image: projects5,
    link: "#",
  },
  {
    name: "WellNest",
    description: "A wellness app for mental and physical health improvement",
    image: projects6,
    link: "#",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
 "I am a dedicated full-stack tech developer with a passion for building modern, high-performance applications that are both functional and aesthetically pleasing. Over the years, I have worked on a wide range of projects, from single-page applications to complex, scalable systems, ensuring seamless user experiences and efficient backend operations.",

"I specialize in technologies like React, Next.js, and Tailwind CSS for building dynamic frontends, while leveraging Node.js, Django, and databases like PostgreSQL and MongoDB for robust backend development. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to develop scalable, secure, and efficient solutions. I thrive in environments that challenge me to continuously learn and innovate."
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — Present",
    title: "Backend Developer at Nanocode Programming Limited",
    location: "Remote",
    description: [
      "Developing scalable RESTful APIs using Node.js and Django, handling over 100,000 requests daily.",
      "Optimizing database queries, improving response time by 30%.",
      "Enhancing application security by implementing JWT-based authentication.",
    ],
  },
  {
    yearRange: "2022 — 2023",
    title: "Web Development Tutor at Digital Dream ICT Academy",
    location: "Remote",
    description: [
      "Trained over 100 students in full-stack development, covering HTML, CSS, JavaScript, PHP, React, and Python.",
      "Designed real-world projects to provide hands-on learning experiences.",
    ],
  },
  {
    yearRange: "2021 — 2022",
    title: "Website Development Lead at Prince Dike",
    location: "Remote",
    description: [
      "Led a team in developing and maintaining WordPress-based applications.",
      "Provided technical support and conducted training programs for junior developers.",
    ],
  },
];


export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "jason@example.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: FaXTwitter
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: FaGithub,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: FaLinkedin,
    },
  ],
  footerText: `© ${new Date().getFullYear()} Jason Root. All rights reserved.`,
};
