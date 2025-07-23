// Projects.jsx
import  skills from "../assets/skills";
import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    title: "Solar Calculator",
    year: "2025",
    featured: false,
    status: "completed",
    description:
      "Solar Calculator is a smart, interactive web-based platform designed to help users calculate the optimal size and placement of solar panels for their homes. The tool takes into account various factors such as location, energy consumption, and budget to provide personalized recommendations. Users can input their specific requirements and receive a detailed report outlining the best solar solutions for their needs.",
    screenshots: [
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1752858586/Screenshot_2025-06-23_192208_qpdjgc.png",
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1752892524/Screenshot_2025-07-19_080225_dmogyc.png",
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1752892523/Screenshot_2025-07-19_080247_mwfjoj.png",
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1752893247/Screenshot_2025-07-19_081642_inhsqs.png",
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1752892524/Screenshot_2025-07-19_080407_iiumr6.png",
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1752892544/Screenshot_2025-07-19_080422_kgxpca.png"
    ],
    tech: ["typeScript", "tailwind css"],
    github: "https://github.com/Jayachandra2911/SolarCalculator",
    demo: "https://solar-cost-estimater.netlify.app/",
  },
  {
  title: "Live Resume",
    year: "2025",
    featured: false,
    status: "completed",
    description:
      "Live Resume is a dynamic, web-based application that allows users to see my professional journey in real-time. It showcases my skills, projects, and experiences in an interactive format, providing a comprehensive overview of my career. The application is designed to be visually appealing and easy to navigate, making it a perfect tool for potential employers or collaborators to understand my professional background.",
    screenshots: [
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1753292421/Screenshot_2025-07-23_230545_gypjdz.png",
                "https://res.cloudinary.com/dz43rbtgd/image/upload/v1753292421/Screenshot_2025-07-23_230610_yvvdpn.png"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jayachandra2911/LiveResume",
    demo: "https://jc-resume.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full py-20 px-4 md:px-20 bg-background text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="relative flex flex-col gap-32">
        {dummyProjects.map((project, i) => (
          <div key={i} className="flex items-start gap-8 relative">
            <div className="sticky hidden md:block top-20 w-20 text-right text-muted-foreground text-sm font-mono">
              {project.year}
            </div>
            <ProjectCard project={project} skillsMap={skills} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

