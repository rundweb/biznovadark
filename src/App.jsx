import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import { useEffect } from "react";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-hidden bg-third">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetail" element={<BlogDetails />} />
        <Route path="/serviceDetail" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
