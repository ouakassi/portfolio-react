import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./Hero.css";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";

const Hero = () => {
  const name = Array.from("OUSSAMA");
  const lastName = Array.from("OUAKASSI");

  return (
    <section className="home section" id="home">
      <div className="home__container container ">
        <div className="home__content ">
          <motion.div
            initial={{ y: 200, opacity: 0.3 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="home__social"
          >
            <SocialLink
              link="https://www.linkedin.com/in/oussama-ouakassi-28372216a/"
              icon="uil uil-linkedin-alt"
            />
            <SocialLink
              link="https://github.com/ouakassi"
              icon="uil uil-github-alt"
            />
            <SocialLink
              link="https://twitter.com/OuakassiOussama"
              icon="uil uil-twitter"
            />
          </motion.div>

          <div className="home__data">
            <di className="home__title">
              <span className="home__title-first">
                {name.map((letter, i) => {
                  return (
                    <motion.span
                      key={i}
                      initial={{ top: -20, opacity: 0.9 * i }}
                      animate={{ top: 0, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
              <span className="home__title-last">
                {lastName.map((letter, i) => {
                  return (
                    <motion.span
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
            </di>
            <h2 className="home__subtitle">WEB Developer</h2>
            <p className="home__description">
              An avid MERN stack developer, building websites that you would
              love using. I develop a Complete Responsive Websites using MERN
              technologies : MongoDB, React, NodeJS , Express. I've helped
              companies to launch production web applications to their
              customers. I love programming , creating, launching, learning, and
              Gaming.
            </p>
            <div className="home__buttons">
              <ButtonPrimary
                title="Let's Talk"
                icon="uil uil-message"
                link="#contact"
              />
              <ButtonPrimary
                title="download cv"
                icon="uil uil-file-download-alt"
                link="./documents/cv.pdf"
                download
              />
            </div>
          </div>
          <motion.div
            animate={{
              scale: [1.05, 1, 1.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="home__img__container"
          >
            <motion.img
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "50%", opacity: [0.2, 0.4, 1] }}
              transition={{ duration: 0.8 }}
              src="./images/my-image.png"
              alt="me"
              className="home__img__container-img"
            />
          </motion.div>
          <div className="home__scroll">
            <a href="#projects" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse" />
              <span className="home__scroll-name">My Projects ?</span>
              <i className="uil uil-angle-double-down home__scroll-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
