import { useEffect, useRef, useState, useCallback } from "react";

export const useTextScrambler = (
  originalText: string,
  revealDelay = 4,
  speed = 25
) => {
  const [displayed, setDisplayed] = useState("");
  const intervalId = useRef<number | null>(null);
  const frame = useRef(0);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const scramble = useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    frame.current = 0;

    intervalId.current = window.setInterval(() => {
      const progress = Math.floor(frame.current / revealDelay);

      if (progress >= originalText.length) {
        setDisplayed(originalText);
        if (intervalId.current) {
          clearInterval(intervalId.current);
          intervalId.current = null;
        }
        return;
      }

      const correctPart = originalText.slice(0, progress);
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      const nextChar =
        frame.current % revealDelay === revealDelay - 1
          ? originalText[progress]
          : randomChar;

      setDisplayed(correctPart + nextChar);
      frame.current++;
    }, speed);
  }, [originalText, revealDelay, speed, chars]);

  useEffect(() => {
    scramble();

    // Cleanup interval on unmount
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [scramble]);

  return { displayed, scramble };
};
