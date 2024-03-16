"use client"

import { useState, useEffect, useMemo } from "react";

export default function Banner() {
  const words = useMemo(
    () => [
      { text: "BRILLANTES" },
      { text: "DIFERENTES" },
      { text: "ORIGINALES" },
      { text: "GENIALES" },
      { text: "ESPECIALES" },
    ],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState({
    text: words[currentWordIndex].text,
    color: words[currentWordIndex].color,
  });
  const [glitchActive, setGlitchActive] = useState(false);

  const GLYPHS = "!$%&/()=?¡*+_-.,;:[]{}^<>'~#|@abcdefghijk1234567890";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setGlitchActive(true);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const MAX_GLITCH_CHARACTERS = 10;

  useEffect(() => {
    if (glitchActive) {
      const glitchInterval = setInterval(() => {
        const newText = Array.from(
          { length: currentText.text.length },
          (_, i) => {
            if (i < MAX_GLITCH_CHARACTERS) {
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
            return currentText.text[i];
          }
        ).join("");
        setCurrentText({ text: newText, color: currentText.color });
      }, 50);

      setTimeout(() => {
        clearInterval(glitchInterval);
        setGlitchActive(false);
        setCurrentText({
          text: words[currentWordIndex].text,
          color: words[currentWordIndex].color,
        });
      }, 400);
    }
  }, [currentText, glitchActive, words, currentWordIndex]);

  return (
    <>
      <section className="w-full border-dashed border-t border-b guides-container-x">
        <div className="px-4 tracking-tighter w-full flex justify-center items-center">
          <h1 className="w-full max-w-2xl max-lg:leading-[0.8] max-lg:text-5xl leading-[0.8] text-7xl font-bold max-lg:text-center text-muted-foreground">
            CREANDO
          </h1>
        </div>
      </section>
      <section className="w-full border-dashed border-t border-b guides-container-x">
        <div className="px-4 tracking-tighter w-full flex justify-center items-center">
          <h2 className="w-full max-w-2xl max-lg:leading-[0.8] leading-[0.8] max-lg:text-5xl text-7xl font-bold max-lg:text-center text-muted-foreground">
            PRODUCTOS
          </h2>
        </div>
      </section>
      <section className="w-full border-t border-dashed border-b guides-container-x">
        <div className="px-4 tracking-tighter w-full flex justify-center items-center ">
          <span
            className="w-full max-w-2xl max-lg:leading-[0.8] leading-[0.8] max-lg:text-5xl text-7xl font-bold max-lg:text-center"
            style={{ color: currentText.color }}
          >
            {currentText.text.split("").map((char, index) => (
              <span
                key={index}
                data-char={char}
                style={{
                  "--index": index,
                  "--char-1": `"${
                    GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                  }"`,
                  "--char-2": `"${
                    GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                  }"`,
                  "--char-3": `"${
                    GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                  }"`,
                }}
              >
                {char}
              </span>
            ))}
            <span className="sr-only">{currentText.text}</span>
          </span>
        </div>
      </section>
    </>
  );
}