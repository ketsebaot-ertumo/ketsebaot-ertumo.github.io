
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
    //   size="icon"
    //   variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-lg cursor-pointer p-2 rounded-md hover:bg-gray-600 dark:hover:bg-gray-700 transition"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 dark:text-zinc-600" />
      )}
    </button>
  );
}
