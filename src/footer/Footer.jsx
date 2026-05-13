import "./Footer.css";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

export default function Footer() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="footer-basic"
      style={{
        borderTop: isDark ? "1px solid #ffff" : "1px solid rgb(0, 0, 48)",
      }}
    >
      <footer>
        <div className="social">
          <a
            href="https://github.com/MOAD-Mekki"
            style={{
              border: isDark ? "1px solid #ccc" : "1px solid rgb(50,50,70)",
            }}
          >
            <i
              className="icon ion-social-github"
              style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}
            >
              <IconBrandGithub />
            </i>
          </a>
          <a
            href="https://linkedin.com/in/mekki-moad"
            style={{
              border: isDark ? "1px solid #ccc" : "1px solid rgb(50,50,70)",
            }}
          >
            <i
              className="icon ion-social-linkedin"
              style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}
            >
              <IconBrandLinkedin />
            </i>
          </a>
          <a
            href="https://www.facebook.com/share/14ZzfdmKXUP/"
            style={{
              border: isDark ? "1px solid #ccc" : "1px solid rgb(50,50,70)",
            }}
          >
            <i
              className="icon ion-social-facebook"
              style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}
            >
              <IconBrandFacebook />
            </i>
          </a>
        </div>
        <p
          className="copyright"
          style={{ color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)" }}
        >
          Moad Mekki © 2026
        </p>
      </footer>
    </div>
  );
}
