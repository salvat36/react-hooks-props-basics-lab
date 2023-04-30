import React from "react";
import Links from "./Links";

function About(props) {

  function HasBio() {
    return props.bio ? <p>{props.bio}</p> : null
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <HasBio />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}


export default About;
