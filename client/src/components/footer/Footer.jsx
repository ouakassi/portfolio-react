import "./FooterStyle.css";

const Footer = () => (
  <footer>
    <div className="footer__container container">
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/oussama-ouakassi-28372216a/"
          className="footer__social"
        >
          <i className="uil uil-linkedin" />
        </a>
        <a href="https://github.com/ouakassi" className="footer__social">
          <i className="uil uil-github" />
        </a>

        <a
          href="https://twitter.com/OuakassiOussama"
          className="footer__social"
        >
          <i className="uil uil-twitter" />
        </a>
      </div>
      <p className="footer__copyright">© Ouakassi. All right reserved</p>
    </div>
  </footer>
);

export default Footer;
