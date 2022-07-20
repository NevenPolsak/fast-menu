import React from "react";
import "./Contact.css";
import { BsFillMapFill, BsTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

function Contact() {
  const style = {
    height: "6rem",
    width: "6rem",
    lineHeight: "6rem",
    borderRadius: "50%",
    background: "rgb(255, 187, 0)",
    color: "black",
    fontSize: "2rem",
    marginBottom: "1rem",
  };
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h3>contact us</h3>
      </div>
      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0863928992344!2d19.820254050655873!3d41.3287347074909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503110e54e6759%3A0x97a6fd9f70068aa!2sPizzarte!5e0!3m2!1sen!2shr!4v1658244030009!5m2!1sen!2shr"
          className="map"
          allowfullscreen=""
          loading="lazy"
          width="600"
          height="350"
        ></iframe>

        <div className="form">
          <div className="icons-container">
            <div className="icons">
              <BsFillMapFill style={style} />
              <h3>address :</h3>
              <p>Rruga Luigj Gurakuqi, Tirana, Albania</p>
            </div>

            <div className="icons">
              <MdAlternateEmail style={style} />
              <h3>email :</h3>
              <p>sishkebab@gmail.com</p>
            </div>

            <div className="icons">
              <BsTelephoneFill style={style} />
              <h3>phone :</h3>
              <p>+123-456-7890</p>
            </div>

            <form action="">
              <input type="text" placeholder="full name" className="box" />
              <input type="email" placeholder="email" className="box" />
              <input type="number" placeholder="phone" className="box" />
              <textarea
                name=""
                placeholder="message"
                className="box"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="send message" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
