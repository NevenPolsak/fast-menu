import React from "react";
import "./Service.css";
import data from "./data"
import { IconContext } from "react-icons";


function Service() {
  return (
    <IconContext.Provider value={{
    className:"icon"
    }}>
    <section className="service">
      {data.map((service) => {
        return (
          <div className="box" key={service.id}>
           {service.icon}
            <h3>{service.title}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum.</p>
          </div>
        );
      })}
    </section>
    </IconContext.Provider>
  );
}

export default Service;
