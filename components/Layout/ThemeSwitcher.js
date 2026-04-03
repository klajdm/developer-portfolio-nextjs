import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [enabled, setEnabled] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark" || (theme === "system" && systemTheme === "dark")) {
      setEnabled(true);
    }
  }, [theme, systemTheme]);

  const toggleDarkMode = () => {
    if (enabled) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setEnabled(!enabled);
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={enabled ? "Switch to light mode" : "Switch to dark mode"}
    >
      {enabled ? <FiSun size={27} /> : <FiMoon size={27} />}
    </button>
  );
}
