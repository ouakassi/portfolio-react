import { useState } from "react";
import "./ArticlesTags.css";
import { ShowMoreButton } from "./Buttons/ShowMoreButton";

export default function ArticlesTags({ tagName, queryArticles }) {
  const [activeLink, setActiveLink] = useState();

  const ACTIVE_COLOR = {
    boxShadow: "var(--first-color) 0px 0px 0px 2px",
    color: "var(--first-color)",
    fontWeight: "600",
    transform: "scale(1.1)",
  };

  return (
    <div className="filter__container">
      <ShowMoreButton
        style={
          activeLink === undefined || activeLink === ""
            ? ACTIVE_COLOR
            : undefined
        }
        method={() => {
          queryArticles("");
          setActiveLink("");
        }}
        title={"#ALL"}
      />
      {tagName.map((tag, i) => {
        return (
          <ShowMoreButton
            style={tag === activeLink ? ACTIVE_COLOR : undefined}
            key={i}
            method={() => {
              queryArticles(`tags=${tag}`);
              setActiveLink(tag);
            }}
            title={`#${tag}`}
          />
        );
      })}
    </div>
  );
}
