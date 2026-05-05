import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import AppFallback from "./components/AppFallback";
import GlobalStyles from "./components/GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// #region component
const App = () => {
  return (
    <ErrorBoundary FallbackComponent={AppFallback}>
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <GlobalStyles />
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ErrorBoundary>
  );
};
// #endregion

export default App;
