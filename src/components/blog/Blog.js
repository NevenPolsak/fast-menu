import React from "react";
import "./Blog.css";
import data from "./data";

function Blog() {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <h3>daily posts</h3>
      </div>

      <div className="box-container">
        {data.map((blog) => {
          return (
            <div className="box" key={blog.id}>
              <div className="image">
                <img src={blog.img} alt="/" />
                <div className="icons">
                  <a href="">{blog.icon1}</a>
                  <a href="">{blog.icon2}</a>
                </div>
              </div>
              <div className="content">
                <h3>blog title</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas, maxime.
                </p>
                <a href="#" className="btn">
                  read more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
