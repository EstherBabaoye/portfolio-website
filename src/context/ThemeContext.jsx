import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const STORAGE_KEY = "theme"; // "dark" | "light" | null (null = follow system)

function getInitial() {
  // If user saved a preference, use it; otherwise follow system
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark") return { isDark: true, userHasPref: true };
    if (saved === "light") return { isDark: false, userHasPref: true };
  } catch {}
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return { isDark: !!prefersDark, userHasPref: false };
}

export function ThemeProvider({ children }) {
  const [{ isDark, userHasPref }, setState] = useState(getInitial);

  // If user does NOT have a saved preference, stay in sync with system changes
  useEffect(() => {
    if (userHasPref) return;
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = (e) => setState((s) => ({ ...s, isDark: e.matches }));
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [userHasPref]);

  // Apply class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  // Cross-tab sync (only for explicit prefs)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY) return;
      if (e.newValue === "dark") setState({ isDark: true, userHasPref: true });
      else if (e.newValue === "light") setState({ isDark: false, userHasPref: true });
      else if (e.newValue === null) {
        // No UI to clear in this version, but handle gracefully: revert to system now
        const prefersDark =
          window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
        setState({ isDark: prefersDark, userHasPref: false });
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme: () => {
        setState((s) => {
          const next = !s.isDark;
          try {
            localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
          } catch {}
          return { isDark: next, userHasPref: true };
        });
      },
    }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
