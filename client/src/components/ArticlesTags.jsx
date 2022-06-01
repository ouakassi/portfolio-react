import "./ArticlesTags.css";

import React from "react";

export default function ArticlesTags({ tagName, searchArticle }) {
  return (
    <div className="filter-container">
      {tagName.map((tag, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              searchArticle("tags=" + tag);
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
