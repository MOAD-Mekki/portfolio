import "./projects.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import AOS from "aos";
import "aos/dist/aos.css"

export default function Project() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="proj-div">
      <div
        className="proj-title"
        style={{ color: isDark ? "#ffff" : "rgb(0,90,180)" }}
      >
        <h2>My Projects :</h2>
      </div>
      <div className="proj-cont">
        <div
          className="proj1-cont"
          data-aos="zoom-in"
          style={{
            border: isDark
              ? "rgb(219, 218, 218) solid 1px"
              : "rgb(50,50,70) solid 1px",
          }}
        >
          <h3>
            <a href="https://github.com/MOAD-Mekki/30-Days-Of-JavaScript">
              30 Days Of JavaScript
            </a>
          </h3>

          <p style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}>
            This project represents a complete journey through the fundamentals
            of JavaScript, built through consistent daily practice and hands-on
            mini-projects.Each day introduces new concepts, progressively
            building toward more advanced topics.
          </p>
        </div>
        <div
          className="proj2-cont"
          data-aos="zoom-in"
          style={{
            border: isDark
              ? "rgb(219, 218, 218) solid 1px"
              : "rgb(50,50,70) solid 1px",
          }}
        >
          <h3>
            <a href="https://github.com/MOAD-Mekki/Huawei-eNSP-Networking-Labs">
              Huawei eNSP Networking Labs :
            </a>
          </h3>
          <p style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}>
            This project showcases hands-on networking labs implemented using
            Huawei eNSP. It is designed to demonstrate practical skills in
            configuring, troubleshooting, and validating enterprise network
            environments.
          </p>
        </div>
        <div
          className="proj4-cont"
          data-aos="zoom-in"
          style={{
            border: isDark
              ? "rgb(219, 218, 218) solid 1px"
              : "rgb(50,50,70) solid 1px",
          }}
        >
          <h3>
            <a href="https://github.com/MOAD-Mekki/tracer-project">
              Telegram Tracer
            </a>
          </h3>
          <p style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}>
            A full-stack web application built with React and Telegram APIs that
            allows users to interact with Telegram data through a modern web
            interface.
          </p>
        </div>
        <div
          className="proj3-cont"
          data-aos="zoom-in"
          style={{
            border: isDark
              ? "rgb(219, 218, 218) solid 1px"
              : "rgb(50,50,70) solid 1px",
          }}
        >
          <h3>
            <a href="https://github.com/MOAD-Mekki/portfolio.git">
              Personal Web Portfolio :
            </a>
          </h3>
          <p style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}>
            This is my personal portfolio website built using React and CSS,
            where I showcase my projects, skills, and background as a developer
            & network engineer. The goal of this project is to present my work
            in a clean, modern, and responsive way.
          </p>
        </div>
      </div>
    </div>
  );
}
