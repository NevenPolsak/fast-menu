import React from "react";
import { BsCheckLg } from "react-icons/bs";
import data from "./data";
import "./About.css";
import about from "../../images/about.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={about} alt="/" />
      </div>

      <div className="content">
        <h3 className="title">Step into grease central &#x1f60b;</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veniam
          error fugit quasi perspiciatis blanditiis quo, sint beatae ut, commodi
          fuga illo reprehenderit ea voluptatibus earum fugiat obcaecati
          doloremque? Aspernatur?
        </p>
        <div className="icons">
          {data.map((about) => {
            return (
              <h3 key={about.id}>
                <BsCheckLg
                  style={{ color: "rgb(255, 187, 0)", paddingRight: ".5rem" }}
                />
                {about.title}
              </h3>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
