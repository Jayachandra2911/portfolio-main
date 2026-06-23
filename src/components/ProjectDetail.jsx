import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <section className="w-full px-4 md:px-20 py-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-8">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-8 md:p-10"
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{project.year}</p>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-8">{project.description}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            </a>
            <a href={project.github} target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <img
                  src={project.screenshots[0]}
                  alt={project.title}
                  className="w-full h-[280px] object-cover"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {project.screenshots.slice(1, 3).map((src) => (
                  <div
                    key={src}
                    className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                  >
                    <img src={src} alt={project.title} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
                <h2 className="text-xl font-semibold mb-3">Problem</h2>
                <p className="text-muted-foreground leading-7">{project.problem}</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
                <h2 className="text-xl font-semibold mb-3">Solution</h2>
                <p className="text-muted-foreground leading-7">{project.solution}</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
                <h2 className="text-xl font-semibold mb-3">What I did</h2>
                <div className="space-y-3">
                  {project.whatIDid.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
              <h2 className="text-xl font-semibold mb-3">Outcome</h2>
              <p className="text-muted-foreground leading-7">{project.outcome}</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
              <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
