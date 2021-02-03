//Styles, images and animations
import styles from "./Home.module.scss";

import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaArrowDown,
} from "react-icons/fa";

import Me from "../../public/Me";

const Home = () => {
  return (
    <div id="home" className={styles.home}>
      <header>
        <nav className={styles.socialnav}>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/joelbarbosa10/"
              >
                <FaLinkedin className={styles.icon_socialnav} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/joelbarbosa96"
              >
                <FaGithubSquare className={styles.icon_socialnav} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/chelas79274/"
              >
                <FaInstagramSquare className={styles.icon_socialnav} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.home__main}>
        <article className={styles.home__description}>
          <h3>Hi There,</h3>
          <h1>I am a Developer.</h1>
          <h3>
            Welcome to my <span>Portfolio Website.</span>
          </h3>
          <div className={styles.home__button}>
            <button>
              <span>MY PROJECTS</span> <FaArrowDown />
            </button>
            <p>
              <span>Please,</span> don't forget to pet the cat first.
            </p>
          </div>
        </article>
        <div className={styles.home__me}>
          <Me />
        </div>
      </section>
    </div>
  );
};

export default Home;
