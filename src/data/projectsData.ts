export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  image: string;
  link: string;
  sourceCode?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration with Stripe. This project demonstrates modern web development practices including responsive design, secure authentication, and seamless payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    status: "Completed",
    image: "/api/placeholder/711/400",
    link: "#",
    sourceCode: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates. Users can create, edit, and organize tasks with drag-and-drop functionality. Built with TypeScript for better code maintainability.",
    technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
    status: "In Progress",
    image: "/images/projects/genix_biz_home.png",
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather conditions and forecasts for multiple cities using OpenWeatherMap API. Features include interactive charts, geolocation support, and responsive design.",
    technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
    status: "Completed",
    image: "/api/placeholder/711/400",
    link: "#",
    sourceCode: "#"
  }
];
