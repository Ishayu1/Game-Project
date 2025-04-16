import useDarkMode from "./dark-mode";

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useDarkMode();

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors"
      aria-label={enabled ? "Disable Dark Mode" : "Enable Dark Mode"}
    >
      {enabled ? "🌙" : "☀️"}
    </button>
  );
}