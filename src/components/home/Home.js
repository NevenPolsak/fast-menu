import React from "react";
import "./Home.css";
import homeLogo from "../../images/home.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <img src={homeLogo} alt="/" />
        <h3>So tasty &#129316;</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at
          fuga aliquam ipsa recusandae repellat laudantium pariatur amet culpa
          cum.
        </p>
        <a href="#menu" className="btn">
          our menu
        </a>
      </div>
    </section>
  );
}

export default Home;
