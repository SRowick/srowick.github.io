import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import SpinnerFullPage from "./components/SpinnerFullPage";
import Homepage from "./pages/Homepage";
import { useImagePreloader } from "./hooks/useImagePreloader.tsx";

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

// The user might not be going to GamePage
const GamePage = lazy(() => import("./pages/GamePage"));

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
  const imageUrlsToPreload = [
    "/logo.png",
    "/projects/perseus.jpg",
    "/projects/odysseus.jpg",
  ];

  const imagesLoaded = useImagePreloader(imageUrlsToPreload);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {imagesLoaded ? (
          <Suspense fallback={<SpinnerFullPage />}>
            <div>
              <AnimatedRoutes />
            </div>
          </Suspense>
        ) : (
          <SpinnerFullPage />
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
