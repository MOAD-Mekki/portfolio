import "./Nav.css";
import Me from "/public/graphics/Me.JPG";
import { ThemeContext } from "../theme/ThemeProvider";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

export default function Nav() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="nav-div"
      style={{
        borderBottom: isDark ? "solid 2px #ffff" : "solid 2px rgb(0, 0, 48)",
      }}
    >
      <div className="nav-cont">
        <img src={Me} alt="picture" data-aos="zoom-in" data-aos-duration="1000"/>
        <h1
          className="title"
          style={{ color: isDark ? "#ffff" : "rgb(0,90,180)" }}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          Moad Mekki
        </h1>
      </div>
      <div className="nav-btn">
        <button
          type="button"
          className="toggle-btn"
          data-aos="fade-left"
          data-aos-duration="2000"
          onClick={toggleTheme}
          style={{ background: isDark ? "rgb(0, 0, 48)" : "rgb(220,230,240)" }}
        >
          <span>{isDark ? "🌞" : "🌙"}</span>
        </button>
      </div>
    </div>
  );
}
