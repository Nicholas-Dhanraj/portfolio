import React from "react";
import "./about.css";
import Img from "../../img/award.jpeg";
import { ThemeContext } from "../../context";
import { useContext } from "react";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const variants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        ease: [0.455, 0.03, 0.515, 0.955],
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
    hidden: {
      y: -50,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="about">
      <div className="a-left">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{
            type: "spring",
            stiffness: 100,
            mass: 1,
            damping: 6,
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          className="a-card bg"
        ></motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{
            type: "spring",
            stiffness: 100,
            mass: 1,
            damping: 6,
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          className="a-card"
        >
          <img
            src="https://images.pexels.com/photos/10471892/pexels-photo-10471892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        className="a-right"
      >
        <motion.h1
          className="a-title"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          style={{
            color: darkMode && "#00EE00",
            fontSize: "2.4rem",
          }}
        >
          <motion.b
            variants={item}
            style={{ color: darkMode && "rgb(120, 30, 209)" }}
          >
            Who I am
          </motion.b>
          <motion.b variants={item} /> ~ about me
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{
            type: "spring",
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          className="a-sub"
        >
          **warning, sometimes I get carried away and create innovative ideas &
          beautifully animated ✨pixels✨**
        </motion.p>

        <motion.p variants={item} className="a-desc">
          My interest in web development started back in highschool when I
          decided to take a computer science course for fun — turns out this was
          more than just another course for me, but a new found passion that
          taught me a lot about HTML, CSS & JS! As I explored more of what it
          had to offer, I began to appreciate a plethora of smart and efficient
          methologies behind every website and book I've visited and studied.
        </motion.p>
        <motion.p variants={item} className="a-desc">
          I'm passionate about creating pretty pixels, as well as technical
          meaning and life to whatever narrative I am trying to portay in a way
          that best balances user experience and readability all while writing
          clean accessible human code.
        </motion.p>
        <motion.p variants={item} className="a-desc">
          I'm happiest when I'm creating, learning, exploring ambitious ideas
          and thinking about how to make things better. Known as a keen and
          thorough technical trouble-shooter, I provide cost-effective and
          expedient solutions for optimizing workflow as well as taking into
          consideration communication with my management team and
          internal/external stakeholders.
        </motion.p>

        {/* <div className="a-award">
          <img src={Img} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Method 1</h4>
            <p className="a-award-desc">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default About;
