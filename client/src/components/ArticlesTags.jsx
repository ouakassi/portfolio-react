import "./ArticlesTags.css";
import { ShowMoreButton } from "./Buttons/ShowMoreButton";

export default function ArticlesTags({ tagName, queryArticles }) {
  return (
    <div className="filter__container">
      <ShowMoreButton
        method={() => {
          queryArticles("");
        }}
        title={"#ALL"}
      />
      {tagName.map((tag, i) => {
        return (
          <ShowMoreButton
            key={i}
            method={() => {
              queryArticles(`tags=${tag}`);
            }}
            title={`#${tag}`}
          />
        );
      })}
    </div>
  );
}
