import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeState>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme(): ThemeState {
  return useContext(ThemeContext);
}
