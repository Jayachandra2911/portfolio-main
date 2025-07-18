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

    ],
    tech: ["typeScript",  "tailwind css", ],
    github: "https://github.com/Jayachandra2911/SolarCalculator",
    demo: "https://solar-cost-estimater.netlify.app/",
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
