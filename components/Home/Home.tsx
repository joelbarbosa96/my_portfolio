//Styles, images and animations
import styles from "./Home.module.scss";
import {
  ArrowIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from "../../public/Icons";
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
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/joelbarbosa96"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/chelas79274/"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.home__main}>
        <article className={styles.home__description}>
          <h1>Full Stack Developer.</h1>
          <h3>
            Hi there! My name is Joel Barbosa. A passionate Frontend Developer
            who does Full Stack Development as well, based in Portugal.
          </h3>
          <h3>
            Welcome to my <span>Portfolio Website.</span>
          </h3>
          <div className={styles.home__button}>
            <button>
              <span>MY PROJECTS</span> <ArrowIcon />
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
