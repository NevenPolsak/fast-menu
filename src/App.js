import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Service />
      <Menu />
      <About />
      <Reviews />
      <Contact />
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
