import { Dispatch, SetStateAction } from "react";

type ThemeToggleProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};
export const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  return (
    <>
      <button
        className="btn"
        onClick={() =>
          setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme")
        }
      >
        Toggle Theme
      </button>
    </>
  );
};
