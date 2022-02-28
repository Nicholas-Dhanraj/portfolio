import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { motion, AnimatePresence } from "framer-motion";

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

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -500 },
  };

  const variantsForm = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const itemForm = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };
  // initial={{ x: -500 }}
  //           whileInView={{ x: 0 }}
  //           transition={{
  //             type: "spring",
  //             stiffness: 100,
  //             ease: "easeOut",
  //             duration: 0.5,
  //             when: "beforeChildren",
  //             staggerChildren: 10.3,
  //           }}
  return (
    <div className="contact">
      <AnimatePresence>
        {/* <div className="c-bg"></div> */}
        <div className="c-wrapper">
          <div className="c-left">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -500 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 1.5,
              }}
              className="c-title"
            >
              I am a Web Developer.
            </motion.h1>
            <motion.div
              initial="hidden"
              exit={{ opacity: 0 }}
              whileInView="visible"
              variants={variants}
              className="c-info"
            >
              <div className="c-info-item">
                <motion.img
                  variants={item}
                  className={`c-icon ${darkMode ? "filter-green" : ""}`}
                  src={Phone}
                  alt=""
                />
                +1 437-775-1167
              </div>

              <div className="c-info-item">
                <motion.img
                  variants={item}
                  className={`c-icon ${darkMode ? "filter-green" : ""}`}
                  src={Email}
                  alt=""
                />
                nickjob_dhanraj@hotmail.com
              </div>

              <div className="c-info-item">
                <motion.img
                  variants={item}
                  className={`c-icon ${darkMode ? "filter-green" : ""}`}
                  src={Address}
                  alt=""
                />
                Toronto, Canada
              </div>
            </motion.div>
          </div>
          <div
            className="c-right"
            style={{ backgroundColor: darkMode && "#000000" }}
          >
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                ease: [0.455, 0.03, 0.515, 0.955],
              }}
              className="c-desc"
            >
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 200 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  ease: [0.455, 0.03, 0.515, 0.955],
                }}
                style={{ color: darkMode && "rgb(120, 30, 209)" }}
              >
                Send me an email!
              </motion.h3>
              Looking forward to hearing from you soon about opportunities .
            </motion.span>
            <motion.form
              initial="hidden"
              whileInView="visible"
              exit={{ opacity: 0 }}
              variants={variantsForm}
              style={{ backgroundColor: darkMode && "#000000" }}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <motion.input
                variants={itemForm}
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
              <motion.input
                variants={itemForm}
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
              <motion.input
                variants={itemForm}
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
              <motion.textarea
                variants={itemForm}
                className={darkMode ? "darkmode" : "lightmode"}
                style={{
                  backgroundColor: darkMode && "#000000",
                  color: darkMode && "rgb(255, 255, 255)",
                }}
                rows="6"
                placeholder="Message"
                name="message"
              />
              <motion.button
                variants={itemForm}
                className="button"
                style={{
                  backgroundColor: darkMode && "#000000",
                  color: darkMode && "rgba(255, 255, 255, 0.85)",
                }}
              >
                Submit
              </motion.button>
              {done && "Noice"}
            </motion.form>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Contact;
