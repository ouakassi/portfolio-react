import React from "react";
import LanguageComponent from "./LanguageComponent";

const checkColor = (tag, i) => {
  if (tag.toLocaleLowerCase() === "javascript")
    return (
      <LanguageComponent
        mainColor="#f0db4f"
        key={i}
        tag={tag}
        image="./images/languages/js.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "react")
    return (
      <LanguageComponent
        mainColor="#58c6e5"
        key={i}
        tag={tag}
        image="./images/languages/react.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "node")
    return (
      <LanguageComponent
        mainColor="#16b501"
        key={i}
        tag={tag}
        image="./images/languages/node.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "mongodb")
    return (
      <LanguageComponent
        mainColor="#6cac48"
        key={i}
        tag={tag}
        image="./images/languages/mongo.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "html")
    return (
      <LanguageComponent
        mainColor="#e44d26"
        key={i}
        tag={tag}
        image="./images/languages/html.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "css")
    return (
      <LanguageComponent
        mainColor="#1572b6"
        key={i}
        tag={tag}
        image="./images/languages/css.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "typescript")
    return (
      <LanguageComponent
        mainColor="#007acc"
        key={i}
        tag={tag}
        image="./images/languages/ts.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "express")
    return (
      <LanguageComponent
        mainColor="#ffffff"
        key={i}
        tag={tag}
        image="./images/languages/express.svg"
      />
    );
  else return <LanguageComponent key={i} tag={tag} />;
};

export default checkColor;
