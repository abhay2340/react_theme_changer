import "./App.css";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header></Header>
        <HeroSection></HeroSection>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
