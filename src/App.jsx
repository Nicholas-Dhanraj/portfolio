import { useContext, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as THREE from "three";
import { Canvas, useFrame } from "react-three-fiber";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Splash from "./components/splashScreen/Splash";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import JumpToSection from "./components/jumpToSection/JumpToSection";
import {
  OrbitControls,
  Stars,
  PresentationControls,
  Text,
  Sky,
} from "@react-three/drei";
import { TimelineLite, Power2, Power3, gsap, TweenMax } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

function Cube(props) {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function App() {
  const boxRef = useRef();
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const tl = new TimelineLite();

  // useEffect(() => {
  //   if (loading) {
  //     gsap.to(boxRef.current, {
  //       opacity: 0,
  //       // onComplete: () => setActive(false),
  //     });

  //     if (!loading) {
  //       gsap.to(boxRef.current, {
  //         opacity: 1,
  //         // onComplete: () => setActive(false),
  //       });
  //     }
  //   }
  //   // onComplete: () => setActive(false),
  // }, [loading]);
  gsap.registerPlugin(CSSRulePlugin);

  let imageReveal = CSSRulePlugin.getRule(".main");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // tl.to(imageReveal, 3, { opacity: 0, ease: Power2.easeOut, delay: 0 });
    }, 10700);
    setTimeout(() => {
      tl.to(imageReveal, 1, { opacity: 0, ease: Power2.easeOut });
    }, 10000);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "";
    }
  }, [loading]);

  const ref = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [nav, setNav] = useState(true);

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScroll2 = (id) => {
    const anchor = document.querySelector(id);

    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#000000" : "#f8eee7",
        color: darkMode && "#FFFFFF",
        textInputStyle: darkMode && "yellow",
      }}
    >
      {/* <Navbar /> */}
      {/* <Toggle /> */}
      {/* {loading && <Splash />} */}

      {loading && (
        <div ref={boxRef}>
          <Splash />
        </div>
      )}

      {/* {loading ? (
          <div>
            <Splash />
          </div>
        ) : (
          <div ref={boxRef}></div>
        )} */}
      {/* <div id="loaded">
        <Splash />
      </div> */}
      <div>
        <JumpToSection />
        <div id="intro">
          <Intro />
        </div>

        <div id="projects">
          <ProductList />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
      {/* <button className="jump-button" onClick={() => executeScroll2("#intro")}>
        Go intro
      </button>
      <button
        className="jump-button"
        style={{
          marginLeft: "90px",
        }}
        onClick={() => executeScroll2("#projects")}
      >
        Go projects
      </button>
      <button
        className="jump-button"
        style={{
          marginLeft: "180px",
        }}
        onClick={() => executeScroll2("#about")}
      >
        Go about
      </button>
      <button
        className="jump-button"
        style={{
          marginLeft: "270px",
        }}
        onClick={() => executeScroll2("#contact")}
      >
        Go contact
      </button> */}
    </div>
  );
}

export default App;
