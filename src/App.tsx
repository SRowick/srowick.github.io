import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GamePage from "./pages/GamePage";
import { type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiStack: {
      defaultProps: {
        spacing: 2,
        alignItems: "center",
      },
    },
  },
});

// Motion wrapper for page transitions
const MotionWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo(0, 0); // Scroll to top for the next page.
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MotionWrapper>
              <Homepage />
            </MotionWrapper>
          }
        />
        <Route
          path="/:gameId"
          element={
            <MotionWrapper>
              <GamePage />
            </MotionWrapper>
          }
        />
        <Route
          path="*"
          element={
            <MotionWrapper>
              <Homepage />
            </MotionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
