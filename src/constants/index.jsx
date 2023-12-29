import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Software Engineer",
        company_name: "Creditfix Private Lmtd",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Oct 2023 - Dec 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Software Engineer",
        company_name: "Miki Digital",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Dec 2023 - Dec 2023",
        points: [
            "Used Nextjs and Typescript to develop beautiful and functional components for a very big project.",
            "Used SCSS for styling.",
            "Worked closely with expert UI/UX Designers.",
            "Built Complex and scalable logics.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "STARTUP",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - May 2023",
        points: [
            "Built profitable websites for clients using the MERN Stack.",
            "Produced responsive and fully-functional websites.",
            "Worked cooperatively with client services, sales and design team in deadline-driven environment.",
            "Built databases and table structures for web applications.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Azerbaijan Artificial Intelligence Lab",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Aug 2021 - Jan 2022",
        points: [
            "Reviewed code, debugged problems, and corrected issues.",
            "Developed functional databases, applications and servers to support websites on back-end.",
            "Analyzed existing software implementations to identify areas requiring improvement.",
            "Developed fully functional websites using the MERN Stack and worked on complex logics.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Faxraddin',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/faxraddin-yuzbashew-ab5849255/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Anita Impex',
        description: 'Developed a Call Center web application in UK for Creditfix Private Limited company.',
        link: 'https://anitaimpex.com',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Netflix Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Netflix,"',
        link: 'https://netflix-navy-theta.vercel.app/register',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Hotel/Restaurant website ',
        description: 'Website for a local hotel/restaurant,where user can learn about hotel,where it’s located and what you can do there,if you like it,you can make a booking!',
        link: 'https://hopelake.netlify.app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'E-commerce On MERN',
        description: 'E-commerce website, worked as a full stack developer in a Startup with a team of 5 developers.',
        link: 'https://github.com/Faxraddin/E-commerce-on-MERN',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Portfolio ',
        description: 'Was made for me,also as a micro blog where everyone can see my shares!',
        link: 'https://portfolio-faxraddin.netlify.app',
    },
];