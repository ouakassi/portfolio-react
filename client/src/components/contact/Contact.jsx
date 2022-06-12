import "./ContactStyle.css";
import Section from "../../components/Section";

const Contact = () => (
  <Section
    className="contact"
    id="contact"
    icon="uil uil-calling"
    sectionTitle="contact me"
    sectionSubtitle="get in touch!"
  >
    <div className="contact__container container">
      <div className="contact__info">
        <div className="contact__information">
          <i className="uil uil-phone contact__icon" />
          <h3 className="contact__title">+212 6 11 42 31 16</h3>
        </div>
        <div className="contact__information">
          <i className="uil uil-envelope contact__icon" />
          <h3 className="contact__title">ouakassi.oussama@gmail.com</h3>
        </div>
        <div className="contact__information">
          <i className="uil uil-map-marker-shield contact__icon" />
          <h3 className="contact__title">Morocco - Rabat/Sale</h3>
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
