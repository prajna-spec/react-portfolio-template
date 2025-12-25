
import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { ThemeProvider, createTheme } from "@mui/material/styles"; // <-- use ThemeProvider from MUI styles
import CssBaseline from "@mui/material/CssBaseline";                 // <-- optional
import Toolbar from "@mui/material/Toolbar";                          // <-- optional (for fixed AppBar offset)
import { PaletteState } from "./components/ColorPickerDialog";
import { GlobalStyles } from "@mui/material";

function App() {
  // Prefer a union type for better type-safety
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const handleModeChange = () => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
  };

  const [palette, setPalette] = useState<PaletteState>({
    primary: "#1976d2",
    secondary: "#9c27b0",
  });

  // IMPORTANT: include 'mode' so MUI components switch palettes correctly
  const theme = createTheme({
    palette: {
      mode,                                 // <-- add this
      primary: { main: palette.primary },
      secondary: { main: palette.secondary },
    },
  });

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <ThemeProvider theme={theme}>       {/* <-- provide theme to MUI */}
      <CssBaseline /> 
      <GlobalStyles styles = {(theme) => ({
        // CSS variables reflecting current theme
        ':root': {
          '--primary-main': theme.palette.primary.main,
          '--primary-contrast': theme.palette.primary.contrastText,
          '--secondary-main': theme.palette.secondary.main,
          '--secondary-contrast': theme.palette.secondary.contrastText,
          '--bg-default': theme.palette.background.default,
          '--bg-paper': theme.palette.background.paper,
          '--text-primary': theme.palette.text.primary,
          '--text-secondary': theme.palette.text.secondary,}
        })} />

      <div className= "main-container">
        <Navigation
          parentToChild={{ mode }}
          modeChange={handleModeChange}
          palette={palette}
          onPaletteChange={setPalette}
        />
        {/* If your Navigation AppBar is fixed, this reserves vertical space under it */}
        <Toolbar />                              {/* <-- optional if AppBar position="fixed" */}
        <FadeIn transitionDuration={700}>
          <Main/>
          <Expertise/>
          <Timeline/>
          <Project/>
          <Contact/>
        </FadeIn>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
