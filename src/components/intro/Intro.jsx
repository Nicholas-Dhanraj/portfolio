import React, { useContext, useState } from "react";
// import { ReactComponent as Logo } from "../../anime.svg";

import "./intro.css";
import Img from "../../img/study.png";
import { ThemeContext } from "../../context";
import coding from "../../img/coding.svg";
import thinking from "../../img/thinking.svg";
import freelancer from "../../img/freelancer.svg";
import test from "../../img/youtube.png";
import JumpToSection from "../jumpToSection/JumpToSection";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  PresentationControls,
  Text,
  Sky,
} from "@react-three/drei";
function Cube(props) {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [active, setActive] = useState(false);
  const myMesh = React.useRef();
  return (
    <div className="intro">
      {/* <JumpToSection /> */}

      <div className="i-left">
        <div className="i-left-wrapper">
          {/* <h2 className="i-i">Hello, world!</h2> */}
          {/* <Logo className="main" /> */}
          <h4
            style={{
              color: darkMode && "#00EE00",
            }}
          >
            Hi, my name is
          </h4>
          <h1 className="i-name"> Nicholas Dhanraj</h1>
          <div className="i-description">
            I'm a software engineer specializing in building and designing
            exceptional interactive websites that run seamlessly across
            platforms & devices.
          </div>
          <div className="i-title">
            <h4
              className="i-title-more"
              style={{
                color: darkMode && "#00EE00",
              }}
            >
              I'm also
            </h4>
            <div className="i-title-wrapper">
              <div
                className="i-title-item"
                style={{
                  color: darkMode && "#00EE00",
                  backgroundColor: darkMode && "#000000",
                }}
              >
                a Full Stack Engineer
              </div>
              <div
                className="i-title-item"
                style={{
                  color: darkMode && "#00EE00",
                  backgroundColor: darkMode && "#000000",
                }}
              >
                a Philanthropist & Philosopher
              </div>
              <div
                className="i-title-item"
                style={{
                  color: darkMode && "#00EE00",
                  backgroundColor: darkMode && "#000000",
                }}
              >
                an Investor & Economist
              </div>
              <div
                className="i-title-item"
                style={{
                  color: darkMode && "#00EE00",
                  backgroundColor: darkMode && "#000000",
                }}
              >
                Diligent & Resourceful
              </div>
              <div
                className="i-title-item"
                style={{
                  color: darkMode && "#00EE00",
                  backgroundColor: darkMode && "#000000",
                }}
              >
                Adventurous & Adaptable
              </div>
            </div>
          </div>

          {/* <img src={test} alt="" className="p-img" /> */}
        </div>
      </div>
      <div className="i-right">
        <div
          className="i-bg"
          style={{
            backgroundColor: darkMode && "rgb(120, 30, 209)",
          }}
        ></div>
        <img src={coding} alt="" className="i-img" />
      </div>
      {/* <div className="i-canvas">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight color="red" position={[0, 0, 5]} angle={0.3} />
              <Cube />
              <OrbitControls />
              <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={4} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
                fade // Faded dots (default=false)
              />
              <Sky
                distance={450000} // Camera distance (default=450000)
                sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
                inclination={0} // Sun elevation angle from 0 to 1 (default=0)
                azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
                // {...props} // All three-stdlib/objects/Sky props are valid
              />
            </Canvas>
          </div> */}
    </div>
  );
};

export default Intro;
