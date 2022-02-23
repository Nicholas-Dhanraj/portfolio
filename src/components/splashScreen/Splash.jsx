import React, { useEffect } from "react";
import "./splash.css";
import { ReactComponent as Logo } from "../../img/anime.svg";
import { ReactComponent as Terminal } from "../../img/terminal.svg";
import Typewriter from "typewriter-effect";

const Splash = () => {
  return (
    <div className="main">
      {/* <img src={anime} alt="" /> */}
      {/* {console.log(`Letter ${path} is ${data[path].getTotalLength()}`)} */}
      {/* <img src={coding} alt="" className="i-img" /> */}
      <div className="splash-container">
        <div className="cmd">
          <h1 className="typewriter-style">
            <Typewriter
              options={{ delay: 80 }}
              id="type"
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(300)
                  .pasteString("> ")
                  .typeString("mkdir")
                  .pauseFor(350)
                  .typeString(" app<br> ")
                  .pasteString("> ")
                  .pauseFor(200)
                  .typeString("cd app<br>")
                  .pasteString("> ")
                  .pauseFor(300)
                  .typeString("npx create-react-app app")
                  .pauseFor(200)
                  .deleteChars(4)
                  .typeString(" portfolio <br>")
                  .typeString(
                    '<span style="color: #FFFFFF;">[#####....] | </span><br>'
                  )
                  .pasteString(
                    '<span style="color: #0096FF	;">Happy hacking!</span><br>'
                  )
                  .start();
                //  .typeString("[#####....]<br>")
              }}
            />
          </h1>
        </div>
        <Terminal id="terminal" />
      </div>

      <Logo />
    </div>
  );
};

export default Splash;
