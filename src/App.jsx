import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Subscribe from "./pages/subscribe/Subscribe";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Add or remove 'no-scroll' class on 'body' based on isNavActive
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup the effect
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavOpen]);

  return (
    <>
      <Header isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Home isNavOpen={isNavOpen} />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/subscribe" element={<Subscribe />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
