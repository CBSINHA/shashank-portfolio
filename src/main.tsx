import * as ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import CertificatesPage from "./pages/CertificatesPage";
import NotFoundPage from "./pages/NotFoundPage";

import ThemeProvider from "./context/ThemeProvider";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetailsPage />}
        />

        <Route
          path="/certificates"
          element={<CertificatesPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);