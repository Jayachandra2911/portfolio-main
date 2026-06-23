import { useEffect, useState } from "react";

const Terminal = ({ className = "" }) => {
  const [lines, setLines] = useState([""]);
  const [currentStep, setCurrentStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { text: "> npx create-life", delayBefore: 0 },
    { text: "✓ Initialized", delayBefore: 700 },
    { text: "📦 Installing dependencies...", delayBefore: 900 },
    { text: "⏳ Creating moments...", delayBefore: 750 },
    { text: "🎉 Project setup complete!", delayBefore: 700 },
    { text: "> code .", delayBefore: 500 },
    { text: "🤔 thinking...", delayBefore: 600 },
    { text: "🧠 learning...", delayBefore: 600 },
    { text: "🚧 building...", delayBefore: 600 },
    { text: "✨ Ready to create!", delayBefore: 700 }
  ];

  useEffect(() => {
    if (currentStep >= steps.length) {
      setIsComplete(true);
      return;
    }

    const { text, delayBefore } = steps[currentStep];

    if (charIndex === 0) {
      const delayTimer = setTimeout(() => {
        setCharIndex(1);
      }, delayBefore);
      return () => clearTimeout(delayTimer);
    }

    if (charIndex > 0 && charIndex <= text.length) {
      const typeTimer = setTimeout(() => {
        setLines((prev) => {
          const updated = [...prev];
          updated[currentStep] = text.slice(0, charIndex);
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, Math.random() * 40 + 28);
      return () => clearTimeout(typeTimer);
    }

    if (charIndex > text.length) {
      const lineCompleteTimer = setTimeout(() => {
        setLines((prev) => [...prev, ""]);
        setCurrentStep((prev) => prev + 1);
        setCharIndex(0);
      }, 250);
      return () => clearTimeout(lineCompleteTimer);
    }
  }, [charIndex, currentStep]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
      className={`md:w-full h-[430px] mt-10 w-[90%] sm:mt-50 max-w-xl font-mono text-sm bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 rounded-[1.5rem] p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 ${className}`}
    >
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
        <span className="text-xs text-zinc-500 ml-3 tracking-wide">terminal</span>
      </div>

      <div className="whitespace-pre-wrap break-words min-h-[250px] space-y-2">
        {lines.map((line, index) => (
          <div key={index} className="leading-relaxed text-[15px] md:text-[16px]">
            {line.startsWith(">") ? (
              <span className="text-blue-600 dark:text-blue-400">{line}</span>
            ) : line.startsWith("✓") ? (
              <span className="text-emerald-500 dark:text-emerald-400">{line}</span>
            ) : line.startsWith("📦") || line.startsWith("⏳") || line.startsWith("🎉") || line.startsWith("🤔") || line.startsWith("🧠") || line.startsWith("🚧") ? (
              <span
                className={
                  line.startsWith("🎉") || line.startsWith("✨")
                    ? "text-yellow-500 dark:text-yellow-400"
                    : line.startsWith("📦")
                    ? "text-orange-500 dark:text-orange-400"
                    : "text-zinc-700 dark:text-zinc-300"
                }
              >
                {line}
              </span>
            ) : (
              <span className="text-zinc-700 dark:text-zinc-300">{line}</span>
            )}
            {index === lines.length - 1 && showCursor && !isComplete && (
              <span className="text-emerald-500 animate-pulse">▍</span>
            )}
          </div>
        ))}

        {isComplete && (
          <div className="mt-6 text-xs text-emerald-500 font-semibold tracking-wide">
            ● System ready
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
