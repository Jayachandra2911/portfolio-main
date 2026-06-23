import skills from "../assets/skills";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

const Projects = ({ onOpenProject }) => {
  return (
    <section id="projects" className="relative flex flex-col justify-center items-center w-full py-20 px-4 md:px-20 bg-background text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projects</h2>
      <p className="text-muted-foreground max-w-2xl text-center mb-16">
        Click any project card to open a detail page with the problem, solution, tools, and what I built.
      </p>
      <div className="relative flex flex-col gap-20">
        {projects.map((project, i) => (
          <div key={project.id} className="flex items-start gap-6 relative">
            <div className="sticky hidden md:block top-20 w-20 text-right text-muted-foreground text-sm font-mono">
              {project.year}
            </div>
            <ProjectCard project={project} skillsMap={skills} onOpen={onOpenProject} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
