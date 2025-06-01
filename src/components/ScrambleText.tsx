import React, { useState, useEffect, useRef } from "react";

const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:',.<>?/~`";

export default function ScrambleText({ text }: { text: string }) {
  // For each character, maintain displayed char state and interval ref
  const charsState = text.split(" ").map((char) => ({
    original: char,
    displayed: char,
  }));

  const [displayedChars, setDisplayedChars] = useState(text.split(" "));

  const intervalsRef = useRef<(NodeJS.Timeout | null)[]>(Array(text.length).fill(null));

  const handleMouseEnter = (index: number) => {
    if (intervalsRef.current[index]) return; 

    intervalsRef.current[index] = setInterval(() => {
      const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
      setDisplayedChars((prev) => {
        const newChars = [...prev];
        newChars[index] = randomChar;
        return newChars;
      });
    }, 80);
  };

  // Handler for mouse leave on character index
  const handleMouseLeave = (index: number) => {
    if (intervalsRef.current[index]) {
      clearInterval(intervalsRef.current[index]!);
      intervalsRef.current[index] = null;

      // Revert to original char
      setDisplayedChars((prev) => {
        const newChars = [...prev];
        newChars[index] = text[index];
        return newChars;
      });
    }
  };

  return (
    <span>
      {displayedChars.map((char, idx) => (
        <span
          key={idx}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
          style={{ cursor: "cell", display: "inline-block" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
