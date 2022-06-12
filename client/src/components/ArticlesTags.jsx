import "./ArticlesTags.css";
import { ShowMoreButton } from "./Buttons/ShowMoreButton";

export default function ArticlesTags({ tagName, searchArticle }) {
  return (
    <div className="filter__container">
      <ShowMoreButton
        method={() => {
          searchArticle("");
        }}
        title={"#ALL"}
      />
      {tagName.map((tag, i) => {
        return (
          <ShowMoreButton
            key={i}
            method={() => {
              searchArticle("tags=" + tag);
            }}
            title={"#" + tag}
          />
        );
      })}
    </div>
  );
}
