import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Scripts from "./pages/Scripts";
import WebProjects from "./pages/WebProjects.jsx";
import Testimonials from "./pages/Testimonials.jsx";

import routes from "./routesMap";

// Optional: smooth scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const componentMap = {
  Home,
  About,
  Projects,
  Contact,
  Resume,
  Scripts,
  WebProjects,
  Testimonials,
};

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {routes.map((r) => {
          const Cmp = componentMap[r.key];
          if (!Cmp) return null; // safety if a key is missing
          return <Route key={r.path} path={r.path} element={<Cmp />} />;
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
