import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_DPl74UWR.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { clsx } from 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useMemo, useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Soy Gonzalo Chalé, un ingeniero en sistemas que disfruta de la programación y la tecnología. Me gusta aprender y compartir conocimientos."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col justify-start items-center min-h-dvh"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/migue/Desktop/projects/web-personal/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const date = /* @__PURE__ */ new Date();
  const formattedDate = date.toLocaleDateString("es-MX", {
    year: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<header class="w-full max-lg:px-4 flex flex-col sm:flex-row gap-10 justify-between items-center pt-5"> <div class="w-full flex justify-between items-center"> <div class="flex gap-3 items-center"> <span class="text-muted-foreground font-medium"> ${formattedDate} </span> </div> <nav class="flex justify-center items-center gap-3"> <a href="https://github.com/gonzalochale" aria-label="lab" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Button", Button, { "size": "icon", "variant": "ghost", "aria-label": "lab" }, { "default": ($$result2) => renderTemplate` <svg viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="size-6"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg> ` })} </a> <a href="https://twitter.com/gonzalochale" aria-label="lab" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Button", Button, { "size": "icon", "variant": "ghost", "aria-label": "lab" }, { "default": ($$result2) => renderTemplate` <svg viewBox="0 0 256 209" width="256" height="209" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="size-6"> <path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#55acee"></path> </svg> ` })} </a> <a href="https://www.linkedin.com/in/gonzalo-chal%C3%A9-749008296/" aria-label="lab" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Button", Button, { "size": "icon", "variant": "ghost", "aria-label": "lab" }, { "default": ($$result2) => renderTemplate` <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" class="size-6"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path> </svg> ` })} </a> </nav> </div> </header>`;
}, "C:/Users/migue/Desktop/projects/web-personal/src/components/Header.astro", void 0);

function Banner() {
  const words = useMemo(
    () => [
      { text: "BRILLANTES" },
      { text: "DIFERENTES" },
      { text: "ORIGINALES" },
      { text: "GENIALES" },
      { text: "ESPECIALES" }
    ],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState({
    text: words[currentWordIndex].text,
    color: words[currentWordIndex].color
  });
  const [glitchActive, setGlitchActive] = useState(false);
  const GLYPHS = "!$%&/()=?¡*+_-.,;:[]{}^<>'~#|@abcdefghijk1234567890";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setGlitchActive(true);
    }, 2e3);
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
          color: words[currentWordIndex].color
        });
      }, 400);
    }
  }, [currentText, glitchActive, words, currentWordIndex]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "w-full border-dashed border-t border-b guides-container-x", children: /* @__PURE__ */ jsx("div", { className: "px-4 tracking-tighter w-full flex justify-center items-center", children: /* @__PURE__ */ jsx("h1", { className: "w-full max-w-2xl max-lg:leading-[0.8] max-lg:text-5xl leading-[0.8] text-7xl font-bold max-lg:text-center text-muted-foreground", children: "CREANDO" }) }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full border-dashed border-t border-b guides-container-x", children: /* @__PURE__ */ jsx("div", { className: "px-4 tracking-tighter w-full flex justify-center items-center", children: /* @__PURE__ */ jsx("h2", { className: "w-full max-w-2xl max-lg:leading-[0.8] leading-[0.8] max-lg:text-5xl text-7xl font-bold max-lg:text-center text-muted-foreground", children: "PRODUCTOS" }) }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full border-t border-dashed border-b guides-container-x", children: /* @__PURE__ */ jsx("div", { className: "px-4 tracking-tighter w-full flex justify-center items-center ", children: /* @__PURE__ */ jsxs(
      "span",
      {
        className: "w-full max-w-2xl max-lg:leading-[0.8] leading-[0.8] max-lg:text-5xl text-7xl font-bold max-lg:text-center",
        style: { color: currentText.color },
        children: [
          currentText.text.split("").map((char, index) => /* @__PURE__ */ jsx(
            "span",
            {
              "data-char": char,
              style: {
                "--index": index,
                "--char-1": `"${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]}"`,
                "--char-2": `"${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]}"`,
                "--char-3": `"${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]}"`
              },
              children: char
            },
            index
          )),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: currentText.text })
        ]
      }
    ) }) })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<script>\n  document.documentElement.classList.add("dark");\n<\/script>', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Gonzalo Chal\xE9 - Ingeniero en sistemas." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="w-full min-h-dvh flex flex-col justify-center items-center gap-3 p-4"><section class="w-full max-w-2xl">${renderComponent($$result2, "Header", $$Header, {})}</section><section class="relative w-full min-h-dvh flex flex-col justify-center items-center gap-3">${renderComponent($$result2, "Banner", Banner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/migue/Desktop/projects/web-personal/src/components/react/Banner.jsx", "client:component-export": "default" })}<div class="absolute max-lg:hidden container border-dashed border-l border-r min-h-dvh max-w-2xl guides-container-y"></div></section></main>` }));
}, "C:/Users/migue/Desktop/projects/web-personal/src/pages/index.astro", void 0);

const $$file = "C:/Users/migue/Desktop/projects/web-personal/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
