import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kate</h1>

        <ul className="footer__list">
          <li>
            <a className="footer__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="footer__link" href="#portfolio">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/katyathegreatest"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://t.me/oneonetwofour"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-telegram"></i>
          </a>
          <a
            href="https://github.com/katyeheisenberg"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kate-chicherina-0ab464228/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Katyaheisenberg.</span>
      </div>
    </footer>
  );
};

export default Footer;
