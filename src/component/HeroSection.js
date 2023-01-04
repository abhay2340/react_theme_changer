import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import AppTheme from "../Colors";

// function HeroSection() {
//   const ThemeContext = useContext(ThemeContext)[0];
//   const currentTheme = AppTheme[theme];



const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];




  return (
    <div style={{
      padding:"1rem",
      backgroundColor:`${currentTheme.backgroundColor}`,
      color:`${currentTheme.textColor}`,
      textAlign:"center"
    }}>
      <h1>context Api Theme toggler</h1>
      <p>This is anice oara</p>
      <button
      style={{backgroundColor:"#26ae60",padding:'10px 150px', fontSize:"20px",color:"white",border:`${currentTheme.border}`}}
      >Click me</button>
    </div>
  );
}

export default HeroSection;


// import React, { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
// import AppTheme from "../Colors";

// const HeroSection = () => {
//   const theme = useContext(ThemeContext)[0];
//   const currectTheme = AppTheme[theme];

//   return (
//     <div
//       style={{
//         padding: "1rem",
//         backgroundColor: `${currectTheme.backgroundColor}`,
//         color: `${currectTheme.textColor}`,
//         textAlign: "center"
//       }}
//     >
//       <h1>Context API theme toggler</h1>
//       <p>This is a nice paragraph</p>
//       <button
//         style={{
//           backgroundColor: "#26ae60",
//           padding: "10px 150px",
//           fontSize: "20px",
//           color: "#FFF",
//           border: `${currectTheme.border}`
//         }}
//       >
//         CLick Me
//       </button>
//     </div>
//   );
// };

// export default HeroSection;
