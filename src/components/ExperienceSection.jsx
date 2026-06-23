import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Building2, BriefcaseBusiness } from "lucide-react";

const ExperienceSection = ({ experiences, onOpenExperience }) => {
  return (
    <section id="experience" className="w-full px-4 md:px-20 py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
          A quick look at the companies, roles, and duration of time I spent building products.
          Click any card to see the full detail page.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
            onClick={() => onOpenExperience(item)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="text-left rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building2 className="w-4 h-4" />
                      {item.company}
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{item.role}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground leading-7">{item.summary}</p>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1">
                    <Clock3 className="w-4 h-4" />
                    {item.duration}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1">
                    <BriefcaseBusiness className="w-4 h-4" />
                    Open case study
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
