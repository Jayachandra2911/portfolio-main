import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Building2, Clock3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExperienceDetail = ({ experience, onBack }) => {
  if (!experience) return null;

  return (
    <section className="w-full px-4 md:px-20 py-24 bg-background text-foreground">
      <div className="max-w-5xl mx-auto space-y-8">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Building2 className="w-4 h-4" />
                {experience.company}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{experience.role}</h1>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <Clock3 className="w-4 h-4" />
                {experience.duration}
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-800 px-4 py-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Role snapshot
              </div>
              Shipped reusable UI, polished interactions, and product-ready interfaces.
            </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            {experience.summary}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Reusable UI systems",
              "Design consistency",
              "Product delivery speed"
            ].map((metric) => (
              <div
                key={metric}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4"
              >
                <p className="text-sm text-muted-foreground">{metric}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4">
            {experience.details.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4"
              >
                <CheckCircle2 className="mt-0.5 w-5 h-5 text-emerald-500 shrink-0" />
                <p className="text-muted-foreground leading-7">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceDetail;
