import { Button } from "./components/ui/button";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import { useTheme } from "@/components/theme-provider";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect"
const App = () => {
  const { theme } = useTheme();
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
      <Skills/>
      <Projects/>
      <Connect/>
    </div>
  );
};

export default App;



