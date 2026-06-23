import { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import { useTheme } from "@/components/theme-provider";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import ExperienceDetail from "./components/ExperienceDetail";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Connect from "./components/Connect"
import { experiences, projects } from "./data/portfolio";
const App = () => {
  const { theme } = useTheme();
  const [view, setView] = useState({ type: "home", item: null });

  const openExperience = (item) => setView({ type: "experience", item });
  const openProject = (item) => setView({ type: "project", item });
  const backHome = () => setView({ type: "home", item: null });

  if (view.type === "experience") {
    return (
      <div>
        <Toaster
          richColors
          theme={theme === "system" ? "auto" : theme}
          position="top-right"
          closeButton
          className="border-red-900"
        />
        <Navbar />
        <ExperienceDetail experience={view.item} onBack={backHome} />
      </div>
    );
  }

  if (view.type === "project") {
    return (
      <div>
        <Toaster
          richColors
          theme={theme === "system" ? "auto" : theme}
          position="top-right"
          closeButton
          className="border-red-900"
        />
        <Navbar />
        <ProjectDetail project={view.item} onBack={backHome} />
      </div>
    );
  }

  return (
    <div >
      <Toaster
      richColors
      theme={theme === "system" ? "auto" : theme}
      position="top-right"
      closeButton
      className="border-red-900"
      />
      <Navbar />
      <Hero/>
      <ExperienceSection experiences={experiences} onOpenExperience={openExperience} />
      <Skills/>
      <Projects onOpenProject={openProject}/>
      <Connect/>
    </div>
  );
};

export default App;



