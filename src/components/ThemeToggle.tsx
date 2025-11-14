import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 p-2 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-sm hover:scale-105 transition-all cursor-pointer"
      aria-label="테마 전환"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-300 w-5 h-5" />
      ) : (
        <Moon className="text-indigo-400 w-5 h-5" />
      )}
    </button>
  );
}