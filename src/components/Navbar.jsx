import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    },
  };

  const shimmerVariants = {
    hover: {
      x: ["0%", "100%"],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full flex justify-center items-center p-4 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-zinc-200/50 dark:border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        <Menubar
          className={`transition-all p-8 duration-300 border-2 rounded-2xl ${
            isScrolled
              ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-xl border-zinc-200/70 dark:border-zinc-700/70"
              : "bg-white/95 dark:bg-black/95 backdrop-blur-sm border-zinc-200/50 dark:border-zinc-700/50"
          } hover:shadow-2xl hover:border-zinc-300/70 dark:hover:border-zinc-600/70`}
        >

          <MenubarMenu>
            <motion.div variants={itemVariants}>
              <MenubarTrigger className="flex items-center gap-2 text-sm font-medium transition-colors relative overflow-hidden rounded-lg px-3 py-2">
                <motion.div
                  variants={iconHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative"
                >
                  <Github
                    className="w-7 h-7 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() =>
                      window.open("https://github.com/Jayachandra2911", "_blank")
                    }
                  />

                  <motion.div
                    className="absolute inset-0 bg-blue-500/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  variants={shimmerVariants}
                  whileHover="hover"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-x-full"
                />
              </MenubarTrigger>
            </motion.div>
          </MenubarMenu>

          <MenubarMenu>
            <motion.div variants={itemVariants}>
              <MenubarTrigger className="flex items-center gap-2 text-sm font-medium transition-colors relative overflow-hidden rounded-lg px-3 py-2">
                <motion.div
                  variants={iconHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative"
                >
                  <Linkedin className="w-7 h-7 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  onClick={() =>
                      window.open("https://www.linkedin.com/in/jaya-chandra-sai-kotapati/", "_blank")
                    }
                   />
                  <motion.div
                    className="absolute inset-0 bg-green-500/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  variants={shimmerVariants}
                  whileHover="hover"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent -translate-x-full"
                />
              </MenubarTrigger>
            </motion.div>
          </MenubarMenu>

          {/* Email Menu */}
          <MenubarMenu>
            <motion.div variants={itemVariants}>
              <MenubarTrigger className="flex items-center gap-2 text-sm font-medium transition-colors relative overflow-hidden rounded-lg px-3 py-2">
                <motion.div
                  variants={iconHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative"
                >
                  <a href="mailto:jayachandra2911@gmail.com" className="block">
                    <Mail className="w-7 h-7 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400" />
                  </a>
                  <motion.div
                    className="absolute inset-0 bg-orange-500/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  variants={shimmerVariants}
                  whileHover="hover"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent -translate-x-full"
                />
              </MenubarTrigger>
            </motion.div>
          </MenubarMenu>

          {/* Mode Toggle Menu */}
          <MenubarMenu>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-3 py-2 rounded-lg relative overflow-hidden"
            >
              <ModeToggle />
              <motion.div
                variants={shimmerVariants}
                whileHover="hover"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -translate-x-full"
              />
            </motion.div>
          </MenubarMenu>
        </Menubar>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
