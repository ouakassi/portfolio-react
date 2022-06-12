import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Article.css";

export default function Article() {
  let { slug } = useParams();
  let navigate = useNavigate();

  const url = `/articles/${slug}`;

  const { data: article, isPending, error } = useFetch(url);

  console.log(article);

  useEffect(() => {
    if (error)
      setTimeout(() => {
        navigate("/blog");
      }, 1000);
  }, [error, navigate]);

  return (
    <div className="article-ds">
      {isPending && <div>Loading .....</div>}
      {error && <div>{error} .....</div>}
      {article && (
        <div>
          <div>{article._id}</div>
          <div>{article.title}</div>
          <img src={article.imgurl} alt="" />
          <div>{article.description}</div>
          <div>{article.slug}</div>
          <div>{article.date.split("T")[0]} </div>
        </div>
      )}
    </div>
  );
}
