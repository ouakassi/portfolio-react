import "./Contact.css";
import Section from "../../components/Section";
import Input from "../forms/Input";
import TextArea from "../forms/TextArea";
import ButtonSubmit from "../Buttons/ButtonSubmit";

const Contact = () => (
  <Section
    className="contact"
    id="contact"
    icon="uil uil-calling"
    sectionTitle="contact me"
    sectionSubtitle="get in touch!"
  >
    <div className="contact__container container">
      <div className="contact__infos">
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
      <form className="contact__form" action="" method="post">
        <Input
          label="email"
          name="email"
          type="email"
          className="emailInput"
          icon="login__icon uil uil-at"
        />

        <TextArea label="message" rows={8} cols={10}></TextArea>

        <ButtonSubmit
          className="button"
          title="send "
          icon="uil uil-message "
        />
      </form>
    </div>
  </Section>
);

export default Contact;
