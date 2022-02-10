import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Chart from "./components/Chart"

export const ThemeContext = React.createContext({})

function App() {
  const [theme, setTheme] = useState("dark")

  const appStyle = {
    dark: {
      backgroundColor: "#1d1d1d",
      color: "white",
    },
    light: {
      backgroundColor: "#fcfcfc",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
      height: "100vh",
      width: "100vw",
    },
  }

  const themeStyle = {
    ...(theme === "light" ? appStyle.light : appStyle.dark),
    ...appStyle.common,
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={themeStyle}>
        <Header />
        <Chart />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
