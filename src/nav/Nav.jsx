import "./Nav.css";
import Me from "/public/graphics/Me.JPG";
import { ThemeContext } from "../theme/ThemeProvider";
import { useContext } from "react";

export default function Nav() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="nav-div"
      style={{
        borderBottom: isDark ? "solid 2px #ffff" : "solid 2px rgb(0, 0, 48)",
      }}
    >
      <div className="nav-cont">
        <img src={Me} alt="picture" />
        <h1
          className="title"
          style={{ color: isDark ? "#ffff" : "rgb(0,90,180)" }}
        >
          Moad Mekki
        </h1>
      </div>
      <div className="nav-btn">
        <button
          className="toggle-btn"
          onClick={toggleTheme}
          style={{ background: isDark ? "rgb(0, 0, 48)" : "rgb(220,230,240)" }}
        >
          <span>{isDark ? "🌞" : "🌙"}</span>
        </button>
      </div>
    </div>
  );
}
