import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

import "./contact.css";
import Phone from "../../img/mobile-phone.svg";
import Email from "../../img/email.svg";
import Address from "../../img/country.svg";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cqfexha",
        "template_97f13qu",
        formRef.current,
        "user_jqwbLo18tgU8Efq6xzdKM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      {/* <div className="c-bg"></div> */}
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">I am a Web Developer.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                className={`c-icon ${darkMode ? "filter-green" : ""}`}
                src={Phone}
                alt=""
              />
              +1 437-775-1167
            </div>

            <div className="c-info-item">
              <img
                className={`c-icon ${darkMode ? "filter-green" : ""}`}
                src={Email}
                alt=""
              />
              nickjob_dhanraj@hotmail.com
            </div>

            <div className="c-info-item">
              <img
                className={`c-icon ${darkMode ? "filter-green" : ""}`}
                src={Address}
                alt=""
              />
              Toronto, Canada
            </div>
          </div>
        </div>
        <div
          className="c-right"
          style={{ backgroundColor: darkMode && "#000000" }}
        >
          <p className="c-desc">
            <b style={{ color: darkMode && "rgb(120, 30, 209)" }}>
              Send me an email!
            </b>{" "}
            <b></b>
            Looking forward to hearing from you soon about opportunities .
          </p>
          <form
            style={{ backgroundColor: darkMode && "#000000" }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              className={darkMode ? "darkmode" : "lightmode"}
              style={{
                backgroundColor: darkMode && "#000000",
                color: darkMode && "rgb(255, 255, 255)",
              }}
              name="user_name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className={darkMode ? "darkmode" : "lightmode"}
              style={{
                backgroundColor: darkMode && "#000000",
                color: darkMode && "rgb(255, 255, 255)",
              }}
              name="user_subject"
              type="text"
              placeholder="Subject"
              required
            />
            <input
              className={darkMode ? "darkmode" : "lightmode"}
              style={{
                backgroundColor: darkMode && "#000000",
                color: darkMode && "rgb(255, 255, 255)",
              }}
              name="user_email"
              type="text"
              placeholder="Email"
              required
            />
            <textarea
              className={darkMode ? "darkmode" : "lightmode"}
              style={{
                backgroundColor: darkMode && "#000000",
                color: darkMode && "rgb(255, 255, 255)",
              }}
              rows="6"
              placeholder="Message"
              name="message"
            />
            <button
              className="button"
              style={{
                backgroundColor: darkMode && "#000000",
                color: darkMode && "rgba(255, 255, 255, 0.85)",
              }}
            >
              Submit
            </button>
            {done && "Noice"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
