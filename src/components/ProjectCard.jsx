import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, skillsMap }) => {
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
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

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
      className="sticky top-20 w-full max-w-7xl overflow-x-hidden px-4 sm:px-6"
    >
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
        <Card className="group relative overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 dark:to-blue-950/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <CardContent className="relative z-10 p-6 space-y-6">
            <motion.div
              variants={contentVariants}
              className="flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <motion.h3
                    variants={titleVariants}
                    className="text-2xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent"
                  >
                    {title}
                  </motion.h3>
                  {featured && (
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  variants={contentVariants}
                  className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
                >
                  {year && (
                    <motion.div
                      className="flex items-center gap-2 sm:hidden text-xs text-muted-foreground"
                      variants={contentVariants}
                    >
                      <Calendar className="w-3 h-3" />
                      {year}
                    </motion.div>
                  )}

                  {status && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Carousel */}
            {screenshots?.length > 0 && (
              <motion.div variants={contentVariants} className="relative">
                <Carousel className="w-full overflow-hidden">
                  <CarouselContent>
                    {screenshots.map((src, i) => (
                      <CarouselItem
                        key={i}
                        className="flex justify-center px-2 sm:px-0 w-full max-w-full"
                      >
                        <motion.div className="relative w-full max-w-full sm:max-w-2xl" variants={imageVariants}>
                          {!imageLoaded[i] && (
                            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse" />
                          )}
                          <motion.img
                            src={src}
                            alt={`${title} screenshot ${i + 1}`}
                            className={`w-full rounded-lg max-h-80 object-cover border border-zinc-200 dark:border-zinc-700 transition-all duration-300 ${
                              imageLoaded[i] ? "opacity-100" : "opacity-0"
                            }`}
                            onLoad={() => handleImageLoad(i)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {screenshots.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </>
                  )}
                </Carousel>

                {screenshots.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs"
                  >
                    {screenshots.length} images
                  </motion.div>
                )}
              </motion.div>
            )}

            <motion.div variants={contentVariants} className="space-y-3">
              <motion.p variants={contentVariants} className="text-muted-foreground leading-relaxed">
                {description}
              </motion.p>
            </motion.div>

            {tech?.length > 0 && (
              <motion.div variants={contentVariants} className="space-y-3">
                <motion.h4
                  variants={contentVariants}
                  className="text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  Built with
                </motion.h4>
                <motion.div variants={techStackVariants} className="flex flex-wrap gap-3">
                  {tech.map((t) => {
                    const found = skillsMap.find((s) => s.name.toLowerCase() === t.toLowerCase());
                    return found ? (
                      <motion.div
                        key={t}
                        variants={techItemVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-200 border border-zinc-200 dark:border-zinc-700 cursor-default"
                      >
                        <img src={found.image} alt={found.name} className="w-4 h-4" />
                        <span>{found.name}</span>
                      </motion.div>
                    ) : null;
                  })}
                </motion.div>
              </motion.div>
            )}

            <motion.div
              variants={contentVariants}
              className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex-col md:flex-row"
            >
              {github && (
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="flex-1">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
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
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="flex-1">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
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
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;