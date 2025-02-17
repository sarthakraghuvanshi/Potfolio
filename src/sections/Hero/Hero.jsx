import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile-pic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Sarthak Raghuvanshi.pdf";
import { useTheme } from "../../Common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Sarthak"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sarthak
          <br />
          Raghuvanshi
        </h1>
        <h2>Software Developer |  Salesforce Developer </h2>
        <span>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/SARTHAK9111" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/sarthak9111/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passion for Developing and Changing Worlds
        </p>
        <a href={CV} download>
          <button className={styles.resumeButton}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
