import React from "react";
import LanguageComponent from "./LanguageComponent";

const checkColor = (tag, i) => {
  if (tag.toLocaleLowerCase() === "javascript")
    return <LanguageComponent mainColor="rgb(225 242 0)" key={i} tag={tag} />;
  if (tag.toLocaleLowerCase() === "react")
    return <LanguageComponent mainColor="rgb(0 185 255)" key={i} tag={tag} />;
  if (
    tag.toLocaleLowerCase() === "node" ||
    tag.toLocaleLowerCase() === "mongodb"
  )
    return <LanguageComponent mainColor="rgb(22 184 1)" key={i} tag={tag} />;
  if (tag.toLocaleLowerCase() === "html")
    return <LanguageComponent mainColor="rgb(255 169 0)" key={i} tag={tag} />;
  if (tag.toLocaleLowerCase() === "css")
    return <LanguageComponent mainColor="rgb(0 107 255)" key={i} tag={tag} />;
  else return <LanguageComponent key={i} tag={tag} />;
};

export default checkColor;
