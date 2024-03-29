import React, { useState } from "react";
import "./projects.scss";

const Projects = () => {
  const [toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">CV page</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">Links:</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      className="services__modal-info"
                      href="https://github.com/katyeheisenberg/portfolio-mine"
                    >
                      GitHub
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      className="services__modal-info"
                      href="https://portfolio-mine-taupe.vercel.app/"
                    >
                      Project
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">eCommerce</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">Links:</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      className="services__modal-info"
                      href="https://github.com/katyeheisenberg/eCommerce"
                    >
                      GitHub
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">StackOverflow Extension</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(4)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 4 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">Link:</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      className="services__modal-info"
                      href="https://github.com/katyeheisenberg/stackoverflow_copuCodeExtension"
                    >
                      GitHub
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Photography page</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(5)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 5 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">Link:</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      className="services__modal-info"
                      href="https://github.com/katyeheisenberg/phpage2"
                    >
                      GitHub
                    </a>
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a
                      className="services__modal-info"
                      href="https://ph-page-kate.vercel.app/"
                    >
                      Project
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
