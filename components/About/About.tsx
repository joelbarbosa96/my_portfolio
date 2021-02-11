import styles from "./About.module.scss";
import Image from "next/image";

import {
  FaFileDownload,
  FaPlane,
  FaGamepad,
  FaMusic,
  FaCameraRetro,
  FaPencilAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className="title">
        <h1>About Me</h1>
      </div>
      <main>
        <section className={styles.about_overview}>
          <div className={styles.picture}>
            <Image
              src="/../public/me.PNG"
              alt="Picture of the author"
              width={400}
              height={450}
              className={styles.picture_me}
            ></Image>
            <div className={styles.picture_square}></div>
          </div>

          <div className={styles.personal_info}>
            <h3>
              <strong>Hello, I'm Joel Barbosa</strong>
            </h3>
            <p className={styles.personal_info__description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, rem nihil odit aliquid aut ipsam perferendis
              cupiditate consequuntur, ea voluptatem, maxime animi in atque
              saepe molestias? Minima velit quas molestiae autem iste
              exercitationem modi nihil in architecto error deserunt asperiores
              est fugit qui cumque, nemo, accusantium impedit! Laboriosam
              officiis, atque modi unde dolor distinctio obcaecati facilis quo,
              exercitationem sunt iusto! Maxime ducimus enim officiis mollitia,
              labore tenetur reprehenderit modi quae commodi eligendi quia
              ratione repellendus.
            </p>
            <div className={styles.personal_info__data}>
              <div className={styles.personal_info__data__values}>
                <p>
                  <strong>Name:</strong> Joel Barbosa
                </p>
                <p>
                  <strong>Age:</strong> 24
                </p>
                <p>
                  <strong>Nationality:</strong> Portugal
                </p>
              </div>
              <div className={styles.personal_info__data__values}>
                <p>
                  <strong>Phone:</strong> (+351) 910276245
                </p>
                <p>
                  <strong>Email:</strong> joelbarbosa10@gmail.com
                </p>
                <p>
                  <strong>Address:</strong> Guimarães, Portugal
                </p>
              </div>
              <div className={styles.personal_info__data_downloadcv}>
                <button>
                  <FaFileDownload /> <span>Download My CV</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.personal_hobbies}>
          <div className={styles.personal_hobbies__content}>
            <FaPlane className={styles.personal_hobbies__content__icon} />
            <p>
              <strong>Travel</strong>
            </p>
          </div>
          <div className={styles.personal_hobbies__content}>
            <FaGamepad className={styles.personal_hobbies__content__icon} />
            <p>
              <strong>Gaming</strong>
            </p>
          </div>
          <div className={styles.personal_hobbies__content}>
            <FaMusic className={styles.personal_hobbies__content__icon} />
            <p>
              <strong>Music</strong>
            </p>
          </div>
          <div className={styles.personal_hobbies__content}>
            <FaCameraRetro className={styles.personal_hobbies__content__icon} />
            <p>
              <strong>Photo</strong>
            </p>
          </div>
          <div className={styles.personal_hobbies__content}>
            <FaPencilAlt className={styles.personal_hobbies__content__icon} />
            <p>
              <strong>Drawing</strong>
            </p>
          </div>
        </section>
        <div className={styles.exp_educ_skills}>
          <section className={styles.my_experience}>
            <h2>My Experience</h2>
            <div className={styles.my_experience__card}>
              <div className={styles.my_experience__card__timeline}>
                <div className={styles.my_experience__element}>
                  <h3>FullStack Developer - CCG</h3>
                  <p>Mar 2020 - Aug 2020</p>
                  <p className={styles.my_experience__element__description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet pariatur optio atque aperiam perferendis rerum
                    praesentium nam accusamus veritatis eum aut beatae quod
                    repellendus veniam, delectus fugit voluptatum vero?
                    Molestiae, at laudantium excepturi ipsa eaque debitis veniam
                    dolorem pariatur, facilis architecto minus? Autem, nisi
                    quidem dolores beatae dolorum aspernatur maxime?
                  </p>
                </div>
                <div className={styles.my_experience__element}>
                  <div></div>
                  <h3>Developer - LabSecIoT</h3>
                  <p>Mar 2020 - Aug 2020</p>
                  <p className={styles.my_experience__element__description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet pariatur optio atque aperiam perferendis rerum
                    praesentium nam accusamus veritatis eum aut beatae quod
                    repellendus veniam, delectus fugit voluptatum vero?
                    Molestiae, at laudantium excepturi ipsa eaque debitis veniam
                    dolorem pariatur, facilis architecto minus? Autem, nisi
                    quidem dolores beatae dolorum aspernatur maxime?
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div>
            <section className={styles.my_education}>
              <h2>My Education</h2>
              <div className={styles.my_experience__card}>
                <div className={styles.my_experience__card__timeline}>
                  <div className={styles.my_experience__element}>
                    <h3>
                      Master’s Degree in Engineering and Management of
                      Information Systems - University of Minho
                    </h3>
                    <p>Sep 2014 - Dez 2019</p>
                    <p className={styles.my_experience__element__description}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Amet pariatur optio atque aperiam perferendis rerum
                      praesentium nam accusamus veritatis eum aut beatae quod
                      repellendus veniam, delectus fugit voluptatum vero?
                      Molestiae, at laudantium excepturi ipsa eaque debitis
                      veniam dolorem pariatur, facilis architecto minus? Autem,
                      nisi quidem dolores beatae dolorum aspernatur maxime?
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.my_skills}>
              <h2>Skills</h2>
              <div className={styles.my_skills__content}>
                <div>
                  <p>Html 5</p>
                  <p>CSS 3</p>
                  <p>Sass</p>
                  <p>JavaScript</p>
                  <p>TypeScript</p>
                  <p>React JS</p>
                </div>
                <div>
                  <p>Redux</p>
                  <p>Node JS</p>
                  <p>Express JS</p>
                  <p>Next JS</p>
                  <p>Mongo DB</p>
                  <p>SQL</p>
                </div>
                <div>
                  <p>Git</p>
                  <p>NPM</p>
                  <p>Webpack</p>
                  <p>VS Code</p>
                  <p>Figma</p>
                  <p>Adobe XD</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
