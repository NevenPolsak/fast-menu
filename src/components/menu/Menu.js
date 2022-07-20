import React from "react";
import { IconContext } from "react-icons";
import "./Menu.css";
import data from "./data";

function Menu() {
  return (
    <IconContext.Provider value={{
        className:"stars icon"
        }}>
    <section className="menu" id="menu">
      <div className="heading">
        <h3>our menu</h3>
      </div>

      <div className="box-container">
        {data.map((menu) => {
          return (
            <div className="box" key={menu.id}>
              <img src={menu.img} alt="/" />
              <div className="content">
                <div className="stars">
                    {menu.star}
                    {menu.star}
                    {menu.star}
                    {menu.star}
                    {menu.halfStar}
                </div>
                <h3>{menu.title}</h3>
                <div className="price">$29.99</div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </IconContext.Provider>
  );
}

export default Menu;
