import { useState } from "react";
import "./ArticlesTags.css";
import { ShowMoreButton } from "./Buttons/ShowMoreButton";

export default function ArticlesTags({ tagName, queryArticles }) {
  const TAGS_NUMBER = 3;

  const [activeLink, setActiveLink] = useState();
  const [tagsNumber, setTagsNumber] = useState(TAGS_NUMBER);
  const [toggleButton, setToggleButton] = useState(false);

  const ACTIVE_COLOR = {
    boxShadow: "var(--first-color) 0px 0px 0px 2px",
    color: "var(--first-color)",
    backgroundColor: "var(--first-color-light)",
    fontWeight: "600",
    transform: "scale(1.1)",
  };

  return (
    <>
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
            i < tagsNumber && (
              <ShowMoreButton
                style={tag === activeLink ? ACTIVE_COLOR : undefined}
                key={i}
                method={() => {
                  queryArticles(`tags=${tag}`);
                  setActiveLink(tag);
                }}
                title={`#${tag}`}
              />
            )
          );
        })}
        {!toggleButton ? (
          <i
            className="icon uil uil-arrow-circle-right"
            onClick={() => {
              setTagsNumber(tagName.length);
              setToggleButton(true);
            }}
          ></i>
        ) : (
          <i
            className="icon uil uil-arrow-circle-left"
            onClick={() => {
              setTagsNumber(TAGS_NUMBER);
              setToggleButton(false);
            }}
          ></i>
        )}
      </div>
    </>
  );
}
