const LanguageComponent = (props) => (
  <>
    <span
      style={{
        color: props.mainColor || "#00ffb3",
        backgroundColor: `${props.mainColor}33` || "#00ffb333",
      }}
      className={props.className}
    >
      <img src={props.image || "./images/languages/code.svg"} alt={props.tag} />
      <span>{props.tag}</span>
    </span>
  </>
);

export default LanguageComponent;
