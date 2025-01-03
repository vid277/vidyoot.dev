"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className={cn(
        "inline-flex flex-wrap items-center justify-center relative text-neutral-900 dark:text-neutral-100",
        className,
      )}
      key={currentWord}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {currentWord.split(" ").map((word, wordIndex) => (
        <motion.span
          key={word + wordIndex}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
          className="inline-flex flex-wrap whitespace-normal"
        >
          {word}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </motion.div>
  );
};
