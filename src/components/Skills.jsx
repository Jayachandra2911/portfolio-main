import SkillCard from "./SkillCard";
import skills from "../assets/skills";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Skills = () => {
  const chunkedSkills = chunkArray(skills, 5);

  return (
    <section className="flex w-full justify-center items-center flex-col gap-10 py-16 overflow-hidden relative">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll-reverse {
            animation: scrollReverse 30s linear infinite;
          }
        `}
      </style>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100">
        My Toolkit
      </h2>

      {chunkedSkills.map((row, index) => (
        <div key={`row-${index}`} className="max-w-6xl overflow-hidden">
          <div
            className={`flex w-fit gap-8 ${
              index % 2 === 0 ? "animate-scroll" : "animate-scroll-reverse"
            }`}
          >
            <div className="flex gap-8">
              {row.map((skill, i) => (
                <SkillCard key={`row-${index}-original-${i}`} {...skill} />
              ))}
            </div>

            <div className="flex gap-8">
              {row.map((skill, i) => (
                <SkillCard key={`row-${index}-clone-${i}`} {...skill} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
