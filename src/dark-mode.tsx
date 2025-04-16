import { useEffect, useState } from "react";

export default function useDarkMode(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;

      // No preference in localStorage → check system
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [enabled, setEnabled] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    console.log(root.classList);
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return [enabled, setEnabled];
}
