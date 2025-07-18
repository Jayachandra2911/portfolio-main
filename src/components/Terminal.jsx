import { useEffect, useState } from "react";

const Terminal = ({className}) => {
  const [lines, setLines] = useState([""]);
  const [currentStep, setCurrentStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { text: "> npx create-life", delayBefore: 0 },
    { text: "✔ Initialized", delayBefore: 800 },
    { text: "📦 Installing dependencies...", delayBefore: 1200 },
    { text: "⏳ Creating moments...", delayBefore: 1800 },
    { text: "🎉 Project setup complete!", delayBefore: 1000 },
    { text: "> code .", delayBefore: 600 },
    { text: "🤔 thinking...", delayBefore: 800 },
    { text: "🧠 learning...", delayBefore: 600 },
    { text: "🚧 building...", delayBefore: 600 },
    { text: "✨ Ready to create!", delayBefore: 800 }
  ];

  const resetAnimation = () => {
    setLines([""]);
    setCurrentStep(0);
    setCharIndex(0);
    setIsComplete(false);
  };

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
        setLines(prev => {
          const updated = [...prev];
          updated[currentStep] = text.slice(0, charIndex);
          return updated;
        });
        setCharIndex(prev => prev + 1);
      }, Math.random() * 40 + 30); 
      return () => clearTimeout(typeTimer);
    }

    // Line completed, move to next
    if (charIndex > text.length) {
      const lineCompleteTimer = setTimeout(() => {
        setLines(prev => [...prev, ""]);
        setCurrentStep(prev => prev + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(lineCompleteTimer);
    }
  }, [charIndex, currentStep]);

  
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={`md:w-full h-[350px] mt-10 w-[80%] sm:mt-50 max-w-md font-mono text-sm bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-800`}>
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-xs text-zinc-500 ml-2">terminal</span>
      </div>
      
      <div className="whitespace-pre-wrap break-words min-h-[200px]">
        {lines.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line.startsWith('>') ? (
              <span className="text-blue-600 dark:text-blue-400">{line}</span>
            ) : line.startsWith('✔') ? (
              <span className="text-green-600 dark:text-green-400">{line}</span>
            ) : line.startsWith('🎉') || line.startsWith('✨') ? (
              <span className="text-yellow-600 dark:text-yellow-400">{line}</span>
            ) : (
              <span className="text-zinc-700 dark:text-zinc-300">{line}</span>
            )}
            {index === lines.length - 1 && showCursor && !isComplete && (
              <span className="text-emerald-500 animate-pulse">▍</span>
            )}
          </div>
        ))}
        
        {isComplete && (
          <div className="mt-4 text-xs text-emerald-500 font-semibold">
            ◉ System ready
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;