import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, skillsMap, onOpen }) => {
  const {
    title,
    description,
    screenshots,
    tech,
    github,
    demo,
    featured,
    status,
    year,
  } = project;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full px-4 sm:px-6"
    >
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
        <Card
          onClick={() => onOpen?.(project)}
          className="group relative overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer mx-auto"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 dark:to-blue-950/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <CardContent className="relative z-10 p-0">
            <div className="grid md:grid-cols-[300px_1fr] min-h-[420px] md:min-h-[420px]">
              <motion.div
                variants={imageVariants}
                className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 min-h-[220px] md:min-h-[420px]"
              >
                <img
                  src={screenshots?.[0]}
                  alt={`${title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {featured && (
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {status && (
                    <Badge
                      variant={
                        status === "completed"
                          ? "default"
                          : status === "in-progress"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs"
                    >
                      {status.replace("-", " ")}
                    </Badge>
                  )}
                </div>
              </motion.div>

              <div className="flex flex-col justify-between p-5 md:p-6">
                <div className="space-y-4">
                  <motion.div
                    variants={contentVariants}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.h3
                          variants={titleVariants}
                          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent"
                        >
                          {title}
                        </motion.h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {year}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={contentVariants} className="space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  </motion.div>

                  {tech?.length > 0 && (
                    <motion.div variants={contentVariants} className="space-y-3">
                      <motion.h4
                        variants={contentVariants}
                        className="text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                      >
                        Built with
                      </motion.h4>
                      <motion.div variants={techStackVariants} className="flex flex-wrap gap-2">
                        {tech.slice(0, 3).map((t) => {
                          const found = skillsMap.find((s) => s.name.toLowerCase() === t.toLowerCase());
                          return found ? (
                            <motion.div
                              key={t}
                              variants={techItemVariants}
                              whileHover="hover"
                              whileTap={{ scale: 0.9 }}
                              className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-200 border border-zinc-200 dark:border-zinc-700 cursor-default"
                            >
                              <img src={found.image} alt={found.name} className="w-4 h-4" />
                              <span>{found.name}</span>
                            </motion.div>
                          ) : null;
                        })}
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  variants={contentVariants}
                  className="mt-5 flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex-col sm:flex-row"
                >
              {github && (
                <motion.div
                  variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200 text-sm"
                >
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Github className="w-4 h-4" />
                      </motion.div>
                      Source Code
                    </a>
                  </Button>
                </motion.div>
              )}
              {demo && (
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm"
                  >
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              )}
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
