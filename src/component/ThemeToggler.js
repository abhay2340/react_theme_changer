import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <p>{themeMode === "light" ? "Tun off" : "turn on"}</p>
    </div>
  );
};

export default ThemeToggler;
