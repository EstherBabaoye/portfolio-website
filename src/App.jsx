import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Scripts from "./pages/Scripts";
import WebProjects from "./pages/WebProjects.jsx";
import Testimonials from "./pages/Testimonials.jsx";


function App() {
  const location = useLocation();

  useEffect(() => {
  AOS.init({ once: true });
}, []);

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // optional: animation only happens once
  });
}, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/scripts" element={<Scripts />} />
        <Route path="/web-projects" element={<WebProjects />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;











