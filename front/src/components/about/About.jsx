import React from "react";
import Card from "../card/Card";
import style from "./about.module.css";
import pict from "../../utils/matiJuan.jpg";

function About() {
  return (
    <div className={style.container}>
      <h2>Made with love by a Henry student</h2>
      <Card
        key={98588980}
        id={"000"} //identificador unico del tag
        name={"Juanfer Jaramillo"}
        species={"Javascript"}
        gender={"Full Stack Developer"}
        image={pict}
      />
      <h3>Web app created using React and Redux </h3>
      <h3>Sever created using Express and NodeJS</h3>
    </div>
  );
}
export default About;
